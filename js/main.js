$(document).ready(function () {
  var hotelSlider = new Swiper(".hotel-slider", {
    // Optional parameters

    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".hotel-slider__button--next",
      prevEl: ".hotel-slider__button--prev",
    },
    //Управление стрелками клавиатуры
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });
  var reviewsSlider = new Swiper(".reviews-slider", {
    // Optional parameters

    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".reviews-slider__button--next",
      prevEl: ".reviews-slider__button--prev",
    },
    //Управление стрелками клавиатуры
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });
  /*$(".parallax-window").parallax({ imageSrc: "../img/newletter-bg.jpeg" });
  $(".parallax-window").parallax({
    naturalWidth: 600,
    naturalHeight: 400,
  });*/
  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", function () {
    //console.log("Клик по кнопке меню");
    document
      .querySelector(".navbar-bottom")
      .classList.toggle("navbar-bottom--visible");
  });
  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }
  //Обработка форм
  $(".modal__form").validate({
    errorClass: "invalid",
    messages: {
      name: {
        required: "Please enter a name",
        minlength: "minimum 2 characters",
      },
      phone: {
        required: "Phone is required",
        minlength: "minimum 6 characters",
      },
      email: {
        required: "enter email",
        email: "Email entered incorrectly",
      },
    },
  });

  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Please enter a name",
          minlength: "minimum 2 characters",
        },
        phone: {
          required: "Phone is required",
          minlength: "minimum 6 characters",
        },
        email: {
          required: "enter email",
          email: "Email entered incorrectly",
        },
      },
    });
  });
  AOS.init();
});
document.querySelector(".map").addEventListener("mouseenter", () => {
  if (!document.querySelector(".map iframe")) {
    document.querySelector(".map").innerHTML =
      '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5765260121048!2d100.88038641468516!3d12.934916890879924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310296059bd3779b%3A0x37191e723a1a258!2sHilton%20Pattaya!5e0!3m2!1sru!2sru!4v1596621214582!5m2!1sru!2sru" width="100%" height="214" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>';
  }
});
