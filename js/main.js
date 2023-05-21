//--------------Menu burger ---------------

$(document).ready(function() {
  $('.header-burger').click(function(event) {
    $('.header-burger, .header-menu').toggleClass('active');
    $('body').toggleClass('lock');
  })
});


//--------------Show more content ---------------

let service_items = document.getElementsByClassName("service-item");
for (let i = 0; i < service_items.length; i++) {
  service_items[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        //this.classList.toggle("active");
        /* Toggle between hiding and showing the active panel */

        this.classList.toggle("active");

        var block = this.nextElementSibling;

        //var body = body1.nextElementSibling;
        if (block.style.display === "block") {
          block.style.display = "none";
        } else {
          block.style.display = "block";
        }
      });
}

//--------------Consultation form ---------------

$(document).ready(function() {
  $('.close-btn').click(function(event) {
   $('.consult-form').css({
    "display":"none"
  });
   $('.page-content').css({
    "filter":"blur(0px)"
  });
   $('body').css({
    "overflow":"visible" 
  });
   $('#consult-name').val("");
   $('#consult-name').css({
    "border":"1px solid #605857" 
  });
    $('#consult-telephone').val("");
    $('#consult-telephone').css({
    "border":"1px solid #605857" 
  });
 })
});

$(document).ready(function() {
  $('.show-consult-form').click(function(event) {

    $('.header-burger, .header-menu').removeClass('active');

    $('.consult-form').css({
    "display":"block"
  });
    
    makeBlurWhileOpening();
   
  })
});


function form1(){
    let message_form=document.getElementById("message-form-1");
    let name=document.getElementById('consult-name');
    let telephone=document.getElementById('consult-telephone');
    let message="Здравствуйте, "+ name.value +"! В ближайшее время наш администратор свяжется с вами по номеру телефона "+telephone.value+" для проведения консультации! Если вы обнаружили, что телефон указан неверно, заполните форму ещё раз!"

    if(validateForm(name, telephone)) {
      $('.consult-form').css({
      "display":"none"
    });
    message_form.style.display="block";
    message_form.firstElementChild.innerText=message;
    name.value="";
    telephone.value="";
  }

}

function validateForm(name,telephone){
 if(name.value!="") {
    if(!checkName(name.value.trim())) {
      name.style.border="1px red solid";
    } else {
      name.style.border="1px solid #605857";
    }
  } else {
    name.style.border="1px red solid";
  }

  if(telephone.value!="") {
    if(!checkPhone(telephone.value)) {
       telephone.style.border="1px red solid";
    } else {
      telephone.style.border="1px solid #605857";
    }
  } else {
    telephone.style.border="1px red solid";
  }

  if(checkName(name.value) && checkPhone(telephone.value)) {

      makeBlurWhileOpening();
      return true;
    }
}


function checkName(name_user) {
  return name_user.match(/^[A-ZА-Я]{1}[a-zа-я]{1,}$/);
}

function checkPhone(phone) {
  return phone.match(/^\+375?[\(|\s](25|29|33|44)?[\)|\s][0-9]{3}-[0-9]{2}-[0-9]{2}$/) ? true : false;
}

function makeBlurWhileOpening() {
   $('.page-content').css({
      "filter":"blur(10px)" 
    });
      $('body').css({
      "overflow":"hidden" 
    });
}

function removeBlurStyle(){
  $('.page-content').css({
    "filter":"blur(0px)"
  });
   $('body').css({
    "overflow":"visible" 
  });
}

//--------------Validate form ---------------


function form2(){
  let message_form=document.getElementById("message-form-2");
  let name=document.getElementById('name');
  let telephone=document.getElementById('telephone');
  let message="Здравствуйте, "+ name.value +"! Вы записались на курс. В ближайшее время наш администратор свяжется с вами для подтверждения записи по номеру телефона "+telephone.value+"! Если вы обнаружили, что телефон указан неверно, заполните форму ещё раз!"

  if(validateForm(name, telephone)) {
    message_form.style.display="block";
    message_form.firstElementChild.innerText=message;
    name.value="";
    telephone.value="";
  }
}

function closeMessage() {
  $('.message-form').css({
      "display":"none"
    });
  removeBlurStyle();
}


//--------------Slider---------------

let slideIndex = 1;
showSlides(slideIndex);

function nextSlide() {
  showSlides(slideIndex += 1);
}

function previousSlide() {
  showSlides(slideIndex -= 1);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("slider-item");

  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }

  for (let slide of slides) {
    slide.style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}







// function submitForm(name,telephone) {

//   if(name.value!="") {
//     if(!checkName(name.value)) {
//       name.style.color="red";
//     } else {
//       name.style.color="#605857";
//       name.style.border="1px solid #605857";
//     }
//   } else {
//     name.style.border="1px red solid";
//   }

//   if(telephone.value!="") {
//     if(!checkPhone(telephone.value)) {
//       telephone.style.color="red";
//     } else {
//       telephone.style.color="#605857";
//       telephone.style.border="1px solid #605857";
//     }
//   } else {
//     telephone.style.border="1px red solid";
//   }


//   if(checkName(name.value) && checkPhone(telephone.value)) {

//       let message="Здравствуйте, "+ name.value +"! Вы записались на курс. В ближайшее время наш администратор свяжется с вами для подтверждения записи по номеру телефона "+telephone.value+"! Если вы обнаружили, что телефон указан неверно, заполните форму ещё раз!"
      
//       $('.page-content').css({
//       "filter":"blur(10px)" 
//     });
//       $('body').css({
//       "overflow":"hidden" 
//     });
//       message_form.style.display="block";
//       message_form.firstElementChild.innerText=message;
//       name.value="";
//       telephone.value="";
//     }
// }