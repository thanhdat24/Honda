/* Add animation for vehicle's content */
function vehicleOpen() {
  $("#vehicle").removeClass("vehicle--hide");
  $(".vehicle__navbar").addClass("animate__fadeInDown");
  $(".vehicle__content--close").addClass("animate__fadeInRight");

  if (window.innerWidth >= 768) {
    $("#vehicle__list").addClass("animate__fadeInUp");
  } else {
    $(".vehicle__product__title").attr("aria-expanded", "false");
    $("#vehicle__list").addClass("animate__slideInDown");

    if (!$("#navbar-menu").hasClass("navbar-collapse__config--hide")) {
      closeMenuXs($("#navbar-menu"));
      $.each($(".bar"), function (index, value) {
        $(".bar").removeClass("change");
      });
    }

    if ($(this).hasClass("active")) {
      $(".product__title__icon").html('<i class="fa fa-minus"></i>');
    } else {
      $(".product__title__icon").html('<i class="fa fa-plus"></i>');
    }
  }

  $(".vehicle__navbar ul li a").removeClass("active");
  $(".vehicle__navbar ul li a[href='#cars']").addClass("active");

  if ($(".vehicle__product--collapse").hasClass("show")) {
    $(".vehicle__product--collapse").removeClass("show");
  }
}
function vehicleClose() {
  $(".vehicle__navbar").addClass("animate__slideOutUp");
  $(".vehicle__content--close").addClass("animate__fadeOutRight");

  if (window.innerWidth >= 768) {
    $("#vehicle__list").removeClass("animate__slideInDown");
    $("#vehicle__list").addClass("animate__fadeOutDown");
  } else {
    $("#vehicle__list").removeClass("animate__fadeInUp");
    $("#vehicle__list").addClass("animate__slideOutUp");
  }

  setTimeout(function () {
    $("#vehicle").addClass("vehicle--hide");
    $(".vehicle__navbar").removeClass("animate__slideOutUp");
    $(".vehicle__content--close").removeClass("animate__fadeOutRight");
    if (window.innerWidth >= 768) {
      $("#vehicle__list").removeClass("animate__fadeOutDown");
    } else {
      $("#vehicle__list").removeClass("animate__slideOutUp");
    }
  }, 300);
}

/* Open-close dropdown menu */
function openContent(content, animation) {
  $("." + content + "__dropdown").removeClass(content + "--hide");
  $("." + content + "__dropdown").addClass(animation);
}
function closeContent(content, animation) {
  $("." + content + "__dropdown").addClass(animation);
  setTimeout(function () {
    $("." + content + "__dropdown").addClass(content + "--hide");
    $("." + content + "__dropdown").removeClass(animation);
  }, 300);
}

// Click outside to hide element
function checkCount(count) {
  var arr = $("#navbar a:not(.navbar-brand__config)");
  for (var i = 0; i < arr.length; i++) {
    if (count == arr[i].id || count == "search-icon") {
      return false;
    }
  }
  // $.each(arr, function (index, value) {
  //   if (count == value.id) {
  //     check = false;
  //   }
  // });
  return true;
}
function clickOutToHide(menuItem, target, targetHide) {
  $(document).on("click", function (e) {
    var container = $(target);
    var check =
      !container.is(e.target) &&
      e.target != $(menuItem)[0] &&
      !$(target).hasClass(targetHide) &&
      e.target.id != "search-area";
    if (check) {
      switch (menuItem) {
        case "#shopping-link": {
          closeContent("shopping", "animate__slideOutUp");
          break;
        }
        case "#owners": {
          closeContent("owner", "animate__slideOutUp");
          break;
        }
        case "#discover": {
          closeContent("discover", "animate__slideOutUp");
          break;
        }
        case "#search": {
          closeContent("search", "animate__fadeOutDown");
          break;
        }
        default: {
          break;
        }
      }
      $(menuItem).removeClass("active");
      count = e.target.id;
      if (checkCount(count)) {
        count = "";
      }
    }
  });
}

// Move to
function move(value) {
  $("#vehicle__list").mCustomScrollbar("scrollTo", value, {
    scrollEasing: "easeOut",
    timeout: 0,
  });
}

/* Toggle vehicle product */
function toggleVehicleProduct() {
  if (window.innerWidth >= 768) {
    if ($(".vehicle__product--collapse").hasClass("collapse")) {
      $(".vehicle__product--collapse").removeClass("collapse");
    }
  } else {
    if (!$(".vehicle__product--collapse").hasClass("collapse")) {
      $(".vehicle__product--collapse").addClass("collapse");
    }
  }
}

/* Open/Close menu */
function openMenuXs(menu) {
  sidebarClose("shopping");
  sidebarClose("owner");
  sidebarClose("discover");
  $.each($(".bar"), function (index, value) {
    $(".bar").addClass("change");
  });

  menu.addClass("animate__slideInRight");
  menu.removeClass("navbar-collapse__config--hide");
}
function closeMenuXs(menu) {
  $.each($(".bar"), function (index, value) {
    $(".bar").removeClass("change");
  });
  menu.addClass("animate__slideOutRight");

  setTimeout(function () {
    menu.addClass("navbar-collapse__config--hide");
    menu.removeClass("animate__slideOutRight");
  }, 300);
}

/* XS-SM sidebar toggle */
function sidebarOpen(sidebar) {
  $("." + sidebar + "__sidebar__xs").removeClass(sidebar + "__sidebar--hide");
  $("." + sidebar + "__sidebar__xs").addClass("animate__slideInRight");
}
function sidebarClose(sidebar) {
  $("." + sidebar + "__sidebar__xs").addClass("animate__slideOutRight");
  setTimeout(function () {
    $("." + sidebar + "__sidebar__xs").addClass(sidebar + "__sidebar--hide");
    $("." + sidebar + "__sidebar__xs").removeClass("animate__slideOutRight");
  }, 300);
  $("#" + sidebar + "-link__xs").removeClass("active");
}
