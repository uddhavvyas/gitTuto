sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("zDemo.controller.View1", {
		onInit : function(){
			this._oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this._oRouter.getRoute("View1");
		},
		onClickRoute : function(){
			this._oRouter.navTo("View2");
		}
		

	});
});