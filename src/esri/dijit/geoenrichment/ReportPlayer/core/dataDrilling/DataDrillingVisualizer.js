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

define(["dojo/_base/declare","dojo/_base/lang","dojo/aspect","esri/dijit/geoenrichment/when","dojo/on","dojo/keys","dojo/query","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","dijit/Destroyable","esri/dijit/geoenrichment/utils/DelayUtil","esri/dijit/geoenrichment/utils/DeviceUtil","esri/dijit/geoenrichment/utils/DomUtil","esri/dijit/geoenrichment/utils/MouseUtil","esri/dijit/geoenrichment/utils/TooltipUtil","esri/dijit/geoenrichment/utils/WaitingUtil","esri/dijit/geoenrichment/utils/animation/AnimationUtil","esri/dijit/geoenrichment/utils/mobile/GesturesUtil","../sections/sectionUtils/SectionJsonUtil","../supportClasses/ViewModes","./DataDrillingBackgroundUtil","./DataDrillingExportUtil","../../ReportPlayerState","dojo/i18n!esri/nls/jsapi"],(function(i,t,e,n,o,l,a,r,s,d,c,h,u,D,g,m,w,f,v,y,p,S,b,_,V,B){B=B.geoenrichment.dijit.ReportPlayer.Infographics;var x={w:700,h:600,minW:400,minH:500},T=i(h,{viewModel:null,theme:null,parentWidget:null,currentFeatureIndex:null,currentFeatureAttributes:null,getPreviewValueFunction:null,ddZoomScreenClass:null,closeZoomedDDWhenClickedOutside:!0,closeZoomedDDOnEsc:!0,zIndex:null,domNode:null,ddZoomScreen:null,dataDrillingViewDiv:null,_drillingSections:null,_currentTriggerButtonBox:null,_toDataDrillingScale:1,constructor:function(i){t.mixin(this,i),this._buildLayout(),D.isMobileDevice()&&y.preventDefaultOverflow(this.dataDrillingViewDiv)},_buildLayout:function(){var i=this;function t(i,t){return s.create("div",{class:i},t)}this.dataDrillingViewDiv=t("dataDrilling_dataDrillingViewDiv esriGEReportPlayer esriGENonSelectable"),this.drilledDataViewDiv=t("dataDrilling_drilledDataViewDiv esriGEAbsoluteStretched",this.dataDrillingViewDiv),this.drilledDataViewDivScaler=t("",this.drilledDataViewDiv),this.topToolbar=t("dataDrilling_topToolbar",this.dataDrillingViewDiv),this.dynamicSettingsToolbarRoot=t("dijitInline dataDrilling_dynamicSettingsToolbarRoot",this.topToolbar),this.exportButton=t("dijitInline dataDrilling_exportButton",this.topToolbar),this.printButton=t("dijitInline dataDrilling_printButton",this.topToolbar),this.backToMainViewButton=t("dijitInline dataDrilling_backToMainViewButton",this.topToolbar),o(this.backToMainViewButton,"click",(function(){i.onClose()}));var e=this.exportButton,n=this.printButton;g.hide([e,n]),this.viewModel.dynamicReportInfo&&(_.canExportDataDrilling(this.parentWidget)&&(w.setTooltipToNode(e,B.exportInfographic),g.show(e),o(e,"click",(function(){_.exportDataDrilling(i)}))),_.canPrintDataDrilling(this.parentWidget)&&(w.setTooltipToNode(n,B.printInfographic),g.show(n),o(n,"click",(function(){_.printDataDrilling(i)}))))},play:function(i,t,e,n,o){var l=this;function a(i){i?(g.show(l.dataDrillingViewDiv),l.dataDrillingViewDiv.parentNode!==document.body&&document.body.appendChild(l.dataDrillingViewDiv),l.zIndex&&c.set(l.dataDrillingViewDiv,"zIndex",l.zIndex)):(l.dataDrillingViewDiv.parentNode===document.body&&document.body.removeChild(l.dataDrillingViewDiv),g.hide(l.dataDrillingViewDiv))}function s(){a(i),l._setZoomScreen(i,!1),l._setCloseHandlers(i),V.isViewingDataDrillingZoom=i,r[i?"add":"remove"](l.domNode,"isDrillingData"),r.remove(l.domNode,"isShowingAnimation")}if(this.viewModel.setBenchmarkDisabled&&this.viewModel.setBenchmarkDisabled(i),this._currentTriggerButtonBox=e?d.position(e):this._currentTriggerButtonBox,r.add(this.domNode,"isShowingAnimation"),t){var h,D;if(a(!0),i?(h=this.getDataDrillingPanelDimensions(n),c.set(this.dataDrillingViewDiv,{width:h.w+"px",height:h.h+"px"})):h={w:this.dataDrillingViewDiv.clientWidth,h:this.dataDrillingViewDiv.clientHeight,scale:this._toDataDrillingScale},this._setZoomScreen(i,!0),i){var m=this._toDataDrillingScale=h.scale||1;D=v.animateResize({duration:200,domNode:this.dataDrillingViewDiv,fromBox:h.animateFromCenter||!this._currentTriggerButtonBox?{x:0,y:0,w:document.body.clientWidth,h:document.body.clientHeight}:this._currentTriggerButtonBox,startScaleX:.7*m,startScaleY:.7*m,fromOffset:{x:"c",y:"c"},toBox:{x:(document.body.clientWidth-h.w*m)/2,y:(document.body.clientHeight-h.h*m)/2+(h.yOffset||0),w:h.w,h:h.h},endScaleX:h.scale,endScaleY:h.scale,onEnd:s}),v.animateFadeIn({domNode:l.dataDrillingViewDiv,duration:100})}else D=v.animateResize({duration:200,domNode:this.dataDrillingViewDiv,toBox:this._currentTriggerButtonBox,startScaleX:h.scale,startScaleY:h.scale,endScaleX:.7*(h.scale||1),endScaleY:.7*(h.scale||1),toOffset:{x:"c",y:"c"},onEnd:s}),v.animateFadeOut({domNode:this.dataDrillingViewDiv,duration:100});var w=D&&D.then((function(){return u.delay(100)}));return i&&n&&l.renderCustomSectionJson({sectionJson:n,fieldInfo:o,promise:w}),w}s()},_setZoomScreen:function(i,t){var e=this;if(i!==!!this.ddZoomScreen)if(i)this.ddZoomScreen=s.create("div",{class:"esriGEAbsoluteStretched dataDrilling_dataDrillingViewDivScreen"+(D.isMobileDevice()?" mobile":"")},this.dataDrillingViewDiv,"before"),D.isMobileDevice()&&y.preventDefaultOverflow(this.ddZoomScreen),this.zIndex&&c.set(this.ddZoomScreen,"zIndex",this.zIndex),this.ddZoomScreenClass&&r.add(this.ddZoomScreen,this.ddZoomScreenClass),t&&v.animateFadeIn({domNode:this.ddZoomScreen,duration:100});else{var n=function(){e.ddZoomScreen&&s.destroy(e.ddZoomScreen),e.ddZoomScreen=null};t?v.animateFadeOut({domNode:this.ddZoomScreen,duration:100,onEnd:n}):n()}},_clickOutsideHandler:null,_keyboardHandler:null,_setCloseHandlers:function(i){var t=this;this._clickOutsideHandler&&this._clickOutsideHandler.remove(),this._clickOutsideHandler=null,this._keyboardHandler&&this._keyboardHandler.remove(),this._keyboardHandler=null,i&&(this.closeZoomedDDWhenClickedOutside&&(this._clickOutsideHandler=o(document.body,D.press,(function(){V.isViewingDynamicSettings||m.isMouseOver(t.dataDrillingViewDiv,{checkAllChildren:!0})||t._drillingSections[0].isMouseOver()||t.onClose()}))),this.closeZoomedDDOnEsc&&(this._keyboardHandler=o(document.body,"keyup",(function(i){i.keyCode===l.ESCAPE&&t.onClose()}))))},updateView:function(){var i=this.getSection();if(i){var t=this.dataDrillingViewDiv,e=i.getWidth(),n=i.getHeight(),o=t.clientWidth,l=t.clientHeight,a=c.get(t,"left"),r=c.get(t,"top"),s=-(e-o)/2,d=-(n-l)/2;t.style.width=e+"px",t.style.height=n+"px",t.style.left=a+s+"px",t.style.top=r+d+"px"}},getDataDrillingPanelDimensions:function(i){var t=document.body.clientWidth-(D.isLandscape()?80:40),e=document.body.clientHeight-80;if(!!i){var n=p.calcSectionJsonBox(i),o={w:i.style&&i.style.width||n.w||x.w,h:i.style&&i.style.height||n.h||x.h},l=Math.min(1,t/o.w,e/o.h);return D.isMobileDevice()?{w:o.w,h:o.h,scale:l,yOffset:10,animateFromCenter:!0}:{w:o.w,h:o.h,scale:l,yOffset:e-30>o.h?0:15}}l=Math.max(.7,Math.min(1,t/x.minW,e/x.minH));return D.isMobileDevice()?{w:t/l,h:e/l,scale:l,yOffset:10,animateFromCenter:!0}:{w:Math.min(t/l,x.w),h:Math.min(e/l,x.h),scale:l,yOffset:e-30>x.h?0:15}},renderCustomSectionJson:function(i){var t,e=this;this.destroyContent();var o=this.getDataDrillingPanelSectionParams(i.sectionJson);return this._showDDProgress(!0),n(i.promise).then((function(){return u.delay((function(){return(t=e._createDataDrillingSection(o)).fitContentNicely(),t.domNode.style.opacity="0.01",n(t.getRenderPromise(),(function(){return u.delay((function(){t.domNode.style.opacity="",t.notifyShown(),e._showDDProgress(!1),e.onCustomSectionRendered(i)}))}))}))}))},getDataDrillingPanelSectionParams:function(i){var t={class:"infographicContainer_dataDrillingSection"},e=this.getDataDrillingPanelDimensions(i);return t.json=i,t.initialWidth=e.w,t.initialHeight=e.h,t.viewModel=this.viewModel,t.theme=this.theme,t.parentWidget=this,t.isDataDrillingView=!0,t.currentFeatureIndex=this.currentFeatureIndex||0,t.currentFeatureAttributes=this.currentFeatureAttributes,t.getPreviewValueFunction=this.getPreviewValueFunction,t.initialViewMode=S.PREVIEW_VALUES,this.dynamicSettingsToolbarRoot.innerHTML="",t.dynamicSettingsToolbarRoot=this.dynamicSettingsToolbarRoot,t},_createDataDrillingSection:function(i){var t=this.getDataDrillingPanelDimensions(i.json),n=this.viewModel.layoutBuilder.createElement("section",i,this.drilledDataViewDivScaler);return this._drillingSections.push(n),r[a(".sectionDynamicSettings_settingsButton",this.dataDrillingViewDiv)[0]?"add":"remove"](this.dataDrillingViewDiv,"hasChartSettingsButton"),this.setUpDDPanelBackgroundColor(),t.scale&&(n.notifyPanelScaleChanged(t.scale),this._applyScaleToDataDrillingToolbarButtons(t.buttonScale||t.scale),e.after(n,"onDynamicSettingsButtonsCreated",function(){this._applyScaleToDataDrillingToolbarButtons(t.buttonScale||t.scale)}.bind(this))),n},getSection:function(){return this._drillingSections[0]},_applyScaleToDataDrillingToolbarButtons:function(i){var t=1/i,e=[],n=a(".sectionDynamicSettings_buttonBar",this.dynamicSettingsToolbarRoot)[0];if(n)for(var o=0;o<n.children.length;o++)e.push(n.children[o]);e.push(this.exportButton),e.push(this.printButton),e.push(this.backToMainViewButton),e.forEach((function(i,e){if(i.style.transformOrigin="100% 100%",i.style.transform="scale("+t+")",i.style["webkit-transform"]="scale("+t+")",e>0){var n=26*t;n+=32*(t-1),i.style.marginLeft=n+"px"}}))},setUpDDPanelBackgroundColor:function(){b.setUpDDPanelBackgroundColor({viewModel:this.viewModel,theme:this.theme,infographicJson:this.getInfographicJson(),node:this.dataDrillingViewDiv})},getInfographicJson:function(){return null},_showDDProgress:function(i){f[i?"showProgress":"removeProgress"](this.dataDrillingViewDiv),this.topToolbar&&(this.topToolbar.style.opacity=i?"0.001":"")},destroyContent:function(){this._drillingSections=this._drillingSections||[],this._drillingSections.forEach((function(i){i.destroy()})),this._drillingSections.length=0,this.drilledDataViewDivScaler.innerHTML=""},onClose:function(){},onCustomSectionRendered:function(i){},destroy:function(){this.destroyContent(),this._setCloseHandlers(!1)}});return T.DATA_DRILLING_BOX_ZOOM=x,T}));