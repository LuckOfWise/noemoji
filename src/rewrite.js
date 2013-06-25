targets = new Array(":)", ":(",":D","8-)",":o",";)",";(","(sweat)",":|",":*",":p","(blush)",":^)","|-)","(inlove)","]:)","(talk)","(yawn)","(puke)","(emo)","8-|",":#)","(nod)","(shake)","(^^;)","(whew)","(clap)","(bow)","(roger)","(flex)","(dance)","(:/)","(devil)","(*)","(h)","(F)","(cracker)","(^)","(coffee)","(beer)","(handshake)","(y)");

$.each(targets, function() {
	var target = "img[alt='" + this + "']";
	$(target).each(function() {
	    var alt = $(this).attr('alt');
	    $(this).after(alt);
	    $(this).remove();
	});
});
