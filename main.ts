basic.forever(function () {
    images.createBigImage(`
        . . . # . . . . . .
        . . # # . . . . . .
        . # # # # # # # # #
        . . # # . . . . . .
        . . . # . . . . . .
        `).scrollImage(1, 200)
    basic.pause(67)
    images.createBigImage(`
        . . . . . . # . . .
        . . . . . . # # . .
        # # # # # # # # # .
        . . . . . . # # . .
        . . . . . . # . . .
        `).scrollImage(1, 200)
})
