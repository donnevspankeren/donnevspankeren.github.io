function clickMyButton(){
    var myNumber1= prompt ("getal 1");
    var myNumber2= prompt ("getal 2");
    if( myNumber1 > myNumber2){
        document.getElementById("myCalculation").innerHTML = "nummer 1 is groter dan nummer 2";
    }
    if( myNumber1 < myNumber2){
        document.getElementById("myCalculation").innerHTML = "nummer 1 is kleiner dan nummer 2";
    }
    if( myNumber1==myNumber2){
        document.getElementById("myCalculation").innerHTML = "nummer 1 is gelijk aan nummer 2";
    }
    
   
}



