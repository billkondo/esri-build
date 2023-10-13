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

define(["../../declare","dojo/_base/array","dojo/_base/lang","dojo/dom-construct","./taskHelper","../FeatureSet","./EnrichParameters","./ReportParameters","../../urlUtils","../../IdentityManager","../../geometry/Point","../../geometry/Polygon","../../geometry/Polyline","dojo/i18n!../../nls/jsapi"],(function(e,t,r,n,o,a,i,s,u,l,c,h,f,d){function v(e){this.name="UserError",this.message=e||""}function m(e,t){return e.getAvailableCountries().then((function(e){for(var r=0;r<e.length;r++)if(e[r].id==t)return e[r].name}))}function p(e){var t=e.getExtent();return new c((t.xmin+t.xmax)/2,(t.ymin+t.ymax)/2,t.spatialReference)}return d=d.geoenrichment.task.GeoenrichmentTask,v.prototype=Error.prototype,e("esri.tasks.geoenrichment.GeoenrichmentTask",null,{token:null,url:null,_query:null,constructor:function(e){if(e){var t=u.urlToObject(e);e=t.path,this._query=t.query}this.url=e||u.getProtocolForWebResource()+"//geoenrich.arcgis.com/arcgis/rest/services/World/GeoenrichmentServer"},enrich:function(e){var t=this;return o.invokeMethod(this,"/Geoenrichment/enrich",(function(){return e instanceof i||(e=new i(e)),o.jsonToRest(e.toJson(),t._query)}),(function(e){(!e.results||e.results.length<1||!e.results[0].value||!e.results[0].value.FeatureSet||e.results[0].value.FeatureSet.length<1)&&o.throwEmptyResponse();for(var t={featureSets:[],messages:e.messages},r=e.results[0].value.FeatureSet,n=0;n<r.length;n++)t.featureSets.push(new a(r[n]));return t}),"onEnrichComplete","onError")},getAvailableCountries:function(){var e=this;return o.invokeMethod(this,"/Geoenrichment/Countries",(function(){return r.mixin({},e._query)}),(function(e){if(e.error)throw e.error;for(var t=e.countries,r=0;r<t.length;r++){var n=t[r].datasets;delete t[r].datasets,t[r].datasetIDs=n}return t}),"onGetAvailableCountriesComplete","onError")},getDataCollections:function(e,t,n,a){var i;t?i="/GetDataCollections/execute":(i="/Geoenrichment/DataCollections",e&&(i+="/"+e));var s=this;return o.invokeMethod(this,i,(function(){var o=r.mixin({},s._query);return o.suppressNullValues=!0,n&&(0===n.length?o.outFields="none":o.outFields=JSON.stringify(n)),t&&(e&&(o.sourcecountry=e),o.searchtext="id:"+t),a&&(o.addDerivativeVariables=JSON.stringify(a)),o}),(function(e){if(e.error)throw e.error;for(var t=e.results||e.dataCollections||e.DataCollections,r=0;r<t.length;r++)t[r]={id:t[r].dataCollectionID,metadata:t[r].metadata,variables:t[r].data};return t}),"onGetDataCollectionsComplete","onError")},createReport:function(e){var t=this;l.getCredential(this.url).then((function(r){try{var a=n.create("form",{target:"_blank",action:t.url+"/Geoenrichment/CreateReport",method:"post"});e instanceof s||(e=new s(e));var i=o.jsonToRest(e.toJson(),t._query);for(var u in i.f="bin",i.token=r.token,i)i.hasOwnProperty(u)&&n.create("input",{type:"hidden",name:u,value:i[u]},a);n.place(a,document.body),a.submit(),n.destroy(a)}catch(e){t.onError(e)}}),(function(e){t.onError(e)}))},getReports:function(e){var t=this;return m(this,e).then((function(e){return o.invokeMethod(t,"/Geoenrichment/Reports/"+e,(function(){return r.mixin({},t._query)}),(function(e){for(var t=0;t<e.reports.length;t++){var r=e.reports[t].reportID;delete e.reports[t].reportID,e.reports[t].id=r}return e.reports}),"onGetReportsComplete","onError")}))},getStandardGeographyLevels:function(e){var t=this;function n(e){return o.invokeMethod(t,e,(function(){return r.mixin({},t._query)}),(function(e){for(var t=e.geographyLevels,r=0;r<t.length;r++){var n=t[r];n.id=n.countryID,delete n.countryID,n.name=n.countryName,delete n.countryName;for(var o=n.datasets,a=0;a<o.length;a++){var i=o[a];i.id=i.datasetID,delete i.datasetID,i.geographyLayers=i.levels,delete i.levels}}return t}),"onGetStandardGeographyLevelsComplete","onError")}return e?m(this,e).then((function(e){return n("/Geoenrichment/StandardGeographyLevels/"+e)})):n("/Geoenrichment/StandardGeographyLevels")},getServiceLimits:function(){var e=this;return o.invokeMethod(this,"/Geoenrichment/ServiceLimits",(function(){return r.mixin({},e._query)}),(function(e){return e.serviceLimits.value}),"onGetServiceLimitsComplete","onError")},getCountries:function(e){var r;switch(e.type){case"point":r=e;break;case"polyline":var n=e.paths[0],o=new f(e.spatialReference);o.addPath(n),r=p(o);break;case"polygon":var a=e.rings[0],i=new h(e.spatialReference);i.addRing(a),r=p(i)}return this.enrich({variables:["GlobalIntersect.*"],studyAreas:[{geometry:r}],forStorage:!1}).then((function(e){for(var r=[],n=e.featureSets[0].features,o=0;o<n.length;o++){var a=n[o].attributes.sourceCountry;t.indexOf(r,a)<0&&r.push(a)}if(0===r.length)throw new v(d.noData);return r}))},onEnrichComplete:function(e){},onGetAvailableCountriesComplete:function(e){},onGetDataCollectionsComplete:function(e){},onCreateReportComplete:function(e){},onGetReportsComplete:function(e){},onGetStandardGeographyLevelsComplete:function(e){},onGetServiceLimitsComplete:function(e){},onError:function(e){}})}));