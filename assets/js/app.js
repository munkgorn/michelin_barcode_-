! function(n) {
    "use strict";

    function t() {
        n(window).width() < 1025 ? n("body").addClass("enlarge-menu") : n("body").removeClass("enlarge-menu")
    }

    function a() {
        
    }! function() {
        

        
    }(), n(".metismenu").metisMenu(), n(window).resize(function() {
        t()
    }), n(".button-menu-mobile").on("click", function(t) {
        t.preventDefault(), n("body").toggleClass("enlarge-menu")
    }), t(), n('[data-toggle="tooltip"]').tooltip(), n(".main-icon-menu .nav-link").on("click", function(t) {
        n("body").removeClass("enlarge-menu"), t.preventDefault(), n(this).addClass("active"), n(this).siblings().removeClass("active"), n(".main-menu-inner").addClass("active");
        var a = n(this).attr("href");
        n(a).addClass("active"), n(a).siblings().removeClass("active")
    }), n(".leftbar-tab-menu a, .left-sidenav a").each(function() {
        var t = window.location.href.split(/[?#]/)[0];
        if (this.href == t) {
            n(this).addClass("active"), n(this).parent().addClass("active"), n(this).parent().parent().addClass("in"), n(this).parent().parent().addClass("mm-show"), n(this).parent().parent().parent().addClass("mm-active"), n(this).parent().parent().prev().addClass("active"), n(this).parent().parent().parent().addClass("active"), n(this).parent().parent().parent().parent().addClass("mm-show"), n(this).parent().parent().parent().parent().parent().addClass("mm-active");
            var a = n(this).closest(".main-icon-menu-pane").attr("id");
            n("a[href='#" + a + "']").addClass("active")
        }
    }), feather.replace(), a(), n(".navigation-menu a").each(function() {
        var t = window.location.href.split(/[?#]/)[0];
        this.href == t && (n(this).parent().addClass("active"), n(this).parent().parent().parent().addClass("active"), n(this).parent().parent().parent().parent().parent().addClass("active"))
    }), n(".navbar-toggle").on("click", function(t) {
        n(this).toggleClass("open"), n("#navigation").slideToggle(400)
    }), n(".navigation-menu>li").slice(-2).addClass("last-elements"), n('.navigation-menu li.has-submenu a[href="#"]').on("click", function(t) {
        n(window).width() < 992 && (t.preventDefault(), n(this).parent("li").toggleClass("open").find(".submenu:first").toggleClass("open"))
    });
}(jQuery);