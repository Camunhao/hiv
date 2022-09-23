let p2 = 0
let p1 = 0
input.onPinPressed(TouchPin.P0, function () {
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.showString("bora")
    basic.pause(randint(1000, 7000))
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
})
input.onPinPressed(TouchPin.P1, function () {
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
})
