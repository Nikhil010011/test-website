$(function() {
    var pages = ['index', 'about', 'contact'];
    var pathname = window.location.pathname;
    console.log('pathname:', pathname);
    $('.nav-link').each(function(i) {
        console.log('i:', i);
        if(pathname.includes(pages[i])) {
            $(this).addClass('active');
            $(this).attr('aria-current', 'page')
        }
        else if(this.className.includes('active')) {
            $(this).removeClass('active');
        }
    });
});