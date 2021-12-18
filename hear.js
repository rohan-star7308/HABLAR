var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
    document.getElementById("textbox2").innerHTML=" ";
    recognition.start();
}

recognition.onresult = function run (event){
    console.log(event);
    var content=event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox2").innerHTML=content;
} 

function backtohome(){
    window.location.replace("home.html");
}