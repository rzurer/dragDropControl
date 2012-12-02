/*globals  $, window*/
"use strict";
var initializeModule = function () {
	var healthCheck = function (date) {
		$('.dragDropControlContainer').text(date);
	};
	$(function () {
		window.dragDropControl.heartbeat(healthCheck);
	});
};