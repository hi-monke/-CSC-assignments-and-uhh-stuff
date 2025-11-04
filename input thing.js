            function validateForm(){
                let fullName = "";

                // get the value the user entered for their first name, and remove any spaces at the beginning or end with trim()
                // get users first name
                let firstName = document.getElementById("txtFirstName").value.trim();
                // get users last name
                let lastName = document.getElementById("txtLastName").value.trim();
                // get users favorite color
                let favColor = document.getElementById("txtFavColor").value.trim();
                // get users birthday
                let birthDate = document.getElementById("txtBirthDate").value.trim();
                // get users zip code
                let zipCode = document.getElementById("txtZipCode").value.trim();

                console.log("firstName=" + firstName);
                console.log("lastName=" + lastName);
                console.log("favColor=" + favColor);
                console.log("birthDate=" + birthDate);
                console.log("zipCode=" + zipCode);

                // validation - need to make sure that first name + last name is less than 20 characters
                // zip code needs to be exactly 5 characters

                // variable to store the message that users get
                let message = "";

                fullName = firstName + " " + lastName;

                console.log("fullName=" + fullName);

                // verify the number of characters in full name
                if (fullName.length > 20 || fullName.length == 1){
                    // an invalid name has been entered
                    message = "that isnt a name :(";
                    console.log("that isnt a name :(");
                }
                else if (zipCode.length != 5){
                    message = "that aint a zip code";
                    console.log("that aint a zip code");
                }
                else{
                    // create a message of success
                    message = "Congratulations " + firstName + "! At last you have the vision to find my  H O U S E  :O !!!!";
                }

                // display the message to the user of the div in the html section
                document.getElementById("divMessage").textContent = message

            }