sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/core/Fragment"
], function(Controller, MessageToast, Fragment) {
	"use strict";

	return Controller.extend("ZEicherGroup.controller.BuyersWindow", {
		onInit: function() {
				this._oMultiInput = this.getView().byId("gblSearch1");
			if (innerWidth > 1024) {
				var idGridHorizotal = this.getView().byId("idGridHorizotal").setVisible(true);
				var LgridHorizonatal = this.getView().byId("LgridHorizonatal").setVisible(true);
				var LgridDesktopSupplier = this.getView().byId("LgridDesktopSupplier").setVisible(true);
				var LgridDesktopBill = this.getView().byId("LgridDesktopBill").setVisible(true);
				var HboxDesktop = this.getView().byId("HboxDesktop").setVisible(true);
				var HboxDesktopSupplier = this.getView("HboxDesktopSupplier").setVisible(true);

				var LgridMobileBill = this.getView().byId("LgridMobileBill").setVisible(false);
				var idGridVertical = this.getView().byId("idGridVertical").setVisible(false);
				var LgridVertical = this.getView().byId("LgridVertical").setVisible(false);
				var LgridMobileSupplier = this.getView().byId("LgridMobileSupplier").setVisible(false);
				var VboxMobile = this.getView().byId("VboxMobile").setVisible(false);
				var VboxMobileSupplier = this.getView().byId("VboxMobileSupplier").setVisible(false);
			} else {

				var idGridVertical = this.getView().byId("idGridVertical").setVisible(true);
				var LgridVertical = this.getView().byId("LgridVertical").setVisible(true);
				var LgridMobileSupplier = this.getView().byId("LgridMobileSupplier").setVisible(true);
				var LgridMobileBill = this.getView().byId("LgridMobileBill").setVisible(true);
				var VboxMobile = this.getView().byId("VboxMobile").setVisible(true);
				var VboxMobileSupplier = this.getView().byId("VboxMobileSupplier").setVisible(true);

				var HboxDesktopSupplier = this.getView().byId("HboxDesktopSupplier").setVisible(false);
				var HboxDesktop = this.getView().byId("HboxDesktop").setVisible(false);
				var LgridDesktopBill = this.getView().byId("LgridDesktopBill").setVisible(false);
				var idGridHorizotal = this.getView().byId("idGridHorizotal").setVisible(false);
				var LgridHorizonatal = this.getView().byId("LgridHorizonatal").setVisible(false);
				var LgridDesktopSupplier = this.getView().byId("LgridDesktopSupplier").setVisible(false);
			}

			var query1 = this.getView().byId("gblSearch1");
			var query2 = this.getView().byId("gblSearch2");
			if (query1.getValue() === "" && query2.getSelectedKey() === "") {
				var oTable1 = this.getView().byId("idBuyerWindowTbl");
				oTable1.removeAllItems();
				var oTable2 = this.getView().byId("idPartLevelTbl");
				oTable2.removeAllItems();

			} else {
				var oModel = this.getOwnerComponent().getModel("BuyerSet");
				this.getView().setModel(oModel);
			}

		},

	/*	onValueHelpRequested: function(oEvent) {
			var oColModel = new sap.ui.model.json.JSONModel();
			var oModelPartCode = this.getOwnerComponent().getModel("CodeSet");
			
			oColModel.setData({
				"cols": [

					{
						"label": "Part Code",
						"template": "Part Code",
						"width": "5rem"
					}, {
						"label": "Part Name",
						"template": "Part Name Display"
					}

				]
			});
			
			var aCols = oColModel.getData().cols;
				Fragment.load({
				name: "ZEicherGroup.fragments.codes",
				controller: this
			}).then(function name(oFragment) {
				this._oValueHelpDialog = sap.ui.xmlfragment("ZEicherGroup.fragments.codes", this);
				this.getView().addDependent(this._oValueHelpDialog);

				this._oValueHelpDialog.getTableAsync().then(function (oTable) {
					oTable.setModel(oModelPartCode);
					oTable.setModel(oColModel, "columns");

					if (oTable.bindRows) {
						oTable.bindAggregation("rows", "/PartCodes");
					}

					if (oTable.bindItems) {
						oTable.bindAggregation("items", "/PartCodes", function () {
							return new sap.m.ColumnListItem({
								cells: aCols.map(function (column) {
									return new sap.m.Label({ text: "{" + column.template + "}" });
								})
							});
						});
					}
					this._oValueHelpDialog.update();
				}.bind(this));

				this._oValueHelpDialog.setTokens(this._oMultiInput.getTokens());
				this._oValueHelpDialog.open();
			}.bind(this));
			
		},
			onValueHelpOkPress: function (oEvent) {
			var aTokens = oEvent.getParameter("tokens");
			this._oMultiInput.setTokens(aTokens);
			this._oValueHelpDialog.close();
		},

		onValueHelpCancelPress: function () {
			this._oValueHelpDialog.close();
		},

		onValueHelpAfterClose: function () {
			this._oValueHelpDialog.destroy();
		},*/

		onLoad: function() {
			if (innerWidth > 1024) {
				var query1 = this.getView().byId("gblSearch1");
				//var query2 = this.getView().byId("gblSearch2");
				if (query1.getValue() === "") {
					MessageToast.show("Please Enter Part code or Plant ");
				} else {
					var oModel = this.getOwnerComponent().getModel("BuyerSet");
					this.getView().setModel(oModel);
					var txtpartDesktop = this.getView().byId("txtpartDesktop").setText(query1.getValue());
					var txtplantDesktop = this.getView().byId("txtplantDesktop").setText("Part Descreption Goes Here");
					var txtLLCDesktop = this.getView().byId("txtLLCDesktop").setText("LLC Class Goes Here");

					var SuppliernameText = this.getView().byId("SuppliernameText").setText("Supplier Name Goes Here");
					var addrText = this.getView().byId("addrText").setText("Supplier Address Goes Here");
					var emailText = this.getView().byId("emailText").setText("Supplier Email Goes Here");
					var phoneText = this.getView().byId("phoneText").setText("Supplier Phone Number Goes Here");
					var incoText = this.getView().byId("incoText").setText("Supplier Inco Terms Goes Here");
					var paymentText = this.getView().byId("paymentText").setText("Supplier Paymet Terms Goes Here");
				}

			} else {
				var query1 = this.getView().byId("gblSearchPhone");
				if (query1.getValue() === "") {
					MessageToast.show("Please Enter Part code or Plant ");
				} else {

					var oModel = this.getOwnerComponent().getModel("BuyerSet");
					this.getView().setModel(oModel);
					var txtpart = this.getView().byId("txtpart").setText(query1.getValue());
					var txtplant = this.getView().byId("txtplant").setText("Part Descreption Goes Here");
					var txtLLC = this.getView().byId("txtLLC").setText("LLC Class Goes Here");

					var SuppliernameText = this.getView().byId("SuppliernameText").setText("Supplier Name Goes Here");
					var addrText = this.getView().byId("addrText").setText("Supplier Address Goes Here");
					var emailText = this.getView().byId("emailText").setText("Supplier Email Goes Here");
					var phoneText = this.getView().byId("phoneText").setText("Supplier Phone Number Goes Here");
					var incoText = this.getView().byId("incoText").setText("Supplier Inco Terms Goes Here");
					var paymentText = this.getView().byId("paymentText").setText("Supplier Paymet Terms Goes Here");

				}
			}

		},
		onPressVendorStock: function(oEvent) {
			var oCommentLink = oEvent.getSource();
			if (!this._oPopover) {
				this._oPopover = sap.ui.xmlfragment(
					"ZEicherGroup.fragments.VendorStock",
					this
				);
				this.getView().addDependent(this._oPopover);
				this._oPopover.openBy(oCommentLink);

			} else {
				this._oPopover.openBy(oCommentLink);
			}

		},

		onPress: function(oEvent) {
			var oCommentLink = oEvent.getSource();
			if (!this._oPopover) {
				this._oPopover = sap.ui.xmlfragment(
					"ZEicherGroup.fragments.ScheduleQuantity",
					this
				);
				this.getView().addDependent(this._oPopover);
				this._oPopover.openBy(oCommentLink);

			} else {
				this._oPopover.openBy(oCommentLink);
			}
		},
		
		handleCloseButton: function(oEvent) {
			this._oPopover.close();
			if (this._oPopover) {
				this._oPopover.destroy();
				this._oPopover = null;
			}

		},

		onSearch: function(oEvt) {
			if (innerWidth > 1024) {

				var query1 = this.getView().byId("gblSearch1");
				var query2 = this.getView().byId("gblSearch2");
				var txtpart = this.getView().byId("txtpartDesktop");
				var txtplant = this.getView().byId("txtplantDesktop");
				txtpart.setText(query1.getValue());
				txtplant.setText(query2.getValue());

				query1 = this.getView().byId("gblSearch1").getValue();
				query2 = this.getView().byId("gblSearch2").getValue();
				var oFilter1, oFilter2;
				var allFilter = "";
				if (query1.length > 0 && query2.length > 0) {
					oFilter1 = new sap.ui.model.Filter("Part Code ", sap.ui.model.FilterOperator.EQ, query1);
					oFilter2 = new sap.ui.model.Filter("Plant Code", sap.ui.model.FilterOperator.Contains, query2);

					allFilter = new sap.ui.model.Filter([oFilter1, oFilter2], false);
				}

				var obinding1 = this.getView().byId("idBuyerWindowTbl").getBinding("items");
				var obinding2 = this.getView().byId("idPartLevelTbl").getBinding("items");
				var obinding3 = this.getView().byId("idGEUpdateTbl").getBinding("items");
				var obinding4 = this.getView().byId("idShipmentNotiTbl").getBinding("items");
				obinding1.filter(allFilter);
				obinding2.filter(allFilter);
				obinding3.filter(allFilter);
				obinding4.filter(allFilter);

			} else {
				var query1 = this.getView().byId("gblSearchPhone");
				var query2 = this.getView().byId("gblSearchPhone2");
				var txtpart = this.getView().byId("txtpart");
				var txtplant = this.getView().byId("txtplant");
				txtpart.setText(query1.getValue());
				txtplant.setText(query2.getValue());

				query1 = this.getView().byId("gblSearchPhone").getValue();
				query2 = this.getView().byId("gblSearchPhone2").getValue();
				var oFilter1, oFilter2;
				var allFilter = "";
				if (query1.length > 0 && query2.length > 0) {
					oFilter1 = new sap.ui.model.Filter("Part Code ", sap.ui.model.FilterOperator.EQ, query1);
					oFilter2 = new sap.ui.model.Filter("Plant Code", sap.ui.model.FilterOperator.Contains, query2);

					allFilter = new sap.ui.model.Filter([oFilter1, oFilter2], false);
				}

				var obinding1 = this.getView().byId("idBuyerWindowTbl").getBinding("items");
				var obinding2 = this.getView().byId("idPartLevelTbl").getBinding("items");
				var obinding3 = this.getView().byId("idGEUpdateTbl").getBinding("items");
				var obinding4 = this.getView().byId("idShipmentNotiTbl").getBinding("items");
				obinding1.filter(allFilter);
				obinding2.filter(allFilter);
				obinding3.filter(allFilter);
				obinding4.filter(allFilter);
			}

		},

		_handleValueHelpCompanyCode: function(oEvent) {
			var oModelPartCode = this.getOwnerComponent().getModel("CodeSet");
			this.getView().setModel(oModelPartCode);

			var sInputValuePartCode = oEvent.getSource().getValue();
			this.PartCodeId = oEvent.getSource().getId();

			if (!this._valueHelpDialogPartCode) {
				this._valueHelpDialogPartCode = sap.ui.xmlfragment(
					"ZEicherGroup.fragments.codes",
					this
				);
				this.getView().addDependent(this._valueHelpDialogPartCode);
			}
			this._valueHelpDialogPartCode.getBinding("items").filter([new sap.ui.model.Filter(
				"Part Code",
				sap.ui.model.FilterOperator.Contains, sInputValuePartCode
			)]);

			this._valueHelpDialogPartCode.open(sInputValuePartCode);

		},
		_handleValueHelpSearchPartCode: function(evt) {
			var query = evt.getParameter("value");
			if (query && query.length > 0) {
				var oFilter = new sap.ui.model.Filter(
					"Part Code",
					sap.ui.model.FilterOperator.Contains, query
				);
				var oFilter1 = new sap.ui.model.Filter(
					"Part Name Display",
					sap.ui.model.FilterOperator.Contains, query
				);
				var allFilter = new sap.ui.model.Filter([oFilter, oFilter1], false);
			}
			evt.getSource().getBinding("items").filter(allFilter);
		},
		_handleValueHelpClosePartCode: function(evt) {
			var oSelectedItem = evt.getParameter("selectedItem");

			if (oSelectedItem) {
				var CompanycodeInput = this.getView().byId(this.PartCodeId);
				CompanycodeInput.setValue(oSelectedItem.getDescription());

			}
			evt.getSource().getBinding("items").filter([]);
		},

		//end of fragment for part code------------------------------------------------------------------------

		_handleValueHelpPlantCode: function(oEvent) {
			var oModelPlantCode = this.getOwnerComponent().getModel("CodeSet");
			this.getView().setModel(oModelPlantCode);

			var sInputValuePlantCode = oEvent.getSource().getValue();
			this.PlantCodeId = oEvent.getSource().getId();

			if (!this._valueHelpDialogPlantCode) {
				this._valueHelpDialogPlantCode = sap.ui.xmlfragment(
					"ZEicherGroup.fragments.plantcode",
					this
				);
				this.getView().addDependent(this._valueHelpDialogPlantCode);
			}
			this._valueHelpDialogPlantCode.getBinding("items").filter([new sap.ui.model.Filter(
				"Plant Code",
				sap.ui.model.FilterOperator.Contains, sInputValuePlantCode
			)]);

			this._valueHelpDialogPlantCode.open(sInputValuePlantCode);

		},
		_handleValueHelpSearchPlantCode: function(evt) {
			var query = evt.getParameter("value");
			if (query && query.length > 0) {
				var oFilter = new sap.ui.model.Filter(
					"Plant Code",
					sap.ui.model.FilterOperator.Contains, query
				);
				var oFilter1 = new sap.ui.model.Filter(
					"Plant Name",
					sap.ui.model.FilterOperator.Contains, query
				);
				var allFilter = new sap.ui.model.Filter([oFilter, oFilter1], false);
			}
			evt.getSource().getBinding("items").filter(allFilter);
		},
		_handleValueHelpClosePlantCode: function(evt) {
			var oSelectedItem = evt.getParameter("selectedItem");

			if (oSelectedItem) {
				var CompanycodeInput = sap.ui.getCore().byId(this.PlantCodeId);
				CompanycodeInput.setValue(oSelectedItem.getDescription());

			}
			evt.getSource().getBinding("items").filter([]);
		},

		//end for fragment for plant code---------------------------------------------------------------------------------------

		_handleValueHelpSupplierCode: function(oEvent) {
			var oModelSupplierCode = this.getOwnerComponent().getModel("CodeSet");
			this.getView().setModel(oModelSupplierCode);

			var sInputValueSupplierCode = oEvent.getSource().getValue();
			this.SupplierCodeId = oEvent.getSource().getId();

			if (!this._valueHelpDialogSupplierCode) {
				this._valueHelpDialogSupplierCode = sap.ui.xmlfragment(
					"ZEicherGroup.fragments.suppliercode",
					this
				);
				this.getView().addDependent(this._valueHelpDialogSupplierCode);
			}
			this._valueHelpDialogSupplierCode.getBinding("items").filter([new sap.ui.model.Filter(
				"Supplier Code",
				sap.ui.model.FilterOperator.Contains, sInputValueSupplierCode
			)]);

			this._valueHelpDialogSupplierCode.open(sInputValueSupplierCode);

		},
		_handleValueHelpSearchSupplierCode: function(evt) {
			var query = evt.getParameter("value");
			if (query && query.length > 0) {
				var oFilter = new sap.ui.model.Filter(
					"Supplier Code",
					sap.ui.model.FilterOperator.Contains, query
				);
				var oFilter1 = new sap.ui.model.Filter(
					"Supplier Name",
					sap.ui.model.FilterOperator.Contains, query
				);
				var allFilter = new sap.ui.model.Filter([oFilter, oFilter1], false);
			}
			evt.getSource().getBinding("items").filter(allFilter);
		},
		_handleValueHelpCloseSupplierCode: function(evt) {
			var oSelectedItem = evt.getParameter("selectedItem");

			if (oSelectedItem) {
				var CompanycodeInput = sap.ui.getCore().byId(this.SupplierCodeId);
				CompanycodeInput.setValue(oSelectedItem.getDescription());

			}
			evt.getSource().getBinding("items").filter([]);
		}

	});
});