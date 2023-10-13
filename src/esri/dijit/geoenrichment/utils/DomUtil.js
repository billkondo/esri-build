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

define(["dojo/dom-attr","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","dojo/query","esri/dijit/geoenrichment/Deferred","dojo/domReady!"],(function(e,t,n,o,r,i,d){var u,l,s={};function a(e,t){return Array.isArray(e)?e.forEach(t):t(e),e}function c(e,t,n){var o=!1,r=function(e){!e||n&&!n(e)||(e.parentNode===t?o=!0:r(e.parentNode))};return r(e),o}function f(e){return!s.isHidden(e)&&"none"!==r.get(e,"display")&&!t.contains(e,"dijitHidden")}return s.isHidden=function(e){return e&&t.contains(e,"esriGEHidden")},s.hasVisibleChildren=function(e){if(!e||!e.children.length)return!1;for(var t=0;t<e.children.length;t++)if(!s.isHidden(e.children[t]))return!0;return!1},s.hide=function(e){return s.addTag(e,"esriGEHidden")},s.show=function(e){return s.removeTag(e,"esriGEHidden")},s.display=function(e,t){return s[t?"show":"hide"](e)},s.addTag=function(e,n){return a(e,(function(e){e&&t.add(e,n)}))},s.removeTag=function(e,n){return a(e,(function(e){e&&t.remove(e,n)}))},s.getChildIndex=function(e,t){if(!e||!e.children||!t)return-1;for(var n=0;n<e.children.length;n++)if(e.children[n]===t)return n;return-1},s.isChildOf=function(e,t){return c(e,t)},s.isNodeInLayout=function(e){return c(e,document.body,(function(e){return f(e)}))},s.isNodeVisible=function(e){return c(e,document.body,(function(e){return f(e)&&"hidden"!==r.get(e,"visibility")}))},s.isNodeOnscreen=function(e){return c(e,document.body,(function(e){return!t.contains(e,"esriGEOffscreen")}))},s.enableContent=function(e,i,d){if(e){d=d||{};var u=e.children.length-1;if(!(u<0)){var l=e.children[u];if(t.contains(l,"esriGEDisabledContent")||(l=null),l&&e.removeChild(l),!i){if(l=n.create("div",{class:"esriGEDisabledContent"+(d.overlayClass?" "+d.overlayClass:"")},e),d.textContent&&(l.textContent=d.textContent),!1!==d.fitParent){var s=o[d.marginBox?"getMarginBox":"getContentBox"](e).h;s&&r.set(l,{height:s+"px",marginTop:-s+"px"})}return l}}}},s.enableContentAbsolute=function(e,t,n){if(e){n=n||{};var o=r.get(e,"position");return"relative"===o||"absolute"===o||t||r.set(e,"position","relative"),s.enableContent(e,t,{overlayClass:"esriGEAbsoluteStretched"+(n.overlayClass?" "+n.overlayClass:"")+(n.isTransparent?" esriGEDisabledContentTransparent":""),fitParent:!1,textContent:n.textContent})}},s.hideNodeInBackground=function(t,o){if(t){if(t._hideNodeInBackgroundUndoController)return t._hideNodeInBackgroundUndoController;var r=n.create("div",null,t,"after"),i=n.create("div",{style:"position: absolute; left: 0px; top: 0px;"},(u||(u=n.create("div",{class:"esriGEOffscreen"},document.body)),u));n.place(t,i);var d="DomUtil.hideNodeInBackground"+(o?"."+o:"");e.set(r,"_bg_memo_node",d),e.set(i,"_bg_temp_node",d);var l={remove:function(){r&&(r.parentNode&&n.place(t,r,"replace"),n.destroy(r),n.destroy(i),u.children.length||(n.destroy(u),u=null),r=null,delete t._hideNodeInBackgroundUndoController)}};return t._hideNodeInBackgroundUndoController=l,l}},s.showNodeFromBackground=function(e){e&&e._hideNodeInBackgroundUndoController&&e._hideNodeInBackgroundUndoController.remove()},s.noTransformPosition=function(e){if(e){var t;if(e instanceof SVGElement&&e.getBBox){var n=e.ownerSVGElement&&e.ownerSVGElement.parentNode;t=n&&i(n);var o=e.getBBox();return{x:(o.x||0)+t.x,y:(o.y||0)+t.y,w:o.width||0,h:o.height||0}}return{x:(t=i(e)).x,y:t.y,w:function(e){return r.get(e,"width")+r.get(e,"paddingLeft")+r.get(e,"paddingRight")+r.get(e,"borderLeftWidth")+r.get(e,"borderRightWidth")}(e),h:function(e){return r.get(e,"height")+r.get(e,"paddingTop")+r.get(e,"paddingBottom")+r.get(e,"borderTopWidth")+r.get(e,"borderBottomWidth")}(e)}}function i(e){for(var t={x:0,y:0},n=e;n.offsetParent;)t.x+=n.offsetLeft,t.y+=n.offsetTop,n=n.offsetParent,t.x+=r.get(n,"borderLeftWidth"),t.y+=r.get(n,"borderTopWidth");return t}},s.getNodesBox=function(e,t){if(!e||!e.length)return null;t=t||{};for(var n=1e6,r=-1e6,i=1e6,d=-1e6,u=0;u<e.length;u++){var l=e[u],a=t.ignoreTransformation?s.noTransformPosition(l):o.position(l);n=Math.min(n,a.x),i=Math.min(i,a.y),r=Math.max(r,a.x+a.w),d=Math.max(d,a.y+a.h)}var c={x:n,y:i,w:r-n,h:d-i};if(t.originNode){var f=t.ignoreTransformation?s.noTransformPosition(t.originNode):o.position(t.originNode);c.x-=f.x,c.y-=f.y}return c},s.traverseChildren=function(e,t){!function e(n){if(n&&n.children)for(var o=0;o<n.children.length;o++){var r=n.children[o];if(t(r))return;e(r)}}(e)},s.scrollToListNode=function(e,t,n){var o=t.offsetTop+t.clientHeight,r=o-(e.scrollTop+e.clientHeight);r>0&&(e.scrollTop+=r),n&&(o-=t.clientHeight-n.offsetTop,(r=e.scrollTop-o)>0&&(e.scrollTop-=r))},s.getScrollbarSize=function(){if(!l){var e=n.create("div",null,document.body);e.style.width="100px",e.style.height="100px",e.style.overflow="scroll",e.style.position="absolute",e.style.top="9999px",l={w:e.offsetWidth-e.clientWidth,h:e.offsetHeight-e.clientHeight},n.destroy(e)}return l},s.hasScrollbars=function(e){var t=r.getComputedStyle(e);return{w:"scroll"===t.overflowX||e.offsetWidth>e.clientWidth&&"auto"===t.overflowX,h:"scroll"===t.overflowY||e.offsetHeight>e.clientHeight&&"auto"===t.overflowY}},s.getMeasureContext=function(e){return(e=e||{}).style=e.style?e.style+" ":"",e.style+="display: inline-block; position: absolute; left: 0; top: 0;",{div:n.create("div",e,document.body),measureText:function(e){this.div.innerHTML=e;var t=o.getMarginBox(this.div);return delete t.l,delete t.t,t},destroy:function(){n.destroy(this.div)}}},s.getTextBox=function(e,t){var n=s.getMeasureContext(t),o=n.measureText(e);return n.destroy(),o},s.getNodeFontFamily=function(e){var t=r.get(e,"fontFamily")||r.getComputedStyle(e).fontFamily;return t&&t.replace(/'|"/g,"").split(",")[0]},s.getNodeFontSize=function(e){return r.toPixelValue(e,r.get(e,"fontSize"))},s.stealFocus=function(){var e=new d;try{var t=n.create("input",{type:"text",style:"position: absolute; left: 0px; top: 0px;"});n.place(t,document.body),t.select(),n.destroy(t)}catch(e){}return setTimeout(e.resolve,0),e.promise},s.getWindowBox=function(){for(var e=[],t=0,n=document.body.children.length;t<n;t++){var o=document.body.children[t];s.isHidden(o)||(s.hide(o),e.push(o))}var r={w:document.body.clientWidth,h:document.body.clientHeight};return e.forEach((function(e){s.show(e)})),r},s.isBodyLtr=function(){return"ltr"===(document.body.dir||"ltr").toLowerCase()},s.setAttribute=function(t,n,o){return 2===arguments.length?e.set(t,n):e.set(t,n,o)},s.getAttribute=function(t,n,o){return 2===arguments.length?e.get(t,n):e.get(t,n,o)},s.addClass=function(e,n){t.add(e,n)},s.removeClass=function(e,n){t.remove(e,n||"")},s.toggleClass=function(e,n,o){t[o?"add":"remove"](e,n||"")},s.replaceClass=function(e,n,o){return t.replace(e,n,o)},s.containsClass=function(e,n){return t.contains(e,n)},s.getStyle=function(e,t){return r.get(e,t)},s.setStyle=function(e,t,n){return 2===arguments.length?r.set(e,t):r.set(e,t,n)},s.setFullTextStyle=function(e,t){t.fontSize&&((t=Object.assign({},t)).fontSize=t.fontSize+"px"),s.setStyle(e,t)},s.getStylePixelValue=function(e,t){var n=s.getStyle(e,t);return"number"==typeof n?n:parseFloat(n)||0},s.getComputedStyle=function(e){return e&&1===e.nodeType&&window.getComputedStyle(e)},s.position=function(e,t){return o.position(e,t)},s.getMarginBox=function(e,t){return o.getMarginBox(e,t)},s.getMarginExtents=function(e,t){return o.getMarginExtents(e,t)},s.getContentBox=function(e,t){return o.getContentBox(e,t)},s.getPadBorderExtents=function(e,t){return o.getPadBorderExtents(e,t)},s.getPadExtents=function(e,t){return o.getPadExtents(e,t)},s.getBorderExtents=function(e,t){return o.getBorderExtents(e,t)},s.docScroll=function(){return o.docScroll()},s.create=function(e,t,o,r){return n.create(e,t,o,r)},s.toDom=function(e){return n.toDom(e)},s.place=function(e,t,o){return n.place(e,t,o)},s.empty=function(e){return n.empty(e)},s.destroy=function(e){return n.destroy(e)},s.query=function(e,t){for(var n=i(e,t),o=[],r=0,d=n.length;r<d;r++)o.push(n[r]);return o},s}));