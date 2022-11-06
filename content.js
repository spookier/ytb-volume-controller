let newVolume = -2;
newVolume = document.getElementsByClassName('video-stream')[0];

let initialVolume = document.getElementsByClassName('video-stream')[0];

let actualVolume = newVolume.volume;


//SET Initial Volume for popup
chrome.storage.sync.set({key: initialVolume.volume}, function() {
    console.log('Value is set to ' + value);
  });

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

    //SET Initial Volume after every click for popup
    console.log(`sent volume ${message.vol} value to popup.js`);
    chrome.storage.sync.set({key: initialVolume.volume}, function() {
        console.log('Value is set to ' + value);
      });

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


