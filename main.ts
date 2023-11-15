/* Copyright (c) 2023 MTHS All rights reserved
 *
 * Created by: Olmes
 * Created on: Nov 15 2023
 * This program This program uses while loops, that if "A" button is pressed, the pixels moves around the edge of the Microbit
*/

// variables
let sprite: game.LedSprite = null
let loopCounter = 0
let ones: number = 0
let tens: number = 0

// setup
basic.showIcon(IconNames.Duck)
basic.pause(500)
basic.clearScreen()

// when "A" is pressed, 
input.onButtonPressed(Button.A, function () {
    // setup
    basic.clearScreen()
    loopCounter = 0
    sprite = game.createSprite(0, 0)

    tens = 0
    while (tens <= 4) {
        ones = 0
        while (ones <= 4) {
            sprite.move(1)
            ones++
        }
        tens++
        sprite.turn(Direction.Right, 90)
    }


    sprite.delete()
    basic.showIcon(IconNames.Happy)
})
