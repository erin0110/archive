// GA코드
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-2735421-30', 'estsoft.com');
ga('send', 'pageview');


// ir, history
function tabColunm() {
	$(".column_box .tab_content").hide();
	$(".column_box .tab_content:first-child").show();
	$(".column_box .tab_list li").on('click', 'a', function () {
		$(".column_box .tab_list li").removeClass("on");
		$(this).parent("li").addClass("on");
		$(".column_box .tab_content").hide();
		var activeTab = $(this).attr("rel");
		$("#" + activeTab).show();
	});
}
function fadeUpScroll() {
	var controller = new ScrollMagic.Controller();
	$("[data-fade-up]").each(function () {
		var $this = $(this);
		var delay = $this.data("delay") ? $this.data("delay") : "10";
		$this.css({"transition-delay": delay+"ms"});
		var slideup_scene = new ScrollMagic.Scene({
			triggerElement: this,
			triggerHook: 0.85
		})
		.setClassToggle(this,"on")
		.reverse(false)
		.addTo(controller);
		// .addIndicators();
	});
};

function fadeLeftScroll() {
	var controller = new ScrollMagic.Controller();
	$("[data-fade-left]").each(function () {
		var $this = $(this);
		var delay = $this.data("delay") ? $this.data("delay") : "10";
		$this.css({"transition-delay": delay+"ms"});
		var slideup_scene = new ScrollMagic.Scene({
			triggerElement: this,
			triggerHook: 0.85
		})
		.setClassToggle(this,"on")
		.reverse(false)
		.addTo(controller);
		// .addIndicators();
	});
};


// header : 스크롤 내렸을때 bg_white 클래스 추가
$(window).scroll(function() {
	if ($(window).scrollTop() >= 10) {
		$("header").addClass("bg_white");
	}
	if ($(window).scrollTop() == 0) {
		$("header").removeClass("bg_white");
	}
});

// ourtech, business에서만 top_bg 클래스 추가
var fileName = location.href.split('/')[(location.href.split('/').length-1)].split('.')[0];
var fileNameCategory = fileName.split('_')[0];
if( fileNameCategory === "business" || fileNameCategory === "ourtech" )  {
	$("#wrap").addClass("top_bg");
}

$(function() {
	let agent = navigator.userAgent.toLowerCase();
	if (agent.indexOf("mac") >= 0 ) {
		$("body").niceScroll({
			scrollspeed: 80,
			mousescrollstep: 42,
			smoothscroll: true
		});
	} else {
		$("body").niceScroll({
			scrollspeed: 150,
			mousescrollstep: 21,
			smoothscroll: true
		});
	}
	
	$(".page_content").addClass("on");
	if ($(".column_box .tab_list").length) tabColunm();
	if ($(["data-fade-up"]).length) fadeUpScroll();
	if ($(["data-fade-left"]).length) fadeLeftScroll();

	// Family Site
	$("footer article .family_site > a").click(function() {
		$(this).parent().toggleClass("on");
	});
	$("footer article .lang > a").click(function() {
		$(this).parent().toggleClass("on");
	});
	// Top Button
	$("footer a.top").click(function() {
		$("html,body").stop().animate({scrollTop: 0}, 300);
	});
	var wPos = $(window).scrollTop();
	$(window).scroll(function() {
		var wTop = $(window).scrollTop();
		if(wTop > 300) $("footer a.top").addClass("on");
		else $("footer a.top").removeClass("on");
	});


	// header : nav over 
	$("header nav .inner_gnb").hover(function(){
		$("header").addClass("on");
	}, function() {
		$("header").removeClass("on");
	});


	// 유튜브 커버이미지
	// 레이어팝업일때 >> 모달이 꺼지면 이것도 attr 비워줘야하는 기능 추가해야됨
	$(".video_cover .btn_play").on("click", function() {
		var $thisVideo = $(this).parent(".video_cover");
		var getSrc = $thisVideo.find("iframe").data("src");
		$thisVideo.find(".img_cover").hide();
		$thisVideo.find(".btn_play").hide();
		$thisVideo.find("iframe").attr("src", "https://www.youtube.com/embed/"+getSrc+"?rel=0&autoplay=1");
	});
	
	// page title fadeUp
	setTimeout(function(){ 
		$(".page_visual,.project .page_head").addClass("on");
	}, 100);


});