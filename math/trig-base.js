


var TrigBase = {

	PI         : Math.PI,
	HALF_PI    : Math.PI / 2,
	THIRD_PI   : Math.PI / 3,
	QUARTER_PI : Math.PI / 4,
	TWO_PI     : Math.PI * 2,

	DEG_TO_RAD : Math.PI / 180,
	RAD_TO_DEG : 180 / Math.PI,


	/**
	 * Convert degree to radian, with resolve.
	 * 
	 * @param degree
	 * @return
	 */		
	degree2radian : function(degree) {
		return this.resolveDegree(degree) * this.DEG_TO_RAD;
	},


	
	/**
	 * Convert radian to degree, with resolve.
	 * 
	 * @param radian
	 * @return
	 */		
	radian2degree : function(radian) {
		return this.resolveDegree(radian * this.RAD_TO_DEG);
	},


	/**
	 * Resolve Degree
	 *
	 * Will always return a positive degree between 0 and 360.
	 * 
	 * @param  degree
	 * @return
	 */
	resolveDegree : function(degree) {
		var mod = degree % 360;
		return (mod < 0) ? 360 + mod : mod;
	},


	/**
	 * Get distance between two points.
	 * 
	 * @param startX
	 * @param startY
	 * @param endX
	 * @param endY
	 * @return
	 */
	getDistance : function(startX, startY, endX, endY) {
		var xd = startX	- endX;
		    yd = startY - endY;

		return Math.sqrt(xd * xd + yd * yd);
	},


	/**
	 * Get degree angle from two points.
	 * 
	 * @param startX
	 * @param startY
	 * @param endX
	 * @param endY
	 * @return
	 */	
	getDegree : function(startX, startY, endX, endY) {
		var r = Math.atan2(endY - startY, endX - startX);
		return this.radian2degree(r);
	},


	/**
	 * Get new point based on distance and degree from a given point.
	 * @note This is the revised <code>.getPointFromDistanceAndAngle()</code>.
	 * 
	 * @param startX
	 * @param startY
	 * @param dist
	 * @param degree
	 * @return
	 */		
	polar : function(startX, startY, dist, degree) {
		var rad = this.degree2radian(degree);
		return { x:startX + Math.cos(rad) * dist, y:startY + Math.sin(rad) * dist }
	}
}