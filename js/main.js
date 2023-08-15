(function($) {
	"use strict"

	// Mobile dropdown
	$('.has-dropdown>a').on('click', function() {
		$(this).parent().toggleClass('active');
	});

	// Aside Nav
	$(document).click(function(event) {
		if (!$(event.target).closest($('#nav-aside')).length) {
			if ( $('#nav-aside').hasClass('active') ) {
				$('#nav-aside').removeClass('active');
				$('#nav').removeClass('shadow-active');
			} else {
				if ($(event.target).closest('.aside-btn').length) {
					$('#nav-aside').addClass('active');
					$('#nav').addClass('shadow-active');
				}
			}
		}
	});

	$('.nav-aside-close').on('click', function () {
		$('#nav-aside').removeClass('active');
		$('#nav').removeClass('shadow-active');
	});


	$('.search-btn').on('click', function() {
		$('#nav-search').toggleClass('active');
	});

	$('.search-close').on('click', function () {
		$('#nav-search').removeClass('active');
	});

	// Parallax Background
	$.stellar({
		responsive: true
	});
})(jQuery);

// Start of Tawk.to Script-->

var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/64b3c83ecc26a871b028b35a/1h5f4cdre';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();

// End of Tawk.to Script-->


  function validation(){

    var name = $("#fullName").val();
    var email = $("#email").val();
    var message = $("#message").val();
    var phone = $("#phone").val();

    if (name === "" || email === "" || message === "" || phone === ""){
      swal({
        title: "Fields Empty!!",
        text: "Please check the missing field!!",
  
        button: "Ok!",
      });
    }
    else{
      swal({
        title: "SuccessFully Submitted",
        button: "Yes!!",
      }); 
    } 
  }   
  


  

  
  var form = document.getElementById("form");
  form.addEventListener("submit", e => {
    e.preventDefault();
    fetch(form.action, {
        method : "POST",
        body: new FormData(document.getElementById("form")),
    }).then(
        response => response.json()
    ).then((html) => {
      // you can put any JS code here
      alert("success")
    });
  });

  var form = document.getElementById("sheetdb-form");
  form.addEventListener("submit", e => {
    e.preventDefault();
    fetch(form.action, {
        method : "POST",
        body: new FormData(document.getElementById("sheetdb-form")),
    }).then(
        response => response.json()
    ).then((html) => {
      // you can put any JS code here
      alert("success")
    });
  });


  function PopUp(){
    document.getElementById('ac-wrapper').style.display="none"; 
}


    
  
  