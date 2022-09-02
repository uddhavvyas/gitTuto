sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
<<<<<<< HEAD
	"ZEicherGroup/model/models"
], function(UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("ZEicherGroup.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);
=======
	"zDemo/model/models"
], function(UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("zDemo.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);
			
			this._oRouter.initialize();
>>>>>>> branch 'eicher' of https://github.com/uddhavvyas/gitTuto.git

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		}
	});
});
