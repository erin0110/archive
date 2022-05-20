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
		if ($(this).context.value.length > 4) {
			$(this).attr("style", "width:83px");
		} else {
			$(this).attr("style", "");
		}
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
		} else if ($(this).parent().context.text === "브랜드") {
			$(".layer_quick .contents.brand").show();
		} else if ($(this).parent().context.text === "베스트") {
			$(".layer_quick .contents.best").show();
		} else if ($(this).parent().context.text === "라운즈 ONLY") {
			$(".layer_quick .contents.special").show();
		} else if ($(this).parent().context.text === "라운즈소개") {
			$(".layer_quick .contents.introduce").show();
		} else if ($(this).parent().context.text === "고객센터") {
			$(".layer_quick .contents.customer").show();
		}
	});
	$(".layer_quick .contents li a.toggle").click(function() {
		$(".layer_quick .contents li").removeClass("on");
		$(this).parent().toggleClass("on");
	});

	$(".template .btn em.like,.detail_top .btn a.like").click(function(e) {
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
		$("footer .menu .info").toggleClass("on");
	});
	$("header .search").click(function() {
		$(".layer_search").fadeIn(300);
		$("html").css("overflow-y", "hidden");
		$("html").animate({scrollTop: 0}, 100);
	});
	$(".layer_search .close").click(function() {
		$(".layer_search").fadeOut(300);
		$("html").attr("style", "");
	});
	$("header .quick").click(function() {
		$(".wrap_quick").addClass("on");
		$("html").css("overflow-y", "hidden");
	});
	$(".wrap_quick .close").click(function() {
		$(".wrap_quick").removeClass("on");
		$("html").attr("style", "");
	});
	$(".filter .top").click(function() {
		$(".wrap_filter").fadeIn(300);
		$("html").css("overflow-y", "hidden");
		$("html").animate({scrollTop: 0}, 100);
	});
	$(".wrap_filter .close").click(function() {
		$(".wrap_filter").fadeOut(300);
		$("html").attr("style", "");
	});
	$(".fixed_btn a.top").click(function() {
		$("html").animate({scrollTop: 0}, 300);
	});
	$("header .vf").click(function() {
		$(".layer_vf").fadeIn(300);
		$("html").css("overflow-y", "hidden");
		$("html").animate({scrollTop: 0}, 100);
	});
	$(".layer_vf .close").click(function() {
		$(".layer_vf").fadeOut(300);
		$("html").attr("style", "");
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
        $(".layer_delivery").modal({fadeDuration: 100});
    });
    $(".btn_layer_postcode").click(function() {
        $(".layer_postcode").modal({fadeDuration: 100});
    });
    $(".btn_layer_coupon").click(function() {
        $(".layer_coupon").modal({fadeDuration: 100});
    });
    $(".btn_layer_refund").click(function(){
		$(".layer_refund").modal({fadeDuration: 100});
	});
    $(".layer_coupon fieldset a").click(function() {
        $(".layer_coupon ul").hide();
        $(".layer_coupon .none").show();
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
		$(this).modal({
            fadeDuration: 250
        });
    });
    $("header fieldset input").click(function() {
		$(".layer_search").fadeIn(300);
		$(".layer_search fieldset input").focus();
		$("html").css("overflow-y", "hidden");
		$("html").animate({scrollTop: 0}, 100);
    });
    $(".fixed_top").click(function() {
		$("html").animate({scrollTop: 0}, 300);
	});
	$(".slider_range").slider({
		range: true,
		min: 0,
		max: 4,
		values: [0, 2]
    });
    $.datepicker.setDefaults({
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        dayNames: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토']
    });
	if($(".template_special,.template_magazine").length >= 1 ) {
		$("html").animate({
			scrollTop: $("header").height()
		}, 200);
	}
    $(".template_magazine .btn_share,.template_special .btn_share").click(function() {
		$(".layer_share").modal({fadeDuration: 100});
	});
	$(".template_special").on("init", function(event, slick) {
		$(".template_special .page_number .total").text(slick.slideCount);
	});
	$(".template_special").on("beforeChange", function(event, slick, currentSlide, nextSlide) {
		$(".template_special .page_number .current").text(nextSlide + 1);
	});
	$(".template_special>ul").slick({
		arrows: false,
		autoplay: false,
		infinite: false,
		dots: false
	});
	var wPos = $(window).scrollTop();
	$(window).scroll(function() {
		var wTop = $(window).scrollTop();
		if ($(window).scrollTop() > 200) {
			$("header").addClass("fixed");
			if (wTop > wPos){	
				$(".fixed_top").fadeOut(300);	
			} else {
				$(".fixed_top").fadeIn(300);
			}
			if ($("header").hasClass("home")) {
				$("body").attr("style", "padding-top:160px");
			} else if ($("body").hasClass("main_home")) {
				$("body").addClass("fixed");
			} else {
				$("body").attr("style", "padding-top:56px");
			}
			wPos = wTop;
		} else {
			$("header,body").removeClass("fixed");
			$("body").attr("style", "");
			$(".fixed_top").fadeOut(300);
		}
	});

});