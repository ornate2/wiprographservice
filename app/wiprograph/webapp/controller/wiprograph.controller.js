sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "com/wipro/wiprograph/Format/formatter",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/TooltipBase",
    "sap/ui/core/UIComponent",
    "sap/ui/base/DataType"
],
function (Controller, formatter, JSONModel, TooltipBase, UIComponent, DataType) {
    "use strict";
    var that;
    var oGModel;
    formatter: formatter
    return Controller.extend("com.wipro.wiprograph.controller.wiprograph", {
       
        onInit: function () {
            that = this;
            that.oGModel = this.getOwnerComponent().getModel("oGModel");
          
           
            var iconTabBarID = this.getView().byId("data_Form").getItems();
            var iconTabBarCluster = this.getView().byId("data_Clusterhead").getItems();
            var iconTabBarBFM = this.getView().byId("data_BFM").getItems();
            var iconTabBarAprrover = this.getView().byId("data_approver").getItems();
            var iconTabBarReject = this.getView().byId("data_Reject").getItems();
            var iconTabBarPenAppr = this.getView().byId("data_Pending_Approver").getItems();

            this.getOwnerComponent().getRouter().getRoute("wiprograph").attachPatternMatched(this._onObjectMatched, this);

            var iconTabBarID = this.getView().byId("data_Form");
            var oView = this.getView();
            oView.setModel(sap.ui.getCore().getModel("oPredictionModel"), "oPredictionModelData");

            // var oList = oView.byId("idListClusterhead");
            // oList.bindItems({
            //     path: "oPredictionModelData>/SavingsPOSet",
            //     template: new sap.m.StandardListItem({
            //         title: "{oPredictionModelData>PONumber}",
            //         description: "{oPredictionModelData>VendorName}",
            //         info: "{oPredictionModelData>POCurrency} - {oPredictionModelData>POValue}"
            //     })
          //this.onReadPoData();
        },
        _onObjectMatched: function(){
			
		},
        // onReadPoData: function(){
        //     var oModelData = this.getOwnerComponent().getModel();
        //     var oJSONModel = new sap.ui.model.json.JSONModel();
        //     oModelData.read("/SavingsDataSet", {
        //         success: function(response){
        //             var processedData = response.results.map(function(item) {
        //                 if (item.POValue) {
        //                     item.POValue = Math.floor(Number(item.POValue)).toString().split('')[0]
        //                 }
        //                 return item;
        //             });
        //             oJSONModel.setData(processedData);
        //             this.getView().setModel(oJSONModel, "PoDataModel");
        //         }.bind(this),
        //         error: function(error){

        //         }
        //     })
        //    },
        onAfterRendering: function() {
            var oList = this.getView().byId("idList");
            var oLconTabBarCluster = this.getView().byId("idListClusterhead");
            var oLconTabBarBFM = this.getView().byId("idListBFM");
            var oLiconTabBarAprrover = this.getView().byId("idListApproved");
            var oLiconTabBarReject = this.getView().byId("idListReject");
            var oLiconTabBarPenAppr = this.getView().byId("idPending_Approval");
        
            function updateListLength() {
                var length = {
                    data_length: oList.getItems().length,
                    data_Cluster: oLconTabBarCluster.getItems().length,
                    data_BFM: oLconTabBarBFM.getItems().length,
                    data_Aprrover: oLiconTabBarAprrover.getItems().length,
                    data_Reject: oLiconTabBarReject.getItems().length,
                    data_PenAppr: oLiconTabBarPenAppr.getItems().length
                };
                var oModel = new sap.ui.model.json.JSONModel(length);
                this.getView().setModel(oModel, "counterlength");
        
                // Set visibility based on list length
                // this.getView().byId("data_Form").setVisible(length.data_length > 0);
                // this.getView().byId("data_Clusterhead").setVisible(length.data_Cluster > 0);
                // this.getView().byId("data_BFM").setVisible(length.data_BFM > 0);
                // this.getView().byId("data_approver").setVisible(length.data_Aprrover > 0);
                // this.getView().byId("data_Reject").setVisible(length.data_Reject > 0);
                // this.getView().byId("data_Pending_Approver").setVisible(length.data_PenAppr > 0);
            }
        
            // Call the function to update the model after the view is rendered
            updateListLength.call(this);
        
            // Optionally, if your list items might change dynamically, you can listen for changes and update the model accordingly
            oList.attachEvent("updateFinished", updateListLength.bind(this));
            oLconTabBarCluster.attachEvent("updateFinished", updateListLength.bind(this));
            oLconTabBarBFM.attachEvent("updateFinished", updateListLength.bind(this));
            oLiconTabBarAprrover.attachEvent("updateFinished", updateListLength.bind(this));
            oLiconTabBarReject.attachEvent("updateFinished", updateListLength.bind(this));
            oLiconTabBarPenAppr.attachEvent("updateFinished", updateListLength.bind(this));
        },
        
        
        onListItemSelect: function(oEvent){
            var sSelectedTabId = oEvent.getParameters().id;
            // var oList = oEvent.getSource();
            // var oSelectedItem = oEvent.getParameter("listItem") || oEvent.getSource();
            //  var oBindingContext = oSelectedItem.getBindingContext();
            var oSelectedItem = oEvent.getSource();
            var oSelectedItem = oEvent.getParameter("listItem") || oEvent.getSource();
            var oBindingContext = oSelectedItem.getBindingContext();
            var sPath = oBindingContext.getPath();
         //   var oSelectedData = sPath.getObject();
            var sPONumber = oBindingContext.getProperty("PONumber");
            var sVendorName = oBindingContext.getProperty("VendorName");
            var sPOValue = oBindingContext.getProperty("POValue");
            var sPOValueCurrency = oBindingContext.getProperty("POCurrency");
            var sVendorCode = oBindingContext.getProperty("Vendor");
            var sSavingStartDate = oBindingContext.getProperty("StartDate");
            var sSavingEndDate = oBindingContext.getProperty("EndDate");
          //  var sBuyer = oBindingContext.getProperty("Buyer");
         //   var sRegion = oBindingContext.getProperty("Buyer");
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("wiprographForm", {
                
                PONumber: sPONumber,
                VendorName: sVendorName,
                POValue: sPOValue,
                POCurrency: sPOValueCurrency,
                Vendor: sVendorCode,
                StartDate: sSavingStartDate,
                EndDate: sSavingEndDate,
                //Buyer: sBuyer,
                // Region: sRegion,
                tabId: sSelectedTabId 
            }, false); // false means no hash change
        }
    });
});
