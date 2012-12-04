/*globals  $, window*/
"use strict";
var noImageSrc = 'images/dropImageHere.png',
	onFileDropped = function (files) {
		$('#dropImage').attr("src", noImageSrc);
	},
	onUrlDropped = function (url) {
		$('#dropImage').attr("src", url && url.length > 0 ? url : noImageSrc);
		$('#dropImage').css("width", '300px');
	},
	ready = function () {
		$(function () {
			var dragDropControl = window.dragDropControl;
			$('#dropImage').attr("src", noImageSrc);
			dragDropControl.ready($('.dragDropControlContainer'));
			dragDropControl.addListener('fileDropped', onFileDropped);
			dragDropControl.addListener('urlDropped', onUrlDropped);
		});
	};