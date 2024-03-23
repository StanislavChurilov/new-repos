$(document).ready(function () {
    $('.vacancy__switch_button').click(function (e) { 
        $(this).addClass('active').siblings().removeClass('active');
        $('.vacancy__statistics_view').removeClass('view_active');
        $('.vacancy__statistics_view').eq($(this).data('tab')).addClass('view_active');
    });
});