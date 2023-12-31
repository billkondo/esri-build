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

define(["dojo/_base/array","dojo/_base/declare","dojo/_base/lang","dojo/Deferred","dojo/promise/all","dojo/has","dojo/json","../../request","../../kernel"],(function(e,t,s,r,o,i,n,c,u){var h={MAX_RESOURCES:10,checkResourceLimit:!0,_getItemUrl:function(e){var t=e.folderId||e.ownerFolder;return this._portalUrl+"/sharing/rest/content/users/"+e.owner+"/"+(t?t+"/":"")+"/items/"+e.id},addToItemResource:function(e,t){var s,r;return this._portalUrl=t.portalUrl,delete t.portalUrl,s=this._getItemUrl(e),s+="/addResources",r={filename:t.jobInfo.jobId+".json",text:n.stringify(t),resourcesPrefix:"jobs",f:"json"},c({url:s,content:r},{usePost:!0})},getItemResource:function(e,t){var s;return t&&t.portalUrl&&(this._portalUrl=t.portalUrl),s=this._getItemUrl(e),s+="/resources/"+t.resource,c({url:s,content:{f:"json"}})},removeItemResource:function(e,t){var s,r;return t&&t.portalUrl&&(this._portalUrl=t.portalUrl),s=this._getItemUrl(e),s+="/removeResources",r={resource:t.resource,deleteAll:t.deleteAll,f:"json"},c({url:s,content:r},{usePost:!0})},addToStorage:function(e){if(window.sessionStorage){var t=window.sessionStorage.getItem("esri_analysis_jobhistory");(t=t?n.parse(t):[]).push(e),window.sessionStorage.setItem("esri_analysis_jobhistory",n.stringify(t))}},addAllToStorage:function(e){window.sessionStorage&&window.sessionStorage.setItem("esri_analysis_jobhistory",n.stringify(e))},removeFromStorage:function(t){if(window.sessionStorage){var s=window.sessionStorage.getItem("esri_analysis_jobhistory");s&&(s=n.parse(s)),s=e.filter(s,(function(e){return e.jobInfo&&e.jobInfo.jobId!==t.jobInfo.jobId})),window.sessionStorage.setItem("esri_analysis_jobhistory",n.stringify(s))}},removeAllFromStorage:function(){window.sessionStorage&&window.sessionStorage.removeItem("esri_analysis_jobhistory")},getJobsInfoList:function(){var e;return window.sessionStorage&&(e=window.sessionStorage.getItem("esri_analysis_jobhistory"))&&(e=n.parse(e)),e},addItemResources:function(t,i){var n=this.getJobsInfoList(),c=[];return e.forEach(n,(function(e){e.portalUrl=i.portalUrl;var o=new r;c.push(o),this.addToItemResource(t,e).then(s.hitch(this,(function(t){t&&!0===t.success&&(this.removeFromStorage(e),o.resolve(t))})))}),this),o(c)},saveJobsQueue:function(e,t){var o=this.getJobsInfoList(),i=new r;return o&&o.length>0&&this.removeResourceQueue(e,t).then(s.hitch(this,(function(){if(o.length>this.MAX_RESOURCES){for(this.sortJobsInfoList(o,{asc:!1});o.length>this.MAX_RESOURCES;)o.pop();this.addAllToStorage(o)}this.addItemResources(e,t).then(s.hitch(this,(function(e){i.resolve(e)})),s.hitch(this,(function(e){i.reject(e)})))})),s.hitch(this,(function(e){i.reject(e)}))),i.promise},saveJobsInfoList:function(e,t){return this.checkResourceLimit?this.saveJobsQueue(e,t):this.addItemResources(e,t)},getResources:function(e,t){var s;return t&&t.portalUrl&&(this._portalUrl=t.portalUrl),s=this._getItemUrl(e),c({url:s+="/resources",content:{f:"json"}})},getResourcesInfo:function(t,i){var n=[],c=new r;return this.sortResources(t,i).then(s.hitch(this,(function(r){e.forEach(r.resources,(function(e){i.resource=e.resource,n.push(this.getItemResource(t,i))}),this),o(n).then(s.hitch(this,(function(e){c.resolve(e)})),s.hitch(this,(function(e){c.reject(e)})))})),s.hitch(this,(function(e){c.reject(e)}))),c.promise},sortJobsInfoList:function(e,t){e.sort(s.hitch(this,(function(e,s){return t.asc?e.timestamp-s.timestamp:s.timestamp-e.timestamp})))},sortResources:function(e,t){var o=new r;return this.getResources(e,t).then(s.hitch(this,(function(e){e.resources&&e.resources.length>0&&e.resources.sort(s.hitch(this,(function(e,s){return t.asc?e.created-s.created:s.created-e.created}))),o.resolve(e)})),s.hitch(this,(function(e){o.reject(e)}))),o.promise},removeResourceQueue:function(e,t){var i,n,c=new r,u=[];return i=this.getJobsInfoList().length,n=(n=this.MAX_RESOURCES-i)>0?n:0,t.asc=!0,this.sortResources(e,t).then(s.hitch(this,(function(r){var i;if(r&&r.resources&&r.resources.length>0)if(0===n)i=r.resources.shift(),t.resource=i.resource,t.deleteAll=!0,u.push(this.removeItemResource(e,t)),r.resources=[];else for(;r.resources.length>n;)i=r.resources.shift(),t.resource=i.resource,u.push(this.removeItemResource(e,t));o(u).always(s.hitch(this,(function(){c.resolve(r)})))})),s.hitch(this,(function(e){c.reject(e)}))),c.promise}};return i("extend-esri")&&s.setObject("dijit.analysis.storageUtils",h,u),h}));