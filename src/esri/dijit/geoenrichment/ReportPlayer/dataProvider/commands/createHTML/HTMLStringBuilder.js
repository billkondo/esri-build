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

define(["dojo/dom-attr","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","dojo/query","esri/dijit/geoenrichment/utils/DomUtil","esri/dijit/geoenrichment/utils/DynamicStyleUtil","esri/dijit/geoenrichment/ReportPlayer/config","./HeaderFooterRenderer","../../../PlayerViewModes","../../../core/supportClasses/DocumentOptions"],(function(e,t,r,o,n,i,a,s,d,l,c,g){var p=function(e){i(".selectableLegendRootLabel",e).forEach((function(e){e.title=e.innerHTML}))},u={PROPS_TO_REMOVE:{"data-dojo-attach-point":1,id:1,widgetid:1},buildHtmlStringForPlayer:function(e,t){var o=[],n=u._preprocessMainNode(e,o);if(n.style.opacity="",d.isPlayerOnServer)return u._getPageNodes(e,n,t),{domString:n};var i=u._getPageNodes(e,n,t),a=u._cleanUpAndCombinePageNodes(i);return i.forEach((function(e){r.destroy(e)})),{domString:a,additionalStyleNodes:o}},_preprocessMainNode:function(e,t){var o=d.isPlayerOnServer?e.domNode:r.toDom(e.domNode.outerHTML);function a(e){i("."+e,o).forEach((function(e){n.set(e,{maxWidth:"none",maxHeight:"none",width:"auto",height:"auto"})}))}return u._processNode(o,t),e.getViewMode()===c.FULL_PAGES?(a("esriGEReportPlayer_reportContainerGrid"),a("reportContainerGrid_mainContainer")):e.getViewMode()===c.PANELS_IN_STACK_ALL&&(a("esriGEReportPlayer_reportContainerStackAll"),i(".reportContainerStackAll_zoomFillerContainer",o)[0].style.margin="0"),!d.isPlayerOnServer&&p(o),o},_processNode:function(t,o){var i=this;!function t(l,c){if("svg"===l.nodeName&&(c=!0),!c&&!d.isPlayerOnServer){var g=s.getStyle(l.id);g&&g.forEach((function(e){o.push(e)})),function(t,r){for(var o in r=void 0===r||r,i.PROPS_TO_REMOVE)(r||"id"!==o)&&e.remove(t,o)}(l,!g)}if(!function(e,t){return t?"line"!==e.nodeName||e.getAttribute("x1")!==e.getAttribute("x2")||e.getAttribute("y1")!==e.getAttribute("y2"):!(a.isHidden(e)||"none"===n.get(e,"display"))}(l,c))return r.destroy(l),!1;if(l.children)for(var p=l.children.length,u=0,h=0;u+h<p;)t(l.children[u],c)?u++:h++;return!0}(t)},_getPageNodes:function(e,t,r){return e.getViewMode()===c.PANELS_IN_STACK_ALL?u._getPageNodes_stackAll(e,t,r):u._getPageNodes_fullPages(e,t,r)},_getPageNodes_stackAll:function(e,t,n){if(!e.splitPages())return(u._providePageHeaderFooter(1,e,!0,[t])||e.needAutoScale())&&u._tryApplyNewPageSize(e,t),u._processAllPanelsInStacks(t),[t];var a=r.create("div",{class:"esriGEBehindScreen"},document.body);a.appendChild(t),u._providePageHeaderFooter(1,e,!0,[t]),["esriGEReportPlayerPrint_reportHeader","esriGEReportPlayerPrint_reportDataSource","esriGEReportPlayerPrint_reportFooter"].map((function(e){var o=i("."+e,t)[0];o&&r.destroy(o)}));var s=i(".esriGEReportPlayer_infographicsPageStack",t)[0],d=0,l=i(".infographicPageStack_infographicRow",s).map((function(e){var t=o.getMarginBox(e).h;return d=Math.max(d,t),t})),c=[];if(1===l.length)c.push({height:l[0],indexes:[0]});else if(2===l.length)c.push({height:l[0]+l[1],indexes:[0,1]});else{var p,h=g.getPageBox(e.getDocumentOptions()),f=t.clientWidth*h.h/h.w,P=Math.max(f,l[0]+l[1],d);l.forEach((function(e,t){p&&p.height+e<=P?(p.indexes.push(t),p.height+=e):(p={height:e,indexes:[t]},c.push(p)),p.height>=P&&(p=null)}))}var _=i(".reportContainerStackAll_groupLabelsContainer",t)[0].clientHeight,y=c.map((function(e){var o=r.toDom(t.outerHTML);return i(".reportContainerStackAll_zoomFillerContainer",o)[0].style.height=e.height+_+"px",u._processAllPanelsInStacks(o,(function(t,o){-1===e.indexes.indexOf(o)&&r.destroy(t)})),o}));return u._providePageHeaderFooter(y.length,e,!0,y),r.destroy(a),y},_processAllPanelsInStacks:function(e,r){i(".esriGEReportPlayer_infographicsPageStack",e).forEach((function(e){i(".infographicPageStack_infographicRow",e).forEach((function(e,o){var n=i(".section_stackNode",e)[0];t.add(n,"infographicPageStack_infographicSectionNode_stackNode"),r&&r(e,o)}))}))},_getPageNodes_fullPages:function(e,t,o){var n=[],a=i(".reportContainerGrid_gridContainerWrapper",t);if(d.isPlayerOnServer)n=a;else if(a.length>1){a.forEach((function(e){e.parentNode.removeChild(e)})),i(".esriGEReportPlayer_reportContainerGrid",t).forEach((function(e,t){t>0&&e.parentNode.removeChild(e)})),a.forEach((function(e){var o=r.toDom(t.outerHTML);i(".reportContainerGrid_gridStackContainer",o)[0].appendChild(e),n.push(o)}))}else n.push(t);var s=u._providePageHeaderFooter(e.getNumberOfPages(),e,o,n,d.isPlayerOnServer)||e.needAutoScale();if(d.isPlayerOnServer){var l=s&&{w:n[0].clientWidth,h:n[0].clientHeight};s&&-1!==e.getDocumentOptions().pagesize.indexOf("x")&&e.setNewPageSize(l.w,l.h),s&&i(".reportContainerGrid_gridZoomFillerContainer",t).forEach((function(e){e.style.width=l.w+"px",e.style.height=l.h+"px"})),i(".esriGEReportPlayer_reportContainerGrid",t).forEach((function(e){e.style.position="absolute",e.style.left="0",e.style.top="0"})),a.forEach((function(e){e.style.position="absolute",e.style.left="0",e.style.top="0"}))}else s&&u._tryApplyNewPageSize(e,n[0]);return n},_tryApplyNewPageSize:function(e,t){if(-1!==e.getDocumentOptions().pagesize.indexOf("x")){var o=r.create("div",{class:"esriGEBehindScreen"},document.body);o.appendChild(t),e.setNewPageSize(t.clientWidth,t.clientHeight),o.removeChild(t),r.destroy(o)}},_providePageHeaderFooter:function(e,t,r,o,n){var i=t.getDocumentOptions(),a=t.getHeaderFooterParams(),s=!1;return o.forEach((function(t,d){var c=Math.floor(d/e),g=d%e;s=l.addHeaderAndFooterToPage({pageNode:n?t:t.children[0],headerFooterParams:a&&a[c],documentOptions:i,pageIndex:r.mergePageIndexes?(r.startAreaIndex?r.startAreaIndex*e:0)+d:g,numPages:r.mergePageIndexes?r.numAreas?r.numAreas*e:o.length:e})||s})),s},_cleanUpAndCombinePageNodes:function(e){return(t=e.map((function(e){return e.outerHTML})).join(""))&&t.replace(/esriMapsAnalystXNonSelectable|esriGENonSelectable|esriMapsAnalystXClickable|dojogfxstrokestyle="solid"/g,"");var t}};return u}));