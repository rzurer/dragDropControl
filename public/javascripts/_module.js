/*globals  $, window*/
"use strict";
var initializeModule = function () {
	var healthCheck = function (date) {
		$('.moduleContainer').text(date);
	};
	$(function () {
		window.module.heartbeat(healthCheck);
	});
};