"use strict";

/* Used to display the result of the calculations*/
function Display(DisplayVar){
  if (document.getElementById("decimals").value){
      DisplayVar=DisplayVar.toFixed(document.getElementById("decimals").value)
  } else{
      DisplayVar=DisplayVar.toFixed(5)
  }
  document.getElementById("Output").innerHTML="The area of this Cone is "+DisplayVar+"cm<sup>2</sup>";
}

/* Used to calculate the chosen formula based off of the user's input*/
function Calculate(Formula){
  if (document.getElementById("option-1").checked){
    Formula="Area"
  }
  if (document.getElementById("radius").value &&  document.getElementById("height").value){
    if (Formula=="Area"){
      let Height = document.getElementById("height").value;
      let Radius = document.getElementById("radius").value;
      let Area = Math.PI*Math.pow(Radius,2)*(Height/3);
      Display(Area)
    } else{
      let Height = document.getElementById("height").value;
      let Radius = document.getElementById("radius").value;
      let SurfaceArea = (Math.PI*Number(Radius))*(Number(Radius)+Math.sqrt(Math.pow(Radius,2)+Math.pow(Height,2))); //(Math.PI*Radius)*(Radius+Math.sqrt( (Radius*Radius)+(Height*Height) ));
      Display(SurfaceArea)
    }
  } else{
    document.getElementById("Output").innerHTML="Please enter all the values";
  }
}