// COPYRIGHT © 2022 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["require","dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/connect","dojo/_base/json","dojo/has","dojo/json","dojo/string","dojo/dom-style","dojo/dom-attr","dojo/dom-construct","dojo/query","dojo/dom-class","dojo/number","dojo/_base/fx","dojo/fx/easing","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","dijit/registry","dijit/form/Button","dijit/form/CheckBox","dijit/form/Form","dijit/form/Select","dijit/form/TextBox","dijit/form/ValidationTextBox","dijit/layout/ContentPane","dijit/form/FilteringSelect","dijit/form/NumberSpinner","dijit/form/NumberTextBox","../../kernel","../../lang","./AnalysisBase","./_AnalysisOptions","./AnalysisRegistry","./CreditEstimator","./utils","dojo/i18n!../../nls/jsapi","dojo/i18n!./nls/FindPointClusters","dojo/text!./templates/FindPointClusters.html"],(function(e,t,s,i,a,n,r,h,o,l,u,c,d,y,m,_,p,L,f,b,C,g,S,v,D,w,j,A,P,T,U,M,x,F,I,N,k,G,R,B,H,O,E){var q=t([L,f,b,C,g,k,N],{declaredClass:"esri.dijit.analysis.FindPointClusters",templateString:E,widgetsInTemplate:!0,analysisLayer:null,outputLayerName:null,searchDistance:null,searchDistanceUnit:"Miles",minFeaturesCluster:null,returnFeatureCollection:!1,enableTravelModes:!0,i18n:null,toolName:"FindPointClusters",helpFileName:"FindPointClusters",resultParameter:"pointClustersResultLayer",_timeObj:null,constructor:function(e){this._pbConnects=[],e.containerNode&&(this.container=e.containerNode),e.showGeoAnalyticsParams&&e.rerun&&(e.analysisLayer=e.inputLayer)},destroy:function(){this.inherited(arguments),i.forEach(this._pbConnects,a.disconnect),delete this._pbConnects},postMixInProperties:function(){this.inherited(arguments),s.mixin(this.i18n,H.findPointClustersTool),s.mixin(this.i18n,O)},postCreate:function(){this.inherited(arguments),y.add(this._form.domNode,"esriSimpleForm"),this._outputLayerInput.set("validator",s.hitch(this,this.validateServiceName)),this.filterObjects=[{layer:"inputLayer",layers:this.analysisLayers,select:this._analysisSelect,expressionObj:"attributeExprObj"}],this._buildUI()},startup:function(){},_onClose:function(e){e&&(this._save(),this.emit("save",{save:!0})),this.showGeoAnalyticsParams&&(this._hasPCSWarnShown=!1),this.emit("close",{save:e})},_buildJobParams:function(){var e,t,s={},i=this.get("searchDistance");return t=n.toJson(this.constructAnalysisInputLyrObj(this.analysisLayer,this.showGeoAnalyticsParams)),this.showGeoAnalyticsParams?s.inputLayer=t:s.analysisLayer=t,s.minFeaturesCluster=this.get("minFeaturesCluster"),this.showGeoAnalyticsParams?(s.clusterMethod=this._clusterMethodSelect.get("value"),"HDBSCAN"!==s.clusterMethod&&(s.searchDistance=i,s.searchDistanceUnit=this.get("searchDistanceUnit"),this._useSearchTimeChk.get("checked")&&this._searchDurValue.get("value")&&this._searchDurUnits.get("value")&&(s.timeMethod="Linear",s.searchDuration=this._searchDurValue.get("value"),s.searchDurationUnit=this._searchDurUnits.get("value")))):i&&(s.searchDistance=i,s.searchDistanceUnit=this.get("searchDistanceUnit")),this.returnFeatureCollection||(s.OutputName=n.toJson({serviceProperties:{name:this._outputLayerInput.get("value")}})),this.showChooseExtent&&this._useExtentCheck.get("checked")&&(s.context=n.toJson({extent:this.map.extent._normalize(!0)})),this.returnFeatureCollection&&(e={outSR:this.map.spatialReference},this.showChooseExtent&&this._useExtentCheck.get("checked")&&(e.extent=this.map.extent._normalize(!0)),s.context=n.toJson(e)),this._updateJobFilterAndSelection(s)},_handleShowCreditsClick:function(e){e.preventDefault(),this._form.validate()&&this.getCreditsEstimate(this.toolName,this._buildJobParams()).then(s.hitch(this,(function(e){this._usageForm.set("content",e),this._usageDialog.show()})))},_handleSaveBtnClick:function(){if(this._form.validate()){this._saveBtn.set("disabled",!0);var e={};e.itemParams={description:o.substitute(this.i18n.itemDescription,{inputLayerName:this.analysisLayer.name}),tags:o.substitute(this.i18n.itemTags,{inputLayerName:this.analysisLayer.name}),snippet:this.i18n.itemSnippet},e.jobParams=this._buildJobParams(),!this.showGeoAnalyticsParams||(this.resultParameter="output",e.isSpatioTemporalDataStore=!0,B.checkPCSforAnalysis({widget:this,jobParams:e.jobParams,hasPCSWarnShown:this._hasPCSWarnShown})||this._hasPCSWarnShown)?(this.showSelectFolder&&(e.itemParams.folder=this.get("folderId")),this.execute(e)):this._hasPCSWarnShown=!0}},_handleDistValueChange:function(e){},_handleUnitsChange:function(e){},_handeUseSearchTimeChkChange:function(e){B.updateDisplay([this._searchDurLabelRow,this._searchDurRow],e,"table-row"),this._searchDurValue.set("required",e),this._searchDurUnits.set("required",e)},_disableTimeDurationUX:function(e){this._useSearchTimeChk.reset(),this._useSearchTimeChk.set("disabled",e),y.toggle(this._useSearchTimeChkLabel,"esriAnalysisTextDisabled",e)},_showMessages:function(e){u.set(this._bodyNode,"innerHTML",e),_.fadeIn({node:this._errorMessagePane,easing:p.quadIn,onEnd:s.hitch(this,(function(){l.set(this._errorMessagePane,{display:""})}))}).play()},_handleCloseMsg:function(e){e&&e.preventDefault(),_.fadeOut({node:this._errorMessagePane,easing:p.quadOut,onEnd:s.hitch(this,(function(){l.set(this._errorMessagePane,{display:"none"})}))}).play()},_save:function(){},_buildUI:function(){var e,t=!0;l.set(this._showCreditsLink,"display",!0===this.showCredits?"block":"none"),this.signInPromise.then(s.hitch(this,B.initHelpLinks,this.domNode,this.showHelp,{analysisGpServer:this.analysisGpServer})),this._bigdataUX=[this._clusterMethodLblRow,this._clusterMethodSelectRow,this._useTimeCheckRow,this._searchDurLabelRow,this._searchDurRow],B.updateDisplay(this._bigdataUX,this.get("showGeoAnalyticsParams"),"table-row"),this._loadConnections();var i=[{value:"Miles",label:this.i18n.miles},{value:"Feet",label:this.i18n.feet},{type:"separator"},{value:"Kilometers",label:this.i18n.kilometers},{value:"Meters",label:this.i18n.meters}];this.clusterMethod&&this._clusterMethodSelect.set("value",this.clusterMethod),this.showGeoAnalyticsParams&&(u.set(this._forLocationLabel,"innerHTML",this.i18n.limitSearchReqLabel),u.set(this._minClusterPtsLblNode,"innerHTML",this.i18n.minClustersPtsGAXLbl),this._searchCutoffInput.set("required",!0),u.set(this._analysisHelpNode,"esriHelpTopic","inputLayer"),i=[{value:"NauticalMiles",label:this.i18n.nautMiles},{value:"Miles",label:this.i18n.miles},{value:"Yards",label:this.i18n.yards},{value:"Feet",label:this.i18n.feet},{type:"separator"},{value:"Kilometers",label:this.i18n.kilometers},{value:"Meters",label:this.i18n.meters}],t=!(e=!!this.timeMethod&&!!this.searchDuration&&!!this.searchDurationUnit),this._useSearchTimeChk.set("checked",e),this._handeUseSearchTimeChkChange(e),e&&(this._searchDurValue.set("value",this.searchDuration),this._searchDurUnits.set("value",this.searchDurationUnit))),this._distanceUnitsSelect.addOption(i),this.get("showSelectAnalysisLayer")&&(this.analysisLayers&&this.analysisLayer&&!B.isLayerInLayers(this.analysisLayer,this.analysisLayers)&&this.analysisLayers.push(this.analysisLayer),this.get("analysisLayer")||!this.get("analysisLayers")||this.rerun||this.set("analysisLayer",this.analysisLayers[0]),B.populateAnalysisLayers(this,"analysisLayer","analysisLayers")),this.showGeoAnalyticsParams||(u.set(this._labelTwo,"innerHTML",this.i18n.twoLabel),u.set(this._labelThree,"innerHTML",this.i18n.threeLabel),u.set(this._labelFour,"innerHTML",this.i18n.fourLabel)),this.outputLayerName&&(this._outputLayerInput.set("value",this.outputLayerName),t=!1),this.searchDistanceUnit&&this._distanceUnitsSelect.set("value",this.searchDistanceUnit),this.searchDistance&&this._searchCutoffInput.set("value",this.searchDistance),this.minFeaturesCluster&&this._maxCountInput.set("value",this.minFeaturesCluster),this.analysisLayer&&this._updateAnalysisLayerUI(t),B.addReadyToUseLayerOption(this,[this._analysisSelect]),l.set(this._chooseFolderRow,"display",!0===this.showSelectFolder?"block":"none"),this.showSelectFolder&&this.getFolderStore().then(s.hitch(this,(function(e){this.folderStore=e,B.setupFoldersUI({folderStore:this.folderStore,folderId:this.folderId,folderName:this.folderName,folderSelect:this._webMapFolderSelect,username:this.portalUser?this.portalUser.username:""})}))),l.set(this._chooseExtentDiv,"display",!0===this.showChooseExtent?"inline-block":"none"),this._createFilterAndSelections()},_updateAnalysisLayerUI:function(e){this.analysisLayer&&(u.set(this._aggregateToolDescription,"innerHTML",o.substitute(this.i18n.clustersLabel,{inputLayerName:this.analysisLayer.name})),!e&&this.outputLayerName||(this.outputLayerName=o.substitute(this.i18n.outputLayerName,{inputLayerName:this.analysisLayer.name}),this._outputLayerInput.set("value",this.outputLayerName),this._disableTimeDurationUX(!B.isTimeInstantLayer(this.analysisLayer))))},_handleAnalysisLayerChange:function(e){"browse"===e||"browselayers"===e?this._createBrowseItems({browseValue:e},{tags:["point"],geometryTypes:[G.GeometryTypes.Point]},this._analysisSelect):(this.analysisLayer=this.analysisLayers[e],this._updateAnalysisLayerUI(!0))},_handleBrowseItemsSelect:function(e,t){e&&e.selection&&B.addAnalysisReadyLayer({item:e.selection,layers:this.analysisLayers,layersSelect:this._analysisSelect,browseDialog:e.dialog||this._browsedlg,widget:this},t).always(s.hitch(this,(function(e){this._handleAnalysisLayerChange(this._analysisSelect.get("value"))})))},_handleClusterMethodChange:function(e){var t="HDBSCAN"===e;this._searchCutoffInput.set("disabled",t),this._distanceUnitsSelect.set("disabled",t),y.toggle(this._forLocationLabel,"esriAnalysisTextDisabled",t),this.showGeoAnalyticsParams&&this._disableTimeDurationUX(t)},_loadConnections:function(){this.on("start",s.hitch(this,"_onClose",!0)),this._connect(this._closeBtn,"onclick",s.hitch(this,"_onClose",!1))},_setAnalysisGpServerAttr:function(e){e&&(this.analysisGpServer=e,this.set("toolServiceUrl",this.analysisGpServer+"/"+this.toolName))},_setAnalysisLayerAttr:function(e){e&&e.geometryType===G.GeometryTypes.Point?this.analysisLayer=e:this.analysisLayer=null},_getAnalysisLayerAttr:function(e){return this.analysisLayer},_setAnalysisLayersAttr:function(e){this.analysisLayers=i.filter(e,(function(e){return e.geometryType===G.GeometryTypes.Point}))},_setDisableRunAnalysisAttr:function(e){this._saveBtn.set("disabled",e)},_setSearchDistanceUnitAttr:function(e){this.searchDistanceUnit=e},_getSearchDistanceUnitAttr:function(){return this.searchDistanceUnit=this._distanceUnitsSelect.get("value"),this.searchDistanceUnit},_getSearchDistanceAttr:function(){return this.searchDistance=this._searchCutoffInput.get("value"),this.searchDistance},_setSearchDistanceAttr:function(e){this.searchDistance=e},_getMinFeaturesClusterAttr:function(){return this.minFeaturesCluster=this._maxCountInput.get("value"),this.minFeaturesCluster},_setMinFeaturesClusterAttr:function(e){this.minFeaturesCluster=e},_connect:function(e,t,s){this._pbConnects.push(a.connect(e,t,s))},validateServiceName:function(e){return B.validateServiceName(e,{textInput:this._outputLayerInput,isItem:!this.returnFeatureCollection})}});return r("extend-esri")&&s.setObject("dijit.analysis.FindPointClusters",q,F),q}));