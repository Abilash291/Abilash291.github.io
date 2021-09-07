function cal(){
    var feet=parseInt(document.getElementById("ft").value);
    var inches=parseInt(document.getElementById("inch").value);
    var kg=parseInt(document.getElementById("weight").value);
    var result=kg/Math.pow(((feet*0.3048)+(inches*0.0254)),2);
    result=Math.round(result*10)/10;
    document.getElementById("result").innerHTML = result;    
}

