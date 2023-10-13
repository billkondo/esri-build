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

define(["dojo/_base/array","dojo/_base/lang","dojo/has","../kernel","../Color","./colors","./utils"],(function(e,r,a,o,n,i,t){var l={light:{color:[153,153,153,.25],width:1},dark:{color:[153,153,153,.25],width:1},darker:{color:[26,26,26,.25],width:1}},s={lightBasemaps:{primary:"relationship-blue-orange-brown",secondary:["relationship-brewer-yellow-blue-black","relationship-brewer-pink-blue-purple","relationship-purple-green-blue","relationship-blue-green-purple","relationship-blue-orange-green","relationship-mustard-blue-wine","relationship-pink-blue-purple","relationship-olive-blue-green","relationship-yellow-cyan-blue","relationship-blue-pink-purple","relationship-purple-green-wine"]},darkBasemaps:{primary:"relationship-blue-orange-brown",secondary:["relationship-brewer-yellow-blue-black","relationship-brewer-pink-blue-purple","relationship-purple-green-blue","relationship-blue-green-purple","relationship-blue-orange-green","relationship-mustard-blue-wine","relationship-pink-blue-purple","relationship-olive-blue-green","relationship-yellow-cyan-blue","relationship-blue-pink-purple","relationship-purple-green-wine"]}},p={default:{name:"default",label:"Default",description:"Default theme for visualizing features based on relationship between two attributes.",basemapGroups:{light:["streets","gray","topo","terrain","national-geographic","oceans","osm","gray-vector","streets-vector","topo-vector","streets-relief-vector","streets-navigation-vector"],dark:["satellite","hybrid","dark-gray","dark-gray-vector","streets-night-vector"]},pointSchemes:{light:{common:{noDataColor:"#aaaaaa",outline:l.light,size:8},primary:s.lightBasemaps.primary,secondary:s.lightBasemaps.secondary},dark:{common:{noDataColor:"#aaaaaa",outline:l.darker,size:8},primary:s.darkBasemaps.primary,secondary:s.darkBasemaps.secondary}},lineSchemes:{light:{common:{noDataColor:"#aaaaaa",width:2},primary:s.lightBasemaps.primary,secondary:s.lightBasemaps.secondary},dark:{common:{noDataColor:"#aaaaaa",width:2},primary:s.darkBasemaps.primary,secondary:s.darkBasemaps.secondary}},polygonSchemes:{light:{common:{noDataColor:"#aaaaaa",outline:l.light,fillOpacity:.8},primary:s.lightBasemaps.primary,secondary:s.lightBasemaps.secondary},dark:{common:{noDataColor:"#aaaaaa",outline:l.dark,fillOpacity:.8},primary:s.darkBasemaps.primary,secondary:s.darkBasemaps.secondary}}}},c={};function u(r,a){return e.map(r,(function(e){var r=new n(e);return null!=a&&(r.a=a),r}))}function m(e,r,a,o){var n,i=g.getColors(e,a,o);i&&(1===t.haveIdenticalColors(r,i)&&(n=e));return n}function h(e,r,a,o){var n,i=1;do{(n=m(e,r,a,o))||(e=g.flipColors(e),i++)}while(!n&&i<=4);return n}function y(e,r,a){return h(e,r,a,"HH")||h(e,r,a,"HL")||h(e,r,a,"LH")||h(e,r,a,"LL")}function d(r,a,o,t,l){var s,p=i[r];if(p){for(var c in(s={id:t+"/"+l+"/"+r}).colorsForClassBreaks=[],p){c=+c;var m=e.map(p[c],(function(e){return u(e)}));s.colorsForClassBreaks.push({numClasses:c,colors:m})}switch(s.noDataColor=new n(a.noDataColor),s.opacity=a.fillOpacity||1,o){case"point":s.outline={color:new n(a.outline.color),width:a.outline.width},s.size=a.size;break;case"line":s.width=a.width;break;case"polygon":s.outline={color:new n(a.outline.color),width:a.outline.width}}}return s}function f(e){var r=e;return"esriGeometryPoint"===r||"esriGeometryMultipoint"===r?r="point":"esriGeometryPolyline"===r?r="line":"esriGeometryPolygon"!==r&&"esriGeometryMultiPatch"!==r||(r="polygon"),r}!function(){var e,r,a,o,n,i,t,l;for(e in p)for(o in a=(r=p[e]).basemapGroups,n=c[e]={basemaps:[].concat(a.light).concat(a.dark),point:{},line:{},polygon:{}},a)for(i=a[o],t=0;t<i.length;t++)l=i[t],r.pointSchemes&&(n.point[l]=r.pointSchemes[o]),r.lineSchemes&&(n.line[l]=r.lineSchemes[o]),r.polygonSchemes&&(n.polygon[l]=r.polygonSchemes[o])}();var g={getAvailableThemes:function(r){var a,o,n,i=[];for(a in p)o=p[a],n=c[a],r&&-1===e.indexOf(n.basemaps,r)||i.push({name:o.name,label:o.label,description:o.description,basemaps:n.basemaps.slice(0)});return i},getSchemes:function(r){var a,o,n=r.theme,i=r.basemap,t=f(r.geometryType),l=c[n];return(a=(a=l&&l[t])&&a[i])&&(o={primaryScheme:d(a.primary,a.common,t,n,i),secondarySchemes:e.map(a.secondary,(function(e){return d(e,a.common,t,n,i)}))}),o},cloneScheme:function(a){var o;return a&&((o=r.mixin({},a)).colorsForClassBreaks=e.map(o.colorsForClassBreaks,(function(r){var a=e.map(r.colors,(function(e){return u(e)}));return{numClasses:r.numClasses,colors:a}})),o.noDataColor&&(o.noDataColor=new n(o.noDataColor)),o.outline&&(o.outline={color:o.outline.color&&new n(o.outline.color),width:o.outline.width})),o},flatten2DArray:function(r,a){var o=[],n=(a=a||"HH").split(""),i=n[0],t=n[1];"L"===i&&r.reverse();var l="H"===t;return e.forEach(r,(function(e){l&&e.reverse(),o=o.concat(e)})),o},getColors:function(r,a,o){var n;return e.some(r.colorsForClassBreaks,(function(e){return e.numClasses===a&&(n=e.colors),!!n})),(n=e.map(n,(function(e){return u(e)})))?g.flatten2DArray(n,o):null},flipColors:function(r,a){var o=a?r:g.cloneScheme(r);return e.forEach(o.colorsForClassBreaks,(function(r){for(var a=r.colors.reverse(),o=[],n=0;n<r.numClasses;n++){var i=[];e.forEach(a,(function(e){i.push(e[n])})),o.push(i)}r.colors=o})),o},getMatchingSchemes:function(r){var a=r.theme,o=f(r.geometryType),n=r.colors,i=r.numClasses,t=function(e){var r,a=e.basemapGroups,o=e.basemaps,n=[];if(a)for(r in a)n=n.concat(a[r]);else o&&(n=n.concat(o));return n}(p[a]),l=[];return e.forEach(t,(function(r){var t=g.getSchemes({theme:a,basemap:r,geometryType:o});if(t){var s=y(t.primaryScheme,n,i);s&&l.push(s),e.forEach(t.secondarySchemes,(function(e){(s=y(e,n,i))&&l.push(s)}))}})),l}};return a("extend-esri")&&r.setObject("styles.relationship",g,o),g}));