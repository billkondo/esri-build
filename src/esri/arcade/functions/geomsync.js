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

define(["require","exports","../../kernel","../kernel","../languageUtils","./centroid","../../geometry/Extent","../../geometry/Geometry","../../geometry/Multipoint","../../geometry/Point","../../geometry/Polygon","../../geometry/Polyline","../../geometry/jsonUtils","../executionError"],(function(e,r,n,t,o,i,a,u,c,l,f,s,d,E){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.registerFunctions=r.setGeometryEngine=void 0;var m=null;function C(e){return 0===n.version.indexOf("4.")?f.fromExtent(e):new f({spatialReference:e.spatialReference,rings:[[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]]})}r.setGeometryEngine=function(e){m=e},r.registerFunctions=function(e,r){function n(e,r,n){if(o.pcCheck(n,2,2,e,r),n[0]instanceof u&&n[1]instanceof u);else if(n[0]instanceof u&&null===n[1]);else if(n[1]instanceof u&&null===n[0]);else if(null!==n[0]||null!==n[1])throw new E.ArcadeExecutionError(e,E.ExecutionErrorCodes.InvalidParameter,r)}e.disjoint=function(e,t){return r(e,t,(function(r,i,a){return a=o.autoCastFeatureToGeometry(a),n(e,t,a),null===a[0]||null===a[1]||m.disjoint(a[0],a[1])}))},e.intersects=function(e,t){return r(e,t,(function(r,i,a){return a=o.autoCastFeatureToGeometry(a),n(e,t,a),null!==a[0]&&null!==a[1]&&m.intersects(a[0],a[1])}))},e.touches=function(e,t){return r(e,t,(function(r,i,a){return a=o.autoCastFeatureToGeometry(a),n(e,t,a),null!==a[0]&&null!==a[1]&&m.touches(a[0],a[1])}))},e.crosses=function(e,t){return r(e,t,(function(r,i,a){return a=o.autoCastFeatureToGeometry(a),n(e,t,a),null!==a[0]&&null!==a[1]&&m.crosses(a[0],a[1])}))},e.within=function(e,t){return r(e,t,(function(r,i,a){return a=o.autoCastFeatureToGeometry(a),n(e,t,a),null!==a[0]&&null!==a[1]&&m.within(a[0],a[1])}))},e.contains=function(e,t){return r(e,t,(function(r,i,a){return a=o.autoCastFeatureToGeometry(a),n(e,t,a),null!==a[0]&&null!==a[1]&&m.contains(a[0],a[1])}))},e.overlaps=function(e,t){return r(e,t,(function(r,i,a){return a=o.autoCastFeatureToGeometry(a),n(e,t,a),null!==a[0]&&null!==a[1]&&m.overlaps(a[0],a[1])}))},e.equals=function(e,n){return r(e,n,(function(r,t,i){return o.pcCheck(i,2,2,e,n),i[0]===i[1]||(i[0]instanceof u&&i[1]instanceof u?m.equals(i[0],i[1]):!(!o.isDate(i[0])||!o.isDate(i[1]))&&i[0].getTime()===i[1].getTime())}))},e.relate=function(e,n){return r(e,n,(function(r,t,i){if(i=o.autoCastFeatureToGeometry(i),o.pcCheck(i,3,3,e,n),i[0]instanceof u&&i[1]instanceof u)return m.relate(i[0],i[1],o.toString(i[2]));if(i[0]instanceof u&&null===i[1])return!1;if(i[1]instanceof u&&null===i[0])return!1;if(null===i[0]&&null===i[1])return!1;throw new E.ArcadeExecutionError(e,E.ExecutionErrorCodes.InvalidParameter,n)}))},e.intersection=function(e,t){return r(e,t,(function(r,i,a){return a=o.autoCastFeatureToGeometry(a),n(e,t,a),null===a[0]||null===a[1]?null:m.intersect(a[0],a[1])}))},e.union=function(e,n){return r(e,n,(function(r,i,a){var c=[];if(0===(a=o.autoCastFeatureToGeometry(a)).length)throw new E.ArcadeExecutionError(e,E.ExecutionErrorCodes.WrongNumberOfParameters,n);if(1===a.length)if(o.isArray(a[0])){for(var l=o.autoCastFeatureToGeometry(a[0]),f=0;f<l.length;f++)if(null!==l[f]){if(!(l[f]instanceof u))throw new E.ArcadeExecutionError(e,E.ExecutionErrorCodes.InvalidParameter,n);c.push(l[f])}}else{if(!o.isImmutableArray(a[0])){if(a[0]instanceof u)return o.fixSpatialReference(t.cloneGeometry(a[0]),e.spatialReference);if(null===a[0])return null;throw new E.ArcadeExecutionError(e,E.ExecutionErrorCodes.InvalidParameter,n)}var s=o.autoCastFeatureToGeometry(a[0].toArray());for(f=0;f<s.length;f++)if(null!==s[f]){if(!(s[f]instanceof u))throw new E.ArcadeExecutionError(e,E.ExecutionErrorCodes.InvalidParameter,n);c.push(s[f])}}else for(f=0;f<a.length;f++)if(null!==a[f]){if(!(a[f]instanceof u))throw new E.ArcadeExecutionError(e,E.ExecutionErrorCodes.InvalidParameter,n);c.push(a[f])}return 0===c.length?null:m.union(c)}))},e.difference=function(e,i){return r(e,i,(function(r,a,u){return u=o.autoCastFeatureToGeometry(u),n(e,i,u),null!==u[0]&&null===u[1]?t.cloneGeometry(u[0]):null===u[0]?null:m.difference(u[0],u[1])}))},e.symmetricdifference=function(e,i){return r(e,i,(function(r,a,u){return u=o.autoCastFeatureToGeometry(u),n(e,i,u),null===u[0]&&null===u[1]?null:null===u[0]?t.cloneGeometry(u[1]):null===u[1]?t.cloneGeometry(u[0]):m.symmetricDifference(u[0],u[1])}))},e.clip=function(e,n){return r(e,n,(function(r,t,i){if(i=o.autoCastFeatureToGeometry(i),o.pcCheck(i,2,2,e,n),!(i[1]instanceof a)&&null!==i[1])throw new E.ArcadeExecutionError(e,E.ExecutionErrorCodes.InvalidParameter,n);if(null===i[0])return null;if(!(i[0]instanceof u))throw new E.ArcadeExecutionError(e,E.ExecutionErrorCodes.InvalidParameter,n);return null===i[1]?null:m.clip(i[0],i[1])}))},e.cut=function(e,n){return r(e,n,(function(r,i,a){if(a=o.autoCastFeatureToGeometry(a),o.pcCheck(a,2,2,e,n),!(a[1]instanceof s)&&null!==a[1])throw new E.ArcadeExecutionError(e,E.ExecutionErrorCodes.InvalidParameter,n);if(null===a[0])return[];if(!(a[0]instanceof u))throw new E.ArcadeExecutionError(e,E.ExecutionErrorCodes.InvalidParameter,n);return null===a[1]?[t.cloneGeometry(a[0])]:m.cut(a[0],a[1])}))},e.area=function(e,n){return r(e,n,(function(r,i,a){if(o.pcCheck(a,1,2,e,n),null===(a=o.autoCastFeatureToGeometry(a))[0])return 0;if(o.isArray(a[0])||o.isImmutableArray(a[0])){var c=o.autoCastArrayOfPointsToPolygon(a[0],e.spatialReference);return null===c?0:m.planarArea(c,t.convertSquareUnitsToCode(o.defaultUndefined(a[1],-1)))}if(!(a[0]instanceof u))throw new E.ArcadeExecutionError(e,E.ExecutionErrorCodes.InvalidParameter,n);return m.planarArea(a[0],t.convertSquareUnitsToCode(o.defaultUndefined(a[1],-1)))}))},e.areageodetic=function(e,n){return r(e,n,(function(r,i,a){if(o.pcCheck(a,1,2,e,n),null===(a=o.autoCastFeatureToGeometry(a))[0])return 0;if(o.isArray(a[0])||o.isImmutableArray(a[0])){var c=o.autoCastArrayOfPointsToPolygon(a[0],e.spatialReference);return null===c?0:m.geodesicArea(c,t.convertSquareUnitsToCode(o.defaultUndefined(a[1],-1)))}if(!(a[0]instanceof u))throw new E.ArcadeExecutionError(e,E.ExecutionErrorCodes.InvalidParameter,n);return m.geodesicArea(a[0],t.convertSquareUnitsToCode(o.defaultUndefined(a[1],-1)))}))},e.length=function(e,n){return r(e,n,(function(r,i,a){if(o.pcCheck(a,1,2,e,n),null===(a=o.autoCastFeatureToGeometry(a))[0])return 0;if(o.isArray(a[0])||o.isImmutableArray(a[0])){var c=o.autoCastArrayOfPointsToPolyline(a[0],e.spatialReference);return null===c?0:m.planarLength(c,t.convertLinearUnitsToCode(o.defaultUndefined(a[1],-1)))}if(!(a[0]instanceof u))throw new E.ArcadeExecutionError(e,E.ExecutionErrorCodes.InvalidParameter,n);return m.planarLength(a[0],t.convertLinearUnitsToCode(o.defaultUndefined(a[1],-1)))}))},e.length3d=function(e,n){return r(e,n,(function(r,i,a){if(o.pcCheck(a,1,2,e,n),null===(a=o.autoCastFeatureToGeometry(a))[0])return 0;if(o.isArray(a[0])||o.isImmutableArray(a[0])){var c=o.autoCastArrayOfPointsToPolyline(a[0],e.spatialReference);return null===c?0:m.planarLength(c,t.convertLinearUnitsToCode(o.defaultUndefined(a[1],-1)))}if(!(a[0]instanceof u))throw new E.ArcadeExecutionError(e,E.ExecutionErrorCodes.InvalidParameter,n);return m.planarLength(a[0],t.convertLinearUnitsToCode(o.defaultUndefined(a[1],-1)))}))},e.lengthgeodetic=function(e,n){return r(e,n,(function(r,i,a){if(o.pcCheck(a,1,2,e,n),null===(a=o.autoCastFeatureToGeometry(a))[0])return 0;if(o.isArray(a[0])||o.isImmutableArray(a[0])){var c=o.autoCastArrayOfPointsToPolyline(a[0],e.spatialReference);return null===c?0:m.geodesicLength(c,t.convertLinearUnitsToCode(o.defaultUndefined(a[1],-1)))}if(!(a[0]instanceof u))throw new E.ArcadeExecutionError(e,E.ExecutionErrorCodes.InvalidParameter,n);return m.geodesicLength(a[0],t.convertLinearUnitsToCode(o.defaultUndefined(a[1],-1)))}))},e.distance=function(e,n){return r(e,n,(function(r,i,a){a=o.autoCastFeatureToGeometry(a),o.pcCheck(a,2,3,e,n);var c=a[0];(o.isArray(a[0])||o.isImmutableArray(a[0]))&&(c=o.autoCastArrayOfPointsToMultiPoint(a[0],e.spatialReference));var l=a[1];if((o.isArray(a[1])||o.isImmutableArray(a[1]))&&(l=o.autoCastArrayOfPointsToMultiPoint(a[1],e.spatialReference)),!(c instanceof u))throw new E.ArcadeExecutionError(e,E.ExecutionErrorCodes.InvalidParameter,n);if(!(l instanceof u))throw new E.ArcadeExecutionError(e,E.ExecutionErrorCodes.InvalidParameter,n);return m.distance(c,l,t.convertLinearUnitsToCode(o.defaultUndefined(a[2],-1)))}))},e.distancegeodetic=function(e,n){return r(e,n,(function(r,i,a){a=o.autoCastFeatureToGeometry(a),o.pcCheck(a,2,3,e,n);var u=a[0],c=a[1];if(!(u instanceof l))throw new E.ArcadeExecutionError(e,E.ExecutionErrorCodes.InvalidParameter,n);if(!(c instanceof l))throw new E.ArcadeExecutionError(e,E.ExecutionErrorCodes.InvalidParameter,n);var f=new s({paths:[],spatialReference:u.spatialReference});return f.addPath([u,c]),m.geodesicLength(f,t.convertLinearUnitsToCode(o.defaultUndefined(a[2],-1)))}))},e.densify=function(e,n){return r(e,n,(function(r,i,c){if(c=o.autoCastFeatureToGeometry(c),o.pcCheck(c,2,3,e,n),null===c[0])return null;if(!(c[0]instanceof u))throw new E.ArcadeExecutionError(e,E.ExecutionErrorCodes.InvalidParameter,n);var l=o.toNumber(c[1]);if(isNaN(l))throw new E.ArcadeExecutionError(e,E.ExecutionErrorCodes.InvalidParameter,n);if(l<=0)throw new E.ArcadeExecutionError(e,E.ExecutionErrorCodes.InvalidParameter,n);return c[0]instanceof f||c[0]instanceof s?m.densify(c[0],l,t.convertLinearUnitsToCode(o.defaultUndefined(c[2],-1))):c[0]instanceof a?m.densify(C(c[0]),l,t.convertLinearUnitsToCode(o.defaultUndefined(c[2],-1))):c[0]}))},e.densifygeodetic=function(e,n){return r(e,n,(function(r,i,c){if(c=o.autoCastFeatureToGeometry(c),o.pcCheck(c,2,3,e,n),null===c[0])return null;if(!(c[0]instanceof u))throw new E.ArcadeExecutionError(e,E.ExecutionErrorCodes.InvalidParameter,n);var l=o.toNumber(c[1]);if(isNaN(l))throw new E.ArcadeExecutionError(e,E.ExecutionErrorCodes.InvalidParameter,n);if(l<=0)throw new E.ArcadeExecutionError(e,E.ExecutionErrorCodes.InvalidParameter,n);return c[0]instanceof f||c[0]instanceof s?m.geodesicDensify(c[0],l,t.convertLinearUnitsToCode(o.defaultUndefined(c[2],-1))):c[0]instanceof a?m.geodesicDensify(C(c[0]),l,t.convertLinearUnitsToCode(o.defaultUndefined(c[2],-1))):c[0]}))},e.generalize=function(e,n){return r(e,n,(function(r,i,a){if(a=o.autoCastFeatureToGeometry(a),o.pcCheck(a,2,4,e,n),null===a[0])return null;if(!(a[0]instanceof u))throw new E.ArcadeExecutionError(e,E.ExecutionErrorCodes.InvalidParameter,n);var c=o.toNumber(a[1]);if(isNaN(c))throw new E.ArcadeExecutionError(e,E.ExecutionErrorCodes.InvalidParameter,n);return m.generalize(a[0],c,o.toBoolean(o.defaultUndefined(a[2],!0)),t.convertLinearUnitsToCode(o.defaultUndefined(a[3],-1)))}))},e.buffer=function(e,n){return r(e,n,(function(r,i,a){if(a=o.autoCastFeatureToGeometry(a),o.pcCheck(a,2,3,e,n),null===a[0])return null;if(!(a[0]instanceof u))throw new E.ArcadeExecutionError(e,E.ExecutionErrorCodes.InvalidParameter,n);var c=o.toNumber(a[1]);if(isNaN(c))throw new E.ArcadeExecutionError(e,E.ExecutionErrorCodes.InvalidParameter,n);return 0===c?t.cloneGeometry(a[0]):m.buffer(a[0],c,t.convertLinearUnitsToCode(o.defaultUndefined(a[2],-1)))}))},e.buffergeodetic=function(e,n){return r(e,n,(function(r,i,a){if(a=o.autoCastFeatureToGeometry(a),o.pcCheck(a,2,3,e,n),null===a[0])return null;if(!(a[0]instanceof u))throw new E.ArcadeExecutionError(e,E.ExecutionErrorCodes.InvalidParameter,n);var c=o.toNumber(a[1]);if(isNaN(c))throw new E.ArcadeExecutionError(e,E.ExecutionErrorCodes.InvalidParameter,n);return 0===c?t.cloneGeometry(a[0]):m.geodesicBuffer(a[0],c,t.convertLinearUnitsToCode(o.defaultUndefined(a[2],-1)))}))},e.offset=function(e,n){return r(e,n,(function(r,i,a){if(a=o.autoCastFeatureToGeometry(a),o.pcCheck(a,2,6,e,n),null===a[0])return null;if(!(a[0]instanceof f||a[0]instanceof s))throw new E.ArcadeExecutionError(e,E.ExecutionErrorCodes.InvalidParameter,n);var u=o.toNumber(a[1]);if(isNaN(u))throw new E.ArcadeExecutionError(e,E.ExecutionErrorCodes.InvalidParameter,n);var c=o.toNumber(o.defaultUndefined(a[4],10));if(isNaN(c))throw new E.ArcadeExecutionError(e,E.ExecutionErrorCodes.InvalidParameter,n);var l=o.toNumber(o.defaultUndefined(a[5],0));if(isNaN(l))throw new E.ArcadeExecutionError(e,E.ExecutionErrorCodes.InvalidParameter,n);return m.offset(a[0],u,t.convertLinearUnitsToCode(o.defaultUndefined(a[2],-1)),o.toString(o.defaultUndefined(a[3],"round")).toLowerCase(),c,l)}))},e.rotate=function(e,n){return r(e,n,(function(r,t,i){i=o.autoCastFeatureToGeometry(i),o.pcCheck(i,2,3,e,n);var c=i[0];if(null===c)return null;if(!(c instanceof u))throw new E.ArcadeExecutionError(e,E.ExecutionErrorCodes.InvalidParameter,n);c instanceof a&&(c=f.fromExtent(c));var s=o.toNumber(i[1]);if(isNaN(s))throw new E.ArcadeExecutionError(e,E.ExecutionErrorCodes.InvalidParameter,n);var d=o.defaultUndefined(i[2],null);if(null===d)return m.rotate(c,s);if(d instanceof l)return m.rotate(c,s,d);throw new E.ArcadeExecutionError(e,E.ExecutionErrorCodes.InvalidParameter,n)}))},e.centroid=function(e,n){return r(e,n,(function(r,d,m){if(m=o.autoCastFeatureToGeometry(m),o.pcCheck(m,1,1,e,n),null===m[0])return null;var C=m[0];if((o.isArray(m[0])||o.isImmutableArray(m[0]))&&(C=o.autoCastArrayOfPointsToMultiPoint(m[0],e.spatialReference)),null===C)return null;if(!(C instanceof u))throw new E.ArcadeExecutionError(e,E.ExecutionErrorCodes.InvalidParameter,n);return C instanceof l?o.fixSpatialReference(t.cloneGeometry(m[0]),e.spatialReference):C instanceof f?C.getCentroid():C instanceof s?i.centroidPolyline(C):C instanceof c?i.centroidMultiPoint(C):C instanceof a?C.getCenter():null}))},e.multiparttosinglepart=function(e,n){return r(e,n,(function(r,i,C){C=o.autoCastFeatureToGeometry(C),o.pcCheck(C,1,1,e,n);var h=[];if(null===C[0])return null;if(!(C[0]instanceof u))throw new E.ArcadeExecutionError(e,E.ExecutionErrorCodes.InvalidParameter,n);if(C[0]instanceof l)return[o.fixSpatialReference(t.cloneGeometry(C[0]),e.spatialReference)];if(C[0]instanceof a)return[o.fixSpatialReference(t.cloneGeometry(C[0]),e.spatialReference)];var x=m.simplify(C[0]);if(x instanceof f){for(var y=[],v=[],w=0;w<x.rings.length;w++)if(x.isClockwise(x.rings[w])){var p=d.fromJson({rings:[x.rings[w]],hasZ:!0===x.hasZ,hasM:!0===x.hasM,spatialReference:x.spatialReference.toJson()});y.push(p)}else v.push({ring:x.rings[w],pt:x.getPoint(w,0)});for(var A=0;A<v.length;A++)for(var g=0;g<y.length;g++)if(y[g].contains(v[A].pt)){y[g].addRing(v[A].ring);break}return y}if(x instanceof s){var P=[];for(w=0;w<x.paths.length;w++){var T=d.fromJson({paths:[x.paths[w]],hasZ:!0===x.hasZ,hasM:!0===x.hasM,spatialReference:x.spatialReference.toJson()});P.push(T)}return P}if(C[0]instanceof c){var I=o.fixSpatialReference(t.cloneGeometry(C[0]),e.spatialReference);for(w=0;w<I.points.length;w++)h.push(I.getPoint(w));return h}return null}))},e.issimple=function(e,n){return r(e,n,(function(r,t,i){if(i=o.autoCastFeatureToGeometry(i),o.pcCheck(i,1,1,e,n),null===i[0])return!0;if(!(i[0]instanceof u))throw new E.ArcadeExecutionError(e,E.ExecutionErrorCodes.InvalidParameter,n);return m.isSimple(i[0])}))},e.simplify=function(e,n){return r(e,n,(function(r,t,i){if(i=o.autoCastFeatureToGeometry(i),o.pcCheck(i,1,1,e,n),null===i[0])return null;if(!(i[0]instanceof u))throw new E.ArcadeExecutionError(e,E.ExecutionErrorCodes.InvalidParameter,n);return m.simplify(i[0])}))},e.convexhull=function(e,n){return r(e,n,(function(r,t,i){if(i=o.autoCastFeatureToGeometry(i),o.pcCheck(i,1,1,e,n),null===i[0])return null;if(!(i[0]instanceof u))throw new E.ArcadeExecutionError(e,E.ExecutionErrorCodes.InvalidParameter,n);return m.convexHull(i[0])}))}}}));