"use strict";

/**--------------------
 * script.js
 * Last Modified: 12/21/20
 * Coder: Stefan Esquivel
 * Oddities: None
 *
 *
 * Q: 1.1
 * Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?
 *
 * Analize Best Possible Runtime:
 *
 * As we have to touch every charecter inorder to determine if there is a possible repeat we can expect O(n).
 *
 * Pases of the Algorithm:
 *
 * Best practice it to seperate the problem into sub problems
 *
 * Phase 1: Itterrate through a givin String
 *
 * Phase 2: Build an array of constant size (O(n)) that would be the length of the alphabet. Each of the chacters would be maped to a specific index a -> [0], b -> [1], c -> [2].
 *
 * Phase 3: If there is a value already in the array then that means that there is a repeate and then the string has repeated charecters.
 *
 * Phase 4: Solve the problem with no data structure remove the list. Instead we can use a bit vector using the int there are 32 bit positions which we will initialize all positions with 0
 * --------------------
 */

/**--------------------
 * Function Name: char_map
 *
 * Runtime: O(1)
 *
 * Pourpose: Converts single charr ascii value to int used as array index.
 *
 * PRECONDITIONS: Char has to be from a-z
 *
 * Parameters: char
 *
 * Returns: Int
 * --------------------
 */

const char_to_map = function (c) {
  return c.charCodeAt(0) - 97;
};

/**--------------------
 * Used for Phase 3
 *
 * Function Name: is_unique
 *
 * Runtime: O(n)
 *
 * Pourpose: Determins if all the characters in the string is unique.
 *
 * PRECONDITIONS: String must be lowercase and only contains chars from a-z.
 *
 * Parameters: String
 *
 * Returns: boolean
 * --------------------
 */
const is_unique = function (st) {
  var dictionary, selected_char;

  // Assuming constant time, the 24 length array gets filled with null values. [null, null, null, ... null]
  dictionary = new Array(24).fill(null);

  // Iterates through each char in the string
  for (var i = 0; i < st.length; i++) {
    selected_char = st[i];

    // Checks if the char is used un the array.
    if (dictionary[char_to_map(selected_char)] != null) {
      return false;
    } else {
      // Adds the char to the array when the position in the dicitonary is null
      dictionary[char_to_map(selected_char)] = selected_char;
    }
  }

  // if it itterates through the whole string without finding any repeats then the algorithim will return that the string is uniqe
  return true;
};

/**--------------------
 * Used for Phase 4
 *
 * Function Name: is_unique
 *
 * Runtime: O(n)
 *
 * Pourpose: Determins if all the characters in the string is unique.
 *
 * PRECONDITIONS: String must be lowercase and only contains chars from a-z.
 *
 * Parameters: String
 *
 * Returns: boolean
 * --------------------
 */
const is_unique_bit = function (st) {
  var bitMap, val;

  // starts with an int with all bits initialized to 0 below is the representation of the int in base 2
  // 00000000000000000000000000000000
  bitMap = 0;

  // Iterates through each char in the string
  for (var i = 0; i < st.length; i++) {
    // converts the char to a number between 0-24
    val = char_to_map(st[i]);

    // checks if the char in the bit map
    // Ex. 1 << a = 00000000000000000000000000000001 since the bitmap is 00000000000000000000000000000000 the shift by one there is no common bit so the loop wont run
    // then the bit map 00000000000000000000000000000001 after one itteration so if there is another "a" then the bitwise and will be larger then 0 and will indicate a repeate
    if ((bitMap & (1 << val)) > 0) {
      return false;
    }

    // this will store a true indication in the location of the bit to indicate that the char is used
    bitMap |= 1 << val;
  }

  // if it itterates through the whole string without finding any repeats then the algorithim will return that the string is uniqe
  return true;
};

/**--------------------
 * Function Name: main
 *
 * Runtime: O(n) depends on is_unique()
 *
 * Pourpose: Runs the code and initializes the string prints to the console
 *
 * PRECONDITIONS: none
 *
 * Parameters: none
 *
 * Returns: none
 * --------------------
 */
const main = function () {
  var string = "thegossld";
  console.log(is_unique(string));
  console.log(is_unique_bit(string));
};

main();
