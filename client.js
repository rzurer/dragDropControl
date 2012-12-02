/*jslint browser: true*/
/*global  window, localStorage, $*/
"use strict";
	var initialize = function () {
		var common = require('../common/modules/common').common(),
			module = require('./modules/module').module(common);
			window.module = module;
	};
initialize();

