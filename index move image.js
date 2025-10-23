        // keep track of current interval
        let intervalID = 0;

        // this function will start the image moving
        function startMove(){
            // create shortcut to image in the html
            let image = document.getElementById("memeImage");

            //store the current interval id
            intervalID = setInterval(function(){
                // the code runs repeadidly
                let xCord = getRandNum();
                let yCord = getRandNum();

                // change x coord
                image.style.left = xCord + "px";
                image.style.top = yCord + "px";

            }, 10); // this code will run every second

            // swap buttons being enables
            document.getElementById("btnStart").disabled = true; // no click start
            document.getElementById("btnStop").disabled = false; // click start
        }

        // function to stop image from omoving
        function stopMove(){
            // call clear interval to stop image from moving
            clearInterval(intervalID);

            document.getElementById("btnStart").disabled = false; // click start
            document.getElementById("btnStop").disabled = true; // no click stop
        }

        // function to randomly generate a number
        function getRandNum(){
            //get a random number between 0 and 1999
            return Math.floor(Math.random() * 2000);
        }
