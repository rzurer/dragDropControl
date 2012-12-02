"use strict";
exports.dragDropControl = function (common) {
	var that = {
			heartbeat : function (callback) {
				if (callback) {
					callback(common.getCurrentDate());
				}
			}
		};
	return that;
};