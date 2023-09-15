// mengubah bentuk fa bars
$(document).ready(function () {
  $(".fa-bars").click(function () {
    $(this).toggleClass("fa-xmark");
    $(".navbar").toggleClass("nav-toggle");
  });
});

//menambahkan .header-active
$(window).on("scroll load", function () {
  $(".fa-bars").removeClass("fa-xmark");
  $(".navbar").removeClass("nav-toggle");

  if ($(window).scrollTop() > 30) {
    $("header").addClass("header-active");
  } else {
    $("header").removeClass("header-active");
  }

  //memindahkan .active
  $(document).ready(function () {
    $(window).scroll(function () {
      var offset = $(window).scrollTop();

      $("section").each(function () {
        var id = $(this).attr("id");
        var height = $(this).height();
        var sectionTop = $(this).offset().top - 200;
        var sectionBottom = sectionTop + height;

        if (offset >= sectionTop && offset < sectionBottom) {
          $(".navbar ul li a").removeClass("active");
          $(".navbar")
            .find('[href="#' + id + '"]')
            .addClass("active");
        }
      });
    });
  });

  // $("section").each(function () {
  //   var top = $(window).scrollTop();
  //   var id = $(this).attr("id");
  //   var height = $(this).height();
  //   var top = $(this).offset().top - 200;
  //   if (top >= offset && top < height + offset) {
  //     $(".navbar ul li a").removeClass("active");
  //     $(".navbar")
  //       .find('[href="#' + id + '"]')
  //       .addClass("active");
  //   }
  // });
});
