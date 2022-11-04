window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
  });

chrome.runtime.onMessage.addListener(receiver);

let volume = "Change volume here";
document.getElementById("volumeValue").innerText = volume;

//Retrieve initial volume



function receiver(req, sender, sendRes) {

    let { msgId, vol } = req;
    let id = msgId;

    if (id === 1) {




        //Receives value from yt in volume variable
        volume = vol;
        console.log(`Received volume = ${volume} from content.js`);


        //Changes the display HTML value based on volume value
        document.getElementById("volumeValue").innerText = volume;


        //Update the slider to move when yt volume changes
        UpdateSlider(volume);
    }
    else
        console.log("WRONG SENDER ID!");

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
