$(document).ready(function(e) {
  // initialize tooltips
  ini_tooltips();  
  $("body").append('<div id="tooltip_wrapper"></div>');
  $(".custom-select").wrap('<div class="customSelectWrapper"></div>');  
  $('input[type="file"]').wrap('<div class="customFileWrapper"></div>'); 
  $(".customFileWrapper").append('<button class="inputFileBtn">Select or Drop File</button>');
});

//for accordian panel
$(".panel_header").on('click', function(){		
	$(".panel_header").next(".panel_contentWrapper").slideUp(300);
    $(this).parent(".panel").toggleClass("open").siblings().removeClass('open');
	if ($(".panel").hasClass("open")) {
	  $(".panel.open").children(".panel_contentWrapper:hidden").slideDown(300);	  
	}
	else{
		$(".panel").children(".panel_contentWrapper").slideUp(300);
	}
	setTimeout(function(){
		if (
			$(".panel.open").height() > 400) {
			$(".panel.open").find(".scrollTopTrg").show();
		}
		else{		
			$(".panel.open").find(".scrollTopTrg").hide();
		}		
		},250);
});
$('.panel').each(function(i) {
	$(this).attr('id', 'panel' + i);
});
$(".scrollTopTrg").click(function(){
    $("html, body").animate({      
	   scrollTop: $(this).parents(".panel").offset().top
    }, 500);
});
$(".sabPanel_header").on('click', function(proper){		
	$(".sabPanel_header").next(".sabPanel_contentWrapper:visible").slideUp(300);
	$(".sabPanel").children(".sabPanel_contentWrapper:visible").slideUp(300);
    $(this).parent(".sabPanel").toggleClass("open").siblings().removeClass('open');
	if ($(".sabPanel").hasClass("open")) {
	  $(".sabPanel.open").children(".sabPanel_contentWrapper:hidden").slideDown(300);
	}
	else{
		$(".sabPanel").children(".sabPanel_contentWrapper:visible").slideUp(300);
	}
	setTimeout(function(){
		if (
			$(".sabPanel.open").height() > 400) {
			$(".sabPanel.open").find(".sabPanelScrollTopTrg").show();
		}
		else{		
			$(".sabPanel.open").find(".sabPanelScrollTopTrg").hide();
		}		
		},250);
});
$('.sabPanel').each(function(i) {
	$(this).attr('id', 'sabPanel' + i);
});
$(".sabPanelScrollTopTrg").click(function(){
    $("html, body").animate({       
	   scrollTop: $(this).parents(".sabPanel").offset().top
    }, 500);
});
//for accordina panel end

//input type file
$('input[type="file"]').one('click',function(){	
	$(this).parent().after('<div class="inputFileWrapper"></div>');
}); 

//top navigation dropdown menu
$(".userLoginBlock").on('mouseover', function(){
	$(".profileMenu").addClass("menuShow");
});
$(".userLoginBlock").on('mouseout', function(){
	$(".profileMenu").removeClass("menuShow");
});

//for input type number
$(window).load(function(){
    $("input[type=number]").wrap('<div class="numberInputWrapper"></div>'); 
    $("input[type=number]").addClass("form-number");   
    $("input[type=number]").after('<div class="form-number-value"></div>');
	$("input[type=number]").click(function() {
    	var text = $(this).val();   
		$(this).next(".form-number-value").html(text);		
	});	
	var numTextInput = $("input[type=number]")
	var numText = numTextInput.val(); 
	var numWidthInput = $("input[type=number]").width();
	var numWidthx = numWidthInput + 22;
	numTextInput.parents(".numberInputWrapper").css("width",numWidthx + "px");	
	numTextInput.next(".form-number-value").html(numText);
	$("input[type=number]").bind('keyup mouseup', function () {
		var text = $(this).val();   
		$(this).next(".form-number-value").html(text);
	});
});

//for radio button
function customRadiobutton(radiobuttonName){
	var radioButton = $('input[name="'+ radiobuttonName +'"]');
	$(radioButton).each(function(){
		$(this).wrap( "<span class='custom-rating'></span>" );
		if($(this).is(':checked')){				
			$(this).parent().addClass("selected");
		}
	});
	$(radioButton).click(function(){
		radioname = $(this).attr("name");
		$("input.custom-rating[type=radio]").each(function(index, element) {
			if ( $(this).attr("name") == radioname ){
				$(this).parent("span").removeClass("selected");
			}
		});
			$(this).parent("span").addClass("selected")
	});
}
$(document).ready(function (){
	customRadiobutton("rating-input-1-5");
	customRadiobutton("rating-input-1-4");
	customRadiobutton("rating-input-1-3");
	customRadiobutton("rating-input-1-2");
	customRadiobutton("rating");
})
//for custom tooltip
function ini_tooltips(){
  if($(window).width() < 629) {		
		$(".info_btn").click(function(e){
			var topposition = $(this).offset().top,
			leftposition = $(this).offset().left;
			$("#tooltip_wrapper").html( $(this).html() );
			$("#tooltip_wrapper").css({"left":leftposition + 20 ,"top":topposition + 18 });
			e.stopPropagation();
		  });
		  $("body").click(function(e){
			  $("#tooltip_wrapper").html(" ");
			$("#tooltip_wrapper").css({"left":0,"top":0});
			  });			  
	}
	else{
		$(".info_btn").hover(function(){
			var topposition = $(this).offset().top,
			leftposition = $(this).offset().left;
			$("#tooltip_wrapper").html( $(this).html() );
			$("#tooltip_wrapper").css({"left":leftposition + 20 ,"top":topposition + 18 });
		  },function(){
			$("#tooltip_wrapper").html(" ");
			$("#tooltip_wrapper").css({"left":0,"top":0});
		  })
	}
}
//for custom tooltip ends

//for toggle menu
$(".navbar-toggle").click(function(){
	$(this).toggleClass("collapsed");
	if ($(".navbar-toggle").hasClass("collapsed")) {
	  $(".top_nav").slideDown();
	}
	else{
		$(".top_nav").slideUp();
	}
});
function destroyNav() {
	$(".navbar-toggle").removeClass("collapsed");
	if ($(window).width() > 630) {
		$(".top_nav").slideDown();		
	}
	else{		
		$(".top_nav").slideUp();
	}
}
$(window).on("orientationchange", destroyNav);
$(window).on("resize", destroyNav);
//for toggle menu end

//for custom select tag
(function(a){a.fn.extend({customSelect:function(c){if(typeof document.body.style.maxHeight==="undefined"){return this}var e={customClass:"customSelect",mapClass:true,mapStyle:true},c=a.extend(e,c),d=c.customClass,f=function(h,k){var g=h.find(":selected"),j=k.children(":first"),i=g.html()||"&nbsp;";j.html(i);if(g.attr("disabled")){k.addClass(b("DisabledOption"))}else{k.removeClass(b("DisabledOption"))}setTimeout(function(){k.removeClass(b("Open"));a(document).off("mouseup.customSelect")},60)},b=function(g){return d+g};return this.each(function(){var g=a(this),i=a("<span />").addClass(b("Inner")),h=a("<span />");g.after(h.append(i));h.addClass(d);if(c.mapClass){h.addClass(g.attr("class"))}if(c.mapStyle){h.attr("style",g.attr("style"))}g.addClass("hasCustomSelect").on("render.customSelect",function(){f(g,h);g.css("width","");var k=parseInt(g.outerWidth(),10)-(parseInt(h.outerWidth(),10)-parseInt(h.width(),10));h.css({display:"inline-block"});var j=h.outerHeight();if(g.attr("disabled")){h.addClass(b("Disabled"))}else{h.removeClass(b("Disabled"))}i.css({width:k,display:"inline-block"});g.css({"-webkit-appearance":"menulist-button",width:h.outerWidth(),position:"absolute",opacity:0,height:j,fontSize:h.css("font-size")})}).on("change.customSelect",function(){h.addClass(b("Changed"));f(g,h)}).on("keyup.customSelect",function(j){if(!h.hasClass(b("Open"))){g.trigger("blur.customSelect");g.trigger("focus.customSelect")}else{if(j.which==13||j.which==27){f(g,h)}}}).on("mousedown.customSelect",function(){h.removeClass(b("Changed"))}).on("mouseup.customSelect",function(j){if(!h.hasClass(b("Open"))){if(a("."+b("Open")).not(h).length>0&&typeof InstallTrigger!=="undefined"){g.trigger("focus.customSelect")}else{h.addClass(b("Open"));j.stopPropagation();a(document).one("mouseup.customSelect",function(k){if(k.target!=g.get(0)&&a.inArray(k.target,g.find("*").get())<0){g.trigger("blur.customSelect")}else{f(g,h)}})}}}).on("focus.customSelect",function(){h.removeClass(b("Changed")).addClass(b("Focus"))}).on("blur.customSelect",function(){h.removeClass(b("Focus")+" "+b("Open"))}).on("mouseenter.customSelect",function(){h.addClass(b("Hover"))}).on("mouseleave.customSelect",function(){h.removeClass(b("Hover"))}).trigger("render.customSelect")})}})})(jQuery);;
//for custom select tag end

//for custom modal tag end
+function(t){"use strict";function e(e,o){return this.each(function(){var s=t(this),n=s.data("bs.modal"),a=t.extend({},i.DEFAULTS,s.data(),"object"==typeof e&&e);n||s.data("bs.modal",n=new i(this,a)),"string"==typeof e?n[e](o):a.show&&n.show(o)})}var i=function(e,i){this.options=i,this.$body=t(document.body),this.$element=t(e),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,t.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};i.VERSION="3.3.4",i.TRANSITION_DURATION=300,i.BACKDROP_TRANSITION_DURATION=150,i.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},i.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},i.prototype.show=function(e){var o=this,s=t.Event("show.bs.modal",{relatedTarget:e});this.$element.trigger(s),this.isShown||s.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',t.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){o.$element.one("mouseup.dismiss.bs.modal",function(e){t(e.target).is(o.$element)&&(o.ignoreBackdropClick=!0)})}),this.backdrop(function(){var s=t.support.transition&&o.$element.hasClass("fade");o.$element.parent().length||o.$element.appendTo(o.$body),o.$element.show().scrollTop(0),o.adjustDialog(),s&&o.$element[0].offsetWidth,o.$element.addClass("in").attr("aria-hidden",!1),o.enforceFocus();var n=t.Event("shown.bs.modal",{relatedTarget:e});s?o.$dialog.one("bsTransitionEnd",function(){o.$element.trigger("focus").trigger(n)}).emulateTransitionEnd(i.TRANSITION_DURATION):o.$element.trigger("focus").trigger(n)}))},i.prototype.hide=function(e){e&&e.preventDefault(),e=t.Event("hide.bs.modal"),this.$element.trigger(e),this.isShown&&!e.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),t(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),t.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",t.proxy(this.hideModal,this)).emulateTransitionEnd(i.TRANSITION_DURATION):this.hideModal())},i.prototype.enforceFocus=function(){t(document).off("focusin.bs.modal").on("focusin.bs.modal",t.proxy(function(t){this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus")},this))},i.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",t.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},i.prototype.resize=function(){this.isShown?t(window).on("resize.bs.modal",t.proxy(this.handleUpdate,this)):t(window).off("resize.bs.modal")},i.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop(function(){t.$body.removeClass("modal-open"),t.resetAdjustments(),t.resetScrollbar(),t.$element.trigger("hidden.bs.modal")})},i.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},i.prototype.backdrop=function(e){var o=this,s=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var n=t.support.transition&&s;if(this.$backdrop=t('<div class="modal-backdrop '+s+'" />').appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",t.proxy(function(t){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),n&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!e)return;n?this.$backdrop.one("bsTransitionEnd",e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION):e()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var a=function(){o.removeBackdrop(),e&&e()};t.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",a).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION):a()}else e&&e()},i.prototype.handleUpdate=function(){this.adjustDialog()},i.prototype.adjustDialog=function(){var t=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&t?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!t?this.scrollbarWidth:""})},i.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},i.prototype.checkScrollbar=function(){var t=window.innerWidth;if(!t){var e=document.documentElement.getBoundingClientRect();t=e.right-Math.abs(e.left)}this.bodyIsOverflowing=document.body.clientWidth<t,this.scrollbarWidth=this.measureScrollbar()},i.prototype.setScrollbar=function(){var t=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",t+this.scrollbarWidth)},i.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},i.prototype.measureScrollbar=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",this.$body.append(t);var e=t.offsetWidth-t.clientWidth;return this.$body[0].removeChild(t),e};var o=t.fn.modal;t.fn.modal=e,t.fn.modal.Constructor=i,t.fn.modal.noConflict=function(){return t.fn.modal=o,this},t(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(i){var o=t(this),s=o.attr("href"),n=t(o.attr("data-target")||s&&s.replace(/.*(?=#[^\s]+$)/,"")),a=n.data("bs.modal")?"toggle":t.extend({remote:!/#/.test(s)&&s},n.data(),o.data());o.is("a")&&i.preventDefault(),n.one("show.bs.modal",function(t){t.isDefaultPrevented()||n.one("hidden.bs.modal",function(){o.is(":visible")&&o.trigger("focus")})}),e.call(n,a,this)})}(jQuery);

//for select input resize below 630px screen
function selectInputResizer(){
	if ($(window).width() < 629) {		
		$(".xlarge_select, .medium_select, .large_select").css("width","100%");
		$(".xlarge_select, .medium_select, .large_select").parent(".customSelectWrapper").css("width","100%");		
		$(".hasEditButton").parent(".customSelectWrapper").css("max-width","calc(100% - 75px)");
		$(".hasEditButton").css("width","100%");	
		$("input.hasEditButton").css("width","calc(100% - 75px)");	
		$(".customSelectWrapper").find("select.hasEditButton").css("min-width","100%");						
	}
	else{
		$(".xlarge_select, .medium_select, .large_select").parent(".customSelectWrapper").css("width","auto");
		$(".hasEditButton").parent(".customSelectWrapper").css("width","100%");
		$(".modal-body").find(".hasEditButton:hidden").css("width","calc(100% - 75px)");
		$(".inputFileWrapper").find(".fileName span:even").css("width","calc(100% - 27px)");	
	}
}
$(window).on("orientationchange", selectInputResizer);
$(window).on("resize", selectInputResizer)
//for select input resize below 630px screen end
$('body').on('click.modal.data-api', '[data-toggle="modal"]', function ( e ) {
    $(".modal .select100").css("width","100%").parents(".customSelectWrapper").css("width","100%");
	$(".modal .numberInput100").css("width","100%").parents(".numberInputWrapper").css("width","100%");
	$(".modal .input100").css("width","100%");
	$(".modal .textarea100").css("width","100%");	
});
  
