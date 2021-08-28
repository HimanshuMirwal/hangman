
alert("use minus Symbol ( - )  button for space");
// Use to load questions.
var counter = 0;

// To check user attempts
var common = 5;

// To check correct attempts
var win = 0;

var description = ['It is related to surgical strike on POC by INDIAN ARMY.', 'it is related to a ship which was crashed in atlantic ocean.', 'it is related to fast cars.', 'It is related to two haryanvi girls who become wreslers for India.', 'It is related to INDIAN NAVY ship INS vikrant.', 'the 30 sikh soldiers fought against 10000 afgan soldiers at saragari fort.'];
console.log(description);

var main = ['uri', 'titanic', 'fast and furious', 'dangal', 'the ghazi attack', 'kesri'];

function loadGame() {
    if (counter === main.length) {
        counter = 0;
    }
    var temp = main[counter].split("");
    var answers = temp;
    console.log(answers);
    answersChanged = [...new Set(answers)];
    console.log(answersChanged);

    // Guess div 
    document.getElementById("guess").innerHTML = "<h1>Guess Movie Name?</h1><br>" + "<b>Hint: " + description[counter] + "<br>" + "Count Left: " + common;
    console.log(common);

    // Shift this to another module.
    const alphabets = [
        { id: 'a', value: 'A' },
        { id: 'b', value: 'B' },
        { id: 'c', value: 'C' },
        { id: 'd', value: 'D' },
        { id: 'e', value: 'E' },
        { id: 'f', value: 'F' },
        { id: 'g', value: 'G' },
        { id: 'h', value: 'H' },
        { id: 'i', value: 'I' },
        { id: 'j', value: 'J' },
        { id: 'k', value: 'K' },
        { id: 'l', value: 'L' },
        { id: 'm', value: 'M' },
        { id: 'n', value: 'N' },
        { id: 'o', value: 'O' },
        { id: 'p', value: 'P' },
        { id: 'q', value: 'Q' },
        { id: 'r', value: 'R' },
        { id: 's', value: 'S' },
        { id: 't', value: 'T' },
        { id: 'u', value: 'U' },
        { id: 'v', value: 'V' },
        { id: 'w', value: 'W' },
        { id: 'x', value: 'X' },
        { id: 'y', value: 'Y' },
        { id: 'z', value: 'Z' },
        { id: ' ', value: '-' }
    ];

    // Create another module for div creation.
    var parentTest = document.getElementById("test");
    for (j = 0; j < answers.length; j++) {
        childDiv = document.createElement("div");
        childDiv.setAttribute("class", "childDiv");
        childDiv.setAttribute("id", "childDiv" + j);
        console.log("helllo i am the Child Div");
        parentTest.appendChild(childDiv);

    }

    // Create another module for button creation.
    var alphabet_parent = document.getElementById("alphabets");
    // To create buttons 
    for (var i = 0; i <= alphabets.length - 1; i++) {
        var input = document.createElement("input");
        input.setAttribute("type", "button");
        input.setAttribute("value", alphabets[i].value);
        input.setAttribute("id", alphabets[i].id);
        input.setAttribute("class", "button");
        alphabet_parent.appendChild(input);

        // Create another module for onclick event.
        input.onclick = function () {
            
            // If the clicked button include data from answers object. 
            if (answers.includes(this.id)) {
                document.getElementById(this.id).style = "color:wheat;background:green;";
                console.log(this.id);
                // Change the color of buttons.
                for (t = 0; t <= answers.length; t++) {
                    if (this.id === answers[t]) {
                        document.getElementById("childDiv" + t).innerHTML = this.value;
                        document.getElementById(this.id).disabled = true;

                    }
                }
                win++;
                console.log("common->>" + common);
                // check the winning condition and perform changes.
                if (win === answersChanged.length) {
                    document.getElementById("guess").innerHTML = "<h1>You win!   :)</h1>";
                    document.getElementById("guess").style = "font-size:30px;";
                    for (var i = 0; i <= alphabets.length - 1; i++) {
                        document.getElementById(alphabets[i].id).disabled = true;
                    }

                }
            }
            else {
                // Activate when answer is wrong.
                document.getElementById(this.id).style = "color:wheat;background:red;";
                document.getElementById(this.id).disabled = true;
                common--;
                
                // Show attempt left. 
                document.getElementById("guess").innerHTML = "<h1>Guess Movie Name?</h1><br>" + "<b>Hint: " + description[counter] + "<br>" + "Count Left: " + common;

                console.log("common->>" + common);

                // Creation of hangman,when different condition occurs.
                if (common === 4) {
                    document.getElementById("leftLeg").style = "background:brown;";
                    document.getElementById("rightLeg").style = "background:brown;";
                }

                if (common === 3) {
                    document.getElementById("chest").style = "background:brown;";
                }
                if (common === 2) {
                    document.getElementById("leftHand").style = "background:brown;";
                    document.getElementById("rightHand").style = "background:brown;";
                }
                if (common === 1) {
                    document.getElementById("mouth").style = "background:brown;";
                }
                if (common === 0) {
                    document.getElementById("rope").style = "background:black;";
                }
            }
            
            // Update the Guess div and show results. 
            if (common === 0) {
                document.getElementById("guess").innerHTML = "<h1>You Lose!   :(</h1><br><b>" + "the movie name is: " +main[counter].toUpperCase();
                for (var i = 0; i <= alphabets.length - 1; i++) {
                    document.getElementById(alphabets[i].id).disabled = true;
                }
                // console.log("common->>"+common);
            }


        }
    }
}

// Creation  of "playagain" button, 
function refresh_button() {
    const refreshElement = document.getElementById("refresh");
    var button = document.createElement("input");
    button.setAttribute("type", "button");
    button.setAttribute("id", "refresh_button");
    button.setAttribute("value", "Play Again!");
    refreshElement.appendChild(button);

    // on click reset to defaults.
    button.onclick = function () {
        document.getElementById("alphabets").innerHTML = " ";
        document.getElementById("test").innerHTML = " ";
        document.getElementById("leftLeg").style = "background:wheat;";
        document.getElementById("rightLeg").style = "background:wheat;";
        document.getElementById("leftHand").style = "background:wheat;";
        document.getElementById("rope").style = "background:wheat;";
        document.getElementById("mouth").style = "background:wheat;";
        document.getElementById("chest").style = "background:wheat;";
        document.getElementById("rightHand").style = "background:wheat;";
        document.getElementById("guess").innerHTML = "Guess Movie Name?";
        // document.getElementById("guess").innerHTML="<h1>Guess Movie Name?</h1><br>"+"<b>Hint: "+description[counter]+ "<br>"+ "Count Left: "+common;

        common = 5;
        win = 0;
        counter++;
        loadGame();
        console.log(counter);
        //window.location.reload(true);
    }
}
