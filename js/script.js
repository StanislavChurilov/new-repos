$(document).ready(function () {

    $('.close__popup, .close__popup_inner svg, .cabinet__popup__cancel').click(function () { 
        $('.cabinet__popup').hide();
        $('.overlay').hide();
        $('.close__popup').hide();
    });
    $('.overlay').click(function (e) { 
        $(this).hide();
        $('.close__popup').hide();
        $('.cabinet__popup').hide();
        $('.manager__nav_button').removeClass('active');
    });
    $('.show__popup').click(function () {
        $('.manager__nav_button').removeClass('active');
        
        if($(this).data('popup') == 'new__company') {
            $('.cabinet__popup_company_add').show();
        }
        if($(this).data('popup') == 'edit__company') {
            $('.cabinet__popup_company_edit').show();
        }
        if($(this).data('popup') == 'delete__company') {
            $('.cabinet__popup').hide();
            $('.cabinet__popup_company_delete').show();
        }
        $('.overlay').show();
        $('.close__popup').show();
    });
    $('.switch__button').click(function () { 
        $(this).toggleClass('active');  
    });
    
});