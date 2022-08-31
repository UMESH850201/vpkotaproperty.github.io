$(document).ready(function() {
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();
            if (scroll > 550) {
                $(".navbar").css("background", "rgb(255, 192, 203,0.85)");
            } else {
                $(".navbar").css("background", "rgb(255, 255, 255,1)");
                // $(".navbar").css("top", "0");
            }
        });
        $("#nav_home").click(function() {
            // $(window).scrollTop(0);
            $('html, body').animate({
                scrollTop: 0
            }, 300);
            return false;
        });
        $("#nav_profile").click(function() {
            // $(window).scrollTop(0);
            $('html, body').animate({
                scrollTop: 650
            }, 200);
            return false;
        });
        $("#nav_category").click(function() {
            // $(window).scrollTop(0);
            $('html, body').animate({
                scrollTop: 1030
            }, 200);
            return false;
        });
        $("#nav_contact").click(function() {
            // $(window).scrollTop(0);
            $('html, body').animate({
                scrollTop: 1400
            }, 200);
            return false;
        });
        $("#nav_gallery").click(function() {
            // $(window).scrollTop(0);
            $('html, body').animate({
                scrollTop: 1790
            }, 200);
            return false;
        });
    }

);