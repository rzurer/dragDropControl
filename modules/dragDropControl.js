"use strict";
exports.dragDropControl = function (common, eventListener) {
	var dropZone,
		stopPropagation = function (e) {
			if (e.stopPropagation) {
				e.stopPropagation();
			}
			try {
				e.returnValue = false;
			} catch (ex) {}
		},
		preventDefault = function (e) {
			if (e.preventDefault) {
				e.preventDefault();
			}
			try {
				e.returnValue = false;
			} catch (ex) {}
		},
		initEvent = function (event) {
			preventDefault(event);
			stopPropagation(event);
		},
		doDragOver = function (event) {
			initEvent(event);
		},
		doDragEnter = function (event) {
			initEvent(event);
			dropZone.addClass('hover');
		},
		doDragLeave = function (event) {
			initEvent(event);
			dropZone.removeClass('hover');
		},
		//getTargetImg = function (event) {
		//	return event.target.tagName.toLowerCase() !== 'img' ? event.target.firstChild : event.target;
		//},
		getRemoteSrc = function (event) {
			var src;
			src = event.dataTransfer.getData("text/x-moz-url");
			if (!src || src === 'undefined') {
				src = event.dataTransfer.getData("URL");
			}
			return src;
		},
		doDrop = function (event, imageSrcCallback) {
			var files, src;
			initEvent(event);
			//img =  getTargetImg(event);
			//img.width = 0;
			files = event.dataTransfer.files;
			if (files.length > 0) {
				//uploadLocalFileAndThumbnail(img, files, imageSrcCallback);
				dropZone.removeClass('hover');
				return;
			}
			src = getRemoteSrc(event);
			//saveThumbnail(img, src, null,  function () {
			//	dropZone.removeClass('hover');
			//	imageSrcCallback(img);
			//});
			dropZone.removeClass('hover');
		},
		initializeEvents = function (dropZone) {
			if (!dropZone) {
				return;
			}
			dropZone.addEventListener("dragover", doDragOver, true);
			dropZone.addEventListener("drop", doDrop, true);
			dropZone.addEventListener("dragenter", doDragEnter, true);
			dropZone.addEventListener("dragleave", doDragLeave, true);
		},
		that = {
			ready : function (control) {
				if (!control || !control.addClass) {
					throw "Drop zone must be a jQueryObject";
				}
				console.log(control.get(0));
				dropZone = control;
				initializeEvents(control.get(0));
			}

		};
	return that;
};



