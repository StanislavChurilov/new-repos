$(document).ready(function () {
    $('.droplist__selected').click(function () { 
        $(this).closest('.droplist').toggleClass('droplist_active');
    });
    $('.droplist__item').click(function () {

        let currentVal = $(this).text();
        
        $(this).closest('.droplist').children('.droplist__result').addClass('droplist__result_active');
        if($(this).closest('.droplist').hasClass('droplist__select') || $(this).closest('.droplist').hasClass('droplist__check')) {
            $(this).closest('.droplist').children('.droplist__result').addClass('droplist__result_active');
        }
       
       if($(this).closest('.droplist').hasClass('droplist__select')) {
        $(this).closest('.droplist').find('.droplist__result').children('.droplist__result_text').text(currentVal);
        $(this).closest('.droplist').find('.droplist__result').show();
       }

       if($(this).closest('.droplist').hasClass('droplist__check')) {
        $(this).closest('.droplist').find('.droplist__result').show();
        let currentValChecked = $('.check:checked').map(function () {
            return $(this).val();
        }).get().join(', ');
        $(this).closest('.droplist').find('.droplist__result').children('.droplist__result_text').text(currentValChecked);
        if (currentValChecked == 0) {
            $(this).closest('.droplist').find('.droplist__result').hide();
            $(this).closest('.droplist').find('.droplist__result').removeClass('droplist__result_active');
        }
        if($(this).closest('.droplist').find('.droplist__result_text').text().length > 40) {
            $(this).closest('.droplist').find('.droplist__result').addClass('droplist__result_max');
        }
        else {
            $(this).closest('.droplist').find('.droplist__result').removeClass('droplist__result_max');
        }
       }

       if($(this).closest('.droplist').hasClass('droplist__fields')) {
        
       }
        
        $(this).addClass('droplist__item_active').siblings().removeClass('droplist__item_active');
        
    });
    $('.droplist__icon_cross').click(function () { 
        $(this).closest('.droplist').find('.droplist__result').hide();
        $(this).closest('.droplist__result').removeClass('droplist__result_active');
        $(this).closest('.droplist').find('.droplist__item').removeClass('droplist__item_active');
        $(this).closest('.droplist').find('.droplist__field').val('');
    });

    $('.droplist__field').keyup(function () {
        let currentFromVal = $('.droplist__field_from').val();
        let currentToVal = $('.droplist__field_to').val();
        let fromValResult = 'от ' + currentFromVal.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        let toValResult = ' до ' + currentToVal.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        $(this).closest('.droplist').find('.droplist__result').show();
        $(this).closest('.droplist').find('.droplist__result').children('.droplist__result_text').text('');
        if($('.droplist__field_from').val()) {
            $(this).closest('.droplist').children('.droplist__result').addClass('droplist__result_active');
            $(this).closest('.droplist').find('.droplist__result').children('.droplist__result_text').text(fromValResult);
        }
        if($('.droplist__field_from').val()  !== '' && $('.droplist__field_to').val()  !== '') {
            $(this).closest('.droplist').children('.droplist__result').addClass('droplist__result_active');
            $(this).closest('.droplist').find('.droplist__result').children('.droplist__result_text').text(fromValResult + toValResult);
        }
        if($('.droplist__field').val() == '') {
            $(this).closest('.droplist').children('.droplist__result').removeClass('droplist__result_active');
            $(this).closest('.droplist').find('.droplist__result').hide();
        }
        
    });
    // $('.droplist__item_hide').click(function () {
    //    if($(this).children('.check').is(':checked')) {
    //     $(this).siblings('.droplist__item').fadeOut();
    //     $(this).closest('.droplist').find('.droplist__result').fadeOut();
    //    }
    //    else {
    //     $(this).siblings('.droplist__item').fadeIn();
    //     $(this).closest('.droplist').find('.droplist__result').fadeIn();
    //    }  
    // });
    
    $('.wrapper').click(function (e) { 
        if ($(".droplist").has(e.target).length === 0){
            $(".droplist").removeClass('droplist_active');
        }
    });
    $('.droplist__icon_toggle').click(function (e) { 
        $(this).parent('.droplist__result').toggleClass('droplist__toggle');
    });
});