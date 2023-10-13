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

define(["dojo/_base/Color","dojo/_base/declare","dojo/_base/lang","dojo/on","dojo/sniff","dojo/dom-construct","dojo/dom-class","dojo/dom-geometry","dijit/Destroyable","./supportClasses/TextRenderer","./supportClasses/TextEditor","./supportClasses/NumberAnimator","esri/dijit/geoenrichment/utils/DomUtil","esri/dijit/geoenrichment/utils/MathUtil","esri/dijit/geoenrichment/utils/MouseUtil","esri/dijit/geoenrichment/utils/UrlUtil"],(function(t,e,i,n,o,l,r,s,h,d,a,u,c,g,f,y){var v=e(h,{_buildLayoutFunc:null,_parentNode:null,constructor:function(t,e){i.mixin(this,t),this._parentNode=e,this.postCreate()},postCreate:function(){this._buildLayoutFunc(this),this.class&&r.add(this.domNode,this.class),this._parentNode&&this.placeAt(this._parentNode),this.value&&this.set("value",this.value)},get:function(t){return"value"===t?this._getValueAttr?this._getValueAttr():this.value:this[t]},set:function(t,e){"value"===t?this._setValueAttr?this._setValueAttr(e):this.value=e:this[t]=e},placeAt:function(t){return l.place(this.domNode,t),this},on:function(t,e){this.own(n(this.domNode,t,e))},isLeftToRight:function(){return s.isBodyLtr(document)},destroy:function(){l.destroy(this.domNode),this._parentNode=null,this.domNode=null,this._buildLayoutFunc=null}});function _(t){t.domNode=l.toDom("<div class='esriGEAdjustableGridValueField'><div class='valueField_contentBlock'><div class='valueField_valueBlock'><div class='valueField_valueLabel'></div></div></div></div>"),t.contentBlock=t.domNode.children[0],t.valueContainer=t.contentBlock.children[0],t.valueLabel=t.valueContainer.children[0]}var m={width:1,height:1,angle:1,opacity:1},p={color:1,fontSize:1,lineHeight:1,fontFamily:1,fontWeight:1,fontStyle:1,textDecoration:1,backgroundColor:1,verticalAlign:1,horizontalAlign:1,horizontalPadding:1,verticalPadding:1,overrideStyle:1},S={borderTopColor:1,borderTopWidth:1,borderTopOpacity:1,borderTopStyle:1,borderRightColor:1,borderRightWidth:1,borderRightOpacity:1,borderRightStyle:1,borderBottomColor:1,borderBottomWidth:1,borderBottomOpacity:1,borderBottomStyle:1,borderLeftColor:1,borderLeftWidth:1,borderLeftOpacity:1,borderLeftStyle:1},b=i.mixin({},m,p,S),C={verticalAlign:"top",horizontalAlign:"left",horizontalPadding:0,verticalPadding:0,angle:0,opacity:1},B=e(v,{isValueField:!0,DEFAULT_STYLES:C,viewModel:null,trimTextIfOverflows:!1,autoDetectUrl:!1,valueLabel:null,fieldStyle:null,defaultBorderStyle:null,_borderStyle:null,content:null,postCreate:function(){this._buildLayoutFunc=this._buildLayoutFunc||_,this.inherited(arguments),this.setStyle(this.fieldStyle),this.setContent(this.content)},_destroyExistingContent:function(){this.content&&(this.content.destroy&&this.content.destroy(),this.contentContainer&&(this.contentContainer.innerHTML=""),this.content=null)},getContentContainerNode:function(t){return t||this._destroyExistingContent(),this.contentContainer||(this.contentContainer=l.create("div",{class:"valueField_valueBlock"},this.contentBlock,"first")),c.show(this.contentContainer),this.contentContainer},setContent:function(t){if(this._destroyExistingContent(),this.content=t,this.content){this.getContentContainerNode(!0);var e=this.content.domNode||this.content;e&&e.parentNode!==this.contentContainer&&l.place(e,this.contentContainer)}if(this.content)l.destroy(this.valueContainer),this.valueContainer=null;else if(l.destroy(this.contentContainer),this.contentContainer=null,this._restoreValueContainer()){var i=this._value;this._value=null,this.set("value",i)}else this.set("value",this._value)},_restoreValueContainer:function(){return!this.valueContainer&&(this.valueContainer=l.toDom("<div class='valueField_valueBlock'><div class='valueField_valueLabel'></div></div>"),this.contentBlock.appendChild(this.valueContainer),this.valueLabel=this.valueContainer.children[0],this.setStyle(this.fieldStyle),!0)},_value:null,_getValueAttr:function(){return this._value},_setValueAttr:function(t){this._value!==t&&(this._value=t,this._setValueLabelText(t))},_setValueLabelText:function(t){this.valueLabel&&(d.renderText(this,t,this._benchmarkInfo),this.parentGrid&&this.parentGrid.viewModel&&this.parentGrid.viewModel.isReportPlayerViewModel&&!(this.row.fieldInfos&&this.row.fieldInfos[this.column.field])&&this.row.editInfo&&this.row.editInfo[this.column.field]&&a.setTextEditing(this));return t},hasOverflowText:function(){return!this.content&&d.hasOverflowText(this)},_benchmarkInfo:null,setBenchmarkInfo:function(t){this._benchmarkInfo=t},currentNumberValue:null,numberFormatFunction:null,_canAnimate:!1,setNumberValue:function(t,e,i){this.currentNumberValue=t,this.numberFormatFunction=e,this._canAnimate=i&&this.viewModel.isAnimationAllowed(),this.currentNumberValue&&this.numberFormatFunction&&this._canAnimate&&this._animateNumber()},notifyShown:function(){this.currentNumberValue&&this.numberFormatFunction&&this._canAnimate&&this._animateNumber()},_animateNumber:function(){u.animateNumber(this,this.currentNumberValue,this.numberFormatFunction)},appliedConditionalStyle:null,getFullStyle:function(){return i.mixin({},C,this.fieldStyle)},setStyle:function(t){t=t||{},this.fieldStyle=i.mixin(this.fieldStyle||{},t),"number"==typeof this.fieldStyle.opacity&&(this.fieldStyle.opacity=Math.max(0,Math.min(1,this.fieldStyle.opacity)));var e=void 0!==t.width||void 0!==t.height;this._applyAlignAndPaddingStyles(),this._applyTransformStyles(),this._applyTextStyleToDom(this.domNode),(e=this._setBorderStyle()||e)&&this._refreshLayout()},_applyAlignAndPaddingStyles:function(){this.domNode.style.textAlign=this.fieldStyle.horizontalAlign||C.horizontalAlign;var t=this.fieldStyle.verticalAlign||C.verticalAlign;this.valueLabel&&(this.valueLabel.style.paddingLeft="",this.valueLabel.style.paddingRight="",this.valueLabel.style.paddingTop="","number"==typeof this.fieldStyle.horizontalPadding&&(this.valueLabel.style.paddingLeft=this.fieldStyle.horizontalPadding+"px",this._allowRightPadding()&&(this.valueLabel.style.paddingRight=this.fieldStyle.horizontalPadding+"px")),"number"==typeof this.fieldStyle.verticalPadding&&"top"===t&&(this.valueLabel.style.paddingTop=this.fieldStyle.verticalPadding+"px")),this.valueContainer&&(this.valueContainer.style.verticalAlign=t),this.contentContainer&&(this.contentContainer.style.verticalAlign=t),this.domNode.style.opacity="number"==typeof this.fieldStyle.opacity?this.fieldStyle.opacity:""},_allowRightPadding:function(){return this.viewModel&&this.viewModel.isGraphicStyle()},_applyTransformStyles:function(){if(this.valueContainer){var t=o("webkit")?"webkitTransform":"transform",e=Number(this.fieldStyle.angle)||0;this.valueContainer.style[t]=0!==e?"rotate("+this.fieldStyle.angle+"deg)":""}},_supportedTextStyles:["color","fontSize","lineHeight","fontFamily","fontWeight","fontStyle","textDecoration","backgroundColor"],_applyTextStyleToDom:function(t){var e=this;this._supportedTextStyles.forEach((function(i){var n="fontSize"===i||"lineHeight"===i;if(e.fieldStyle[i]){var o=e.fieldStyle[i]+(n?"px":"");"backgroundColor"===i?e._setNodeBackgroundColor(t,o):t.style[i]=o}else t.style[i]=""}))},_setNodeBackgroundColor:function(t,e){var i=t===this.domNode&&this.fieldStyle.angle?this.valueContainer:t;i&&(i.style.backgroundColor=e),t===this.domNode&&this.fieldStyle.angle&&(this.domNode.style.backgroundColor="transparent")},clearTextStyle:function(){for(var t in p)delete this.fieldStyle[t];this.setStyle()},clearLineHeight:function(){delete this.fieldStyle.lineHeight,this.setStyle()},_currentBorderKey:null,_SIDES:["Top","Right","Bottom","Left"],setDefaultBorderStyle:function(t){this.defaultBorderStyle=t,this._setBorderStyle()&&this._refreshLayout()},clearBorder:function(){for(var t in S)delete this.fieldStyle[t];this.setStyle()},_setBorderStyle:function(){var e=i.mixin({},this.defaultBorderStyle,this.fieldStyle);this._borderStyle=e;var n=this._getBorderKey(e);return this._currentBorderKey!==n&&(this._currentBorderKey=n,this.domNode.style.border="",this._SIDES.forEach((function(i){var n="none",o=e["border"+i+"Color"],l=e["border"+i+"Width"],r=e["border"+i+"Style"]||"solid",s=e["border"+i+"Opacity"];o&&l>0&&0!==s&&"none"!==r&&(s<1&&((o=new t(o)).a=s,o=o.toCss(!0)),n=l+"px "+r+" "+o),this.domNode.style["border"+i]=n}),this),!0)},_getBorderKey:function(t){var e="";for(var i in S)e+=t[i]+"_";return e},_getLeftBorder:function(){return this._borderStyle&&this._borderStyle.borderLeftWidth||0},_getLeftPadding:function(){return this.fieldStyle.horizontalPadding||0},_getRightBorder:function(){return this._borderStyle&&this._borderStyle.borderRightWidth||0},_getRightPadding:function(){return this._allowRightPadding()&&this.fieldStyle.horizontalPadding||0},_getTopBorder:function(){return this._borderStyle&&this._borderStyle.borderTopWidth||0},_getTopPadding:function(){return this.fieldStyle.verticalPadding||0},_getBottomBorder:function(){return this._borderStyle&&this._borderStyle.borderBottomWidth||0},_getBottomPadding:function(){return this.fieldStyle.verticalPadding||0},getWidth:function(){return this.fieldStyle.width||0},getContentWidth:function(){return this.getWidth()-this._getLeftBorder()-this._getRightBorder()-this._getLeftPadding()-this._getRightPadding()},setWidth:function(t){if(this.contentBlock&&this.domNode){t=Math.max(0,t),this.fieldStyle.width=t,this.domNode.style.width=t+"px";var e=this.getWidth()-this._getLeftBorder()-this._getRightBorder();this.contentBlock.style.width=e+"px",this.valueContainer&&(this.valueContainer.style.width=e+"px"),this.valueLabel&&(this.valueLabel.style.width=e-this._getLeftPadding()-this._getRightPadding()+"px"),this.contentContainer&&(this.contentContainer.style.width=e+"px"),d.renderText(this),this.onWidthChanged(),this.onSizeChanged()}},getHeight:function(){return this.fieldStyle.height||0},getContentHeight:function(){return this.getHeight()-this._getTopBorder()-this._getBottomBorder()-this._getTopPadding()-this._getBottomPadding()},setHeight:function(t){if(this.contentBlock&&this.domNode){t=Math.max(0,t),void 0!==this._minHeight&&(t=Math.max(t,this._minHeight)),this.fieldStyle.height=t,this.domNode.style.height=t+"px";var e=this.getHeight()-this._getTopBorder()-this._getBottomBorder();this.contentBlock.style.height=e+"px",this.valueContainer&&(this.valueContainer.style.height=e+"px"),this.contentContainer&&(this.contentContainer.style.height=e+"px"),d.renderText(this),this.onHeightChanged(),this.onSizeChanged()}},getMinHeight:function(){return this._minHeight||0},_minHeight:void 0,setMinHeight:function(t){this._minHeight=t,this.domNode.style.minHeight=t+"px";var e=t-this._getTopPadding()-this._getBottomPadding();this.contentBlock.style.minHeight=e+"px",this.valueContainer&&(this.valueContainer.style.minHeight=e+"px"),this.contentContainer&&(this.contentContainer.style.minHeight=e+"px"),d.renderText(this)},_refreshLayout:function(){this.setWidth(this.getWidth()),this.setHeight(this.getHeight()),void 0!==this._minHeight&&this.setMinHeight(this.getMinHeight())},getAngle:function(){return this.content&&this.content.getAngle?this.content.getAngle()||0:this.fieldStyle.angle||0},setAngle:function(t){this.content&&this.content.setAngle?this.content.setAngle(t):this.setStyle({angle:t||0})},isMouseOver:function(t){return this.domNode&&f.isMouseOverBox(this.getBBox())},getBBox:function(t){var e=t&&t.noTransformation?c.noTransformPosition(this.domNode):s.position(this.domNode);return 0===this.getAngle()?e:g.getRotatedRectBox(e,this.getAngle())},_urlClickHandle:null,setUrl:function(t){this._urlClickHandle&&this._urlClickHandle.remove(),this.valueLabel&&(r[t?"add":"remove"](this.valueLabel,"esriGEAdjustableGridValueFieldHyperLink"),t&&(this._urlClickHandle=n(this.valueLabel,"click",(function(){y.openUrl(y.toHttpUrl(t))}))))},onWidthChanged:function(){},onHeightChanged:function(){},onSizeChanged:function(){},destroy:function(){this.viewModel=null,this._destroyExistingContent(),this.inherited(arguments)}});return B.SUPPORTED_LAYOUT_STYLES=m,B.SUPPORTED_TEXT_STYLES=p,B.SUPPORTED_BORDER_STYLES=S,B.SUPPORTED_STYLES=b,B}));