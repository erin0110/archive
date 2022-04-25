$(function() {
	// tab
    $(".column_box").click(function(){
		$(this).toggleClass("on");
    });
    $(".tab_content").hide();
	if ($(".column_box li:first-child a").attr("rel") == "all"){
		$(".tab_content").show();
		$(".column_box li:first-child a").addClass("on");
	}
	else $(".tab_content:first-child").show();
	$(".column_box li a").click(function () {
		$(".column_box li a").removeClass("on");
		$(this).addClass("on");
		if ($(this).hasClass("on")){
			$(".column_box .btn_select").text($(this).text());
		}
		$(".tab_content").hide();
		var activeTab = $(this).attr("rel");
		if (activeTab == "all") $(".tab_content").show();
		else $("#" + activeTab).show();
	});

	// GNB
	$("header .btn_gnb").click(function() {
		$(".layer_gnb nav li a").removeClass("on").next("ul").hide();
		$(".layer_gnb").show();
		$("body","html").css("overflow", "hidden");
		$(".layer_gnb nav").focus();
	});
	$(".layer_gnb nav>ul>li>a").click(function() {
		if ($(this).hasClass("on")) {
			$(this).toggleClass("on").next("ul").toggle();
		}else{
			$(".layer_gnb nav li a").removeClass("on").next("ul").hide();
			$(this).addClass("on").next("ul").show();
		}
	});
	$(".layer_gnb nav .icon_close").click(function() {
		$(".layer_gnb").hide();
		$("body","html").removeAttr("style");
	});
	var wPos = $(".layer_gnb nav").scrollTop();
	$(".layer_gnb nav").scroll(function() {
		var wTop = $(".layer_gnb nav").scrollTop();
		if(wTop != wPos){
			$(".layer_gnb .btn_contacts").hide();
		} 
		wPos = wTop;

		setInterval(function() {
            if (wPos == wTop) $(".layer_gnb .btn_contacts").show()}, 600);
	});

	// Familysite
	$("footer .btn_familysite").click(function() {
		$(".familysite").toggleClass("on");
		if ($(".familysite").hasClass("on")) {
			$("section,header").click(function() {
				$(".familysite").removeClass("on");
			});
		}
	});
	// Top Button
	$("footer a.top").click(function() {
		$("html,body").stop().animate({scrollTop: 0}, 300);
	});

	// title fadeUp
	$(".ourtech .page_visual,.business .page_visual").addClass("on");

	if ($(["data-fade-up"]).length) fadeUpScroll();
	
});
// Top button & Header h1 text
var wPos = $(window).scrollTop();
$(window).scroll(function() {
	var wTop = $(window).scrollTop();
	if(!$("header").hasClass("white")) {
		if (wTop > 0) {
			$("header").addClass("scroll");
		} else {
			$("header").removeClass("scroll");
		}
	}
	
	//Top Button Show
	if (wTop > wPos || wTop === 0) $("footer a.top").removeClass("on");
	else if(wTop < wPos) $("footer a.top").addClass("on");
	wPos = wTop;
});

// scrollmagic fadeUp
function fadeUpScroll() {
	var controller = new ScrollMagic.Controller();
	$("[data-fade-up]").each(function () {
		var $this = $(this);
		var delay = $this.data("delay") ? $this.data("delay") : "10";
		$this.css({"transition-delay": delay+"ms"});
		var slideup_scene = new ScrollMagic.Scene({
			triggerElement: this,
			triggerHook: 0.87
		})
		.setClassToggle(this,"on")
		.reverse(false)
		.addTo(controller);
		// .addIndicators();
	});
};
