sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"],
  function(Controller,
	JSONModel) {
    "use strict";

    return Controller.extend("companyRepo.appName.controller.App", {
      onInit: function() {},
      onPress: function(event) {
        var text = event.getSource().getText();
        alert(text + " Button was pressed");
      },
      //Old way of metadata initialization. Currently: define backend service in two sections of manifest.json file
      // onInit: function() {
      // var me = this;
      // me.getView().setBusy(true);
      // var oModel = new sap.ui.model.odata.v2.ODataModel({
      //   serviceUrl: "/Northwind/Northwind.svc",
      //   //          serviceUrl: "/sap/opu/odata/backendServerPath",
      // });
      // oModel.metadataLoaded().then(function(oEvent) {
      //   console.log(oEvent);
      //   //sap default model has no name!
      //   me.getView().setModel(oModel);
      //   //me.getView().setModel(oModel, "northwind");
      //   me.getView().setBusy(false);
      // });
      // },
    });
  }
);
