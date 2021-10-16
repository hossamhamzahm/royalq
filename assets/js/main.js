(function($){
    
    "use strict";
    
    //===== Prealoder
    
    $(window).on('load', function(event) {
        $('.preloader').delay(500).fadeOut(500);
    });
    
    
    //===== Mobile Menu 
    
    $(".navbar-toggler").on('click', function() {
        $(this).toggleClass('active');
    });
    
    $(".navbar-nav a").on('click', function() {
        $(".navbar-toggler").removeClass('active');
    });
    
    
    //===== close navbar-collapse when a  clicked
    
    $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });
    
    
    //===== Sticky
    
    $(window).on('scroll', function(event) {    
        var scroll = $(window).scrollTop();
        if (scroll < 10) {
            $(".navigation").removeClass("sticky");
        } else{
            $(".navigation").addClass("sticky");
        }
    });
    
    
    //===== Section Menu Active

    var scrollLink = $('.page-scroll');
        // Active link switching
        $(window).scroll(function() {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function() {

          var sectionOffset = $(this.hash).offset().top - 73;

          if ( sectionOffset <= scrollbarLocation ) {
            $(this).parent().addClass('active');
            $(this).parent().siblings().removeClass('active');
          }
        });
    });
    
    
    //===== Progress Bar
    
    if($('.progress-line').length){
        $('.progress-line').appear(function(){
            var el = $(this);
            var percent = el.data('width');
            $(el).css('width',percent+'%');
        },{accY: 0});
    }
    
    
    //===== Counter Up
    
    $('.counter').counterUp({
        delay: 10,
        time: 1600,
    });
    
    
    //===== Magnific Popup
    
    $('.image-popup').magnificPopup({
      type: 'image',
      gallery:{
        enabled:true
      }
    });
    
    
    //===== Back to top
    
    // Show or hide the sticky footer button
    $(window).on('scroll', function(event) {
        if($(this).scrollTop() > 600){
            $('.back-to-top').fadeIn(200)
        } else{
            $('.back-to-top').fadeOut(200)
        }
    });
    
    
    //Animate the scroll to yop
    $('.back-to-top').on('click', function(event) {
        event.preventDefault();
        
        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });
    

    
    // Example starter JavaScript for disabling form submissions if there are invalid fields
    (function () {
        'use strict';
        window.addEventListener('load', function () {
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.getElementsByClassName('needs-validation');
            // Loop over them and prevent submission
            var validation = Array.prototype.filter.call(forms, function (form) {
                form.addEventListener('submit', function (event) {
                    if (form.checkValidity() === false) {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                    form.classList.add('was-validated');
                    checkCountry(event)
                }, false);
            });
        }, false);
    })();
    

    function checkCountry(e){
        let country = document.getElementsByClassName('btn-select')[0];
        let valid = country.nextElementSibling.nextElementSibling;
        let invalid = country.nextElementSibling.nextElementSibling.nextElementSibling;
        if(country.value === ""){
            e.preventDefault()
            if(!invalid.classList.contains('d-block')){
                invalid.classList.add('d-block');
                invalid.classList.remove('d-none'); 
                valid.classList.remove('d-block');
                valid.classList.add('d-none');
            }
        }
        else{
            if (!valid.classList.contains('d-block')) {
                invalid.classList.remove('d-block');
                invalid.classList.add('d-none');
                valid.classList.add('d-block');
                valid.classList.remove('d-none');
            }
        }
    }

    document.querySelector('.btn-select').addEventListener('click', checkCountry);
    document.getElementById('a').addEventListener('click', checkCountry);


    document.addEventListener('keydown', (e)=>{
        if(e.key == "Escape"){
            document.querySelector('.b').style.display = "none";
        }
    })


    document.addEventListener('click', (e) => {
        document.querySelector('.b').style.display = "none";
    })

    document.querySelector('.btn-select').addEventListener('click', (e) => {
        e.stopPropagation()
    })
    
}(jQuery));