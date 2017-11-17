//function myFunction() {
   //document.getElementById("NewMessage").innerHTML
//$('someCSSidentifier').text/html/? = 


var EricsMsg = "Live your life to the fullest, never strive settle, and dont forget to enjoy the little things life has to offer. " + " -Eric Metcalf ";

$(document).ready(function(){
  $('#WordButton').click(function(){
 // var EricsMsg = NewMessage.id;
  $('#NewMessage').append(EricsMsg);
});
});