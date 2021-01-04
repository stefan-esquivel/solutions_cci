"use strict";

/**
 * --------------------
 * script.js
 * Last Modified: 12/21/20
 * Coder: Stefan Esquivel
 * Oddities: None
 *
 * Q. 4.1 Route Between Nodes: Given a directed graph, design an algorithm to find out
 * whether there is a route between two nodes.
 *
 * Analize Best Posible Runtime:
 *
 * Best possible runtime is O(k) where k is the distance between the nodes
 *
 * Phases of the Algorithm:
 *
 * Phase 1: Givin a starting node store all the possible first steps in a list
 *
 * Phase 2: Travers through one path to a dead end
 *
 * Phase 3: Implament a back tracking solution using recursion
 *
 * Phase 4: Use dynamic programing to limit any repeated node visits this would increase the memory usage to O(mn)
 * but decrease the runtime to insure O(nm) were n is the number of nodes and m is the number of verticies
 *
 * --------------------
 */
