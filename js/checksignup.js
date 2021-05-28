$(function() {
    let signup = true;
    if (signup) {
        $('#no-signup').hide();
        $('#signup').show();
    } else {
        $('#no-signup').show();
        $('#signup').hide();
    }
})

$(document).on('mouseover', 'span', function(event) {
    console.log($(this).hasClass('page'));
    if ($(this).hasClass('page')) {
        $(this).css({

        })
    }
})

$(document).on('mouseover', 'span', function(event) {
    console.log($(this).hasClass('checked-page'));
    if ($(this).hasClass('checked-page')) {
        $(this).addClass('page')
    }
}).on('mouseout', 'span', function(event) {
    console.log($(this).hasClass('checked-page'));
    if ($(this).hasClass('checked-page')) {
        $(this).removeClass('page')
    }
})