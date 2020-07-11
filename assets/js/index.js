$("ul").click(function() 
{
  $("#list-menu-mobile").each(function() 
  {
    console.log('Congrats!!!');
    $('.HalamanPenuhMenu').removeClass('active');
    window.onscroll=function(){};
  });
});

$(document).scroll(function() 
{
  var y = $(this).scrollTop();
  if (y > 500) 
  {
    $('.btn-portofolio-dl').fadeIn();
  } 
  else 
  {
    $('.btn-portofolio-dl').fadeOut();
  }
});

$(document).scroll(function() 
{
  var y = $(this).scrollTop();
  if (y > 100) 
  {
    $('#fixed-btn-navbar').addClass('active');
    $('#btn-vert-nav').addClass('active');
  } 
  else 
  {
    $('#fixed-btn-navbar').removeClass('active');
    $('#btn-vert-nav').removeClass('active');
  }
});



function menuToggle()
{
  var nav = document.getElementById('nav');
  var toggle = document.getElementById('toggle');
  var btn = document.getElementById('fixed-btn-navbar');

  if (nav.className == "HalamanPenuhMenu") 
  {
    nav.classList.add("active");
    toggle.classList.add("active");
    btn.classList.add("active");
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = function()
    {
      window.scrollTo(x, y);
    };
  }
  else
  {
    nav.classList.remove("active");
    btn.classList.remove("active");
    toggle.classList.remove("active");
    window.onscroll=function(){};
  }
}


//SCROLL ON ANIMATION (TRIGGER ANIMATION BY ADDING CLASS)
//(THE SHORTEST CODE EVER!)
$(window).scroll(function (e) 
{
      var top = $(window).scrollTop() + $(window).height();
      var isVisible = top > $('.end-section').offset().top;
      
      $('.end-section-pic').toggleClass('slideToLeft', isVisible);
      $('.salam-penutup').toggleClass('slideToRight', isVisible);
});

