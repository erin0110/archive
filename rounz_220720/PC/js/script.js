// 샘플입니다 참고만..!!
$(function() {
	//GNB menu
	$("header .menu li").click(function() {
		$("header .menu li").removeClass("on");
		$(this).addClass("on");
	});
	//sort toggle
	$(".sort li .change_view").click(function() {
		if ($(this).hasClass("on")) {
			$(".type_big_single").addClass("x2");
		} else {
			$(".type_big_single").removeClass("x2");
		}
		$(this).toggleClass("on");
	});
	$(".sort select").change(function() {
		if ($(this).context.value.length > 4) $(this).addClass("long");
		else $(this).removeClass("long");
	});
	$(".list_style_cate li").click(function() {
		$(".list_style_cate li,.layer_quick .menu li a").removeClass("on");
		$(this).addClass("on");
	});
	$(".layer_quick .menu li a").click(function() {
		if ($(this).hasClass("link")) return;
		$(".layer_quick .menu li a").removeClass("on");
		$(this).addClass("on");
		$(".layer_quick .contents").hide();
		if ($(this).parent().context.text === "안경테") {
			$(".layer_quick .contents.glasses").show();
		} else if ($(this).parent().context.text === "선글라스") {
			$(".layer_quick .contents.sunglasses").show();
		} else if ($(this).parent().context.text === "스타일") {
			$(".layer_quick .contents.style").show();
		} else if ($(this).parent().context.text === "스페셜") {
			$(".layer_quick .contents.special").show();
		} else if ($(this).parent().context.text === "라운즈소개") {
			$(".layer_quick .contents.introduce").show();
		}
	});
	$(".layer_quick .contents li a.toggle").click(function() {
		$(".layer_quick .contents li").removeClass("on");
		$(this).parent().toggleClass("on");
	});
	$(".template .btn em.like,.detail_top aside.btn a.like,.basket_order td.etc .like").click(function(e) {
		e.preventDefault();
		if(!$(this).hasClass("on")) {
			$(this).addClass("on");
			$(".layer_like").fadeIn(300);
		} else {
			$(this).removeClass("on");
		}
		setTimeout(function () { 
			$(".layer_like").fadeOut(300);
		},3000);
	});
	$(".form_write .btn_toast").click(function(e) {
		e.preventDefault();
		if($(this).attr("id") === "verifyNum") {
			$(".layer_toast span").text("인증번호가 발송되었습니다. 확인창에 입력해주세요.");
		}
		if($(this).attr("id") === "reVerifyNum") {
			$(".layer_toast span").text("인증번호가 재발송 되었습니다.");
		}
		if($(this).attr("id") === "confirmVerifyNum") {
			$(".layer_toast span").text("인증이 완료되었습니다.");
		}
		$(".layer_toast").fadeIn(300);
		setTimeout(function () { 
			$(".layer_toast").fadeOut(300);
		},3000);
	});
	$("footer .toggle").click(function() {
		$(this).toggleClass("on");
		$(this).parent().toggleClass("on");
	});
	$(".wrap_quick .close").click(function() {
		$(".wrap_quick").removeClass("on");
		$("html, body").attr("style", "");
	});
	$("header .vf").click(function() {
		$(".layer_vf").fadeIn(300);
		$("html, body").css("overflow-y", "hidden");
		$("html, body").animate({scrollTop: 0}, 100);
	});
	$(".layer_vf .close").click(function() {
		$(".layer_vf").fadeOut(300);
		$("html, body").attr("style", "");
	});
	$(".customer .choice li a").click(function() {
		$(".customer .choice li a").removeClass("on");
		$(this).addClass("on");
	});
	$(".basket_order_pay li").click(function() {
		$(".basket_order_pay li").removeClass("on");
		$(this).addClass("on");
	});
	$(".btn_fixed_bottom").click(function() {
		$(this).toggleClass("on");
	});
    $(".btn_layer_delivery").click(function() {
        $(".layer_delivery").modal({fadeDuration: 100,closeExisting:false});
    });
    $(".btn_layer_coupon").click(function() {
        $(".layer_coupon").modal({fadeDuration: 100});
    });
    $(".layer_search .tab li a").click(function() {
		var tab = $(this).parent().index() + 1;
		$(".tab li a").removeClass("on");
		$(this).addClass("on");
		$(".search").hide();
		$(".search_" + tab).show();
	});
	// 모달 팝업 
	$(".modal-btn").click(function() {
		$(this).modal({fadeDuration: 250});
    });
    $("header .top li.drop").mouseenter(function() {
		$(this).find("ul").stop().fadeIn(300);
	});
	$("header .top li.drop").mouseleave(function() {
		$(this).find("ul").hide();
	});
	$(".btn_layer_delivery.on").click(function() {
        $(".layer_delivery").modal({fadeDuration: 100});
    });
    $(".btn_layer_postcode").click(function() {
        $(".layer_postcode").modal({fadeDuration: 100,closeExisting:false});
    });
    $(".btn_layer_coupon").click(function() {
        $(".layer_coupon").modal({fadeDuration: 100});
    });
    $(".fixed_top .top").click(function() {
		$("html, body").animate({scrollTop: 0}, 300);
	});
	$(".fixed_top .layer_benefit .close").click(function() {
		$(".fixed_top .layer_benefit").addClass("off");
	});
	$(".fixed_top .benefit").click(function() {
		$(".fixed_top .layer_benefit").toggleClass("off");
	});
	$(".btn_share").click(function() {
		$(".layer_share").modal({fadeDuration: 100});
	});
	$(".btn_layer_change_delivery").click(function(){
        $(".layer_change_delivery").modal({fadeDuration:100});
    });
    $(".btn_layer_refund").click(function(){
		$(".layer_refund").modal({fadeDuration:100});
    });
    $(".btn_layer_filter").click(function(){
		$(".layer_filter").modal({fadeDuration:100});
    });
    $(".btn_layer_price").click(function(){
		$(".layer_price").modal({fadeDuration:100});
    });
	//scroll
	$(".layer_delivery ul, .layer_coupon ul, .layer_store ul").mCustomScrollbar({
        theme: "dark",
        mouseWheel: {
            preventDefault: true
        }
    });
    $.datepicker.setDefaults({
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        dayNames: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토']
    });
	function lottieOptician() {
		var loader = document.getElementsByClassName("lottie_optician");
		for (var i = 0, l = loader.length; i < l; i++) {
			(function(n) {
				var Ai_optician_02_notext = bodymovin.loadAnimation({
					container : loader[n],
					render: "svg",
					loop: true,
					autoplay: true,
					path: "./json/Ai_optician_02_notext.json"
				});
			})(i);
		}
	};
	lottieOptician();
	function rbnTimesale() {
		var $slider = $(".rbanner_timesale>ul");
		$slider.on('init', function(event, slick) {
			var slideTotal = slick.slideCount;
			var $slideDot = slick.$dots;
			var slideDotWidth = (100 / slideTotal).toFixed(3);
			$slideDot.find(">li").css("width",slideDotWidth+"%");
		})
		.slick({
			dots: true,
			autoplay: true,
			fade: true,
			arrows: false
		});
	};
	rbnTimesale();

    function pSpecial() {
		var spSlideTotal = $(".template_special>ul").find("li").length;
		var spDotWidth = (100 / spSlideTotal).toFixed(3);

		$(".template_special").on("beforeChange", function(event, slick, currentSlide, nextSlide) {
			$(".template_special .page_number .current").text(nextSlide + 1);
		});
		$(".template_special>ul").slick({
			dots: true,
			autoplay: false,
			infinite: false,
			customPaging: function(slick, index) {
				return "<a href='#n'></a>";
			}
		});
		if($(".template_special").length >= 1 ){
			$("html, body").animate({
				scrollTop: $("header").height()
			}, 200);
			$(".slick-dots").wrap("<div class='slick-dots-wrap'></div>");
			$(".slick-dots-wrap").prepend("<span class='page_number'><span class='current'>1</span><span>/</span><span class='total'>"+spSlideTotal+"</span></span>");
			$(".slick-dots li").css("width",spDotWidth+"%");
		}
    };
    pSpecial();

    function pMagazine() {
    	if($(".template_magazine").length >= 1 ){
			$("html, body").animate({scrollTop: $("header").height()}, 200);
			$("header").addClass("hide");
		}
    };
    pMagazine();


	function footer_notice() {
		$("footer .notice li").each(function (i, element) {
			$(element).delay((i + 1) * 2000).queue(function (next) {
				$("footer .notice li").removeClass("on");
				$(this).addClass("on");
				next();
				if ($("footer .notice li:last-child").hasClass("on")) footer_notice();
			});
		});
	}
	footer_notice();
	$(window).on("load", function() {
        $("header .menu li .brand ul,header .menu li ul.best").mCustomScrollbar({
        	theme: "dark",
        	mouseWheel: {
        		preventDefault: true
        	}
        });

    });
    function sortScrollbar() {
		$(".sort .sort_filter .brand .option").mCustomScrollbar({
        	theme: "dark",
        	mouseWheel: {
        		preventDefault: true
        	}
        });
    };
    if($(".sort .sort_filter .brand .option").length >= 1) sortScrollbar();
    function sliderRange() {
		$(".slider_range").slider({
			orientation: "vertical",
			range: true,
			min: 0,
			max: 4,
			values: [0, 2]
	    });
    };
    if($(".slider_range").length >= 1) sliderRange();
});

// 아이패드 사파리에서만 PC버전으로 보임
let isIPad = /iPad/.test(navigator.platform) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
if(isIPad > 0) $("body").css("min-width","1400px");

// header
$("header .menu li").hover(function(){
	$(this).find("article").show();
}, function(){
	$(this).find("article").hide();
});
$(window).scroll(function() {
	var wTop = $(window).scrollTop();
	if (wTop > 0) {
		$("header").addClass("fixed");
		$("body").css("padding-top", "177px");
		$(".fixed_top").addClass("show");
		if($("header .menu li>article").is(":visible") == true) {
			$("header .menu li>article").hide();
		}
	} else {
		$("header,body").removeClass("fixed");
		$("body").css("padding-top", "0");
		$(".fixed_top").removeClass("show");
	}
});