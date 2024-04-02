$(document).ready(function () {

    function dropL() {
        $('.droplist__selected').click(function (e) {
            let cross = $( ".droplist__icon_cross" ); 
            
            if ( !cross.is(e.target) 
                && cross.has(e.target).length === 0 ) { 
                    $(this).closest('.droplist').toggleClass('droplist_active');
                    return false
            }
    
        });
        $('.droplist__item').click(function () {
    
            let currentVal = $(this).text();
    
            if($(this).closest('.droplist').hasClass('droplist__select') || $(this).closest('.droplist').hasClass('droplist__check')) {
                $(this).closest('.droplist').find('.droplist__result').addClass('droplist__result_active');
            }
           
           if($(this).closest('.droplist').hasClass('droplist__select')) {
            $(this).closest('.droplist').find('.droplist__result').children('.droplist__result_text').text(currentVal);
           }
    
           if($(this).closest('.droplist').hasClass('droplist__check')) {
    
            $(this).closest('.droplist').find('.droplist__result').addClass();
            let currentValChecked = $('.droplist__check .check:checked').map(function () {
                return $(this).val();
            }).get().join(', ');
            $(this).closest('.droplist').find('.droplist__result').children('.droplist__result_text').text(currentValChecked);
    
            if (currentValChecked == 0) {
                $(this).closest('.droplist').find('.droplist__result').removeClass('droplist__result_active');
                $(this).closest('.droplist').find('.droplist__result_text').text('Выберите несколько вариантов');
                $(this).closest('.droplist').find('.droplist__result').removeClass('droplist__result_max');
            }
            else {
                $(this).closest('.droplist').find('.droplist__result').addClass('droplist__result_max');
            }
            
           }
            
            $(this).addClass('droplist__item_active').siblings().removeClass('droplist__item_active');
            
        });
        $('.droplist__icon_cross').click(function () { 
            $(this).closest('.droplist__result').removeClass('droplist__result_active');
            $(this).closest('.droplist').find('.droplist__item').removeClass('droplist__item_active');
            $(this).closest('.droplist').find('.droplist__field').val('');
            if($(this).closest('.droplist').hasClass('droplist__select')) {
                $(this).closest('.droplist').find('.droplist__result_text').text('Выберите 1 вариант');
            }
            if($(this).closest('.droplist').hasClass('droplist__fields')) {
                $(this).closest('.droplist').find('.droplist__result_text').text('Заработная плата');
            }
        });
    
        $('.droplist__field').keyup(function () {
            let currentFromVal = $('.droplist__field_from').val();
            let currentToVal = $('.droplist__field_to').val();
            let fromValResult = 'от ' + currentFromVal.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
            let toValResult = ' до ' + currentToVal.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
            $(this).closest('.droplist').find('.droplist__result').show();
            $(this).closest('.droplist').find('.droplist__result').children('.droplist__result_text').text('');
            if($('.droplist__field_from').val() !== '') {
                $(this).closest('.droplist').find('.droplist__result').addClass('droplist__result_active');
                $(this).closest('.droplist').find('.droplist__result').children('.droplist__result_text').text(fromValResult);
            }
            if($('.droplist__field_to').val()  !== '') {
                $(this).closest('.droplist').find('.droplist__result').addClass('droplist__result_active');
                $(this).closest('.droplist').find('.droplist__result').children('.droplist__result_text').text(toValResult);
            }
            if($('.droplist__field_from').val() !== '' && $('.droplist__field_to').val()  !== '') {
                $(this).closest('.droplist').find('.droplist__result').addClass('droplist__result_active');
                $(this).closest('.droplist').find('.droplist__result').children('.droplist__result_text').text(fromValResult + toValResult);
            }
            if($('.droplist__field').val() == '') {
                $(this).closest('.droplist').children('.droplist__result').removeClass('droplist__result_active');
            }
            
        });
        
        $('.cabinet__popup').mouseup(function (e) {
            let drop = $( ".droplist" );
            if (drop.has(e.target).length === 0){
                drop.removeClass('droplist_active');
            }
        });
    }

   

    let vacancyBox = 
    `<div class="field__box">
    <p class="field__name_popup">Вакансии Jobers</p>
    <div class="droplist droplist__select">
        <div class="form__list" action="">
            <div class="droplist__selected item droplist__result item"><span class="droplist__result_text">Выберите вариант</span> <span class="droplist__icon droplist__icon_cross"></span>
                <svg class="droplist__icon droplist__icon_arrow" width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.222 2.34695L7.59695 7.97195C7.51857 8.05061 7.42542 8.11303 7.32286 8.15561C7.2203 8.1982 7.11035 8.22012 6.9993 8.22012C6.88825 8.22012 6.77829 8.1982 6.67573 8.15561C6.57317 8.11303 6.48003 8.05061 6.40164 7.97195L0.776641 2.34695C0.618132 2.18845 0.529083 1.97346 0.529083 1.7493C0.529083 1.52513 0.618132 1.31015 0.776641 1.15164C0.935149 0.993133 1.15013 0.904085 1.3743 0.904085C1.59846 0.904085 1.81344 0.993133 1.97195 1.15164L7 6.17969L12.028 1.15094C12.1866 0.992431 12.4015 0.903381 12.6257 0.903381C12.8499 0.903381 13.0648 0.992431 13.2234 1.15094C13.3819 1.30945 13.4709 1.52443 13.4709 1.7486C13.4709 1.97276 13.3819 2.18774 13.2234 2.34625L13.222 2.34695Z" fill="#9098B4"/>
                </svg>
            </div>
            <ul class="droplist__items">
                <li class="droplist__item">Менеджер по продажам (ID 424)</li>
                <li class="droplist__item">Повар в цех (ID 4232)</li>
            </ul>
        </div>
    </div>
</div>
<div class="field__box">
    <p class="field__name_popup">Воронка/Статус</p>
    <div class="droplist droplist__select">
        <div class="form__list" action="">
            <div class="droplist__selected item droplist__result item"><span class="droplist__result_text">Выберите вариант</span> <span class="droplist__icon droplist__icon_cross"></span>
                <svg class="droplist__icon droplist__icon_arrow" width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.222 2.34695L7.59695 7.97195C7.51857 8.05061 7.42542 8.11303 7.32286 8.15561C7.2203 8.1982 7.11035 8.22012 6.9993 8.22012C6.88825 8.22012 6.77829 8.1982 6.67573 8.15561C6.57317 8.11303 6.48003 8.05061 6.40164 7.97195L0.776641 2.34695C0.618132 2.18845 0.529083 1.97346 0.529083 1.7493C0.529083 1.52513 0.618132 1.31015 0.776641 1.15164C0.935149 0.993133 1.15013 0.904085 1.3743 0.904085C1.59846 0.904085 1.81344 0.993133 1.97195 1.15164L7 6.17969L12.028 1.15094C12.1866 0.992431 12.4015 0.903381 12.6257 0.903381C12.8499 0.903381 13.0648 0.992431 13.2234 1.15094C13.3819 1.30945 13.4709 1.52443 13.4709 1.7486C13.4709 1.97276 13.3819 2.18774 13.2234 2.34625L13.222 2.34695Z" fill="#9098B4"/>
                </svg>
            </div>
            <ul class="droplist__items">
                <li class="droplist__item">Воронка</li>
                <li class="droplist__item">ВПО: ВЗЯТО В РАБОТУ</li>
            </ul>
        </div>
    </div>
</div>`

    $('.cabinet__tab_button').click(function () { 
        $(this).addClass('active').siblings().removeClass('active');
        $('.cabinet__tab').removeClass('active');
        $('.cabinet__tab').eq($(this).data('btn')).addClass('active');
    });
    $('.close__popup, .cabinet__popup__cancel').click(function () { 
        $('.cabinet__popup').hide();
        $('.overlay').hide();
        $('.close__popup').hide();
    });
    $('.overlay').click(function (e) { 
        $(this).hide();
        $('.close__popup').hide();
        $('.cabinet__popup').hide();
    });
    $('.show__popup').click(function () {
        
        if($(this).data('popup') == 'new__manager') {
            $('.cabinet__popup_manager_add').show();
        }
        if($(this).data('popup') == 'edit__manager') {
            $('.cabinet__popup_manager_edit').show();
        }
        if($(this).data('popup') == 'delete__manager') {
            $('.cabinet__popup_manager_delete').show();
        }
        if($(this).data('popup') == 'password__save') {
            $('.cabinet__popup_password_save').show();
        }
        if($(this).data('popup') == 'profile__edit') {
            $('.cabinet__popup_profile_edit').show();
        }
        if($(this).data('popup') == 'crm__bitrix') {
            $('.cabinet__popup_crm_bitrix').show();
        }
        if($(this).data('popup') == 'crm__amo') {
            $('.cabinet__popup_crm_amo').show();
        }
        if($(this).data('popup') == 'crm__potok') {
            $('.cabinet__popup_crm_potok').show();
        }
        if($(this).data('popup') == 'newtemplate_email') {
            $('.cabinet__popup_newtemplate_email').show();
        }
        if($(this).data('popup') == 'edittemplate_email') {
            $('.cabinet__popup_edittemplate_email').show();
        }
        if($(this).data('popup') == 'delete__template') {
            $('.cabinet__popup').hide();
            $('.cabinet__popup_template_delete').show();
        }
        $('.overlay').show();
        $('.close__popup').show();  
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

    $('.add__vacancy').click(function (e) { 
        $(this).parent('.fileld__box_addvacancy').prepend(vacancyBox);
        dropL();
    });

    if($(window).width() <= 480) {
        $('.manager__nav_button svg').click(function (e) { 
                $(this).parent('.manager__nav_button').addClass('active');
        });
        $('.mob__close_nav').click(function (e) {
            $(this).closest('.manager__nav_button').removeClass('active'); 
        });
    }

    $('.cabinet__popup_textarea').click(function (e) { 
        if($(this).val().length > 0) {
            $(this).addClass('background__blue');
        }
        else {
            $(this).removeClass('background__blue');
        }
    });

    $('.cabinet__popup_textarea').keyup(function (e) { 
        if($(this).val().length > 0) {
            $(this).addClass('background__blue');
        }
        else {
            $(this).removeClass('background__blue');
        }
        
    });
    
    dropL();
    
});