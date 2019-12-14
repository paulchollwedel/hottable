console.log("hi")

$(".btn").on("click", function(){
  console.log("hello")

  var reservation = {
    customerName: $("#name").val(),
    email: $("#email").val(),
    phone: $("#phone").val(),
    id: $("#id").val(),
  }
  console.log(reservation)

  $.post("/api/tables", reservation,
    function(data){
      if(data) {
        alert("You're booked!")
      } else {
        alert("Sorry you are on the waiting list")
      }
    })
})
