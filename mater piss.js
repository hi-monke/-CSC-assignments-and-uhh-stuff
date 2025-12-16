// create function to add audio to html
        function addAudio(){
            // create new ausio element
            let audioElement = document.createElement("audio");
            // set id so ausio can be used in other functions
            audioElement.setAttribute("id", "myAudio");
            // use audio sound file
            audioElement.setAttribute("src", "Mater-Pissed-His-Pants.mp3");
            // this adds controll dashboard to show the audio is working
            audioElement.setAttribute("controls", "controls");

            // add new ausio element to empty div
            document.getElementById("divAudio").appendChild(audioElement);

            // hide the add audio button
            document.getElementById("btnAddAudio").hidden = false;

            // unhide the play and pause buttons
            document.getElementById("btnPlayAudio").hidden = false;
            document.getElementById("btnPauseAudio").hidden = false;
        }

        function playAudio(){
            let audio = document.getElementById("myAudio");
            audio.play();
        }

        function pauseAudio(){
            let audio = document.getElementById("myAudio");
            audio.pause();
        }