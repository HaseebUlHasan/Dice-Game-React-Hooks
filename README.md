First insatll packages
npm install
then,
npm start

Your goal with this assignment is to write a simple browser-based game in the javascript framework of your choice. The goal of the game is for the player to get to 50 points while pressing the "roll" button the fewest number of times. Here are the rules and guidelines of the game application:

Before playing, the player should enter their name, so the app can keep track of best scores. (Local storage is fine.)
A button should allow for starting of a new game for the current player.
Once in a game, when "roll" button is pressed, a number from 0-10 should be randomly generated and displayed to the player. This number represents the number of points the player receives for that roll.
The UI should display the current number of points and well as the number of rolls that the player has made during their current game.
Before a player rolls, they can optionally use a "power up." A power up allows the player to select if the next roll will be an even or an odd number. The player can only use this power up twice during a given game.
A player only "wins" when their score sums exactly to 50. For example, if a player has 45 points, they need a 5 to win. A 6 will not count. (Up to you if overshooting the 50 point target means the player loses the game and has to start over, or the roll is simply thrown out, while adding to their roll count, and they are able to try again to get the "right" number to win.)
After the player wins, their name is added to the "high score" board, sorted by number of rolls it took to win, lowest first. The high score board should keep track of the 5 best scores. It should persist even through page refreshes.
If a player beats a high score, the UI should congratulate them.
