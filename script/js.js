
$('form button').on('click',function(e){
    e.preventDefault();
    var form = $('[data-form-name="'+ $(this).data('form-name') +'"]');
    var phone = form.find('[name="phone"]');
    var mail = form.find('[name="mail"]');
    var name = form.find('[name="name"]');

    if(phone.val() == '' || name.val() == '' || mail.val() == ''){
        phone.addClass('required');
        name.addClass('required');
        mail.addClass('required');
        setTimeout(function(){
            phone.removeClass('required');
            name.removeClass('required');
            mail.removeClass('required');
        }, 2500);
    }
    else{
        $.ajax({
            url: "formManager.php",
            type: "POST",
            data:$(this).parent().serialize(),
            success: function(){
                //$('.modalForm').removeClass('modalHide');
                //$('.modal_form').hide();
                //$('.sended').show();

                $('.modal').addClass('hidden');
                $('.modal>div:not(.layout)').addClass('hidden');
                $('form input').val('');
            }
        })
    }
});


//// Слайдер-s2-min

$('.slider-s2-min').slick({
    slidesToShow: 4,
    arrows: false,
    dots: false,
    slidesToScroll: 1,
    vertical: true,
    asNavFor: '.slider-s2',
    focusOnSelect: true,
    verticalSwiping: true
});

//// Слайдер-s2

$('.slider-s2').slick({
    slidesToShow: 1,
    arrows: true,
    dots: false,
    slidesToScroll: 1,
    asNavFor: '.slider-s2-min',
    fade: true,
    cssEase: 'linear'
});

//// Слайдер-s5

$('.slider-s5').slick({
    slidesToShow: 6,
    arrows: false,
    dots:true,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000
});

//// Слайдер-s6

$('.slider-s6').slick({
    slidesToShow: 6,
    arrows: false,
    dots:true,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000
});


//// Валидатор
$('[name="name"]').on('keypress', function() {
    var that = this;

    setTimeout(function() {
        var res = /[^A-Za-zА-Яа-яЁё]/g.exec(that.value);
        that.value = that.value.replace(res, '');
    }, 0);
});
$('.phone').inputmask("+7(999)9999999");



//// скрипт закрывающий форму
$('[data-btn-type="close"]').click(function(e){
    $('.modal').addClass('hidden');
    $('.modal>div:not(.layout)').addClass('hidden');
});
//// скрипт открывающий форму
$('[data-modal]').on('click', function(){
    $('.modal').removeClass('hidden');
    $($(this).data('modal')).removeClass('hidden')
});


//// Галерея на слайдере
$('.zoom').fancybox();

//// Определяет заполнен инпут или нет для анимации
$('.input-body .input').on('blur', function(){
    var self = $(this);

    if(self.val() !== ''){
        self.addClass('entered');
    }
    else{
        self.removeClass('entered');
    }
});

$('.menu-btn').on('click', function(){
    $(this).toggleClass('active');
});