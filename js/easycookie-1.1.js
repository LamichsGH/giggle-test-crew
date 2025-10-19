/*
 * EasyCookie
 * https://www.21tools.it
 *
 */

"use strict";

(function($) {
	var acceptedCookie = function() {
		var now = new Date();
		var expires = parseInt($('#easyCookie').data('expiresdays'));
		if(!$.isNumeric(expires)) {
			expires = 180;
		}
		$.cookie('ec-accepted', now.toString(), { expires: expires, path: '/' });
		$('#easyCookie').fadeOut(500);
		loadBlockedScript();
	};

    $('#easyCookie .ec-accept').unbind('click');
	$('#easyCookie .ec-accept').on('click', function(e){
		e.preventDefault();
		acceptedCookie();
	});

	$(function(){
		if(!$.cookie('ec-accepted')) {
			$('#easyCookie').fadeIn(500);
			if($('#easyCookie').hasClass('ec-accept-on-scroll')) {
				$(window).on('scroll', function(){
					acceptedCookie();
					$(window).unbind('scroll');
				});
			}
	    } else {
	    	loadBlockedScript();
	    }
	});
}(jQuery));

function loadBlockedScript() {
	var scriptObjs = [];
	jQuery('script[data-blockscript]').each(function() {
		scriptObjs.push(jQuery(this));
	});
	for(var i = 0, script; script = scriptObjs[i]; i++) {
		var self = script;
		if(self.attr('src')) {
			jQuery.getScript(self.attr('src'), function(){});
		} else {
			self.attr('type', 'text/javascript');
			jQuery(self.data('blockscript')).append("<script type='text/javascript'>" + self.html().trim() + "</script>");
		}
	}
}
