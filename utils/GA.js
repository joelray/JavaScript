
/**
 * GA - Google Analytics
 * 
 */
var GA = (function() {

	// PROPERTIES
	var _pageID = null;


	// ===================================================================================
	// CONSTRUCTOR -----------------------------------------------------------------------

	function GA {
		// nothin'
	}


	// ===================================================================================
	// PUBLIC INTERFACE ------------------------------------------------------------------

	GA.prototype.setPageID = function(id) {
		_pageID = id;
	}


	GA.prototype.trackEvent = function() {
		var args = Array.prototype.slice.apply(arguments);
		var trackArgs = ['_trackEvent'].concat(args);
		_gaq.push(trackArgs);
	}


	return GA;

})();