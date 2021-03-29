  
function change() {     
    $("#quiz1").html("CSIE@CGU");
    $("#quiz1_1").html("怎麼那麼棒") 
}  
function new_button() {   
    var but="<button id='change'>Change this document</button>";
    $("body").append(but);
    $("#change").click(change);
}