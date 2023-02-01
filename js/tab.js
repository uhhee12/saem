
$(document).ready(function() {
            var jbOffset = $('.jbMenu').offset();
            $(window).scroll(function() {
                if ($(document).scrollTop() > jbOffset.top) {
                    $('.jbMenu').addClass('jbFixed');
                } else {
                    $('.jbMenu').removeClass('jbFixed');
                }
            });
            
            $('ul.tabs li').click(function() {
                var tab_id = $(this).attr('data-tab');

                $('.tabcon li').removeClass('current');
                $('.tab-content').removeClass('current');

                $(this).addClass('current');
                $("#" + tab_id).addClass('current');
            });
            
           
        });