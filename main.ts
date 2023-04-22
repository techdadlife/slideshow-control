input.onButtonPressed(Button.A, function () {
    keyboard.sendString(keyboard.keys(keyboard._Key.left))
    basic.showLeds(`
        . . # . .
        . # # # #
        # # # # #
        . # # # #
        . . # . .
        `)
})
input.onButtonPressed(Button.B, function () {
    keyboard.sendString(keyboard.keys(keyboard._Key.right))
    basic.showLeds(`
        . . # . .
        # # # # .
        # # # # #
        # # # # .
        . . # . .
        `)
})
keyboard.startKeyboardService()
basic.showIcon(IconNames.Yes)
