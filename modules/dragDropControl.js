"use strict";
exports.dragDropControl = function (eventListener) {
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
		doDrop = function (event) {
			var files, url;
			initEvent(event);
			files = event.dataTransfer.files;
			if (files.length > 0) {
				eventListener.fire('fileDropped', [files]);
				dropZone.removeClass('hover');
				return;
			}
			url = event.dataTransfer.getData("text/x-moz-url");
			if (!url || url === 'undefined') {
				url = event.dataTransfer.getData("URL");
			}
			eventListener.fire('urlDropped', [url]);
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
				dropZone = control;
				initializeEvents(control.get(0));
			},
			addListener : function (type, listener) {
				eventListener.addListener(type, listener);
			},
			removeListener : function (type, listener) {
				eventListener.removeListener(type, listener);
			}
		};
	return that;
};



/*
//uploadLocalFileAndThumbnail(img, files, imageSrcCallback);
/img =  getTargetImg(event);
//img.width = 0;
src = getRemoteSrc(event);
console.log("src ", src);
//saveThumbnail(img, src, null,  function () {
//	dropZone.removeClass('hover');
//	imageSrcCallback(img);
//});
		// getTargetImg = function (event) {
		// 	return event.target.tagName.toLowerCase() !== 'img' ? event.target.firstChild : event.target;
		// },
,*/