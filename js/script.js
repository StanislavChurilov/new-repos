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

   

    $('.cabinet__tab_button').click(function () { 
        $(this).addClass('active').siblings().removeClass('active');
        $('.cabinet__tab').removeClass('active');
        $('.cabinet__tab').eq($(this).data('btn')).addClass('active');
    });
   
    $('.switch__button').click(function () { 
        $(this).toggleClass('active');  
    });
    $('.file__image').change(function (event) {
        $(".profile__img").attr('src',URL.createObjectURL(event.target.files[0]));
        $('.load__profile_image').hide();
        $('.delete__profile_image').show();
    });
    $('.delete__profile_image').click(function (event) {
        $(".profile__img").attr('src', 'img/no-image150.png');
        $('.load__profile_image').show();
        $('.delete__profile_image').hide();
        $('.file__image').val('');
    });
    if($(window).width() <= 768) {
        $('.cabinet__tab_profile .field__search').attr('placeholder', 'Найти обращения');
    }

    if($(window).width() <= 480) {
        $('.manager__nav_button svg').click(function (e) { 
                $(this).parent('.manager__nav_button').addClass('active');
                $('.overlay').show();
        });
        $('.mob__close_nav').click(function (e) {
            $(this).closest('.manager__nav_button').removeClass('active');
            $('.overlay').hide();
        });
    }

    $('.button__create_request').click(function (e) { 
        $('.cabinet__support').fadeOut();
        $('.cabinet__new_requests').fadeIn();  
    });
    $('.request__button_back').click(function (e) {
        e.preventDefault();
        $('.cabinet__support').fadeIn();
        $('.cabinet__new_requests').fadeOut();
        if($(this).closest('.cabinet__current_requests')) {
            $('.cabinet__support').fadeIn();
            $('.cabinet__current_requests').fadeOut();
        }
        if($(this).closest('.cabinet__new_requests')) {
            $('.cabinet__support').fadeIn();
            $('.cabinet__new_requests').fadeOut();
        }
    });

    $('.button__nav_option_request').click(function (e) { 
        $(this).children('.nav__request').fadeToggle();
    });

    $('.file__image_add').change(function (event) { 
        // alert($(this)[0].files[0].name);
        $(this).closest('.chat__panel').find('.file__accept_name').text($(this)[0].files[0].name);
        $(this).closest('.chat__panel').find('.file__accept_name').attr('href', '../img/' + $(this)[0].files[0].name);
    });

    function getUserImage() {
        messageText = $('.enter__message').val();
        image = $('.chat__panel .file__accept_name').attr('href');
        imageName = $('.chat__panel .file__accept_name').text();

        let messageTemplateAnswer = 
        `
        <div class="chat__message chat__message_type02">
            <div class="chat__user_image"><img src="img/user-male.png" alt=""></div>
            <div class="chat__user_name_text">
                <p class="text__sm chat__user_name">Анатолий Горилов</p>
                <p class="text__sm chat__user_message">${messageText}</p>
                <a href="${image}" class="file__accept_name file__accept_image_open cabinet__link">${imageName}</a>
            </div>
            <div class="text__sm cabinet__text_disabled chat__message_time">14:55</div>
        </div>
        `
        if(messageText !== '' || image !== '') {
            $('.chat__area').append(messageTemplateAnswer);
        }
        else {
            alert('Введите сообщение или выберите картику')
        }
        popupImageOpen();
    }

    function resetImageFileValueText() {
        messageText = $('.enter__message').val('');
        // image = $('.button__nav_option_request .file__accept_name').attr('href', '');
        // imageName = $('.button__nav_option_request .file__accept_name').text('');
        $('.file__image_add').val(null);
        $('.enter__message').val('');
    }

    $('.submit__message').click(function (e) { 
        e.preventDefault();
        getUserImage();
        
        $(this).siblings('.file__accept_name').attr('href', '');
        $(this).siblings('.file__accept_name').text('');
        
        resetImageFileValueText();
        
        $('.chat__area').animate({ scrollTop: $('.chat__area').prop("scrollHeight")}, 700);
        
        console.log($('.file__image_add').val());
        
    });
    function popupImageOpen() {
        $('.file__accept_image_open').click(function (e) { 
            e.preventDefault();
            $('.popup__image img').attr('src', 'img/' + $(this).text());
            $('.popup__image').fadeIn();
            $('.popup__image_button_download').children('a').attr('href', 'img/' + $(this).text());
            $('.overlay').show();
        });
    }
    popupImageOpen();
    

    $('.current__requerst_open').click(function (e) { 
        e.preventDefault();
        $('.cabinet__support').fadeOut();
        $('.cabinet__current_requests').fadeIn();  
    });

    $('.popup__image_button_close').click(function (e) { 
        $(this).closest('.popup__image').fadeOut();
        $('.overlay').hide();
    });

    $('.show__more_question').click(function () {
        $(this).siblings('.cabinet__block_questions').toggleClass('show');
        if($(this).siblings('.cabinet__block_questions').hasClass('show')) {
            $(this).text('Скрыть');
        }
        else {
            $(this).text('Показать еще');
        }
        
    });

    

    
    dropL();

    $('.droplist__select_status_mob .droplist__item').click(function (e) { 
        let currentDataValue = $(this).data('item');
        console.log(currentDataValue);
        $(this).closest('.droplist__select_status_mob').find('.droplist__result_text').text(currentDataValue);
        $(this).parent('.droplist__items').fadeOut();
        $(this).closest('.droplist__select_status_mob').removeClass('droplist_active');
    });
    
});