/*jslint browser: true*/
/*global  window, localStorage, $*/
"use strict";
	var initialize = function () {
		var common = require('../common/modules/common').common(),
			dragDropControl = require('./modules/dragDropControl').dragDropControl(common);
			window.dragDropControl = dragDropControl;
	};
initialize();

