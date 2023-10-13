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

define(["require","exports","../polyfill/tsSupport/awaiter","../polyfill/tsSupport/generator","../Dictionary","../executionError","../languageUtils","../featureset/support/shared"],(function(e,n,t,r,o,i,a,u){"use strict";function c(e){return e&&e.domain?"coded-value"===e.domain.type||"codedValue"===e.domain.type?o.convertObjectToArcadeDictionary({type:"codedValue",name:e.domain.name,dataType:u.layerFieldEsriConstants[e.field.type],codedValues:e.domain.codedValues.map((function(e){return{name:e.name,code:e.code}}))}):o.convertObjectToArcadeDictionary({type:"range",name:e.domain.name,dataType:u.layerFieldEsriConstants[e.field.type],min:e.domain.min,max:e.domain.max}):null}Object.defineProperty(n,"__esModule",{value:!0}),n.registerFunctions=void 0,n.registerFunctions=function(e){"async"===e.mode&&(e.functions.domain=function(n,o){var u=this;return e.standardFunctionAsync(n,o,(function(e,s,d){return t(u,void 0,void 0,(function(){return r(this,(function(e){switch(e.label){case 0:return a.pcCheck(d,2,3,n,o),a.isFeature(d[0])?[2,c(a.featureFullDomain(d[0],a.toString(d[1]),void 0===d[2]?void 0:a.toNumber(d[2])))]:a.isFeatureSet(d[0])?[4,d[0]._ensureLoaded()]:[3,2];case 1:return e.sent(),[2,c(a.getDomain(a.toString(d[1]),d[0],null,void 0===d[2]?void 0:a.toNumber(d[2])))];case 2:throw new i.ArcadeExecutionError(n,i.ExecutionErrorCodes.InvalidParameter,o)}}))}))}))},e.functions.subtypes=function(n,u){var c=this;return e.standardFunctionAsync(n,u,(function(e,s,d){return t(c,void 0,void 0,(function(){var e;return r(this,(function(t){switch(t.label){case 0:return a.pcCheck(d,1,1,n,u),a.isFeature(d[0])?(e=a.featureSubtypes(d[0]))?[2,o.convertObjectToArcadeDictionary(e)]:[2,null]:a.isFeatureSet(d[0])?[4,d[0]._ensureLoaded()]:[3,2];case 1:return t.sent(),(e=d[0].subtypes())?[2,o.convertObjectToArcadeDictionary(e)]:[2,null];case 2:throw new i.ArcadeExecutionError(n,i.ExecutionErrorCodes.InvalidParameter,u)}}))}))}))},e.functions.domainname=function(n,o){var u=this;return e.standardFunctionAsync(n,o,(function(e,c,s){return t(u,void 0,void 0,(function(){var e;return r(this,(function(t){switch(t.label){case 0:return a.pcCheck(s,2,4,n,o),a.isFeature(s[0])?[2,a.featureDomainValueLookup(s[0],a.toString(s[1]),s[2],void 0===s[3]?void 0:a.toNumber(s[3]))]:a.isFeatureSet(s[0])?[4,s[0]._ensureLoaded()]:[3,2];case 1:return t.sent(),e=a.getDomain(a.toString(s[1]),s[0],null,void 0===s[3]?void 0:a.toNumber(s[3])),[2,a.getDomainValue(e,s[2])];case 2:throw new i.ArcadeExecutionError(n,i.ExecutionErrorCodes.InvalidParameter,o)}}))}))}))},e.signatures.push({name:"domainname",min:2,max:4}),e.functions.domaincode=function(n,o){var u=this;return e.standardFunctionAsync(n,o,(function(e,c,s){return t(u,void 0,void 0,(function(){var e;return r(this,(function(t){switch(t.label){case 0:return a.pcCheck(s,2,4,n,o),a.isFeature(s[0])?[2,a.featureDomainCodeLookup(s[0],a.toString(s[1]),s[2],void 0===s[3]?void 0:a.toNumber(s[3]))]:a.isFeatureSet(s[0])?[4,s[0]._ensureLoaded()]:[3,2];case 1:return t.sent(),e=a.getDomain(a.toString(s[1]),s[0],null,void 0===s[3]?void 0:a.toNumber(s[3])),[2,a.getDomainCode(e,s[2])];case 2:throw new i.ArcadeExecutionError(n,i.ExecutionErrorCodes.InvalidParameter,o)}}))}))}))},e.signatures.push({name:"domaincode",min:2,max:4})),e.functions.text=function(n,t){return e.standardFunctionAsync(n,t,(function(e,r,o){if(a.pcCheck(o,1,2,n,t),!a.isFeatureSet(o[0]))return a.toStringExplicit(o[0],o[1]);var i=a.defaultUndefined(o[1],"");return""===i?o[0].castToText():"schema"===i.toLowerCase()?o[0].convertToText("schema",e.abortSignal):"featureset"===i.toLowerCase()?o[0].convertToText("featureset",e.abortSignal):void 0}))},e.functions.gdbversion=function(n,o){var u=this;return e.standardFunctionAsync(n,o,(function(e,c,s){return t(u,void 0,void 0,(function(){return r(this,(function(e){switch(e.label){case 0:return a.pcCheck(s,1,1,n,o),a.isFeature(s[0])?[2,s[0].gdbVersion()]:a.isFeatureSet(s[0])?[4,s[0].load()]:[3,2];case 1:return[2,e.sent().gdbVersion];case 2:throw new i.ArcadeExecutionError(n,i.ExecutionErrorCodes.InvalidParameter,o)}}))}))}))},e.functions.schema=function(n,u){var c=this;return e.standardFunctionAsync(n,u,(function(e,s,d){return t(c,void 0,void 0,(function(){var e;return r(this,(function(t){switch(t.label){case 0:return a.pcCheck(d,1,1,n,u),a.isFeatureSet(d[0])?[4,d[0].load()]:[3,2];case 1:return t.sent(),[2,o.convertObjectToArcadeDictionary(d[0].schema())];case 2:if(a.isFeature(d[0]))return[2,(e=a.featureSchema(d[0]))?o.convertObjectToArcadeDictionary(e):null];throw new i.ArcadeExecutionError(n,i.ExecutionErrorCodes.InvalidParameter,u)}}))}))}))}}}));