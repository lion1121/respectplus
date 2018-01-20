$(document).ready(function () {
    $('.admin_list_link').click(function () {
        $('.admin_submenu').css('display','none');
        $(this).next().toggleClass('show');
        $(this).toggleClass('current')
    });
});