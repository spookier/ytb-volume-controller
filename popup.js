// window.addEventListener('load', (event) => {
//     console.log('POPUP.JS = page is fully loaded');
//   });




chrome.runtime.onMessage.addListener(receiver);


//*** Change to check if URL is a playable video

let volume = "Change volume here";
document.getElementById("volumeValue").innerText = volume;


//Retrieve initial volume from content.js when opening popup
window.onload = function() {
    
    chrome.storage.sync.get(['key'], function(result) {
    console.log('INITIAL VALUE currently is ' + result.key);
    
    //Update the slider value everytime popup gets closed for next re-open
    UpdateSlider(result.key);
  });
}


let setVolume;

//*** SET YouTube slider in content.js from popup




function receiver(req, sender, sendRes) {

    let { msgId, vol } = req;
    let id = msgId;

    if (id === 1) 
    {

        //Receives value from yt in volume variable
        volume = vol;
        console.log(`Received volume = ${volume} from content.js`);

        //Changes the display HTML value based on volume value
        document.getElementById("volumeValue").innerText = volume;


        //Update the slider to move when yt volume changes
        UpdateSlider(volume);


        //chrome.storage.local.clear();

    }
    else
        console.log("WRONG MSGID!");

}


function UpdateSlider(value) 
{
    //Change slider values dynamically
    var slide = document.getElementById('slide');
    slide.oninput = function () {
        document.getElementById("volumeValue").innerText = this.value;
    }

    document.getElementById("slide").value = value;



}
