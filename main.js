//https://teachablemachine.withgoogle.com/models/zUNp7qj-F/
function startClassification(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    })
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/zUNp7qj-F/model.json', modelready)
}
function modelready(){
    classifier.classify(gotResults)
}
function gotResults(error, results){
    console.log("got results")
}
function gotResults(error, results){
    if(error){
        console.log(error)
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random *255) + 1;
        random_number_g = Math.floor(Math.random * 255) + 1;
        random_number_b = Math.floor(Math.random *255) + 1;
        document.getElementById("result_label").innerHTML = "I can hear - " +results[0].label;
        document.getElementById("result_confidence").innerHTML = "Accuracy - "+(results[0].confidence *100).toFixed(2) + "%";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+", "+random_number_g+", "+random_number_b+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+", "+random_number_g+", "+random_number_b+")";
        cat = document.getElementById("cat.gif");
        dog = document.getElementById("dog.gif");
        lion = document.getElementById("lion.gif");
        cow = document.getElementById("cow.gif");

        if(result[0].label == "Meow"){
            cat.src = "cat.gif";
            dog.src = "dog.png";
            lion.src = "lion.png";
            cow.src = "cow.png";
        }
       else if(result[0].label == "Bark"){
       cat.src = "cat.png";
       dog.src = "dog.gif";
       lion.src = "lion.png";
       cow.src = "cow.png"
       }

       else if(result[0].label == "Roar"){
        cat.src = "cat.png";
        dog.src = "dog.png";
        lion.src = "lion.gif";
        cow.src = "cow.png"
        }

        else{
            cat.src = "cat.png";
            dog.src = "dog.png";
            lion.src = "lion.png";
            cow.src = "cow.gif"
            }
    }
        
    }
    
