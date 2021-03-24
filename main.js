
//Start Code

Webcam.set({

width:350,

height:300,

image_format:'png',

png_quality:90

});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function takesnap() {

Webcam.snap(function(datauri){

document.getElementById("result").innerHTML = '<img id="capture_image" src="'+datauri+'"/>'

});
    
}

console.log("ml5 version:",ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/pRrOs8N0h/model.json',modelLoaded);

function modelLoaded() {

console.log("Model Loaded!");

}

//End Code with nuearal networks Visual Studio Code class-1

//Start code for class-2

function check() {

    //We are storing the captured_image in the img variable

    img = document.getElementById("capture_image");

    //we are checking if the object and the accuracy is correct are not

    classifier.classify(img, gotResult);

}

function gotResult(error, result) {

//it is checking if it is an error are not    

if(error) {

//Displays the error in the console    

console.error(error);

}

else {

//Displays the result in the console    

console.log(result);

//it will display the label which is inside the result

document.getElementById("result_name_object").innerHTML = result[0].label;

//it will display he confidence which is inside the result and takes the first 3 numbers

document.getElementById("result_name_accuracy").innerHTML = result[0].confidence.toFixed(3);

}

}

//End Code