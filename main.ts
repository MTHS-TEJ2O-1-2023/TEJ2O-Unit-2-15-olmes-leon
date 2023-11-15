/* Copyright (c) 2023 MTHS All rights reserved
 *
 * Created by: Olmes
 * Created on: Nov 2023
 * This program uses while loops, that if "A" button is pressed, the pixels moves around the edge of the Microbit
*/

// variables
let ones: number = 0
let tens: number = 0

// setup
game.createSprite(0, 0)

// when "A" is pressed, the pixels move down in a diagnol
input.onButtonPressed(Button.A, function () {
  
  // setup
  basic.clearScreen()

  tens = 0
  while (tens <= 9) {
    ones = 0
    while (ones <= 9) {
        basic.showString(tens.toString() + ones.toString())
        ones++
    }
    tens++
  }

  basic.pause(500)
  basic.showIcon(IconNames.Duck)
})

// sprite.move(1) 
// sprite.turn(Direction.Right, 90)
