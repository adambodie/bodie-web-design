$(function() {
	// OVERLAY
	overlayOn = function(){
				$( '<div id="imagelightbox-overlay"></div>' ).appendTo( 'body' );
	},
	overlayOff = function(){
			$( '#imagelightbox-overlay' ).remove();
	},
	// CLOSE BUTTON
	closeButtonOn = function( instance ){
		$( '<button type="button" id="imagelightbox-close" title="Close"></button>' ).appendTo( 'body' ).on( 'click touchend', function(){ $( this ).remove(); instance.quitImageLightbox(); return false; });
	},
	closeButtonOff = function(){
		$( '#imagelightbox-close' ).remove();
	}
	var selector = 'a[data-imagelightbox="a"]';
	var instance = $( selector ).imageLightbox({
			onStart:		function() { overlayOn(); closeButtonOn( instance ); },
			onEnd:			function() { overlayOff(); closeButtonOff();}
		});		
});
