$(document).ready(function(){

/////////////////////////// Menu qui apparait en haut quand le scroll remonte

(function(w,d,undefined){
	var el_html = d.documentElement,
		el_body = d.getElementsByTagName('body')[0],
		header = d.getElementById('header'),
		lastScroll = w.pageYOffset || el_body.scrollTop,

		menuIsStuck = function(triggerElement, wScrollTop, lastScroll) {
			var regexp		= /(nav\-is\-stuck)/i,
				classFound	= el_html.className.match( regexp ),
				navHeight	= header.offsetHeight,
				bodyRect	= el_body.getBoundingClientRect(),
				scrollValue	= triggerElement ? triggerElement.getBoundingClientRect().top - bodyRect.top - navHeight  : 800,
				scrollValFix = classFound ? scrollValue : scrollValue + navHeight;

			// if scroll down is 700 or more AND nav-is-stuck class doesn't exist AND we are going up
			if ( wScrollTop > scrollValFix && !classFound && wScrollTop < lastScroll ) {
				el_html.className = el_html.className + ' nav-is-stuck';
			}

			// if we are to high in the page AND nav-is-stuck class exists
			if ( classFound && wScrollTop > lastScroll ) {
				el_html.className = el_html.className.replace( regexp, '' );
			}

			// if we are at top of page AND nav-is-stuck class exists
			if ( classFound && wScrollTop < 110 ) {
				el_html.className = el_html.className.replace( regexp, '' );
			}
		},

		onScrolling = function() {
			var wScrollTop = w.pageYOffset || el_body.scrollTop;
			
			// use scroll datas as parameters…
			menuIsStuck( d.getElementById('main'), wScrollTop, lastScroll );
			
			// save current scroll as last scroll position
			lastScroll = wScrollTop;
			
		};


	el_html.className = el_html.className + ' js';

	// when you scroll, fire onScrolling() function
	w.addEventListener('scroll', function(){
		w.requestAnimationFrame( onScrolling );
	});


}(window, document));


/////////////////////////// hack de l'action buttondropdown qui ne donne les classes "dropdown-menu" et"dropdown-menu-right" à l'UL du 1er LI uniquement
 $( ".navbar-nav > li > ul" ).addClass( "dropdown-menu" );
 $( ".navbar-nav > li:first-child > ul" ).removeClass( "dropdown-menu-right" );
 $( ".navbar-nav > li:last-child > ul" ).addClass( "dropdown-menu-right" );
 


//////////// fonction servant à utiliser deux buttondropdown dans la même page pour que le clique sur le premier ferme le second et inversement
//////////// menutech c'est le bouton "roue crantée", menunav c'est le bouton menu du site qui ne sert qu'en mode smartphone

	$('.contenu').on('click', '.menutech button' , function() {
		if ($('.menunav').hasClass('open')) {
			$('.menunav').removeClass('open');
		}
		else if ($('.menunav ul.dropdown-menu > li').hasClass('sousmenu_ouvert')) {
			$('.menunav ul.dropdown-menu > li').removeClass('sousmenu_ouvert');
		}
		else {
		}
	});
	$('.contenu').on('click', '.menunav button' , function() {
		if ($('.menutech').hasClass('open')) {
			$('.menutech').removeClass('open');
		}
		else {
		}
	});

////////////////////////// fin finale
});