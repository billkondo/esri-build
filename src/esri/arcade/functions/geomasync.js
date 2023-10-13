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

define(["require","exports","../polyfill/tsSupport/awaiter","../polyfill/tsSupport/generator","../../kernel","../kernel","../languageUtils","./centroid","../../geometry/Extent","../../geometry/Geometry","../../geometry/geometryEngineAsync","../../geometry/Multipoint","../../geometry/Point","../../geometry/Polygon","../../geometry/Polyline","../../geometry/jsonUtils","../executionError"],(function(e,n,r,t,o,i,a,u,c,s,f,l,d,E,m,C,y){"use strict";function h(e){return 0===o.version.indexOf("4.")?E.fromExtent(e):new E({spatialReference:e.spatialReference,rings:[[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]]})}function x(e,n,r){if(a.pcCheck(e,2,2,n,r),e[0]instanceof s&&e[1]instanceof s);else if(e[0]instanceof s&&null===e[1]);else if(e[1]instanceof s&&null===e[0]);else if(null!==e[0]||null!==e[1])throw new y.ArcadeExecutionError(n,y.ExecutionErrorCodes.InvalidParameter,r)}Object.defineProperty(n,"__esModule",{value:!0}),n.registerFunctions=void 0,n.registerFunctions=function(e){"async"===e.mode&&(e.functions.disjoint=function(n,r){return e.standardFunctionAsync(n,r,(function(e,t,o){return x(o=a.autoCastFeatureToGeometry(o),n,r),null===o[0]||null===o[1]||f.disjoint(o[0],o[1])}))},e.functions.intersects=function(n,r){return e.standardFunctionAsync(n,r,(function(e,t,o){return x(o=a.autoCastFeatureToGeometry(o),n,r),null!==o[0]&&null!==o[1]&&f.intersects(o[0],o[1])}))},e.functions.touches=function(n,r){return e.standardFunctionAsync(n,r,(function(e,t,o){return x(o=a.autoCastFeatureToGeometry(o),n,r),null!==o[0]&&null!==o[1]&&f.touches(o[0],o[1])}))},e.functions.crosses=function(n,r){return e.standardFunctionAsync(n,r,(function(e,t,o){return x(o=a.autoCastFeatureToGeometry(o),n,r),null!==o[0]&&null!==o[1]&&f.crosses(o[0],o[1])}))},e.functions.within=function(n,r){return e.standardFunctionAsync(n,r,(function(e,t,o){return x(o=a.autoCastFeatureToGeometry(o),n,r),null!==o[0]&&null!==o[1]&&f.within(o[0],o[1])}))},e.functions.contains=function(n,r){return e.standardFunctionAsync(n,r,(function(e,t,o){return x(o=a.autoCastFeatureToGeometry(o),n,r),null!==o[0]&&null!==o[1]&&f.contains(o[0],o[1])}))},e.functions.overlaps=function(n,r){return e.standardFunctionAsync(n,r,(function(e,t,o){return x(o=a.autoCastFeatureToGeometry(o),n,r),null!==o[0]&&null!==o[1]&&f.overlaps(o[0],o[1])}))},e.functions.equals=function(n,r){return e.standardFunctionAsync(n,r,(function(e,t,o){return a.pcCheck(o,2,2,n,r),o[0]===o[1]||(o[0]instanceof s&&o[1]instanceof s?f.equals(o[0],o[1]):!(!a.isDate(o[0])||!a.isDate(o[1]))&&o[0].getTime()===o[1].getTime())}))},e.functions.relate=function(n,r){return e.standardFunctionAsync(n,r,(function(e,t,o){if(o=a.autoCastFeatureToGeometry(o),a.pcCheck(o,3,3,n,r),o[0]instanceof s&&o[1]instanceof s)return f.relate(o[0],o[1],a.toString(o[2]));if(o[0]instanceof s&&null===o[1])return!1;if(o[1]instanceof s&&null===o[0])return!1;if(null===o[0]&&null===o[1])return!1;throw new y.ArcadeExecutionError(n,y.ExecutionErrorCodes.InvalidParameter,r)}))},e.functions.intersection=function(n,r){return e.standardFunctionAsync(n,r,(function(e,t,o){return x(o=a.autoCastFeatureToGeometry(o),n,r),null===o[0]||null===o[1]?null:f.intersect(o[0],o[1])}))},e.functions.union=function(n,r){return e.standardFunctionAsync(n,r,(function(e,t,o){var u=[];if(0===(o=a.autoCastFeatureToGeometry(o)).length)throw new y.ArcadeExecutionError(n,y.ExecutionErrorCodes.WrongNumberOfParameters,r);if(1===o.length)if(a.isArray(o[0])){for(var c=a.autoCastFeatureToGeometry(o[0]),l=0;l<c.length;l++)if(null!==c[l]){if(!(c[l]instanceof s))throw new y.ArcadeExecutionError(n,y.ExecutionErrorCodes.InvalidParameter,r);u.push(c[l])}}else{if(!a.isImmutableArray(o[0])){if(o[0]instanceof s)return a.fixSpatialReference(i.cloneGeometry(o[0]),n.spatialReference);if(null===o[0])return null;throw new y.ArcadeExecutionError(n,y.ExecutionErrorCodes.InvalidParameter,r)}var d=a.autoCastFeatureToGeometry(o[0].toArray());for(l=0;l<d.length;l++)if(null!==d[l]){if(!(d[l]instanceof s))throw new y.ArcadeExecutionError(n,y.ExecutionErrorCodes.InvalidParameter,r);u.push(d[l])}}else for(l=0;l<o.length;l++)if(null!==o[l]){if(!(o[l]instanceof s))throw new y.ArcadeExecutionError(n,y.ExecutionErrorCodes.InvalidParameter,r);u.push(o[l])}return 0===u.length?null:f.union(u)}))},e.functions.difference=function(n,r){return e.standardFunctionAsync(n,r,(function(e,t,o){return x(o=a.autoCastFeatureToGeometry(o),n,r),null!==o[0]&&null===o[1]?i.cloneGeometry(o[0]):null===o[0]?null:f.difference(o[0],o[1])}))},e.functions.symmetricdifference=function(n,r){return e.standardFunctionAsync(n,r,(function(e,t,o){return x(o=a.autoCastFeatureToGeometry(o),n,r),null===o[0]&&null===o[1]?null:null===o[0]?i.cloneGeometry(o[1]):null===o[1]?i.cloneGeometry(o[0]):f.symmetricDifference(o[0],o[1])}))},e.functions.clip=function(n,r){return e.standardFunctionAsync(n,r,(function(e,t,o){if(o=a.autoCastFeatureToGeometry(o),a.pcCheck(o,2,2,n,r),!(o[1]instanceof c)&&null!==o[1])throw new y.ArcadeExecutionError(n,y.ExecutionErrorCodes.InvalidParameter,r);if(null===o[0])return null;if(!(o[0]instanceof s))throw new y.ArcadeExecutionError(n,y.ExecutionErrorCodes.InvalidParameter,r);return null===o[1]?null:f.clip(o[0],o[1])}))},e.functions.cut=function(n,r){return e.standardFunctionAsync(n,r,(function(e,t,o){if(o=a.autoCastFeatureToGeometry(o),a.pcCheck(o,2,2,n,r),!(o[1]instanceof m)&&null!==o[1])throw new y.ArcadeExecutionError(n,y.ExecutionErrorCodes.InvalidParameter,r);if(null===o[0])return[];if(!(o[0]instanceof s))throw new y.ArcadeExecutionError(n,y.ExecutionErrorCodes.InvalidParameter,r);return null===o[1]?[i.cloneGeometry(o[0])]:f.cut(o[0],o[1])}))},e.functions.area=function(n,o){var u=this;return e.standardFunctionAsync(n,o,(function(e,c,l){return r(u,void 0,void 0,(function(){var e,r;return t(this,(function(t){switch(t.label){case 0:return a.pcCheck(l,1,2,n,o),null===(l=a.autoCastFeatureToGeometry(l))[0]?[2,0]:a.isFeatureSet(l[0])?[4,l[0].sumArea(i.convertSquareUnitsToCode(a.defaultUndefined(l[1],-1)),!1,n.abortSignal)]:[3,2];case 1:if(e=t.sent(),n.abortSignal.aborted)throw new y.ArcadeExecutionError(n,y.ExecutionErrorCodes.Cancelled,o);return[2,e];case 2:if(a.isArray(l[0])||a.isImmutableArray(l[0]))return null===(r=a.autoCastArrayOfPointsToPolygon(l[0],n.spatialReference))?[2,0]:[2,f.planarArea(r,i.convertSquareUnitsToCode(a.defaultUndefined(l[1],-1)))];if(!(l[0]instanceof s))throw new y.ArcadeExecutionError(n,y.ExecutionErrorCodes.InvalidParameter,o);return[2,f.planarArea(l[0],i.convertSquareUnitsToCode(a.defaultUndefined(l[1],-1)))]}}))}))}))},e.functions.areageodetic=function(n,o){var u=this;return e.standardFunctionAsync(n,o,(function(e,c,l){return r(u,void 0,void 0,(function(){var e,r;return t(this,(function(t){switch(t.label){case 0:return a.pcCheck(l,1,2,n,o),null===(l=a.autoCastFeatureToGeometry(l))[0]?[2,0]:a.isFeatureSet(l[0])?[4,l[0].sumArea(i.convertSquareUnitsToCode(a.defaultUndefined(l[1],-1)),!0,n.abortSignal)]:[3,2];case 1:if(e=t.sent(),n.abortSignal.aborted)throw new y.ArcadeExecutionError(n,y.ExecutionErrorCodes.Cancelled,o);return[2,e];case 2:if(a.isArray(l[0])||a.isImmutableArray(l[0]))return null===(r=a.autoCastArrayOfPointsToPolygon(l[0],n.spatialReference))?[2,0]:[2,f.geodesicArea(r,i.convertSquareUnitsToCode(a.defaultUndefined(l[1],-1)))];if(!(l[0]instanceof s))throw new y.ArcadeExecutionError(n,y.ExecutionErrorCodes.InvalidParameter,o);return[2,f.geodesicArea(l[0],i.convertSquareUnitsToCode(a.defaultUndefined(l[1],-1)))]}}))}))}))},e.functions.length=function(n,o){var u=this;return e.standardFunctionAsync(n,o,(function(e,c,l){return r(u,void 0,void 0,(function(){var e,r;return t(this,(function(t){switch(t.label){case 0:return a.pcCheck(l,1,2,n,o),null===(l=a.autoCastFeatureToGeometry(l))[0]?[2,0]:a.isFeatureSet(l[0])?[4,l[0].sumLength(i.convertLinearUnitsToCode(a.defaultUndefined(l[1],-1)),!1,n.abortSignal)]:[3,2];case 1:if(e=t.sent(),n.abortSignal.aborted)throw new y.ArcadeExecutionError(n,y.ExecutionErrorCodes.Cancelled,o);return[2,e];case 2:if(a.isArray(l[0])||a.isImmutableArray(l[0]))return null===(r=a.autoCastArrayOfPointsToPolyline(l[0],n.spatialReference))?[2,0]:[2,f.planarLength(r,i.convertLinearUnitsToCode(a.defaultUndefined(l[1],-1)))];if(!(l[0]instanceof s))throw new y.ArcadeExecutionError(n,y.ExecutionErrorCodes.InvalidParameter,o);return[2,f.planarLength(l[0],i.convertLinearUnitsToCode(a.defaultUndefined(l[1],-1)))]}}))}))}))},e.functions.length3d=function(n,r){return e.standardFunctionAsync(n,r,(function(e,t,o){if(a.pcCheck(o,1,2,n,r),null===(o=a.autoCastFeatureToGeometry(o))[0])return 0;if(a.isArray(o[0])||a.isImmutableArray(o[0])){var u=a.autoCastArrayOfPointsToPolyline(o[0],n.spatialReference);return null===u?0:f.planarLength(u,i.convertLinearUnitsToCode(a.defaultUndefined(o[1],-1)))}if(!(o[0]instanceof s))throw new y.ArcadeExecutionError(n,y.ExecutionErrorCodes.InvalidParameter,r);return f.planarLength(o[0],i.convertLinearUnitsToCode(a.defaultUndefined(o[1],-1)))}))},e.functions.lengthgeodetic=function(n,o){var u=this;return e.standardFunctionAsync(n,o,(function(e,c,l){return r(u,void 0,void 0,(function(){var e,r;return t(this,(function(t){switch(t.label){case 0:return a.pcCheck(l,1,2,n,o),null===(l=a.autoCastFeatureToGeometry(l))[0]?[2,0]:a.isFeatureSet(l[0])?[4,l[0].sumLength(i.convertLinearUnitsToCode(a.defaultUndefined(l[1],-1)),!0,n.abortSignal)]:[3,2];case 1:if(e=t.sent(),n.abortSignal.aborted)throw new y.ArcadeExecutionError(n,y.ExecutionErrorCodes.Cancelled,o);return[2,e];case 2:if(a.isArray(l[0])||a.isImmutableArray(l[0]))return null===(r=a.autoCastArrayOfPointsToPolyline(l[0],n.spatialReference))?[2,0]:[2,f.geodesicLength(r,i.convertLinearUnitsToCode(a.defaultUndefined(l[1],-1)))];if(!(l[0]instanceof s))throw new y.ArcadeExecutionError(n,y.ExecutionErrorCodes.InvalidParameter,o);return[2,f.geodesicLength(l[0],i.convertLinearUnitsToCode(a.defaultUndefined(l[1],-1)))]}}))}))}))},e.functions.distance=function(n,r){return e.standardFunctionAsync(n,r,(function(e,t,o){o=a.autoCastFeatureToGeometry(o),a.pcCheck(o,2,3,n,r);var u=o[0];(a.isArray(o[0])||a.isImmutableArray(o[0]))&&(u=a.autoCastArrayOfPointsToMultiPoint(o[0],n.spatialReference));var c=o[1];if((a.isArray(o[1])||a.isImmutableArray(o[1]))&&(c=a.autoCastArrayOfPointsToMultiPoint(o[1],n.spatialReference)),!(u instanceof s))throw new y.ArcadeExecutionError(n,y.ExecutionErrorCodes.InvalidParameter,r);if(!(c instanceof s))throw new y.ArcadeExecutionError(n,y.ExecutionErrorCodes.InvalidParameter,r);return f.distance(u,c,i.convertLinearUnitsToCode(a.defaultUndefined(o[2],-1)))}))},e.functions.distancegeodetic=function(n,r){return e.standardFunctionAsync(n,r,(function(e,t,o){o=a.autoCastFeatureToGeometry(o),a.pcCheck(o,2,3,n,r);var u=o[0],c=o[1];if(!(u instanceof d))throw new y.ArcadeExecutionError(n,y.ExecutionErrorCodes.InvalidParameter,r);if(!(c instanceof d))throw new y.ArcadeExecutionError(n,y.ExecutionErrorCodes.InvalidParameter,r);var s=new m({paths:[],spatialReference:u.spatialReference});return s.addPath([u,c]),f.geodesicLength(s,i.convertLinearUnitsToCode(a.defaultUndefined(o[2],-1)))}))},e.functions.densify=function(n,r){return e.standardFunctionAsync(n,r,(function(e,t,o){if(o=a.autoCastFeatureToGeometry(o),a.pcCheck(o,2,3,n,r),null===o[0])return null;if(!(o[0]instanceof s))throw new y.ArcadeExecutionError(n,y.ExecutionErrorCodes.InvalidParameter,r);var u=a.toNumber(o[1]);if(isNaN(u))throw new y.ArcadeExecutionError(n,y.ExecutionErrorCodes.InvalidParameter,r);if(u<=0)throw new y.ArcadeExecutionError(n,y.ExecutionErrorCodes.InvalidParameter,r);return o[0]instanceof E||o[0]instanceof m?f.densify(o[0],u,i.convertLinearUnitsToCode(a.defaultUndefined(o[2],-1))):o[0]instanceof c?f.densify(h(o[0]),u,i.convertLinearUnitsToCode(a.defaultUndefined(o[2],-1))):o[0]}))},e.functions.densifygeodetic=function(n,r){return e.standardFunctionAsync(n,r,(function(e,t,o){if(o=a.autoCastFeatureToGeometry(o),a.pcCheck(o,2,3,n,r),null===o[0])return null;if(!(o[0]instanceof s))throw new y.ArcadeExecutionError(n,y.ExecutionErrorCodes.InvalidParameter,r);var u=a.toNumber(o[1]);if(isNaN(u))throw new y.ArcadeExecutionError(n,y.ExecutionErrorCodes.InvalidParameter,r);if(u<=0)throw new y.ArcadeExecutionError(n,y.ExecutionErrorCodes.InvalidParameter,r);return o[0]instanceof E||o[0]instanceof m?f.geodesicDensify(o[0],u,i.convertLinearUnitsToCode(a.defaultUndefined(o[2],-1))):o[0]instanceof c?f.geodesicDensify(h(o[0]),u,i.convertLinearUnitsToCode(a.defaultUndefined(o[2],-1))):o[0]}))},e.functions.generalize=function(n,r){return e.standardFunctionAsync(n,r,(function(e,t,o){if(o=a.autoCastFeatureToGeometry(o),a.pcCheck(o,2,4,n,r),null===o[0])return null;if(!(o[0]instanceof s))throw new y.ArcadeExecutionError(n,y.ExecutionErrorCodes.InvalidParameter,r);var u=a.toNumber(o[1]);if(isNaN(u))throw new y.ArcadeExecutionError(n,y.ExecutionErrorCodes.InvalidParameter,r);return f.generalize(o[0],u,a.toBoolean(a.defaultUndefined(o[2],!0)),i.convertLinearUnitsToCode(a.defaultUndefined(o[3],-1)))}))},e.functions.buffer=function(n,r){return e.standardFunctionAsync(n,r,(function(e,t,o){if(o=a.autoCastFeatureToGeometry(o),a.pcCheck(o,2,3,n,r),null===o[0])return null;if(!(o[0]instanceof s))throw new y.ArcadeExecutionError(n,y.ExecutionErrorCodes.InvalidParameter,r);var u=a.toNumber(o[1]);if(isNaN(u))throw new y.ArcadeExecutionError(n,y.ExecutionErrorCodes.InvalidParameter,r);return 0===u?i.cloneGeometry(o[0]):f.buffer(o[0],u,i.convertLinearUnitsToCode(a.defaultUndefined(o[2],-1)))}))},e.functions.buffergeodetic=function(n,r){return e.standardFunctionAsync(n,r,(function(e,t,o){if(o=a.autoCastFeatureToGeometry(o),a.pcCheck(o,2,3,n,r),null===o[0])return null;if(!(o[0]instanceof s))throw new y.ArcadeExecutionError(n,y.ExecutionErrorCodes.InvalidParameter,r);var u=a.toNumber(o[1]);if(isNaN(u))throw new y.ArcadeExecutionError(n,y.ExecutionErrorCodes.InvalidParameter,r);return 0===u?i.cloneGeometry(o[0]):f.geodesicBuffer(o[0],u,i.convertLinearUnitsToCode(a.defaultUndefined(o[2],-1)))}))},e.functions.offset=function(n,r){return e.standardFunctionAsync(n,r,(function(e,t,o){if(o=a.autoCastFeatureToGeometry(o),a.pcCheck(o,2,6,n,r),null===o[0])return null;if(!(o[0]instanceof E||o[0]instanceof m))throw new y.ArcadeExecutionError(n,y.ExecutionErrorCodes.InvalidParameter,r);var u=a.toNumber(o[1]);if(isNaN(u))throw new y.ArcadeExecutionError(n,y.ExecutionErrorCodes.InvalidParameter,r);var c=a.toNumber(a.defaultUndefined(o[4],10));if(isNaN(c))throw new y.ArcadeExecutionError(n,y.ExecutionErrorCodes.InvalidParameter,r);var s=a.toNumber(a.defaultUndefined(o[5],0));if(isNaN(s))throw new y.ArcadeExecutionError(n,y.ExecutionErrorCodes.InvalidParameter,r);return f.offset(o[0],u,i.convertLinearUnitsToCode(a.defaultUndefined(o[2],-1)),a.toString(a.defaultUndefined(o[3],"round")).toLowerCase(),c,s)}))},e.functions.rotate=function(n,r){return e.standardFunctionAsync(n,r,(function(e,t,o){o=a.autoCastFeatureToGeometry(o),a.pcCheck(o,2,3,n,r);var i=o[0];if(null===i)return null;if(!(i instanceof s))throw new y.ArcadeExecutionError(n,y.ExecutionErrorCodes.InvalidParameter,r);i instanceof c&&(i=E.fromExtent(i));var u=a.toNumber(o[1]);if(isNaN(u))throw new y.ArcadeExecutionError(n,y.ExecutionErrorCodes.InvalidParameter,r);var l=a.defaultUndefined(o[2],null);if(null===l)return f.rotate(i,u);if(l instanceof d)return f.rotate(i,u,l);throw new y.ArcadeExecutionError(n,y.ExecutionErrorCodes.InvalidParameter,r)}))},e.functions.centroid=function(n,r){return e.standardFunctionAsync(n,r,(function(e,t,o){if(o=a.autoCastFeatureToGeometry(o),a.pcCheck(o,1,1,n,r),null===o[0])return null;var f=o[0];if((a.isArray(o[0])||a.isImmutableArray(o[0]))&&(f=a.autoCastArrayOfPointsToMultiPoint(o[0],n.spatialReference)),null===f)return null;if(!(f instanceof s))throw new y.ArcadeExecutionError(n,y.ExecutionErrorCodes.InvalidParameter,r);return f instanceof d?a.fixSpatialReference(i.cloneGeometry(o[0]),n.spatialReference):f instanceof E?f.getCentroid():f instanceof m?u.centroidPolyline(f):f instanceof l?u.centroidMultiPoint(f):f instanceof c?f.getCenter():null}))},e.functions.multiparttosinglepart=function(n,o){var u=this;return e.standardFunctionAsync(n,o,(function(e,h,x){return r(u,void 0,void 0,(function(){var e,r,u,h,A,v,w,p,g,F,P;return t(this,(function(t){switch(t.label){case 0:if(x=a.autoCastFeatureToGeometry(x),a.pcCheck(x,1,1,n,o),e=[],null===x[0])return[2,null];if(!(x[0]instanceof s))throw new y.ArcadeExecutionError(n,y.ExecutionErrorCodes.InvalidParameter,o);return x[0]instanceof d?[2,[a.fixSpatialReference(i.cloneGeometry(x[0]),n.spatialReference)]]:x[0]instanceof c?[2,[a.fixSpatialReference(i.cloneGeometry(x[0]),n.spatialReference)]]:[4,f.simplify(x[0])];case 1:if((r=t.sent())instanceof E){for(u=[],h=[],P=0;P<r.rings.length;P++)r.isClockwise(r.rings[P])?(A=C.fromJson({rings:[r.rings[P]],hasZ:!0===r.hasZ,hazM:!0===r.hasM,spatialReference:r.spatialReference.toJson()}),u.push(A)):h.push({ring:r.rings[P],pt:r.getPoint(P,0)});for(v=0;v<h.length;v++)for(w=0;w<u.length;w++)if(u[w].contains(h[v].pt)){u[w].addRing(h[v].ring);break}return[2,u]}if(r instanceof m){for(p=[],P=0;P<r.paths.length;P++)g=C.fromJson({paths:[r.paths[P]],hasZ:!0===r.hasZ,hazM:!0===r.hasM,spatialReference:r.spatialReference.toJson()}),p.push(g);return[2,p]}if(x[0]instanceof l){for(F=a.fixSpatialReference(i.cloneGeometry(x[0]),n.spatialReference),P=0;P<F.points.length;P++)e.push(F.getPoint(P));return[2,e]}return[2,null]}}))}))}))},e.functions.issimple=function(n,r){return e.standardFunctionAsync(n,r,(function(e,t,o){if(o=a.autoCastFeatureToGeometry(o),a.pcCheck(o,1,1,n,r),null===o[0])return!0;if(!(o[0]instanceof s))throw new y.ArcadeExecutionError(n,y.ExecutionErrorCodes.InvalidParameter,r);return f.isSimple(o[0])}))},e.functions.simplify=function(n,r){return e.standardFunctionAsync(n,r,(function(e,t,o){if(o=a.autoCastFeatureToGeometry(o),a.pcCheck(o,1,1,n,r),null===o[0])return null;if(!(o[0]instanceof s))throw new y.ArcadeExecutionError(n,y.ExecutionErrorCodes.InvalidParameter,r);return f.simplify(o[0])}))},e.functions.convexhull=function(n,r){return e.standardFunctionAsync(n,r,(function(e,t,o){if(o=a.autoCastFeatureToGeometry(o),a.pcCheck(o,1,1,n,r),null===o[0])return null;if(!(o[0]instanceof s))throw new y.ArcadeExecutionError(n,y.ExecutionErrorCodes.InvalidParameter,r);return f.convexHull(o[0])}))})}}));