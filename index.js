module.exports = function(el){

	var style = getComputedStyle(el);
	var height = el.offsetHeight;
	var width = el.offsetWidth;

	var outerHeight = height + parseInt(style.marginTop) + parseInt(style.marginBottom);
	var outerWidth = height + parseInt(style.marginLeft) + parseInt(style.marginRight);

	return {
		width:width,
		height:height,
		outerWidth:outerWidth,
		outerHeight:outerHeight
	}

};