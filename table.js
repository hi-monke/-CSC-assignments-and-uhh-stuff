// function to load the data into the tabke
        function loadData(){
            // array of problem projects, 2d array
            let arrProblems = [
                // first row of data, nested array
                ["Crowdstrike", 2024, "Update With Empty txt File", "$5.4B"],
                ["Facebook", 2020, "Broken Building Card Reader", "$90M"],
                ["Citibank", 2020, "Accidental Money Transfer Amount", "$900M"],
                ["Mars Climate Orbiter", 1999, "Differing Units Used In The Project", "$327M"],
                ["Sonic X-treme", 1997, "Canceled Due To Too Much Ambition/Unsafe Working Hours", "The Sega Saturn™"],
                ["My Autism", 2025, "my dumbass being stupid while coding", "my college tuition"]
            ];

            // nested for loops to display the data
            for (let i=0; i<arrProblems.length; i++){
                // create table row to store the data
                let tr = document.createElement("tr");

                // loop through each nested array (data set)
                for (let j=0; j < arrProblems[i].length; j++){
                    // create table data to display 1 data set
                    let td = document.createElement("td");

                    //put data in the td
                    td.textContent = arrProblems[i][j];

                    // append the new data to the exsisting row
                    tr.appendChild(td);
                }

                // add the new row to exsisting table
                document.getElementById("tblData").appendChild(tr);
            }
        }