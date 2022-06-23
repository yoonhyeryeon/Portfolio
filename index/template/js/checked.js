// 1.셀렉트 ul

$(document).on('click', '.select-header', function () {
    if ($(this).attr('class') != 'open') {
        $('.select-body').slideToggle('slow');

        $(this).addClass('open');
    }
});
$(document).on('click', '.select-body li', function () {
    $('.select-ul-wrap a').text($(this).text());
    $('.select-body').slideToggle('slow');
});


// 2.셀렉트 border

$(document).on('click', '.select-border-header', function () {
    if ($(this).attr('class') != 'open') {
        $('.select-border-body').slideToggle('slow');

        $(this).addClass('open');
    }
});
$(document).on('click', '.select-border-body li', function () {
    $('.select-border-wrap a').text($(this).text());
    $('.select-border-body').slideToggle('slow');
});

// -------------------------------------------------------------------

// select-box-top
$(document).on('click', '.select-top-header', function () {
    if ($(this).attr('class') != 'open') {
        $('.select-top-body').slideToggle('fast');
        $(this).addClass('open');
    }
});
$(document).on('click', '.select-top-body li', function () {
    $('.select-top-wrap a').text($(this).text());
    $('.select-top-body').slideToggle('fast');
});


//   basic-tab

$(document).ready(function () {

    $('ul.tab-box li').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('ul.tab-box li').removeClass('on');
        $('.content').removeClass('on');

        $(this).addClass('on');
        $("#" + tab_id).addClass('on');
    })

})



// border-tab

$(document).ready(function () {

    $('ul.border-tab-box li').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('ul.border-tab-box li').removeClass('on');
        $('.border-content').removeClass('on');

        $(this).addClass('on');
        $("#" + tab_id).addClass('on');
        $('data-tab').addClass('on');
    })

})


// bottom-tab

$(document).ready(function () {

    $('ul.bottom-tab-box li').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('ul.bottom-tab-box li').removeClass('on');
        $('.bottom-content').removeClass('on');

        $(this).addClass('on');
        $("#" + tab_id).addClass('on');
        $('data-tab').addClass('on');
    })

})