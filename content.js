let newVolume = -2;

newVolume = document.getElementsByClassName('video-stream')[0];

let actualVolume = newVolume.volume;
console.log("INIT VOLUME: " + actualVolume);


newVolume.addEventListener("volumechange", (event) =>
{

    newVolume = document.getElementsByClassName('video-stream')[0];
    actualVolume = newVolume.volume;
    console.log(actualVolume);


    let message = 
    {
        msgId: 1,
        vol: actualVolume,
    };

    chrome.runtime.sendMessage(message);


    console.log(`sent volume ${message.vol} value to popup.js`);

}, false);



//Listen for volume change in video
// newVolume.addEventListener("volumechange", (event) => {

//     console.log(`Volume is: ${newVolume.volume} ${newVolume.volume * 100}%`);

//     //Add logic for when volume is 0


//     //Send newVolume to background script
//     let message = {
//         vol: newVolume.volume
//     };

//     chrome.runtime.sendMessage(message);
//     console.log("Sent message: " + message.vol);

// }, false);


