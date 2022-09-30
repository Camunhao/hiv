let tokar = false
let p2 = 0
let p1 = 0
input.onPinPressed(TouchPin.P0, function () {
    tokar = false
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.showString("bora")
    basic.pause(randint(1000, 10000))
    basic.showLeds(`
        . . # . .
        . . # . .
        . # # # .
        . # # # .
        . # # # .
        `)
    basic.pause(200)
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P2, function () {
    if (tokar == false) {
        tokar = true
        p2 = 1
        basic.showLeds(`
            . # # # .
            . . . # .
            . # # # .
            . # . . .
            . # # # .
            `)
        basic.pause(100)
        basic.clearScreen()
    }
})
input.onPinPressed(TouchPin.P1, function () {
    if (tokar == false) {
        tokar = true
        p1 = 1
        basic.showLeds(`
            . . # . .
            . # # . .
            . . # . .
            . . # . .
            . # # # .
            `)
        basic.pause(200)
        basic.clearScreen()
    }
})
basic.forever(function () {
    if (p1 == 3) {
        for (let index = 0; index < 3; index++) {
            basic.showLeds(`
                # . . . #
                # # # # #
                . . # . .
                # . # . #
                # . # . #
                `)
            basic.pause(500)
        }
        basic.showString("player 1 levou essa")
        p2 = 0
        p1 = 0
    } else if (p2 == 3) {
        for (let index = 0; index < 3; index++) {
            basic.showLeds(`
                # . . . #
                # # # # #
                . . # . .
                # . # . #
                # . # . #
                `)
            basic.pause(500)
        }
        basic.showString("player 2 levou essa")
        p1 = 0
        p2 = 0
    }
})
