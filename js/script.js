$(document).ready(function () {
    function dropL() {
        let startText;
        let messageText;
        let image;

    $('.droplist__selected').click(function (e) {
        $('.droplist').not($(this).closest('.droplist')).removeClass('droplist_active');
        let cross = $( ".droplist__icon_cross" ); 
        
        if ( !cross.is(e.target) 
		    && cross.has(e.target).length === 0 ) { 
                $(this).closest('.droplist').toggleClass('droplist_active');
		}
        
    });
    $('.droplist__item').click(function () {
        startText = $(this).closest('.droplist').find('.droplist__result_text').data('start');
        console.log(startText);
        let currentVal = $(this).text();

        if($(this).closest('.droplist').hasClass('droplist__select') || $(this).closest('.droplist').hasClass('droplist__check')) {
            $(this).closest('.droplist').find('.droplist__result').addClass('droplist__result_active');
        }
       
       if($(this).closest('.droplist').hasClass('droplist__select')) {
        $(this).closest('.droplist').find('.droplist__result').children('.droplist__result_text').text(currentVal);
       }

       if($(this).closest('.droplist').hasClass('droplist__check')) {

        $(this).closest('.droplist').find('.droplist__result').addClass();
        let currentValChecked = $(this).closest('.droplist').find('.check:checked').map(function () {
            return $(this).val();
        }).get().join(', ');
        $(this).closest('.droplist').find('.droplist__result').children('.droplist__result_text').text(currentValChecked);

        if (currentValChecked == 0) {
            $(this).closest('.droplist').find('.droplist__result').removeClass('droplist__result_active');
            $(this).closest('.droplist').find('.droplist__result_text').text(startText);
            $(this).closest('.droplist').find('.droplist__result').removeClass('droplist__result_max');
        }
        else {
            $(this).closest('.droplist').find('.droplist__result').addClass('droplist__result_max');
        }
        
       }
        
        $(this).addClass('droplist__item_active').siblings().removeClass('droplist__item_active');
        
    });
    $('.droplist__icon_cross').click(function () { 
        startText = $(this).closest('.droplist').find('.droplist__result_text').data('start');
        $(this).closest('.droplist__result').removeClass('droplist__result_active');
        $(this).closest('.droplist').find('.droplist__item').removeClass('droplist__item_active');
        $(this).closest('.droplist').find('.droplist__field').val('');
        if($(this).closest('.droplist').hasClass('droplist__select')) {
            $(this).closest('.droplist').find('.droplist__result_text').text(startText);
        }
        if($(this).closest('.droplist').hasClass('droplist__fields')) {
            $(this).closest('.droplist').find('.droplist__result_text').text(startText);
        }
    });

    $('.droplist__field').keyup(function () {
        let currentFromVal = $(this).closest('.droplist').find('.droplist__field_from').val();
        let currentToVal = $(this).closest('.droplist').find('.droplist__field_to').val();
        let fromValResult = 'от ' + currentFromVal.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        let toValResult = ' до ' + currentToVal.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        $(this).closest('.droplist').find('.droplist__result').show();
        $(this).closest('.droplist').find('.droplist__result').children('.droplist__result_text').text('');

        if(currentFromVal !== '' && currentToVal  == '') {
            $(this).closest('.droplist').find('.droplist__result').addClass('droplist__result_active');
            $(this).closest('.droplist').find('.droplist__result').children('.droplist__result_text').text(fromValResult);
        }
        if(currentToVal  !== '' && currentFromVal == '') {
            $(this).closest('.droplist').find('.droplist__result').addClass('droplist__result_active');
            $(this).closest('.droplist').find('.droplist__result').children('.droplist__result_text').text(toValResult);
        }
        if(currentFromVal !== '' && currentToVal  !== '') {
            $(this).closest('.droplist').find('.droplist__result').addClass('droplist__result_active');
            $(this).closest('.droplist').find('.droplist__result').children('.droplist__result_text').text(fromValResult + toValResult);
        }
        if(currentFromVal == '' && currentToVal == '') {
            $(this).closest('.droplist').find('.droplist__result').removeClass('droplist__result_active');
            $(this).closest('.droplist').find('.droplist__result_text').text(startText);
        }
        
    });
     // Использовать если списки в простом блоке
     $('.wrapper').mouseup(function (e) {
        let drop = $( ".droplist" );
        if (drop.has(e.target).length === 0){
            drop.removeClass('droplist_active');
        }
    });
    }

    $('.button__buy_services').click(function (e) { 
        e.preventDefault();
        $('.cabinet__buy_services').fadeOut();
        $('.cabinet__buy_order').fadeIn();
    });

    $('.buy_order__button_back').click(function (e) { 
        e.preventDefault();
        $('.cabinet__buy_order').fadeOut();
        $('.cabinet__buy_services').fadeIn();
    });

    $('.button__show_more').click(function (e) { 
        e.preventDefault();
        $(this).closest('.cabinet__block').find('.cabinet__box_hidden').removeClass('cabinet__box_hidden');
        $(this).closest('.cabinet__block').find('.cabinet__box_hidden_mob').removeClass('cabinet__box_hidden_mob');
    });

    $('.buy__cart_circle').click(function (e) { 
        e.preventDefault();
        $('.buy__services_column_r').fadeIn();
    });
    if($(window).width() > 480) {
       
        $('.cart__button_back').click(function (e) { 
            e.preventDefault();
            $(this).closest('.buy__services_column_r').fadeOut();
            $('.buy__cart_circle_fixed').fadeIn();
        });
    }
    $('.button__c_addcart').click(function (e) { 
        e.preventDefault();
        $(this).find('.buy__cart_circle').fadeIn(400);
        $(this).find('.buy__cart_circle:not(.buy__cart_circle_fixed)').css('display', 'flex');
        $('.button__c_addcart').css('zIndex', '0');
    });
    

    dropL();
   
});