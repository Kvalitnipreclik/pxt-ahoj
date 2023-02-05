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
let startSvetlo = 0
let reakciDova = false
let reakciDobareal = 0
let zamekKalibrac = false;
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
    startSvetlo = tma - 10
    zamekKalibrac = true
    console.log("=======" + tma)
}
// start
function start(): void {
    radio.sendNumber(16)
    
}

    radio.onReceivedNumber(function(receivedNumber: number) {
        if (receivedNumber === 17){
            
            for(let i = 0; i > 5; i++){


                let Odstartovani = 5
                basic.showNumber(Odstartovani)
                basic.pause(1000)
            }
               reakciDova = true
               if(startSvetlo > input.lightLevel()){
                   reakciDova = false
               }
        }
    })


// input.onButtonPressed(Button.A)
input.onButtonPressed(Button.A, function() {
    kalibrace()
})
//input když je potreba start
input.onButtonPressed(Button.B, function () {
    // tjisti jestli bylo aspon 1 zkalibrovano
    if (zamekKalibrac) {
        start()
    } else {
        
        basic.showLeds(`
        # . . . #
        .  # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
        basic.pause(500)
    }
    
})
//hlavní část




while (reakciDova){
reakciDobareal = reakciDobareal +1
basic.pause(100)
}
