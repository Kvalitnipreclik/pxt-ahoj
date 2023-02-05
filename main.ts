// začázek radia
radio.setTransmitPower(7)
radio.setGroup(128)
const mySerial = Utility.encodeSerial((control.deviceSerialNumber()))
// radio.setFrequencyBand();
// radio.setTransmitSerialNumber(true);
// proměné
let zamekKalibrac = false
let startSvetlo = 0
let prumer = 0
let reakciDobareal = 0
let reakciDova = false
let sender = 0
let tma = 0
// funkce
// kalibrace odesílání???
function kalibrace () {
    tma = 0
    sender = 15
    radio.sendNumber(sender)
    console.log(sender)
    music.playTone(262, music.beat(BeatFraction.Whole))
    for (let index = 0; index < 5; index++) {
        tma += input.lightLevel()
        basic.pause(400)
    }
    tma = tma / 5
    prumer = tma
    startSvetlo = tma - 10
    zamekKalibrac = true
    console.log("=======" + tma)
}
// start
function start() {
    radio.sendNumber(16)
}
// receivy

radio.onReceivedNumber(function (receivedNumber) {
    // receive 17
    if (receivedNumber == 17) {
        for(let j = 0; j > 5; j++){
                let Odstartovani = 5
                basic.showNumber(Odstartovani)
                basic.pause(1000)
            }
            reakciDova = true
            if (startSvetlo > input.lightLevel()) {
            reakciDova = false
        }
    }
})
//inputy
// input.onButtonPressed(Button.A)
input.onButtonPressed(Button.A, function () {
    kalibrace()
})
// input když je potreba start
input.onButtonPressed(Button.B, function () {
    // tjisti jestli bylo aspon 1 zkalibrovano
    if (zamekKalibrac) {
        start()
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.pause(500)
    }
})



// hlavní část
while (reakciDova) {
    reakciDobareal = reakciDobareal + 1
    basic.pause(100)
}
