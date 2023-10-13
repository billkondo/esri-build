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

define(["dojo/_base/declare","dojo/_base/connect","dojo/_base/lang","dojo/dom-construct","dojo/dom-style","dojox/gfx/matrix","../kernel","../config","../sniff","../request","../domUtils","./layer","./MapImage"],(function(t,e,i,n,s,a,o,r,h,_,l,c,d){var m=r.defaults.map.zoomDuration,p=t(c,{declaredClass:"esri.layers.DynamicMapServiceLayer",_eventMap:{"map-image-export":["mapImage"]},constructor:function(t,e){this.useMapTime=!e||!e.hasOwnProperty("useMapTime")||!!e.useMapTime,this.extentProcessor=e&&e.extentProcessor;var n=i.hitch;this._exportMapImageHandler=n(this,this._exportMapImageHandler),this._imgSrcFunc=n(this,this._imgSrcFunc),this._divAlphaImageFunc=n(this,this._divAlphaImageFunc),this._tileLoadHandler=n(this,this._tileLoadHandler),this._tileErrorHandler=n(this,this._tileErrorHandler),this.registerConnectEvents()},opacity:1,isPNG32:!1,_setMap:function(t,i,a){this.inherited(arguments),this._map=t;var r=this._div=n.create("div",null,i),_=o._css.names,l={position:"absolute",width:t.width+"px",height:t.height+"px",overflow:"visible",opacity:this.opacity},c=h("ie"),d=e.connect,m=t.__visibleDelta;if(8===c&&delete l.opacity,"css-transforms"===t.navigationMode?(this._isChildLayer||(l[_.transform]=o._css.translate(m.x,m.y),s.set(r,l)),this._left=m.x,this._top=m.y):(l.left="0px",l.top="0px",s.set(r,l),this._left=this._top=0),s.set(r,l),this._onResizeHandler_connect=d(t,"onResize",this,"_onResizeHandler"),this._opacityChangeHandler_connect=d(this,"onOpacityChange",this,"_opacityChangeHandler"),this._img_loading=null,this._dragOrigin={x:0,y:0},this.evaluateSuspension(),this.suspended&&!t.loaded)var p=e.connect(t,"onLoad",this,(function(){e.disconnect(p),p=null,this.evaluateSuspension()}));return this.extentProcessor&&(this._panEndEvalHandle=e.connect(t,"onPanEnd",this,this.evaluateSuspension),this._zoomEndEvalHandle=e.connect(t,"onZoomEnd",this,this.evaluateSuspension)),r},_unsetMap:function(t,i){this._img&&this._clearEventListeners(this._img),this._img_loading&&this._clearEventListeners(this._img_loading),n.destroy(this._div),this._map=this._div=this._img=this._img_loading=null;var s=e.disconnect;s(this._onResizeHandler_connect),s(this._opacityChangeHandler_connect),s(this._panEndEvalHandle),s(this._zoomEndEvalHandle),this._onResizeHandler_connect=this._opacityChangeHandler_connect=null,this._panEndEvalHandle=this._zoomEndEvalHandle=null,this._fireUpdateEnd(),this._toggleTime(),clearTimeout(this._wakeTimer),this._wakeTimer=null,this._disableDrawConnectors(),this.inherited(arguments)},_onResizeHandler:function(t,e,i){s.set(this._div,{width:e+"px",height:i+"px"}),this._onExtentChangeHandler(t)},onSuspend:function(){this.inherited(arguments),this._fireUpdateEnd(),this._toggleTime(),l.hide(this._div),clearTimeout(this._wakeTimer),this._wakeTimer=null,this._disableDrawConnectors()},onResume:function(){this.inherited(arguments);var t=this._map;if(this._toggleTime(),"css-transforms"===t.navigationMode){var e=t.__visibleDelta;this._left=e.x,this._top=e.y,this._isChildLayer||s.set(this._div,o._css.names.transform,o._css.translate(this._left,this._top))}this._enableDrawConnectors(),this._wakeTimer=this._wakeTimer||setTimeout(i.hitch(this,(function(){this.suspended||this._onExtentChangeHandler(this._map.extent,null,!0)})),0)},canResume:function(){var t=this.inherited(arguments);if(t){var e=this._map.extent;if(this.extentProcessor&&e){var i=this.extentProcessor({layer:this,extent:e,width:this._map.width});t=!!i.extent}}return t},_enableDrawConnectors:function(){var t=e.connect,i=this._map;i&&(this._onPanHandler_connect=t(i,"onPan",this,"_onPanHandler"),this._onExtentChangeHandler_connect=t(i,"onExtentChange",this,"_onExtentChangeHandler"),"css-transforms"===i.navigationMode?this._onScaleHandler_connect=t(i,"onScale",this,this._onScaleHandler):this._onZoomHandler_connect=t(i,"onZoom",this,"_onZoomHandler"))},_disableDrawConnectors:function(){var t=e.disconnect;t(this._onPanHandler_connect),t(this._onExtentChangeHandler_connect),t(this._onZoomHandler_connect),t(this._onScaleHandler_connect),this._onPanHandler_connect=this._onExtentChangeHandler_connect=this._onZoomHandler_connect=this._onScaleHandler_connect=null},_toggleTime:function(){var t=this._map;this.timeInfo&&this.useMapTime&&t&&!this.suspended?(this._timeConnect||(this._timeConnect=e.connect(t,"onTimeExtentChange",this,this._onTimeExtentChangeHandler)),this._setTime(t.timeExtent)):(e.disconnect(this._timeConnect),this._timeConnect=null,this._setTime(null))},_setTime:function(t){this._params&&(this._params.time=t?t.toJson().join(","):null)},_onPanHandler:function(t,e){this._panDx=e.x,this._panDy=e.y;var i=this._dragOrigin,n=this._map.__visibleDelta,a=this._img;a&&("css-transforms"===this._map.navigationMode?(this._left=n.x+e.x,this._top=n.y+e.y,this._isChildLayer||s.set(this._div,o._css.names.transform,o._css.translate(this._left,this._top))):s.set(a,{left:i.x+e.x+"px",top:i.y+e.y+"px"}))},_onExtentChangeHandler:function(t,i,r){if(!this.suspended){clearTimeout(this._wakeTimer),this._wakeTimer=null;var _=this._map,l=this._img,c=l&&l.style,d=this._dragOrigin;if(i&&!r&&l&&(i.x!==this._panDx||i.y!==this._panDy))if("css-transforms"===_.navigationMode){var p=_.__visibleDelta;this._left=p.x,this._top=p.y,this._isChildLayer||s.set(this._div,o._css.names.transform,o._css.translate(this._left,this._top))}else s.set(l,{left:d.x+i.x+"px",top:d.y+i.y+"px"});l?(d.x=parseInt(c.left,10),d.y=parseInt(c.top,10)):d.x=d.y=0,"css-transforms"===_.navigationMode&&r&&l&&(s.set(l,o._css.names.transition,"none"),l._multiply=l._multiply?a.multiply(l._matrix,l._multiply):l._matrix),this._fireUpdateStart();var g=this._img_loading;if(g){this._clearEventListeners(g),n.destroy(g),this._img_loading=null;var u=this._jsonRequest;if(u){try{u.cancel()}catch(t){}this._jsonRequest=null}}var f=_.width,x=_.height,v=f,y=x,H=0;if(this.version>=10&&_.wrapAround180&&(t=t._normalize(!0)),this.extentProcessor){var E=this.extentProcessor({layer:this,extent:t,width:v});t=E.extent,v=E.width,H=E.marginLeft||0}if(this.isPNG32){var w=this._img_loading=n.create("div");w.id=_.id+"_"+this.id+"_"+(new Date).getTime(),s.set(w,{position:"absolute",left:"0px",top:"0px",width:v+"px",height:y+"px"});var C=w.appendChild(n.create("div"));s.set(C,{opacity:0,width:v+"px",height:y+"px"}),this.getImageUrl(t,v,y,this._divAlphaImageFunc),w=null}else{var T=this._img_loading=n.create("img"),M=o._css.names,I=h("ie"),L={position:"absolute",width:v+"px",height:y+"px"};T.setAttribute("decoding","sync"),8===I&&(L.opacity=this.opacity),null!=H&&0!==H&&(L.marginLeft=H+"px"),"css-transforms"===_.navigationMode?(L[M.transform]=o._css.translate(-this._left,-this._top),T._tdx=-this._left,T._tdy=-this._top,L[M.transition]=M.transformName+" "+m+"ms ease",this.extentProcessor&&(L[M.origin]=f/2-H+"px "+x/2+"px")):(L.left="0px",L.top="0px"),T.id=_.id+"_"+this.id+"_"+(new Date).getTime(),s.set(T,L),T._onload_connect=e.connect(T,"onload",this,"_onLoadHandler"),T._onerror_connect=e.connect(T,"onerror",this,"_onErrorHandler"),T._onabort_connect=e.connect(T,"onabort",this,"_onErrorHandler"),this._startRect={left:d.x,top:d.y,width:l?parseInt(c.width,10):v,height:l?parseInt(c.height,10):y,marginLeft:l?parseInt(c.marginLeft||"0",10):H,zoom:c&&c.zoom?parseFloat(c.zoom):1},this.getImageUrl(t,v,y,this._imgSrcFunc),T=null}}},_onTimeExtentChangeHandler:function(t){this.suspended||(this._setTime(t),this.refresh(!0))},getImageUrl:function(t,e,i,n){},_imgSrcFunc:function(t){this._img_loading.src=t},_divAlphaImageFunc:function(t){s.set(this._img_loading,"filter","progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+t+"', sizingMethod='scale')"),this._onLoadHandler({currentTarget:this._img_loading})},_onLoadHandler:function(t){var e=t.currentTarget,i=this._map;if(this._clearEventListeners(e),!i||i.__panning||i.__zooming)return n.destroy(e),void this._fireUpdateEnd();this._img&&this._div.removeChild(this._img),this._img=e;var s=e.style;this._startRect={left:0,top:0,width:parseInt(s.width,10),height:parseInt(s.height,10),marginLeft:parseInt(s.marginLeft||"0",10),zoom:1},this._div.appendChild(e),this.suspended||l.show(this._div),this._img_loading=null;var a=this._dragOrigin;a.x=a.y=0,this.onUpdate(),this._fireUpdateEnd()},_onErrorHandler:function(t){var e=t.currentTarget;s.set(e,"visibility","hidden"),this._clearEventListeners(e);var i=new Error("Unable to load image: "+e.src);this.onError(i),this._fireUpdateEnd(i)},_clearEventListeners:function(t){e.disconnect(t._onload_connect),e.disconnect(t._onerror_connect),e.disconnect(t._onabort_connect),t._onload_connect=t._onerror_connect=t._onabort_connect=null},setUseMapTime:function(t,e){this.useMapTime=t,this._toggleTime(),e||this.refresh(!0)},refresh:function(){this._map&&this._onExtentChangeHandler(this._map.extent)},_onScaleHandler:function(t,e){var i={},n=o._css.names,r=this._img;r&&(s.set(r,n.transition,e?"none":n.transformName+" "+m+"ms ease"),r._matrix=t,t=r._multiply?a.multiply(t,r._multiply):t,(r._tdx||r._tdy)&&(t=a.multiply(t,{xx:1,xy:0,yx:0,yy:1,dx:r._tdx,dy:r._tdy})),i[n.transform]=o._css.matrix(t),s.set(r,i))},_onZoomHandler:function(t,e,i){var n=this._startRect,a=n.width*e,o=n.height*e,r=n.marginLeft*e,_=this._img,l=h("ie");_&&(l&&l<8?s.set(_,{left:n.left-(a-n.width)*(i.x-n.left)/n.width+"px",top:n.top-(o-n.height)*(i.y-n.top)/n.height+"px",zoom:e*n.zoom}):s.set(_,{left:n.left-(a-n.width)*(i.x-n.left)/n.width+"px",top:n.top-(o-n.height)*(i.y-n.top)/n.height+"px",width:a+"px",height:o+"px"}),null!=r&&0!==r&&s.set(_,{marginLeft:r+"px"}))},_exportMapImage:function(t,e,i){var n=this._exportMapImageHandler;e.token=this._getToken(),_({url:t,content:e,callbackParamName:"callback",load:function(){n(arguments[0],arguments[1],i)},error:r.defaults.io.errorHandler})},_exportMapImageHandler:function(t,e,i){var n=new d(t);this.onMapImageExport(n),i&&i(n)},onMapImageExport:function(){},setOpacity:function(t){this.opacity!=t&&this.onOpacityChange(this.opacity=t)},onOpacityChange:function(){},_opacityChangeHandler:function(t){var e=8===h("ie")?this._img:this._div;s.set(e,"opacity",t)}});return h("extend-esri")&&i.setObject("layers.DynamicMapServiceLayer",p,o),p}));