// functions are a nice way to organize code and make our code reusable
        // use descriptive function name, they do stuff so make it easily identifiable
        // () can hold a funcion arguement, if neeeded to pass in info to the function
        function playDice(){
            // log that the function was called
            console.log("playDice() function was called");

            // roll die 1
            let roll1 = rollDice();

            // roll die 2
            let roll2 = rollDice();

            console.log("roll1=" + roll1);
            console.log("roll2=" + roll2);

            // calculate the rolls
            let sum = roll1 + roll2;

            // display roll 1 in the roll 1 div
            document.getElementById("divRoll1").textContent = "Roll 1: " + roll1;
            document.getElementById("divRoll2").textContent = "Roll 2: " + roll2;
            document.getElementById("divSum").textContent = "Total: " + sum;

            // variable to hold the results
            let result = "";
            
            // varible to hold the result images
            let resultImage = "";

            // see if the user lot, if rolled sume of 7 or 11
            // || means or
            // %% means and
            if (sum == 7 || sum == 11){
                console.log("you lost :(")
                result = "you lost :(";
                resultImage = "lost.gif";
            }

            else if (sum == 12){
                console.log(":D  SUPER BONUS WIN!!!  :D")
                result = ":D  SUPER BONUS WIN!!!  :D";
                resultImage = "bonus 2.gif";
            }

            else if (sum == 2){
                console.log("D:  U SUCK...  D:")
                result = "u suck";
                resultImage = "suck.gif";
            }

            // see if ev even number was rolled
            // modulus does a division problem and we get the remainder as the result, also the % symbol
            // 2/2 = 1 with no remainder = even number
            // 4/2 = 2 with no remainder = even number
            // 5/2 = 2 with remainder of 1 = odd number
            // roll1 % 2 == 0, checks to see if we are dealing with an even or odd number, will be true if we are dealing with an even number
            // also need to make sure that roll 1 and roll 2 result in the same value
            else if (roll1 % 2 == 0 && roll1 == roll2){
                console.log("you won :)")
                result = "you won :)";
                resultImage = "won.jpg";
            }

            // the catch all statement, what happens when win or lose functiom ist not met
            else{
                console.log("you tied :|")
                result = "you tied :|";
                resultImage = "tie.jpg";
            }

            // show the results in the resultdiv
            document.getElementById("divResult").textContent = result;
            document.getElementById("imgResult").src = resultImage;

            let resultImg = document.getElementById("imgResult");
            resultImg.src = resultImage;

            // Reset if already spinning
            resultImg.classList.remove("spin-30x"); 

            // Reflow to restart animation
            void resultImg.offsetWidth; 
            resultImg.classList.add("spin-30x");

            // Re-trigger animation every time
            resultImg.classList.remove("fade-in");

            // Force reflow
            void resultImg.offsetWidth; 
            resultImg.classList.add("fade-in");

        }


        // create a func to generate a random number
        function rollDice(){
            //  create a variableto gold a random numbeer
            // math.random in a build in java functuon that generates a random number between 0 and 1, unless specified otherwise
            // goal is to replicate a 6 sided die
            let die = Math.random() * 6;

            //round the number and return the value
            return Math.ceil(die);
        }