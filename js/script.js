function DisplayArea(Area){
  if (document.getElementById("decimals").value){
    Area=Area.toFixed(document.getElementById("decimals").value)
  } else{
    Area=Area.toFixed(5)
  }
  document.getElementById("Output").innerHTML="The area of this Cone is "+Area+"cm<sup>2</sup>";
}

function Calculate(Formula){
  if (Formula=="Area"){
    let Height = document.getElementById("height").value
    let Radius = document.getElementById("radius").value
    let Area = Math.PI*Math.pow(Radius,2)*(Height/3)
    DisplayArea(Area)
  } else{
    
  }
 
}