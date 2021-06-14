/* WowJs */
new WOW().init();

/* Navbar: Click to active module */
var count = "";
var menuIsOpen = "";
/* Toggle menu button */
$("#navbar a:not(.navbar-brand__config)").on("click", function () {
  if (count === "") {
    $("#navbar a:not(.navbar-brand__config)").removeClass("active");
    $(this).addClass("active");
    count = $(this).attr("id");

    // Animation configuration
    if (count === "vehicle-link" || count === "vehicle-link__xs") {
      vehicleOpen();
      menuIsOpen = "";
    } else if (count === "shopping-link") {
      openContent("shopping", "animate__slideInDown");
    } else if (count === "owners") {
      openContent("owner", "animate__slideInDown");
    } else if (count === "discover") {
      openContent("discover", "animate__slideInDown");
    } else if (count === "search") {
      openContent("search", "animate__fadeInUp");
    }
  } else if (count === $(this).attr("id")) {
    // Animation configuration
    // vehicle link
    if (count === "vehicle-link" || count === "vehicle-link__xs") {
      vehicleClose();
    }
    //shopping tools link
    if (count === "shopping-link") {
      closeContent("shopping", "animate__slideOutUp");
    }
    // owners link
    if (count === "owners") {
      closeContent("owner", "animate__slideOutUp");
    }
    // discover link
    if (count === "discover") {
      closeContent("discover", "animate__slideOutUp");
    }
    // search link
    if (count === "search") {
      closeContent("search", "animate__fadeOutDown");
    }
    $("#navbar a:not(.navbar-brand__config)").removeClass("active");
    count = "";
  } else if (count !== $(this).attr("id")) {
    $("#navbar a:not(.navbar-brand__config)").removeClass("active");
    $(this).addClass("active");
    count = $(this).attr("id");
    if (count === "vehicle-link__xs") {
      menuIsOpen = "";
    }

    // Animation configuration
    if (count === "vehicle-link" || count === "vehicle-link__xs") {
      setTimeout(function () {
        vehicleOpen();
      }, 400);
    } else {
      vehicleClose();
    }
    if (count === "shopping-link") {
      setTimeout(function () {
        openContent("shopping", "animate__slideInDown");
      }, 400);
    } else {
      closeContent("shopping", "animate__slideOutUp");
    }
    if (count === "owners") {
      setTimeout(function () {
        openContent("owner", "animate__slideInDown");
      }, 400);
    } else {
      closeContent("owner", "animate__slideOutUp");
    }
    if (count === "discover") {
      setTimeout(function () {
        openContent("discover", "animate__slideInDown");
      }, 400);
    } else {
      closeContent("discover", "animate__slideOutUp");
    }
    if (count === "search") {
      setTimeout(function () {
        openContent("search", "animate__fadeInUp");
      }, 400);
    } else {
      closeContent("search", "animate__fadeOutDown");
    }
  }
});

/* Toggle button XS-SM screen */
$(".navbar-toggler__config").on("click", function () {
  var menu = $("#navbar-menu");
  if (menuIsOpen === "") {
    openMenuXs(menu);
    menuIsOpen = $(this).attr("id");
  } else if (menuIsOpen === $(this).attr("id")) {
    closeMenuXs(menu);
    menuIsOpen = "";
  }

  if ($("#vehicle-link__xs").hasClass("active")) {
    vehicleClose();
    $("#vehicle-link__xs").removeClass("active");
    count = "";
  }
});

/* McustomScrollBar */
$("#vehicle__list").mCustomScrollbar({
  theme: "dark-3",
});

$(".vehicle__navbar ul li a").on("click", function () {
  move($(this).attr("href"));
  $(".vehicle__navbar ul li a").removeClass("active");
  $(this).addClass("active");
});

/* Anchor link highlight when scrolling */
$("#vehicle__list .row").on("wheel", function () {
  $(".target").each(function () {
    if (
      ($("#vehicle__list .row").offset().top - 173) * -1 >=
      $(this).position().top - 500
    ) {
      var id = $(this).attr("id");
      $(".vehicle__navbar ul li a").removeClass("active");
      $(".vehicle__navbar ul li a[href='#" + id + "']").addClass("active");
    }
  });
});

clickOutToHide("#shopping-link", ".shopping__dropdown", "shopping--hide");

clickOutToHide("#owners", ".owner__dropdown", "owner--hide");

clickOutToHide("#discover", ".discover__dropdown", "discover--hide");

clickOutToHide("#search", ".search__dropdown", "search--hide");

// Close button
$(".vehicle__content--close").on("click", function () {
  vehicleClose();
  $("#vehicle-link").removeClass("active");
  count = "";
});

// Add animation for vehicle's item
$(".vehicle__item").addClass("animate__animated animate__fadeInUp");

/* Toggle vehicle product */
toggleVehicleProduct();
$(window).on("resize", function () {
  toggleVehicleProduct();
});

/* Open/close vehicle product collapse */
// $(".vehicle__product__title").on("click", function () {
//   var id = $(this).attr("id");
//   $(this).toggleClass("active");
//   if (
//     !$("#" + id + "Product" + ".vehicle__product--collapse").hasClass("show")
//   ) {
//     $("#" + id + " .product__title__icon").html('<i class="fa fa-minus"></i>');
//   } else {
//     $("#" + id + " .product__title__icon").html('<i class="fa fa-plus"></i>');
//   }
// });

/* XS-SM screen */
$("#shopping-link__xs").on("click", function () {
  sidebarOpen("shopping");
});
$("#shopping__sidebar__close").on("click", function () {
  sidebarClose("shopping");
});

$("#owner-link__xs").on("click", function () {
  sidebarOpen("owner");
});
$("#owner__sidebar__close").on("click", function () {
  sidebarClose("owner");
});

$("#discover-link__xs").on("click", function () {
  sidebarOpen("discover");
});
$("#discover__sidebar__close").on("click", function () {
  sidebarClose("discover");
});

/* Swiper configuration */
var mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Our vehicles Carousel
$("#vehicle__slider .carousel-control-prev").on("click", function () {
  $("#vehicle__slider__navbar .carousel-control-prev").click();
});
$("#vehicle__slider .carousel-control-next").on("click", function () {
  $("#vehicle__slider__navbar .carousel-control-next").click();
});

// Footer menu
function collapse() {
  var width = $(window).width();
  if (width >= 768) {
    $(".footer__link").removeClass("collapse");
  } else {
    $(".footer__link").addClass("collapse");
  }
}

$(document).ready(function () {
  collapse();
});

$(window).on("resize", function () {
  collapse();
});

/* Back to top */
$(".back-to-top").on("click", function () {
  $("body,html").animate({ scrollTop: 0 }, 1000, "linear");
});
