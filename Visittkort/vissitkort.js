let nameDisp = document.getElementById("nameDisp");
let sexDisp = document.getElementById("sexDisp");
let posDisp = document.getElementById("posDisp");
let numDisp = document.getElementById("numDisp");
let licenseDisp = document.getElementById("licenseDisp");
let dob = document.getElementById("dob");
let imgDisp = document.getElementById("imgDisp");

function submit() {
    nameDisp.innerText = document.getElementById("nameInp").value;
    sexDisp.innerText = document.getElementById("sexInp").value;
    posDisp.innerText = document.getElementById("posInp").value;
    numDisp.innerText = document.getElementById("numInp").value;
    licenseDisp.innerText = document.getElementById("licenseInp").value;
    let colour = document.getElementById("colour").value;
    let border = "1px solid black;";

    //license check
    if (document.getElementById("licenseInp").checked === true) {
        licenseDisp.innerText = "License";
    } else {
        licenseDisp.innerText = "No License";
    };


    // radio check for border style
    if (document.getElementById("_A").checked === true) {
        border = "2px solid black;";
    } else if (document.getElementById("_B").checked === true) {
        border = "2px dashed black;";
    } else if (document.getElementById("_C").checked === true) {
        border = "2px dotted black;";
    }; 

    dob.innerText = document.getElementById("dobInp").value;
    
    document.getElementById("card").style = "border: "+ border + "background-color: " + colour;


    //file display for img
    const fileInput = document.getElementById("file");
    const file = fileInput.files[0];
    if (file) {
        // Create a URL for the selected file
        const imageUrl = URL.createObjectURL(file);
        // Set the src attribute of imgDisp to the created URL
        imgDisp.src = imageUrl;
        imgDisp.style = "width: 200px; height: 200px;"
    }

    console.log("played");

}

