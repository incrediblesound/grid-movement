grid-movement
=============

Grid movement explores the representation of location in space via JavaScript arrays. The idea is simple: There is a player and a computer controlled opponent who are located in a three by three grid. On even numbered turns the player can move up or down and on odd turns left or right. The computer, meanwhile, moves randomly through the grid one step at a time. If the player and the computer end up in the same square the player loses, and if the game progresses through ten turns the player wins.

Points of Interest
------------------
* For movement within a two-dimensional grid a simple binary system can be used. A movement is coded as an array with two elements [ 0 OR 1 , 0 OR 1 ] where [0,1] means vertical ascent, [0,0] means vertical descent, [1,0] means move left, and [1,1] means move right. To translate this into position, an algorithm locates the current position for each dimension in an array of all possible positions and then sets the position to the element at index +1 of possible positions for ascent or index -1 of possible positions for descent.

* One challenge was how to eliminate edge cases. For the computer controlled player an algorithm checks each edge case and adds a possible movement to an array if that edge case is NOT true. If the computer player is in the center top, the first edge case will return TRUE which means that upward movement will not be added to the array of possible movements. In this case, all the other edge cases (bottom edge, right edge etc) will return FALSE and will add their corresponding movements to the array. At the end, a member of the possible movements is randomly selected and changer() is called which translates this into a new position for the computer player.
