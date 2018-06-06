$(() => {
	// OVERLAY
	overlayOn = () => $( '<div id="imagelightbox-overlay"></div>' ).appendTo( 'body' );
	overlayOff = () => $( '#imagelightbox-overlay' ).remove();
	// CLOSE BUTTON
	closeButtonOn = instance => $( '<button type="button" id="imagelightbox-close" title="Close"></button>' ).appendTo( 'body' ).on( 'click touchend', function(){ $( this ).remove(); instance.quitImageLightbox(); return false; });
	closeButtonOff = () => $( '#imagelightbox-close' ).remove();
	const selector = 'a[data-imagelightbox="a"]';
	const instance = $( selector ).imageLightbox({
			onStart:		function() { overlayOn(); closeButtonOn( instance ); },
			onEnd:			function() { overlayOff(); closeButtonOff();}
		});		
});
