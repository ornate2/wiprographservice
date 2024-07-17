//@ui5-bundle com/wipro/wiprograph/Component-preload.js
sap.ui.require.preload({
	"com/wipro/wiprograph/Component.js":function(){
sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","com/wipro/wiprograph/model/models"],function(e,i,t){"use strict";return e.extend("com.wipro.wiprograph.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments);this.getRouter().initialize();this.setModel(t.createDeviceModel(),"device")}})});
},
	"com/wipro/wiprograph/controller/App.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller"],function(n){"use strict";return n.extend("com.wipro.wiprograph.controller.App",{onInit:function(){}})});
},
	"com/wipro/wiprograph/controller/wiprograph.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller"],function(r){"use strict";return r.extend("com.wipro.wiprograph.controller.wiprograph",{onInit:function(){}})});
},
	"com/wipro/wiprograph/i18n/i18n.properties":'# This is the resource bundle for com.wipro.wiprograph\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=App Title\n\n#YDES: Application description\nappDescription=An SAP Fiori application.\n#XTIT: Main view title\ntitle=App Title',
	"com/wipro/wiprograph/manifest.json":'{"_version":"1.59.0","sap.app":{"id":"com.wipro.wiprograph","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:basic","version":"1.14.1","toolsId":"0d30e6b3-74e0-471b-95c0-4e1a80bfbd83"},"dataSources":{"mainService":{"uri":"odata/v4/po/","type":"OData","settings":{"annotations":[],"odataVersion":"4.0"}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.126.0","libs":{"sap.m":{},"sap.ui.core":{},"sap.f":{},"sap.suite.ui.generic.template":{},"sap.ui.comp":{},"sap.ui.generic.app":{},"sap.ui.table":{},"sap.ushell":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"com.wipro.wiprograph.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","async":true,"viewPath":"com.wipro.wiprograph.view","controlAggregation":"pages","controlId":"app","clearControlAggregation":false},"routes":[{"name":"Routewiprograph","pattern":":?query:","target":["Targetwiprograph"]}],"targets":{"Targetwiprograph":{"viewType":"XML","transition":"slide","clearControlAggregation":false,"viewId":"wiprograph","viewName":"wiprograph"}}},"rootView":{"viewName":"com.wipro.wiprograph.view.App","type":"XML","async":true,"id":"App"}},"sap.cloud":{"public":true,"service":"wiprograph"}}',
	"com/wipro/wiprograph/model/models.js":function(){
sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,n){"use strict";return{createDeviceModel:function(){var i=new e(n);i.setDefaultBindingMode("OneWay");return i}}});
},
	"com/wipro/wiprograph/view/App.view.xml":'<mvc:View controllerName="com.wipro.wiprograph.controller.App"\n    xmlns:html="http://www.w3.org/1999/xhtml"\n    xmlns:mvc="sap.ui.core.mvc" displayBlock="true"\n    xmlns="sap.m"><App id="app"></App></mvc:View>\n',
	"com/wipro/wiprograph/view/wiprograph.view.xml":'<mvc:View controllerName="com.wipro.wiprograph.controller.wiprograph"\n    xmlns:mvc="sap.ui.core.mvc" displayBlock="true"\n    xmlns="sap.m"><Page id="page" title="{i18n>title}"><content /></Page></mvc:View>\n'
});
//# sourceMappingURL=Component-preload.js.map
