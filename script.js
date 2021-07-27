function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode"); 
}

// var myModal = document.getElementById('myModal')
// var myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', function () {
//   myInput.focus()
// })


$("document").ready(function () {

  $('.nav-portfolio').click(function () {

      $('html, body').animate({
          scrollTop: $("#portfolio").offset().top -100
      }, 'fast');

  });
});

function modalPreview() {
  $(".btn-modal-trigger").each(function() {
    $(this).click(function() {
      var imgSrc = $(this).closest(".portfolio-info").find(".image-modal").attr("src");

      $("#modal_image").attr("src", imgSrc)
    });
  })
}

modalPreview();