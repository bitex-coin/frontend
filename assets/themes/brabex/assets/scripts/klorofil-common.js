$(document).ready(function() {

    $('.fast-sell-input').on('keyup', function(){
        var calc = ($(this).val()*24)*1000;
        $('.fast-sell').html('Vender ' + $(this).val() + ' BTC')
        $('.fast-total').html('Total de R$ ' + parseFloat(calc).toFixed(2));
    });

    $('.fast-buy-input').on('keyup', function(){
        var calc = ($(this).val()/24)/1000;
        $('.fast-buy').html('Comprar R$ ' + $(this).val())
        $('.fast-buy-total').html('Total de BTC ' + parseFloat(calc).toFixed(8));
    });

	/*-----------------------------------/
	/*	TOP NAVIGATION AND LAYOUT
	/*----------------------------------*/

	$('.btn-toggle-fullwidth').on('click', function(event) {
		if(!$('body').hasClass('layout-fullwidth')) {
			$('body').addClass('layout-fullwidth');

		} else {
			$('body').removeClass('layout-fullwidth');
			$('body').removeClass('layout-default'); // also remove default behaviour if set
		}

		$(this).find('.lnr').toggleClass('lnr-arrow-left-circle lnr-arrow-right-circle');

		if($(window).innerWidth() < 1025) {
			if(!$('body').hasClass('offcanvas-active')) {
				$('body').addClass('offcanvas-active');
			} else {
				$('body').removeClass('offcanvas-active');
			}
		}

        event.stopImmediatePropagation();

	});

	$(window).on('load', function() {
		if($(window).innerWidth() < 1025) {
			$('.btn-toggle-fullwidth').find('.icon-arrows')
			.removeClass('icon-arrows-move-left')
			.addClass('icon-arrows-move-right');
		}

		// adjust right sidebar top position
		$('.right-sidebar').css('top', $('.navbar').innerHeight());

		// if page has content-menu, set top padding of main-content
		if($('.has-content-menu').length > 0) {
			$('.navbar + .main-content').css('padding-top', $('.navbar').innerHeight());
		}

		// for shorter main content
		if($('.main').height() < $('#id-sidebar').height()) {
			$('.main').css('min-height', $('#id-sidebar').height());
		}
	});


	/*-----------------------------------/
	/*	SIDEBAR NAVIGATION
	/*----------------------------------*/

	$('.sidebar a[data-toggle="collapse"]').on('click', function() {
		if($(this).hasClass('collapsed')) {
			$(this).addClass('active');
		} else {
			$(this).removeClass('active');
		}
	});

	if( $('.sidebar-scroll').length > 0 ) {
		$('.sidebar-scroll').slimScroll({
			height: '95%',
			wheelStep: 2,
		});
	}


	/*-----------------------------------/
	/*	PANEL FUNCTIONS
	/*----------------------------------*/

	// panel remove
	$('.panel .btn-remove').click(function(e){

		e.preventDefault();
		$(this).parents('.panel').fadeOut(300, function(){
			$(this).remove();
		});
	});

	// panel collapse/expand
	var affectedElement = $('.panel-body');

	$('.panel .btn-toggle-collapse').clickToggle(
		function(e) {
            e.preventDefault();

        	// if has scroll
			if( $(this).parents('.panel-effect').find('.slimScrollDiv').length > 0 ) {
				affectedElement = $('.slimScrollDiv');
			}

			$(this).parents('.panel-effect').find(affectedElement).slideUp(300);
			$(this).find('i.lnr-chevron-up').toggleClass('lnr-chevron-down');
		},
		function(e) {
			e.preventDefault();

        	// if has scroll
			if( $(this).parents('.panel-effect').find('.slimScrollDiv').length > 0 ) {
				affectedElement = $('.slimScrollDiv');
			}

			$(this).parents('.panel-effect').find(affectedElement).slideDown(300);
			$(this).find('i.lnr-chevron-up').toggleClass('lnr-chevron-down');
		}
	);

    $(".search-btn").on('click', function() {
        $('.search-toggle').toggle( "slide" );
        $(this).find('.lnr').toggleClass('lnr-arrow-left-circle lnr-arrow-right-circle');
    });

	/*-----------------------------------/
	/*	PANEL SCROLLING
	/*----------------------------------*/

	if( $('.panel-scrolling').length > 0) {
		$('.panel-scrolling .panel-body').slimScroll({
			height: '430px',
			wheelStep: 2,
		});
	}

	if( $('#panel-scrolling-demo').length > 0) {
		$('#panel-scrolling-demo .panel-body').slimScroll({
			height: '175px',
			wheelStep: 2,
		});
	}

	/*-----------------------------------/
	/*	TODO LIST
	/*----------------------------------*/

	$('.todo-list input').change( function() {
		if( $(this).prop('checked') ) {
			$(this).parents('li').addClass('completed');
		}else {
			$(this).parents('li').removeClass('completed');
		}
	});


	/*-----------------------------------/
	/* TOASTR NOTIFICATION
	/*----------------------------------*/

	if($('#toastr-demo').length > 0) {
		toastr.options.timeOut = "false";
		toastr.options.closeButton = true;
		toastr['info']('Hi there, this is notification demo with HTML support. So, you can add HTML elements like <a href="#">this link</a>');

		$('.btn-toastr').on('click', function() {
			$context = $(this).data('context');
			$message = $(this).data('message');
			$position = $(this).data('position');

			if($context == '') {
				$context = 'info';
			}

			if($position == '') {
				$positionClass = 'toast-left-top';
			} else {
				$positionClass = 'toast-' + $position;
			}

			toastr.remove();
			toastr[$context]($message, '' , { positionClass: $positionClass });
		});

		$('#toastr-callback1').on('click', function() {
			$message = $(this).data('message');

			toastr.options = {
				"timeOut": "300",
				"onShown": function() { alert('onShown callback'); },
				"onHidden": function() { alert('onHidden callback'); }
			}

			toastr['info']($message);
		});

		$('#toastr-callback2').on('click', function() {
			$message = $(this).data('message');

			toastr.options = {
				"timeOut": "10000",
				"onclick": function() { alert('onclick callback'); },
			}

			toastr['info']($message);

		});

		$('#toastr-callback3').on('click', function() {
			$message = $(this).data('message');

			toastr.options = {
				"timeOut": "10000",
				"closeButton": true,
				"onCloseClick": function() { alert('onCloseClick callback'); }
			}

			toastr['info']($message);
		});
	}

    $('li > a').click(function() {

        if (!$(this).hasClass('active')) {
            $('a.active').removeClass('active');
            $(this).addClass('active');
        }

        if(typeof $(this).data('switch-view') !== 'undefined') {
            if(!$(this).data('switch-view').match('ledger|deposit|withdraw')) {
                if($('.sidebar div').hasClass('collapse in')) {
                    $('.sidebar div').removeClass('in');
                }
            } else {
                $('.sidebar a[data-toggle="collapse"]').addClass('active');
            }

            if($(this).data('switch-view').match('profile')) {
                $('#menu-profile > a').addClass('active');
            }
        }

    });

    $('.easy-buy-btn, .easy-sb-btn').on('click', function() {

        var data = removeHtmlTags($(this).html());

        swal({
            title: "Você tem certeza?",
            text: "Ao clicar em continuar, você estará confirmando a seguinte transação:" + data,
            icon: "warning",
            buttons: ['Cancelar', 'Continuar'],
        })
        .then((willRun) => {
            if (willRun) {
                swal("Sua ordem foi enviada com sucesso!", {
                    icon: "success",
                });
            } else {
                swal({
                    text: "Você optou por não continuar com a transação. Se você possui alguma dúvida, visite a página de Suporte e Sugestões ou entre em contato conosco!",
                    icon: "info",
                });
            }
        });
    });

});

function removeHtmlTags(data) {
    return data.replace(/(<p[^>]*>|<\/?p[^>]*>|<b[^>]*>|<\/?b[^>]*>)/g, "");
}

function asksControl(title) {
    if ($(title).hasClass('active')) {
        $(title).removeClass('active');
        $(title).parent().find('.content-ask').slideUp();
        $(title).find('.lnr').removeClass('lnr-chevron-up').addClass('lnr-chevron-down');
    } else {
        $(title).addClass('active');
        $(title).parent().find('.content-ask').slideDown();
        $(title).find('.lnr').removeClass('lnr-chevron-down').addClass('lnr-chevron-up');
    }
}

function closeTicket(element) {

    if($(element).hasClass('buy')) {
        $('.toggle-buy-collapse').html("Abrir Boleta de Compra");
        $('.buy-toggle').toggle( "slide" );
    } else {
        $('.toggle-sell-collapse').html("Abrir Boleta de Venda");
        $('.sell-toggle').toggle( "slide" );
    }

}

function showTicket(element) {

    if($(element).hasClass('buy')) {

        if($('.buy-toggle').css('display') == 'none') {
            $(element).html("Fechar Boleta de Compra");
        } else {
            $(element).html("Abrir Boleta de Compra");
        }

        $('.buy-toggle').toggle( "slide" );
    }

    if($(element).hasClass('sell')) {

        if($('.sell-toggle').css('display') == 'none') {
            $(element).html("Fechar Boleta de Venda");
        } else {
            $(element).html("Abrir Boleta de Venda");
        }

        $('.sell-toggle').toggle( "slide" );
    }
}


// toggle function
$.fn.clickToggle = function( f1, f2 ) {
	return this.each( function() {
		var clicked = false;
		$(this).bind('click', function() {
			if(clicked) {
				clicked = false;
				return f2.apply(this, arguments);
			}

			clicked = true;
			return f1.apply(this, arguments);
		});
	});

}

function lightMode() {
    $('.main-night').addClass('main').removeClass('main-night');
    $('#wrapper').removeClass('wrapper-night');
    $('.panel').removeClass('panel-night');
    $('.panel2').removeClass('panel2-night');
    $('.book-body').removeClass('book-body-night');
    $('.order').removeClass('order-night');
    $('.table-hover-night').removeClass('table-hover-night').addClass('table-hover');

    $('.night-mode-btn').html('<i class="lnr lnr-moon"></i>Ativar Modo Noturno</a>');
    $('.night-mode-btn').attr("onclick","nightMode()");
}

function nightMode() {

    $('.main').removeClass('main').addClass('main-night');
    $('#wrapper').addClass('wrapper-night');
    $('.panel').addClass('panel-night');
    $('.panel2').addClass('panel2-night');
    $('.book-body').addClass('book-body-night');
    $('.order').addClass('order-night');
    $('.table-hover').removeClass('table-hover').addClass('table-hover-night');

    $('.night-mode-btn').html('<i class="lnr lnr-moon"></i>Desativar Modo Noturno</a>');
    $(".night-mode-btn").attr("onclick","lightMode()");
}

