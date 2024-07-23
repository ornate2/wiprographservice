sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/m/Dialog",
    "sap/ui/core/TooltipBase",
    "sap/ui/core/UIComponent",
    "sap/ui/base/DataType",
    "com/wipro/wiprograph/utils/FinancialUtils"

],
function (Controller, MessageToast, JSONModel, Dialog, TooltipBase, UIComponent, DataType, FinancialUtils) {
    "use strict";
    var that,oGModel;
    return Controller.extend("com.wipro.wiprograph.controller.wiprographForm", {
        onInit: function () {
          that = this;
	that.oGModel = this.getOwnerComponent().getModel("oGModel");
          
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.getRoute("wiprographForm").attachPatternMatched(this._onObjectMatched, this);
            var data = {
                "Tabledetails":[{
                  "Quarter": "Q4-2024",
                  "Saving": "",
                  },
                  {
                    "Quarter": "Q1-2025",
                    "Saving": "",
                    }],
              "clusterdetails": [
                          {"Cluster": "Acquired Entity" },
                          { "Cluster": "CIS & PASS"  },
                          {"Cluster": "CIS & PASS - APMEA" },
                          {"Cluster": "Geo Spend" },
                          {"Cluster": "Global Ops"   },
                          {"Cluster": "IBU"},
                          {"Cluster": "IMG"},
                          { "Cluster": "Manpower Contracting"},
                          { "Cluster": "Support Services"},
                          { "Cluster": "Training & Recruitment" }
                        ],
                "Categorydetails": [
                          {"Category": "Alight" },
                          {"Category": "Appirio"},
                          {"Category": "ATCO" },
                          { "Category": "CIS"},
                          {"Category": "Civil" },
                          {"Category": "Facilities Management"},
                          {"Category": "GIMS" },
                          { "Category": "Hopitality"},
                          {"Category": "HPS" },
                          {"Category": "HRSS"},
                          {"Category": "IBU ITS India" },
                          { "Category": "IBU Trading (SI) India"},
                          {"Category": "IBU-ESLO" },
                          {"Category": "Insurance"},
                          {"Category": "International operations" },
                          { "Category": "IPT"},
                           {"Category": "IT Hardware" },
                          {"Category": "IT Software"},
                          {"Category": "Legal" },
                          { "Category": "Logistics Services"},
                          {"Category": "ME ITS" },
                          { "Category": "ME SI"},
                          {"Category": "Non Technical Contracting" },
                          { "Category": "Opus"},
                          {"Category": "PASS" },
                          { "Category": "Professional Consulting"},
                          { "Category": "Recruitment"},
                          { "Category": "Rental - India"},
                          { "Category": "Rental - Outside India"},
                          { "Category": "Service - Marketing"},
                          { "Category": "Service - Telecom"},
                          { "Category": "Technical Contracting"},
                          { "Category": "Training"},
                          { "Category": "Transportation"},
                          { "Category": "Travel"},
                          { "Category": "ITI"},
                          { "Category": "Infocrossing"},
                          { "Category": "Metro"},
                          { "Category": "4C"},
                          { "Category": "Topcoder"},
                          { "Category": "Leanswift"},
                          { "Category": "Rational"}
                        ],
           "CreateSavingdetails": [
                          {
                            "CreateDetails": "001" ,
                            "CreateSaving": "PO"   
                          },
                          {
                            "CreateDetails": "002",
                            "CreateSaving": "PO"  
                          },
                          {
                            "CreateDetails": "004",
                            "CreateSaving": "PO"  
                          },
                          {
                            "CreateDetails": "005",
                            "CreateSaving": "PO"  
                          }
                        ], 
            "SavingTypedetails":  [
                          {
                            "SavingType": "Cost Avoidance" },
                          {
                            "SavingType": "Ledger Impact"}  
                          ],
             "QuatedCurrdetails":  [
                            {
                              "Currency": "USD",
                              "Rate": 1 },
                            {
                              "Currency": "INR",
                              "Rate": 83.63} ,
                              {
                                "Currency": "CAD",
                                "Rate": 1.38},
                                {
                                  "Currency": "GBP",
                                  "Rate": 0.77}    
                            ]
              };
              var oModel = new sap.ui.model.json.JSONModel(data);
              this.getView().setModel(oModel, "TableModel");
            this.getView().byId("POValue_").attachBrowserEvent("keydown", function(oEvent) {
                var key = oEvent.charCode || oEvent.keyCode || 0;
                return(key == 8 || key == 9 || key == 13 || key == 46 || key == 110 || key == 190 || (key >= 35 && key <= 40) || (key >= 48 && key <= 57) || (key >= 96 && key <= 105));
              });
              this.getView().byId("Quated").attachBrowserEvent("keydown", function(oEvent) {
                var key = oEvent.charCode || oEvent.keyCode || 0;
                return(key == 8 || key == 9 || key == 13 || key == 46 || key == 110 || key == 190 || (key >= 35 && key <= 40) || (key >= 48 && key <= 57) || (key >= 96 && key <= 105));
              });
              this.getView().byId("Order_Value").attachBrowserEvent("keydown", function(oEvent) {
                var key = oEvent.charCode || oEvent.keyCode || 0;
                return(key == 8 || key == 9 || key == 13 || key == 46 || key == 110 || key == 190 || (key >= 35 && key <= 40) || (key >= 48 && key <= 57) || (key >= 96 && key <= 105));
              });
              this.getView().byId("La_po_no").attachBrowserEvent("keydown", function(oEvent) {
                var key = oEvent.charCode || oEvent.keyCode || 0;
                return(key == 8 || key == 9 || key == 13 || key == 46 || key == 110 || key == 190 || (key >= 35 && key <= 40) || (key >= 48 && key <= 57) || (key >= 96 && key <= 105));
              });
              this.getView().byId("po_value").attachBrowserEvent("keydown", function(oEvent) {
                var key = oEvent.charCode || oEvent.keyCode || 0;
                return(key == 8 || key == 9 || key == 13 || key == 46 || key == 110 || key == 190 || (key >= 35 && key <= 40) || (key >= 48 && key <= 57) || (key >= 96 && key <= 105));
              });
    
    
              this.getView().byId("PODate_").setValue("20240102");
              
              this.getView().byId("Region").setValue("PO Plant Country");
             // Retrieve the Date objects from the input fields
          
             
             
              // for saving percentage
              var input01 = this.getView().byId("Quated");
              var input02 = this.getView().byId("Order_Value");
              var input03 = this.getView().byId("po_Savings_auto");
              
              var iValue1 = parseFloat(input01.getValue());
              var iValue2 = parseFloat(input02.getValue());
             if (!isNaN(iValue1) && !isNaN(iValue2) && iValue2 !== 0) {
               // Calculate percentage difference
               var iDifference = iValue1 - iValue2;
               this.getView().byId("po_Savings").setValue(iDifference);
               var iPercentageDifference = (iDifference / iValue1) * 100;
               input03.setValue(iPercentageDifference.toFixed(2) + "%");
           } else {
               // Handle invalid input or zero division
               input03.setValue("");
           }
          //  for binding a time and date+
           var oCurrentTimeModel = new JSONModel({
            currentTime: new Date().toLocaleString()
        });
        this.getView().setModel(oCurrentTimeModel, "currentTime");
           this.getView().byId("Remarks_Fields").setValue("");

           
        },
        
      //   formatDate: function(date) {
      //     if (!date || Object.prototype.toString.call(date) !== "[object Date]" || isNaN(date.getTime())) {
      //         return null;
      //     }

      //     const day = ("0" + date.getDate()).slice(-2);
      //     const month = ("0" + (date.getMonth() + 1)).slice(-2);
      //     const year = date.getFullYear();

      //     return `${day}/${month}/${year}`;
      // },
        onAfterRendering: function() {
          // Call the superclass' onAfterRendering first
          if (sap.ui.core.mvc.Controller.prototype.onAfterRendering) {
              sap.ui.core.mvc.Controller.prototype.onAfterRendering.apply(this, arguments);
          }
      
          // Your logic for handling dates and table visibility
          // var startDate = this.getView().byId("Saving_start").getDateValue();
          // var endDate = this.getView().byId("Saving_End").getDateValue();
      
          // if (startDate && endDate) { // Check if dates are valid
          //     var diff = Math.abs(startDate.getTime() - endDate.getTime());
          //     var diffD = Math.ceil(diff / (1000 * 60 * 60 * 24)); // Difference in days
      
          //     var table = this.getView().byId("table_column");
      
          //     if (diffD === 90) {
          //         table.setVisibleRowCount(1);
          //         table.setVisible(true);
          //     } else if (diffD >= 91 && diffD <= 179) {
          //         table.setVisibleRowCount(2);
          //         table.setVisible(true);
          //     } else if (diffD >= 180 && diffD <= 269) {
          //         table.setVisibleRowCount(3);
          //         table.setVisible(true);
          //     } else if (diffD >= 270 && diffD <= 359) {
          //         table.setVisibleRowCount(4);
          //         table.setVisible(true);
          //     } else {
          //         // Handle other cases or set default behavior
          //         table.setVisibleRowCount(0); // Hide the table or set to default state
          //         table.setVisible(false);
          //     }
          // } else {
          //     // Handle case where dates are not valid
          //     console.error("Invalid dates selected");
          // }

         
      },
        handleNavBack: function(){
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("wiprograph");
            
        },
          onPOValueChange: function(){
            var oInput = oEvent.getSource();
            var sValue = oInput.getValue();
    
            // Format the input value
            var sFormattedValue = formatInput(sValue);
    
            // Set the formatted value back to the input
            oInput.setValue(sFormattedValue);
          },
          
          handleUploadComplete: function(oEvent) {
            var sResponse = oEvent.getParameter("response"),
              aRegexResult = /\d{4}/.exec(sResponse),
              iHttpStatusCode = aRegexResult && parseInt(aRegexResult[0]),
              sMessage;
      
            if (sResponse) {
              sMessage = iHttpStatusCode === 200 ? sResponse + " (Upload Success)" : sResponse + " (Upload Error)";
              MessageToast.show(sMessage);
            }
          },
      //     onCalculatePercentageDifference: function(){
      //       var input01 = this.getView().byId("Quated");
      //       var input02 = this.getView().byId("Order_Value");
      //       var input03 = this.getView().byId("po_Savings_auto");
      //       var iValue1 = parseFloat(input01.getValue());
      //       var iValue2 = parseFloat(input02.getValue());
      //      if (!isNaN(iValue1) && !isNaN(iValue2) && iValue2 !== 0) {
      //        // Calculate percentage difference
      //        var iDifference = iValue1 - iValue2;
      //        this.getView().byId("po_Savings").setValue(iDifference);
      //        var iPercentageDifference = (iDifference / iValue1) * 100;
      //        input03.setValue(iPercentageDifference.toFixed(2) + "%");
      //    } else {
      //        // Handle invalid input or zero division
      //       console.log("no value provide in quated and order")
      //    }
      // },
           _onObjectMatched: function (oEvent) {
            
            var oView = this.getView();
           
            oView.byId("btn_Approval").setVisible(false);
            oView.byId("btn_Reject").setVisible(false);
            oView.byId("_btnSubmit").setVisible(false);
            oView.byId("_btnSave").setVisible(false);
            oView.byId("btn_Cancel").setVisible(false);
            oView.byId("Order_Value").setEditable(false);
            
            var sPONumber = oEvent.getParameter("arguments").PONumber;
            var sVendorName = oEvent.getParameter("arguments").VendorName;
            var sPOValue = oEvent.getParameter("arguments").POValue;
            var sPOValueCurrency = oEvent.getParameter("arguments").POCurrency;
            var sVendorCode = oEvent.getParameter("arguments").Vendor;
            var sSavingStartDate = oEvent.getParameter("arguments").StartDate;
            var sSavingEndDate = oEvent.getParameter("arguments").EndDate;
            //var sBuyer = oEvent.getParameter("arguments").Buyer;
           // var sRegion = oEvent.getParameter("arguments").Region;
            var sTabId = oEvent.getParameter("arguments").tabId; // Retrieve tabId parameter
            // var startDate = oEvent.getParameter("arguments").StartDate;
            // var endDate = oEvent.getParameter("arguments").EndDate;
  
           
            // Generate the quarters
            
            if(sTabId === "__xmlview0--idList"){
             // oView.byId("Create_Saving").setEditable(true);
              oView.byId("Cluster").setEditable(true);
              oView.byId("Category_").setEditable(true);
              oView.byId("saving_type").setEditable(true);
              oView.byId("La_po_no").setEditable(true);
              oView.byId("po_value").setEditable(true);
              oView.byId("po_Currency").setEditable(true);
              oView.byId("Description").setEditable(true);
              oView.byId("Quated").setEditable(false);
              oView.byId("Quated_value").setEditable(true);
              oView.byId("Quated_Curre").setEditable(true);
              oView.byId("Savings_TabelV").setEditable(true);
              
              oView.byId("Order_Value").setEditable(false);
              oView.byId("po_Savings").setEditable(false);
              oView.byId("po_Savings_auto").setEditable(false);
              oView.byId("Remarks_Fields").setEnabled(true);
              // oView.byId("bfmValidationLabel").setVisible(false);
              // oView.byId("bfmValidationinp").setVisible(false);
              // oView.byId("YOYSavinput").setVisible(false);
              // oView.byId("YOYSavLabel").setVisible(false);
              oView.byId("form").setTitle("New")
              oView.byId("_btnSubmit").setVisible(true);
              oView.byId("_btnSave").setVisible(true)
            }else if(sTabId === "__xmlview0--idListClusterhead"){
             // oView.byId("Create_Saving").setEditable(false);
              oView.byId("Cluster").setEditable(false);
              oView.byId("Category_").setEditable(false);
              oView.byId("saving_type").setEditable(false);
              oView.byId("La_po_no").setEditable(false);
              oView.byId("po_value").setEditable(false);
              oView.byId("po_Currency").setEditable(false);
              oView.byId("Description").setEditable(false);
              oView.byId("Savings_TabelV").setEditable(false);
              oView.byId("idMultiUploader_").setUploadEnabled(false);
             // oView.byId("idMultiUploader_").setMultiple(false);
              oView.byId("Quated").setEditable(false);
              oView.byId("Order_Value").setEditable(false);
              oView.byId("po_Savings").setEditable(false);
              oView.byId("po_Savings_auto").setEditable(false);
              oView.byId("Remarks_Fields").setEnabled(false);
              oView.byId("form").setTitle("Cluster Head");
              oView.byId("Quated_value").setEditable(false);
              oView.byId("Quated_Curre").setEditable(false);
              
              
              oView.byId("btn_Cancel").setVisible(true);
              oView.byId("btn_Cancel").setText("Close");
            }else if(sTabId === "__xmlview0--idListBFM"){
              //oView.byId("Create_Saving").setEditable(false);
              oView.byId("Cluster").setEditable(false);
              oView.byId("Category_").setEditable(false);
              oView.byId("saving_type").setEditable(false);
              oView.byId("La_po_no").setEditable(false);
              oView.byId("po_value").setEditable(false);
              oView.byId("po_Currency").setEditable(false);
              oView.byId("Description").setEditable(false);
              oView.byId("Savings_TabelV").setEditable(false);
              oView.byId("form").setTitle("GPBFM");
              oView.byId("Quated").setEditable(false);
              oView.byId("Order_Value").setEditable(false);
              oView.byId("po_Savings").setEditable(false);
              oView.byId("po_Savings_auto").setEditable(false);
              oView.byId("Remarks_Fields").setEnabled(false);
              oView.byId("Quated_value").setEditable(false);
              oView.byId("Quated_Curre").setEditable(false);
              oView.byId("btn_Cancel").setVisible(true);
              oView.byId("btn_Cancel").setText("Close");
              // oView.byId("_btnSave").setVisible(true);
            }else if(sTabId === "__xmlview0--idListCFOBFM"){
             // oView.byId("Create_Saving").setEditable(false);
              oView.byId("Cluster").setEditable(false);
              oView.byId("Category_").setEditable(false);
              oView.byId("saving_type").setEditable(false);
              oView.byId("La_po_no").setEditable(false);
              oView.byId("form").setTitle("CFOBFM");
              oView.byId("Savings_TabelV").setEditable(false);
              oView.byId("po_value").setEditable(false);
              oView.byId("po_Currency").setEditable(false);
              oView.byId("Description").setEditable(false);
              oView.byId("Quated").setEditable(false);
              oView.byId("Order_Value").setEditable(false);
              oView.byId("po_Savings").setEditable(false);
              oView.byId("po_Savings_auto").setEditable(false);
              oView.byId("Remarks_Fields").setEnabled(false);
              oView.byId("Quated_value").setEditable(false);
              oView.byId("Quated_Curre").setEditable(false);
              //oView.byId("_btnSave").setVisible(true);
              oView.byId("btn_Cancel").setVisible(true);
              oView.byId("btn_Cancel").setText("Close");
            }else if(sTabId === "__xmlview0--idListApproved"){
              //oView.byId("Create_Saving").setEditable(false);
              oView.byId("Cluster").setEditable(false);
              oView.byId("Category_").setEditable(false);
              oView.byId("saving_type").setEditable(false);
              oView.byId("La_po_no").setEditable(false);
              oView.byId("po_value").setEditable(false);
              oView.byId("po_Currency").setEditable(false);
              oView.byId("Description").setEditable(false);
              oView.byId("Savings_TabelV").setEditable(false);
              oView.byId("form").setTitle("Approved");
              oView.byId("Quated").setEditable(false);
              oView.byId("Order_Value").setEditable(false);
              oView.byId("po_Savings").setEditable(false);
              oView.byId("po_Savings_auto").setEditable(false);
              oView.byId("Quated_value").setEditable(false);
              oView.byId("Quated_Curre").setEditable(false);
              oView.byId("Remarks_Fields").setEnabled(true);
              
              oView.byId("btn_Approval").setVisible(true);
            }else if(sTabId === "__xmlview0--idListReject"){
              //oView.byId("Create_Saving").setEditable(false);
              oView.byId("Cluster").setEditable(false);
              oView.byId("Category_").setEditable(false);
              oView.byId("saving_type").setEditable(false);
              oView.byId("La_po_no").setEditable(false);
              oView.byId("Savings_TabelV").setEditable(false);
              oView.byId("po_value").setEditable(false);
              oView.byId("form").setTitle("Reject");
              oView.byId("po_Currency").setEditable(false);
              oView.byId("Description").setEditable(false);
              oView.byId("Quated").setEditable(false);
              oView.byId("Order_Value").setEditable(false);
              oView.byId("Quated_value").setEditable(false);
              oView.byId("Quated_Curre").setEditable(false);
              oView.byId("po_Savings").setEditable(false);
              oView.byId("po_Savings_auto").setEditable(false);
              oView.byId("Remarks_Fields").setEnabled(true);
              
              oView.byId("btn_Reject").setVisible(true);
            }else if(sTabId === "__xmlview0--idPending_Approval"){
             // oView.byId("Create_Saving").setEditable(false);
              oView.byId("Cluster").setEditable(false);
              oView.byId("Category_").setEditable(false);
              oView.byId("saving_type").setEditable(false);
              oView.byId("La_po_no").setEditable(false);
              oView.byId("form").setTitle("Pending Approval");
              oView.byId("po_value").setEditable(false);
              oView.byId("po_Currency").setEditable(false);
              oView.byId("Description").setEditable(false);
              oView.byId("Quated_value").setEditable(false);
              oView.byId("Quated_Curre").setEditable(false);
              oView.byId("Savings_TabelV").setEditable(false);
              oView.byId("Quated").setEditable(false);
              oView.byId("Order_Value").setEditable(false);
              oView.byId("po_Savings").setEditable(false);
              oView.byId("po_Savings_auto").setEditable(false);
              oView.byId("Remarks_Fields").setEnabled(true);
              
              oView.byId("btn_Approval").setVisible(true);
              oView.byId("btn_Reject").setVisible(true);
              oView.byId("btn_Cancel").setVisible(true);
              oView.byId("btn_Cancel").setText("Close");
            }
         

            var oData = {
              sPONumber :  sPONumber,
              sVendorName : sVendorName,
              sPOValue : sPOValue,
              sPOValueCurrency : sPOValueCurrency,
              sVendorCode : sVendorCode,
              sSavingStartDate: sSavingStartDate,
              sSavingEndDate : sSavingEndDate,

            }
            var oPredictionModel = new sap.ui.model.json.JSONModel(oData);
            oView.setModel(oPredictionModel, "predictionModel");
         
        },
        onSaveData: function(){
          var oView = this.getView();
         
          var oView = this.getView();
          var sPONumber = this.getOwnerComponent().getRouter().getRoute("wiprographForm").getPattern().split("/")[2]; // Retrieve the passed PONumber
          var SavinTypeData = oView.byId("saving_type").getSelectedKey();
          if (SavinTypeData === ""){
            var Msg = "Saving Type is Mandatory";
            var Warning = "Information";
            var Message = "Message";
            var Yes = "ok";
            var Accept = "Accept";
            var Reject = "Reject";
           // var No = "Close";
              var informationDialog = new Dialog({
                title: Warning,
                  type: Message,
                  state: Warning,
                  content: new sap.m.Text({
                      text: Msg
                  }),
                  beginButton: new sap.m.Button({
                      text: Yes,
                      type: Accept,
                      press: function() {
                        
                        informationDialog.close();
                      }
                  }),
                
                  afterClose: function() {
                      informationDialog.destroy();
                  }
              });
              informationDialog.open();
          }else{
            var saveButton = oView.byId("_btnSave").setEnabled(false);
            var remarks = this.byId("Remarks_Fields").getValue();
            var buyer = "manik@gmail.com";
        var remarksbuyer = this.byId("Remarks_Fields").setValue(buyer + " " + remarks);
          var oData = {
            PONumber: oView.byId("AssetTitleId").getValue(),
            POValue: oView.byId("POValue_").getValue(),
            POCurrency: oView.byId("POCurrency_").getValue(),
            PODate: oView.byId("PODate_").getValue(),
            Region: oView.byId("Region").getValue(),
            VendorName: oView.byId("Vendor_Name").getValue(),
            Vendor: oView.byId("Vendor_Code").getValue(),
            StartDate: oView.byId("Saving_start").getDateValue(),
            EndDate: oView.byId("Saving_End").getDateValue(),
            //CreateSaving: oView.byId("Create_Saving").getSelectedKey(),
            Cluster: oView.byId("Cluster").getSelectedKey(),
            Category: oView.byId("Category_").getSelectedKey(),
            SavingType: oView.byId("saving_type").getSelectedKey(),
            LastYearPONo: oView.byId("La_po_no").getValue(),
            LastYearPOValue: oView.byId("po_value").getValue(),
            LastYearPOCurr: oView.byId("po_Currency").getValue(),
            ProjectDes: oView.byId("Description").getValue(),
            QuatedValue: oView.byId("Quated").getValue(),
            OrderValue: oView.byId("Order_Value").getValue(),
            Savings: oView.byId("po_Savings").getValue(),
            SavingsPer: oView.byId("po_Savings_auto").getValue(),          
            Remarks: oView.byId("Remarks_Fields").getValue(remarksbuyer),
            QuatedValueCurr: oView.byId("Quated_value").getValue(),
            Quated_Curre: oView.byId("Quated_Curre").getSelectedKey(),
        };
      
        // Perform the AJAX POST request to submit the data
        $.ajax({
            url: "/odata/v4/po/SavingsPOSet",
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify(oData),
            success: function(response) {
                MessageToast.show("Data Save successfully");
    
                // Delay navigation to view 2 by 0.5 seconds
                setTimeout(function() {
                  var oDataSet = {
                    sPONumber: oData.PONumber,
                    sPOValue: oData.POValue,
                    sPOCurrency: oData.POCurrency,
                    sPODate: oData.PODate,
                    sRegion: oData.Region,
                    sVendorName: oData.VendorName,
                    sVendor: oData.Vendor,
                    sStartDate: oData.StartDate,
                    sEndDate: oData.EndDate,
                    sCreateSaving: oData.CreateSaving,
                    sCluster: oData.Cluster,
                    sCategory: oData.Category,
                    sSavingType: oData.SavingType,
                    sLastYearPONo: oData.LastYearPONo,
                    sLastYearPOValue: oData.LastYearPOValue,
                    sLastYearPOCurr: oData.LastYearPOCurr,
                    sProjectDes: oData.ProjectDes,
                    sQuatedValue: oData.QuatedValue,
                    sOrderValue: oData.OrderValue,
                    sSavings: oData.Savings,
                    sSavingsPer: oData.SavingsPer,
                    sRemarks: oData.Remarks,
                    sQuatedValueCurr: oData.QuatedValueCurr,
                    sQuated_Curre: oData.Quated_Curre,
                };
                var oPredictionModel = new sap.ui.model.json.JSONModel(oDataSet);
                oView.setModel(oPredictionModel, "predictionModelData");
                }.bind(this), 500); // 500 milliseconds delay (0.5 seconds)
            }.bind(this),
            error: function(error) {
                MessageToast.show("Failed to submit data.");
            }
        });
      }
        },
        onSubmitPress: function() {


          var oView = this.getView();
          var oModel = oView.getModel();
          var saveButton = oView.byId("_btnSave").getEnabled();
          if (saveButton === true){
            var Msg = "First You Need To Save Your Data";
            	 var Warning = "Information";
            	 var Message = "Message";
            	 var Yes = "ok";
            	 var Accept = "Accept";
            	 var Reject = "Reject";
            	// var No = "Close";
                 var informationDialog = new Dialog({
                 	title: Warning,
                     type: Message,
                     state: Warning,
                     content: new sap.m.Text({
                         text: Msg
                     }),
                     beginButton: new sap.m.Button({
                         text: Yes,
                         type: Accept,
                         press: function() {
                        	 
                        	 informationDialog.close();
                         }
                     }),
                   
                     afterClose: function() {
                         informationDialog.destroy();
                     }
                 });
                 informationDialog.open();
          }else{
            var remarks = this.byId("Remarks_Fields").getValue();
            var buyer = "manik@gmail.com";
        var remarksbuyer = this.byId("Remarks_Fields").setValue(" " + remarks);
            var oData = {
              PONumber: oView.byId("AssetTitleId").getValue(),
              POValue: oView.byId("POValue_").getValue(),
              POCurrency: oView.byId("POCurrency_").getValue(),
              PODate: oView.byId("PODate_").getValue(),
              Region: oView.byId("Region").getValue(),
              VendorName: oView.byId("Vendor_Name").getValue(),
              Vendor: oView.byId("Vendor_Code").getValue(),
              StartDate: oView.byId("Saving_start").getDateValue(),
              EndDate: oView.byId("Saving_End").getDateValue(),
             // CreateSaving: oView.byId("Create_Saving").getSelectedKey(),
              Cluster: oView.byId("Cluster").getSelectedKey(),
              Category: oView.byId("Category_").getSelectedKey(),
              SavingType: oView.byId("saving_type").getSelectedKey(),
              LastYearPONo: oView.byId("La_po_no").getValue(),
              LastYearPOValue: oView.byId("po_value").getValue(),
              LastYearPOCurr: oView.byId("po_Currency").getValue(),
              ProjectDes: oView.byId("Description").getValue(),
              QuatedValue: oView.byId("Quated").getValue(),
              OrderValue: oView.byId("Order_Value").getValue(),
              Savings: oView.byId("po_Savings").getValue(),
              SavingsPer: oView.byId("po_Savings_auto").getValue(),
              Remarks: oView.byId("Remarks_Fields").getValue(remarksbuyer),
              QuatedValueCurr: oView.byId("Quated_value").getValue(),
              Quated_Curre: oView.byId("Quated_Curre").getSelectedKey(),

          };
      
          // Perform the AJAX POST request to submit the data
          $.ajax({
              url: "/odata/v4/po/SavingsPOSet",
              type: "POST",
              contentType: "application/json",
              data: JSON.stringify(oData),
              success: function(response) {
                  MessageToast.show("Data submitted successfully.");
      
                  // Disable buttons after successful submission
                  this.byId("_btnSubmit").setEnabled(false);
                  this.byId("_btnSave").setEnabled(false);
      
                  // Delay navigation to view 2 by 0.5 seconds
                  setTimeout(function() {
                      var oRouter = this.getOwnerComponent().getRouter();
                      if (oRouter) {
                        
                          // Set the model with data to pass to view 2
                          var oDataSet = {
                              sPONumber: oData.PONumber,
                              sPOValue: oData.POValue,
                              sPOCurrency: oData.POCurrency,
                              sPODate: oData.PODate,
                              sRegion: oData.Region,
                              sVendorName: oData.VendorName,
                              sVendor: oData.Vendor,
                              sStartDate: oData.StartDate,
                              sEndDate: oData.EndDate,
                              sCreateSaving: oData.CreateSaving,
                              sCluster: oData.Cluster,
                              sCategory: oData.Category,
                              sSavingType: oData.SavingType,
                              sLastYearPONo: oData.LastYearPONo,
                              sLastYearPOValue: oData.LastYearPOValue,
                              sLastYearPOCurr: oData.LastYearPOCurr,
                              sProjectDes: oData.ProjectDes,
                              sQuatedValue: oData.QuatedValue,
                              sOrderValue: oData.OrderValue,
                              sSavings: oData.Savings,
                              sSavingsPer: oData.SavingsPer,
                              sRemarks:  oData.Remarks,
                              sQuatedValueCurr: oData.QuatedValueCurr,
                              sQuated_Curre: oData.Quated_Curre,
                          };
      
                          var oPredictionModel = new sap.ui.model.json.JSONModel(oDataSet);
                          oView.setModel(oPredictionModel, "predictionModelData");
                          oRouter.navTo("wiprograph"); // Adjust the route name as necessary
                      } else {
                          sap.m.MessageToast.show("Router not found.");
                      }
                  }.bind(this), 500); // 500 milliseconds delay (0.5 seconds)
              }.bind(this),
              error: function(error) {
                  MessageToast.show("Failed to submit data.");
              }
          });
          }
          
      
      },
        oApprovedPress: function(){
          var oView = this.getView();
          var oModel = oView.getModel();
          
          var oData = {
              PONumber: oView.byId("AssetTitleId").getValue(),
              POValue: oView.byId("POValue_").getValue(),
              POCurrency: oView.byId("POCurrency_").getValue(),
           PODate: oView.byId("PODate_").getValue(),
           Region: oView.byId("Region").getValue(),
              VendorName: oView.byId("Vendor_Name").getValue(),
              Vendor: oView.byId("Vendor_Code").getValue(),
              StartDate: oView.byId("Saving_start").getDateValue(),
              EndDate: oView.byId("Saving_End").getDateValue(),
              
              // Additional fields from "Savings Details" section
           //   CreateSaving: oView.byId("Create_Saving").getSelectedKey(),
              Cluster: oView.byId("Cluster").getSelectedKey(),
              Category: oView.byId("Category_").getSelectedKey(),
              SavingType: oView.byId("saving_type").getSelectedKey(),
             LastYearPONo: oView.byId("La_po_no").getValue(),
              LastYearPOValue: oView.byId("po_value").getValue(),
              LastYearPOCurr: oView.byId("po_Currency").getValue(),
              ProjectDes: oView.byId("Description").getValue(),
              QuatedValue: oView.byId("Quated").getValue(),
              OrderValue: oView.byId("Order_Value").getValue(),
              Savings: oView.byId("po_Savings").getValue(),
              SavingsPer: oView.byId("po_Savings_auto").getValue(),
              Remarks: oView.byId("Remarks_Fields").getValue()
          };
          if (oData.CreateSaving === ""){
            MessageToast.show("No Data in Create Saving Form against");
          }else{

          // Perform the AJAX POST request to submit the data
          $.ajax({
              url: "/odata/v4/po/SavingsPOSet",
              type: "POST",
              contentType: "application/json",
              data: JSON.stringify(oData),
              success: function (response) {
               
                that.byId("_btnSubmit").setEnabled(false)
                
           that.byId("_btnSave").setEnabled(false);
                  MessageToast.show("Data Approved successfully.");
                  var oRouter = this.getOwnerComponent().getRouter();
                  oRouter.navTo("wiprograph");
                
              },
              error: function (error) {
                  MessageToast.show("Failed to submit data.");
              }
          });
        }
        },
        onCancelPress: function(){
          var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
          oRouter.navTo("wiprograph");
        },
        oRejectPress: function () {
          // Get the form by its ID
          var oView = this.getView();
          var aInputs = [
              oView.byId("AssetTitleId"),
              oView.byId("POValue_"),
              oView.byId("POCurrency_"),
              oView.byId("PODate_"),
              oView.byId("Vendor_Name"),
              oView.byId("Vendor_Code"),
              oView.byId("Region"),
              oView.byId("Saving_start"),
              oView.byId("Saving_End"),
              oView.byId("La_po_no"),
              oView.byId("po_value"),
              oView.byId("po_Currency"),
              oView.byId("Description"),
              oView.byId("Quated"),
              oView.byId("Order_Value"),
              oView.byId("po_Savings"),
              oView.byId("po_Savings_auto"),
              oView.byId("Remarks_Fields")
          ];
      
          aInputs.forEach(function(oInput) {
              oInput.setValue("");
          });
      
          // If you have combo boxes or other input fields, clear their selection similarly
         // oView.byId("Create_Saving").setSelectedKey("");
          oView.byId("Cluster").setSelectedKey("");
          oView.byId("Category_").setSelectedKey("");
          oView.byId("saving_type").setSelectedKey("");
          // Navigate back to the previous page
          var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
          oRouter.navTo("wiprograph");
          
      },
      NewSavingTypeChange: function(){
        var oSavingType = this.getView().byId("saving_type").getSelectedKey();
        if(oSavingType === "Ledger Impact"){
          this.getView().byId("label_La_po_no").setVisible(true);
          this.getView().byId("La_po_no").setVisible(true);
          this.getView().byId("La_po_no").setEditable(true);
          this.getView().byId("_lastPOnumberdata").setVisible(true);
          this.getView().byId("label_po_value").setVisible(true);
          this.getView().byId("po_value").setVisible(true);
          this.getView().byId("po_value").setEditable(false);
          this.getView().byId("label_po_Currency").setVisible(true);
          this.getView().byId("po_Currency").setVisible(true);
          this.getView().byId("po_Currency").setEditable(false);
          
        }
        else{
          this.getView().byId("label_La_po_no").setVisible(false);
          this.getView().byId("La_po_no").setVisible(false);
          this.getView().byId("label_po_value").setVisible(false);
          this.getView().byId("_lastPOnumberdata").setVisible(false);
          this.getView().byId("po_value").setVisible(false);
          this.getView().byId("label_po_Currency").setVisible(false);
          this.getView().byId("po_Currency").setVisible(false);
        }

      },
      NewQvalueandCurrChange: function() {
        var oView = this.getView();
        
        // Get quoted value and selected currency key
        var quatedValue = parseFloat(oView.byId("Quated_value").getValue());
        var quatedCurrKey = oView.byId("Quated_Curre").getSelectedKey();
        
        // Fetch the currency details from the model
        var oTableModel = this.getView().getModel("TableModel");
        var aCurrencyDetails = oTableModel.getProperty("/QuatedCurrdetails");
        
        // Find the currency rate for the selected currency
        var selectedCurrency = aCurrencyDetails.find(function(currency) {
            return currency.Currency === quatedCurrKey;
        });
        
        // Find the USD currency rate
        var usdCurrency = aCurrencyDetails.find(function(currency) {
            return currency.Currency === "USD";
        });
        
        if (selectedCurrency && usdCurrency) {
            var rate = selectedCurrency.Rate;
            var usdRate = usdCurrency.Rate;
        
            // Convert the quoted value using the selected currency rate
            var convertedValue = quatedValue / rate;
            oView.byId("Quated").setValue(convertedValue.toFixed(2));
        
            // Get input values for percentage calculation
            var input01 = oView.byId("Quated");
            var input02 = oView.byId("Order_Value");
            var input03 = oView.byId("po_Savings_auto");
        
            var iValue1 = parseFloat(input01.getValue());
            var iValue2 = parseFloat(input02.getValue());
        
            if (!isNaN(iValue1) && !isNaN(iValue2) && iValue2 !== 0) {
                // Calculate percentage difference using USD rate
                var iDifference = iValue1 - iValue2;
                oView.byId("po_Savings").setValue(iDifference);
        
                var iPercentageDifference = (iDifference / (iValue1 / rate * usdRate)) * 100;
                input03.setValue(iPercentageDifference.toFixed(2) + "%");
            } else {
                // Handle invalid input or zero division
                console.log("Invalid input or zero division in quoted and order values");
            }
        } else {
            console.log("Selected currency rate or USD rate not found");
        }
    },
    _onPoLastYear: function(){

    },
    _onPoLastYear: function(){
      let Last_PO_NO = this.getView().byId("La_po_no").getValue("");

      if(Last_PO_NO === ""){
        this.getView().byId("La_po_no").setValue("4500427800");
      let LastYPOValue = this.getView().byId("po_value").setValue("66");
      let LastYPOCurr = this.getView().byId("po_Currency").setValue("USD")
      this.getView().byId("_lastPOnumberdata").setEnabled(false)
      }else{
        let LastYPOValue = this.getView().byId("po_value").setValue("66");
      let LastYPOCurr = this.getView().byId("po_Currency").setValue("USD")
      }
     
    }
        
    });
});
