// if 20 plants needed to be stores, 2o variables could be created but it would lead to problems,.
let plant1 = "Rose";
let plant2 = "Nightshade";
let plant3 = "Hydranga";
let plant4 = "Tree";
let plant5 = "Flower";
let plant6 = "Cactus";

// a better way is to use an array data structure
let arrPlants = ["Rose", "Nightshade", "Hydranga", "Tree", "Flower", "Cactus"];
// and add some fun sounds for adding and deleting plants
let addSound = new Audio("add plant.mp3");
let deleteSound = new Audio("delete plant.mp3");

// function to add plant to array
function addPlant(){
    // play add sound
    addSound.currentTime = 0;
    addSound.play();

    // get new plant name
    let newPlant = document.getElementById("txtNewPlant").value;
        
    // add new plant to array
    arrPlants.push(newPlant);

    // call the showplants function so the list can be updated in real time
    showPlants();
}

// function will loop through the array of plants and show them in the ul in the html code
function showPlants(){
    // loop through the plants array and build an li for each plant

    // shortcut to the ul in the html
    let ulPlants = document.getElementById("ulPlants");

    // remove any plants that are already in the unordered list 
    ulPlants.innerHTML = "";

    // for each loop to run through the list
    arrPlants.forEach(function(plant, index){
        // create the list item - the li - using javascript
        let li = document.createElement("li");

        // cause plant name to show on screen
        li.textContent = plant;

        // add event handler so when list item is clicked, the clicked item is prompted for deletion
        li.onclick = function(){
            // check with user to make sure deletion is intentional
            if (confirm('remove ' + plant + '?')){
                // play delete sound
                deleteSound.currentTime = 0;
                deleteSound.play();

                // deletion is intentional, so it will be deleted
                arrPlants.splice(index, 1);

                // then refresh new list
                showPlants();
            }
        };

        // add the new listitem to the exsisting unordered list
        ulPlants.appendChild(li);
    });
}

showPlants();
