$(function () {
  $.getJSON('api', updateFeedback)
  $('form').submit(function (e) {
    e.preventDefault();



    $.post("/api", {
      name: $("#name").val(),
      email: $("#email").val(),
      textarea: $("#message").val()
    }, updateFeedback)

    var nameInput = document.getElementById('name')
    var emailInput = document.getElementById('email')
    nameInput.value = ""
    emailInput.value = ""

  })


  function updateFeedback(data) {
    let msg = ""
    console.log(data)
    data.forEach(value => {
      msg += `<br>`
      msg += `<br>`
      msg += `<h6>${value.textarea}</h6>`
      msg += `<p>${value.name}</p>`
    });

    document.getElementById('comments').innerHTML = msg
  }


})
