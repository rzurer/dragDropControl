/*jslint browser: true*/
/*global  window, localStorage, $*/
"use strict";
	var initialize = function () {
		var eventListener = require('../common/modules/eventListener').eventListener(),
			dragDropControl = require('./modules/dragDropControl').dragDropControl(eventListener);
			window.dragDropControl = dragDropControl;
	};
initialize();

