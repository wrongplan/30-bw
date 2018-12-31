// hamburger menu
//chcę mieć fukncję która na kliknięcie w burgera doda do niego klasę active

$(".logoAndNav__burger").on("click", function(){
  console.log("działa");
  $(".logoAndNav__burger").toggleClass("active");
  
})

// read more
/* funkcja ma działać po kliknięciu w p.readMore, po kliknięciu ma pobrać DATA-NAME i i do data-paragraph dodać toggle
*/
$("p.readMore").on("click", function(){
  const about = "[data-paragraph=" + $(this).attr("data-about") + "]";
  const info = "[data-paragraphInfo=" + $(this).attr("data-info") + "]";
 
  $(about).toggleClass("ReadMore");
  console.log(about)
  $(info).toggleClass("ReadMore");
  console.log(info)

  
  // console.log(info)
})

// slide section
// napisać funkcję która zna bierzącą wysokość scrolltop, jeżeli scrolltop > wysokość sekcji + jej przesunięcie od góry (offset) - wysokość window to dodać klasę



function slideFunction(){

  const scrollPosition = $(window).scrollTop();
  const bodyHeight = $(window).outerHeight();
  
  const sekAboutHeight = $(".about__wrapper").outerHeight();
  const sekAboutOffset = $(".about__wrapper").offset().top;
  
  const sekInfoHeight = $(".info__wrapper").outerHeight();
  const sekInfoOffset = $(".info__wrapper").offset().top;
  
  

  if(scrollPosition > sekAboutHeight/4 + sekAboutOffset - bodyHeight ){
    $(".about__wrapper").addClass("active");
  }
  else{
    $(".about__wrapper").removeClass("active");
  }

if(scrollPosition > sekInfoHeight/4 + sekInfoOffset - bodyHeight ){
  $(".info__wrapper").addClass("active");
}
else{
  $(".info__wrapper").removeClass("active");
}
}

$(window).on("scroll", slideFunction);