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
          
           
            //var iconTabBarID = this.getView().byId("data_Form").getItems();
            // var iconTabBarCluster = this.getView().byId("data_Clusterhead").getItems();
            // var iconTabBarBFM = this.getView().byId("data_BFM").getItems();
            // var iconTabBarAprrover = this.getView().byId("data_approver").getItems();
            // var iconTabBarReject = this.getView().byId("data_Reject").getItems();
            // var iconTabBarPenAppr = this.getView().byId("data_Pending_Approver").getItems();

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
        },
        _onObjectMatched: function(){
			
		},
        
        onAfterRendering: function(){
          
            var oList = this.getView().byId("idList");
               var oLconTabBarCluster = this.getView().byId("idListClusterhead");
            var oLconTabBarBFM = this.getView().byId("idListBFM");
            var oLiconTabBarAprrover = this.getView().byId("idListApproved");
            var oLiconTabBarReject = this.getView().byId("idListReject");
            var oLiconTabBarPenAppr = this.getView().byId("idPending_Approval");

            function updateListLength() {
                var length = {
                    data_length: oList.getItems().length,
                    data_Cluster : oLconTabBarCluster.getItems().length,
                    data_BFM : oLconTabBarBFM.getItems().length,
                    data_Aprrover : oLiconTabBarAprrover.getItems().length,
                    data_Reject : oLiconTabBarReject.getItems().length,
                    data_PenAppr : oLiconTabBarPenAppr.getItems().length
                    
                };
                var oModel = new sap.ui.model.json.JSONModel(length);
                this.getView().setModel(oModel, "counterlength");
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
           
            var iconTabBarID = this.getView().byId("data_Form").getItems();
            var iconTabBarCluster = this.getView().byId("data_Clusterhead").getItems();
            var iconTabBarBFM = this.getView().byId("data_BFM").getItems();
            var iconTabBarAprrover = this.getView().byId("data_approver").getItems();
            var iconTabBarReject = this.getView().byId("data_Reject").getItems();
            var iconTabBarPenAppr = this.getView().byId("data_Pending_Approver").getItems();

            var List_ = this.getView().byId("idList").getItems().length;
            var List_Cluster = this.getView().byId("idListClusterhead").getItems().length;
            var List_BFM = this.getView().byId("idListBFM").getItems().length;
            var List_App = this.getView().byId("idListApproved").getItems().length;
            var List_Rej = this.getView().byId("idListReject").getItems().length;
            var List_PenApp = this.getView().byId("idPending_Approval").getItems().length;
            this._updateTabCounts();
            
        },
        _updateTabCounts: function(){
            var iconTabBarID = this.getView().byId("data_Form").getItems();
            if(iconTabBarID === 0){
                this.getView().byId("data_Pending_Approver").setVisible(false);
            }else{
                this.getView().byId("data_Pending_Approver").setVisible(true);
            }
            
        },
        // onChange: function (oEvent) {
        //     var sSelectedTabId = oEvent.getParameters().id;
        //     // var oSelectedItem = oEvent.getParameter("listItem") || oEvent.getSource();
        //     // if (!oSelectedItem) {
        //     //     return;
        //     // }
        //     // var oBindingContext = oSelectedItem.getBindingContext();
        //      var oList = oEvent.getSource();
        //     var oSelectedItem = oEvent.getParameter("listItem") || oEvent.getSource();
        //      var oBindingContext = oSelectedItem.getBindingContext();
        //     // this._sSelectedItemPath = oBindingContext.getPath();
        //     // var oSelectedData = oBindingContext.getObject();
        //     // var oView = this.getView();
        //     // oView.getModel("predictionModelData").setData(oSelectedData);
        //     // oView.getModel("predictionModelData").updateBindings();
        //     var sPONumber = oBindingContext.getProperty("PONumber");
        //     var sVendorName = oBindingContext.getProperty("VendorName");
        //     var sPOValue = oBindingContext.getProperty("POValue");
        //     var sPOValueCurrency = oBindingContext.getProperty("POCurrency");
        //     var sVendorCode = oBindingContext.getProperty("Vendor");
        //     var sSavingStartDate = oBindingContext.getProperty("StartDate");
        //     var sSavingEndDate = oBindingContext.getProperty("EndDate");
            
       
        //     var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        //     oRouter.navTo("wiprographForm", {
        //         PONumber: sPONumber,
        //         VendorName: sVendorName,
        //         POValue: sPOValue,
        //         POCurrency: sPOValueCurrency,
        //         Vendor: sVendorCode,
        //         StartDate: sSavingStartDate,
        //         EndDate: sSavingEndDate,
        //         tabId: sSelectedTabId // Pass the selected tab ID as parameter
        //       // Pass the action as a parameter
        //     });
        // },
        
        onListItemSelect: function(oEvent){
            var sSelectedTabId = oEvent.getParameters().id;
            // var oList = oEvent.getSource();
            // var oSelectedItem = oEvent.getParameter("listItem") || oEvent.getSource();
            //  var oBindingContext = oSelectedItem.getBindingContext();
            var oSelectedItem = oEvent.getSource();
            var oSelectedItem = oEvent.getParameter("listItem") || oEvent.getSource();
            var oBindingContext = oSelectedItem.getBindingContext();
            var oSelectedData = oBindingContext.getObject();
            var sPONumber = oBindingContext.getProperty("PONumber");
            var sVendorName = oBindingContext.getProperty("VendorName");
            var sPOValue = oBindingContext.getProperty("POValue");
            var sPOValueCurrency = oBindingContext.getProperty("POCurrency");
            var sVendorCode = oBindingContext.getProperty("Vendor");
            var sSavingStartDate = oBindingContext.getProperty("StartDate");
            var sSavingEndDate = oBindingContext.getProperty("EndDate");
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("wiprographForm", {
                
                PONumber: sPONumber,
                VendorName: sVendorName,
                POValue: sPOValue,
                POCurrency: sPOValueCurrency,
                Vendor: sVendorCode,
                StartDate: sSavingStartDate,
                EndDate: sSavingEndDate,
                tabId: sSelectedTabId 
            }, false); // false means no hash change
        }
    });
});
