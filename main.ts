// začázek radia
radio.setTransmitPower(7);
//radio.setFrequencyBand();
//radio.setTransmitSerialNumber(true);
radio.setGroup(128)
const mySerial = Utility.encodeSerial((control.deviceSerialNumber()))
// proměné
let tma = 0
let prumer = 0
let sender = 0
//funkce
//kalibrace odesílání???
function kalibrace(): void {
    tma = 0
    sender = 15
    radio.sendNumber(sender)
    console.log(sender)
    
    
    music.playTone(Note.C, music.beat(BeatFraction.Whole))
    for (let i = 0; i < 5; i++) {
        tma += input.lightLevel()
        basic.pause(400)
    }
    tma = tma / 5
    prumer = tma

    console.log("=======" + tma)
}
// start
function start(): void {
    radio.sendNumber(16)
    
}
// input.onButtonPressed(Button.A)
input.onButtonPressed(Button.A, function() {
    kalibrace()
})
input.onButtonPressed(Button.B, function () {
    start()
})
//hlavní část
basic.forever(function(){




}

)