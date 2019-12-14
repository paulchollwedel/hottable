
$(document).on("ready", function() {
    console.log("hi")
});
$(".submit").on("click", function(event){

    event.preventdefault();

    var reservation = {
      customerName: $("#name").val().trim(), 
      email: $("#email").val().trim(), 
      phone: $("#phone").val().trim(), 
      id: $("#id").val().trim()

    };

    
    console.log(reservation);

});