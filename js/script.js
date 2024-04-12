$(document).ready(function () {

    $('.vacancy__switch_button').click(function (e) { 
        $(this).addClass('active').siblings().removeClass('active');
        $('.graphic__tab').removeClass('active');
        $('.graphic__tab').eq($(this).data('tab')).addClass('active');
    });
    
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
                $(this).closest('.droplist').find('.droplist__result_text').text('Все вакансии');
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
        
        $('.container').mouseup(function (e) {
            let drop = $( ".droplist" );
            if (drop.has(e.target).length === 0){
                drop.removeClass('droplist_active');
            }
        });
    }

    dropL();

    let buttonYesterday = {
        content: 'Вчера',
        className: 'custom__button custom__button_yesterday',
        onClick: (dp) => {
            let date = new Date();
            dp.selectDate(date);
            dp.setViewDate(date);
        }
    }
    let buttonCurWeek = {
        content: 'Эта неделя',
        className: 'custom__button custom__button_week',
        onClick: (dp) => {
           
        }
    }
    let buttonLastWeek = {
        content: 'Прошлая неделя',
        className: 'custom__button custom__button_lastweek',
        onClick: (dp) => {
           
        }
    }
    let buttonLastYear = {
        content: 'Последний год',
        className: 'custom__button custom__button_lastyear',
        onClick: (dp) => {
           
        }
    }

    let datePicker = new AirDatepicker('.datepicker', {
        
        onSelect({date, formattedDate, datepicker}) {
            
           if (datePicker.selectedDates.length > 0) {
            $('.datepicker').addClass('active');
            $('.droplist__datepicker').addClass('active');
           }
           else {
            $('.datepicker').removeClass('active');
            $('.droplist__datepicker').removeClass('active');
           }
             
        },

        range: true,
        autoClose: true,
        multipleDatesSeparator: ' - ',
        buttons: ['today', buttonYesterday, buttonCurWeek, buttonLastWeek, buttonLastYear]
        // inline: true
        
    });

    $('.droplist__datepicker .droplist__icon_cross').click(function (e) {
        $('.datepicker').removeClass('active');
        $('.droplist__datepicker').removeClass('active');
        datePicker.clear();
    });

    $('.month__btn').click(function (e) {
        if($(this).hasClass('enabled')) {
            $(this).removeClass('enabled').siblings().addClass('enabled');
            
                $('.graphic__month').removeClass('active');
                // console.log($(this).data('month'))
                let currentBtn = $(this).data('month');
                
                $('.graphic__month').each(function (index, element) {
                    if($(element).hasClass(currentBtn)) {
                        $(element).addClass('active');
                    }
                });
                
                
            
        }
    });
    
    
});