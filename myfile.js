let AVReceiver = require('marantz-avr');
let receiver = new AVReceiver('10.100.102.5');

receiver.getState().then(
    res => console.log(res),
    error => console.log(error)
);

receiver.setMuteState(false).then(
    res => console.log(res),
    error => console.log(error)
);

// receiver.setvolumelevel(45).then(
//     res => console.log(res),
//     error => console.log(error)
// );