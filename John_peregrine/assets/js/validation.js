$(document).ready(function(){
  $('#submit').click(function(){
      var email1= $('#mail').val();


    var e_id= /^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
      if(email1.match(e_id))
      {

      }
      else
      {
         $("#mail").attr("placeholder", "Invalid mail_id").val("").focus().blur();
           $("#mail").css({"background-color":" #ff9980"});


      }



});
});
