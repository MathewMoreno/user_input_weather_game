namespace SpriteKind {
    export const Mascot = SpriteKind.create()
}
let weather = ""
scene.setBackgroundColor(9)
// Copy / Paste into MakeCode Write comments next to
// the code to explain important parts of of the code
// Submit code on Canvas GOAL1: create question: "What
// is your weather prediction?"
let question = game.askForString("What is your weather prediction?")
let Weather_Man = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f . . . . . 
. . . . . f f f f f f . . . . . 
. . . . f f f f f f f . . . . . 
. . . . f f f f f f f f . . . . 
. f f f f f f f f f f f f f f . 
. . . . . 3 3 3 3 3 3 3 . . . . 
. . . . 3 3 f 3 3 f 3 3 . . . . 
. . . . 3 3 3 3 3 3 3 3 3 e e e 
. . . . 3 3 3 3 3 3 3 3 3 e e e 
. . . 3 3 1 1 1 1 1 1 3 3 . e . 
. . . 3 3 3 9 3 3 9 3 3 3 e e . 
. . . 3 3 3 3 3 3 3 3 3 3 e . . 
. . . 3 3 3 3 3 3 3 3 3 3 e . . 
. . . 3 3 3 3 3 3 3 3 3 3 e . . 
. . . 3 3 3 3 3 3 3 3 3 3 e . . 
`, SpriteKind.Mascot)
Weather_Man.setPosition(80, 113)
let randNum = Math.randomRange(1, 6)
if (randNum == 1) {
    weather = "rain"
}
if (randNum == 2) {
    weather = "storm"
}
if (randNum == 3) {
    weather = "snow"
    effects.blizzard.startScreenEffect()
}
if (randNum == 4) {
    weather = "hail"
}
if (randNum == 5) {
    weather = "sunny"
}
if (randNum == 6) {
    weather = "cloudy"
    effects.clouds.startScreenEffect()
}
if (question == weather) {
    pause(5000)
    game.over(true)
    Weather_Man.say("You're right")
} else {
    pause(1000)
    game.over(false)
    Weather_Man.say("You're wrong")
}
