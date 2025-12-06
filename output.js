function showInnerHTML() {
  document.getElementById("output1").innerHTML = "I told you it would get overwritten";
}

function useDocumentWrite() {
  document.write("LOOK AT WHAT YOUVE DONE!");
}

function showAlert() {
  alert("BIG SCARY POP-UP BOX!!!");
}

function showConsole() {
  console.log("You cant see me - John Cena (he was clearly wrong if you are reading this)");
}


let msgCount = 0; // we keep this on the outside to stop it from keeping the index at 0
function movingButton() {
	const messages = [ // each of these is a different projected message
    "You found me!","Try again!","Too slow!","Still clicking?", "I'm over here!", "Gotta go fast!",
]; 

	
    let h = window.innerHeight; // gets the window height and width
    let w = window.innerWidth;

    let randW = Math.random() * (w - 100); // keep on screen while randomizing the location on the screen
    let randH = Math.random() * (h - 50);

    console.log("New X:", randW); //Dev tools
    console.log("New Y:", randH);

    let btn = document.getElementById("moveBtn");
    btn.style.left = randW + "px"; //moves the button
    btn.style.top = randH + "px";
	
	
    btn.textContent = messages[msgCount]; // Change text to next message
    msgCount = (msgCount + 1) % messages.length;// Move to next message (wrap back to start)
}



function runningButton() { // a lot of this i repurposed from above
    const messages = [ "Loser!","You're too slow!", "You'll never catch me!", "Run run run", "as fast as you can", "You can't catch me", "Im the button man ;)" ];
    
    let h = window.innerHeight;
    let w = window.innerWidth;

    let randW = Math.random() * (w - 100);
    let randH = Math.random() * (h - 50);

    let btn = document.getElementById("runningBtn");
    btn.style.left = randW + "px";
    btn.style.top = randH + "px";

    btn.textContent = messages[msgCount];
    msgCount = (msgCount + 1) % messages.length;
}

function setupRunningButton() { //this is my listener and starts the button from when the page is loaded

    document.addEventListener("mousemove", function(event) {
        const mouseX = event.clientX; //this grabs the clients cursor x and y
        const mouseY = event.clientY;

        let btn = document.getElementById("runningBtn"); //runningbutton
        const rect = btn.getBoundingClientRect(); //returns the position of the button relitive to the client/page

        const btnX = rect.left + rect.width / 2; //takes the left and total width, divides by 2
        const btnY = rect.top + rect.height / 2; // same as above

        const distance = Math.hypot(mouseX - btnX, mouseY - btnY); //here we use trig to make sure the cursor isnt too close

        // Move the button if mouse gets within 50px
        if (distance < 50) {
            runningButton(); //run button, run!
        }
    });
}



// ----- Start everything as soon as the page loads -----
window.onload = function() {
    setupRunningButton();
};




