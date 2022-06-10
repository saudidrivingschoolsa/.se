$(function () {

        'use strict';

        // hidr placeholder on forn focus

        $('[placeholder]').focus(function () {

            $(this).attr('data-text', $(this).attr('placeholder'));

            $(this).attr('placeholder', '');

            }).blur(function () {

                $(this).attr('placeholder', $(this).attr('data-text'));
                
        });

        // add astrisk on reqiuerd field

       // $('input').each(function(){

         //       if ($(this).attr('required') === 'required') {

           //        $(this).after('<span class="asterisk">*</span>');     
             //   }
        // });

        // convert password field to text fileld on hover

        var passField = $('.passowrd')
        $('.show-pass').hover(function () {
           
          passField.attr('type', 'text');

        }, function () {
                passField.attr('type', 'password');
        });
        // change color
        $('td').each(function() {
       
        $(this).click(function() {
            $(this).removeClass().addClass('menuclick');
        }); 
    });


      $('.clsAlphaNoOnly').keypress(function (e) {  // Accept only alpha numerics, no special characters 
            var regex = new RegExp("^[a-zA-Z0-9 ]+$");
            var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
            if (regex.test(str)) {
                return true;
            }
    
            e.preventDefault();
            return false;
        }); 

});