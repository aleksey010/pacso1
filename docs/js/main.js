jQuery(document).ready(function(){

    $('.lang').click(function(){
        $(this).find('.language-grop').toggleClass('toggle-ul');
        $(this).find('.two-li').toggleClass('visibility');
        $(this).find('.arrow-svg').toggleClass('active-arrow')
    });

    $('.slider-container').slick();

    $('.first-menu').click(function(){
        $(this).find(".drop-menu").toggleClass('show');
        $(this).find(".add").toggleClass('show');
        if($(this).find(".remove").css('display') == 'none'){
            $(this).find(".remove").css('display', 'block');
        } else {
            $(this).find(".remove").css('display', 'none');
        }
    });

    $('.header-burger').click(function(){
        $('.header-burger, .header-sm-menu').toggleClass('active-burger');
    });

});