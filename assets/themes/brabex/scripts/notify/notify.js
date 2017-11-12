
var Notify = function () {

    var optionsDefault = {
        from: 'top',
        align: 'right',
        icon: '',
        type: 'inverse',
        animateIn: 'fadeInDown',
        animateOut: 'fadeOut',
        delay: 7000,
        timer: 2000,
        url: '',
        allow_dismiss: true,
        url_target: '_blank',
        mouse_over: false,
        offset_x: 20,
        offset_y: 125,
        spacing: 10
    };

    function _send(message, title)
    {
        var title = (typeof title == 'undefined') ? '' : title;

        $.growl({
            icon: optionsDefault.icon,
            title: title,
            message: message,
            url: optionsDefault.url
        }, {
            element: 'body',
            type: optionsDefault.type,
            allow_dismiss: optionsDefault.allow_dismiss,
            placement: {
                from: optionsDefault.from,
                align: optionsDefault.align
            },
            offset: {
                x: optionsDefault.offset_x,
                y: optionsDefault.offset_y
            },
            spacing: optionsDefault.spacing,
            z_index: 1050,
            delay: optionsDefault.delay,
            timer: optionsDefault.timer,
            url_target: optionsDefault.url_target,
            mouse_over: optionsDefault.mouse_over,
            animate: {
                enter: 'animated ' + optionsDefault.animateIn,
                exit: 'animated ' + optionsDefault.animateOut
            },
            icon_type: 'class',
            template: '<div data-growl="container" class="col-md-4 col-xs-6 alert notify-msg" role="alert">' +
            '<button type="button" class="close" data-growl="dismiss">' +
            '<span aria-hidden="true">&times;</span>' +
            '<span class="sr-only">Fechar</span>' +
            '</button>' +
            '<span data-growl="icon"></span>' +
            '<span data-growl="title"></span>' +
            '<span data-growl="message"></span>' +
            '<a href="#" data-growl="url"></a>' +
            '</div>'
        });
    }

    return {
        setOptions: function (options) {
            if (typeof options != 'undefined') {
                $.each(options, function( index, value ) {
                    optionsDefault[index] = value;
                });
            }

            return this;
        },
        send: function (message, title) {
            _send(message, title);
            Notify.setOptions(optionsDefault);
        }
    }
}();