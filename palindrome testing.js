// function to test for the palindrome
        function testPalindrome(){
            // get the value the user entered in the text box and remove spaced at end and beginning of the string
            let userInput = document.getElementById("txtInput").value.trim();

            console.log("userInput=" + userInput);

            // turn into if else statement, this statement implies == true
            if (isPalindrome(userInput) == true){
                document.getElementById("divResult").textContent = "yuh, " + userInput + " is a palindrome :D";
            }
            else {
                document.getElementById("divResult").textContent = "nope, " + userInput + " is a not palindrome :(";
            }
        }

        // create another function to text if a word is a palindrome
        function isPalindrome(wordToTest){
            // remove spaced between words
            let cleanedWord = wordToTest.replace(/\s/g, "")

            // change any uppercase letters into lower case
            cleanedWord = cleanedWord.toLowerCase();

            console.log("cleanedWord=" + cleanedWord);

            // convert cleaned string to array
            let arrayCleaned = cleanedWord.split("");

            // reverse the array contents
            arrayCleaned = arrayCleaned.reverse();

            // take reversed array and convert back to string
            let reversedWord = arrayCleaned.join("");

            console.log("reversedWord=" + reversedWord);

            // compare if the cleaned and reversed words are the same
            return cleanedWord == reversedWord; 
        }