
$(document).ready(function(){
    $('.nav-button').click(function(){
        $('.nav-button').toggleClass('change')
    })
})

$(window).scroll(function(){
    let position = $(this).scrollTop();
    if(position >= 200 ){
        $('.nav-menu').addClass('custom-navbar')
    }else{
        $('.nav-menu').removeClass('custom-navbar')
    }
})



$(window).scroll(function(){
    let position = $(this).scrollTop();
    if(position >= 700 ){
        $('.cct').addClass('right')
        $('.ccy').addClass('left')
    }else{
        $('.cct').removeClass('right')
        $('.ccy').removeClass('left')
    }
})

$('.ccg').click(function(){
  let val =$(this).attr('data-fil');
  $(this).addClass('cca').siblings().removeClass('cca')
  if (val==='all'){

    $('.ccf').show(300)
  }else{
    $('.ccf').filter('.'+val).show(300);
    $('.ccf').not('.'+val).hide(300);
  }
})


$(window).scroll(function(){
    let position = $(this).scrollTop();
    if(position >= 4400 ){
        $('.card-1').addClass('m-right')
        $('.card-2').addClass('bu-m')
        $('.card-3').addClass('m-left')
    }else{
        $('.card-1').removeClass('m-right')
        $('.card-2').removeClass('m-left')
        $('.card-3').removeClass('bu-m')
    }
})