/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'Kite_piter_icons\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-arrow_down': '&#xe617;',
		'icon-arrow_up': '&#xe618;',
		'icon-arrow_2': '&#xe616;',
		'icon-vk': '&#xe600;',
		'icon-facebook': '&#xe603;',
		'icon-arrow': '&#xe606;',
		'icon-arrow_legend': '&#xe607;',
		'icon-btn_paginator_banner': '&#xe608;',
		'icon-btn_paginator_banner_hower': '&#xe609;',
		'icon-clock': '&#xe60a;',
		'icon-close': '&#xe60b;',
		'icon-dollar': '&#xe60c;',
		'icon-facebook2': '&#xe60d;',
		'icon-icon_i': '&#xe60e;',
		'icon-icon_legend': '&#xe60f;',
		'icon-icon_legend_2': '&#xe611;',
		'icon-search': '&#xe613;',
		'icon-vk5': '&#xe614;',
		'icon-zoom': '&#xe615;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
