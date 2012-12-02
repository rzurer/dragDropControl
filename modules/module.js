"use strict";
exports.module = function (common) {
	var that = {
			heartbeat : function (callback) {
				if (callback) {
					callback(common.getCurrentDate());
				}
			}
		};
	return that;
};