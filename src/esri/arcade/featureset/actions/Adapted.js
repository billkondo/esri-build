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

define(["require","exports","../../polyfill/tsSupport/awaiter","../../polyfill/tsSupport/generator","../../polyfill/tsSupport/extends","../../../graphic","../../kernel","../support/errorsupport","../support/FeatureSet","../support/IdSet","../support/shared","../support/sqlUtils","../../polyfill/maybe","../../polyfill/sql/WhereClause","../../../SpatialReference"],(function(e,t,r,a,i,n,s,l,o,u,h,d,c,p,f){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AdaptedFeatureSet=t.SqlExpressionAdapted=t.StringToCodeAdapted=t.FieldRename=t.OriginalField=t.AdaptedField=void 0;var v=function(){function e(e){this.field=e,this.sqlRewritable=!1}return e.prototype.postInitialization=function(e,t){},e}();t.AdaptedField=v;var g=function(e){function t(t){var r=e.call(this,t)||this;return r.sqlRewritable=!0,r}return i(t,e),t.prototype.extractValue=function(e){return e.attributes[this.field.name]},t.prototype.rewriteSql=function(e){return{rewritten:this.sqlRewritable,where:e}},t}(v);t.OriginalField=g;var S=function(e){function t(t,r,a){var i=e.call(this,h.cloneField(t))||this;return i.originalField=t,i.sqlRewritable=!0,i.field.name=r,i.field.alias=a,i}return i(t,e),t.prototype.rewriteSql=function(e,t){return{rewritten:this.sqlRewritable,where:d.reformulateWithoutField(e,this.field.name,this.originalField.name,t.getFieldsIndex())}},t.prototype.extractValue=function(e){return e.attributes[this.originalField.name]},t}(v);t.FieldRename=S;var _=function(e){function t(t,r,a){var i=e.call(this,t)||this;for(var n in i.codefield=r,i.lkp=a,i.reverseLkp={},a)i.reverseLkp[a[n]]=n;return i.sqlRewritable=!0,i}return i(t,e),t.prototype.rewriteSql=function(e,r){var a=this.evaluateNodeToWhereClause(e.parseTree,h.FeatureServiceDatabaseType.Standardised,this.field.name,this.codefield instanceof p.WhereClause?d.toWhereClause(this.codefield,h.FeatureServiceDatabaseType.Standardised):this.codefield,e.parameters);return a.includes(t.BADNESS)?{rewritten:!1,where:e}:{rewritten:this.sqlRewritable,where:p.WhereClause.create(a,c.unwrapOrThrow(r._parent).getFieldsIndex())}},t.prototype.evaluateNodeToWhereClause=function(e,r,a,i,n){var s,o,u,h;switch(void 0===a&&(a=null),void 0===i&&(i=null),e.type){case"interval":return d.convertIntervalToSql(this.evaluateNodeToWhereClause(e.value,r,a,i,n),e.qualifier,e.op);case"case-expression":var c=" CASE ";"simple"===e.format&&(c+=this.evaluateNodeToWhereClause(e.operand,r,a,t.BADNESS,n));for(var p=0;p<e.clauses.length;p++)c+=" WHEN "+this.evaluateNodeToWhereClause(e.clauses[p].operand,r,a,t.BADNESS,n)+" THEN "+this.evaluateNodeToWhereClause(e.clauses[p].value,r,a,t.BADNESS,n);return null!==e.else&&(c+=" ELSE "+this.evaluateNodeToWhereClause(e.else,r,a,t.BADNESS,n)),c+=" END ";case"parameter":var f=n[e.value.toLowerCase()];if("string"==typeof f)return"'"+n[e.value.toLowerCase()].toString().replace(/'/g,"''")+"'";if(f instanceof Date)return d.makeDateString(f,r);if(f instanceof Array){var v=[];for(p=0;p<f.length;p++)"string"==typeof f[p]?v.push("'"+f[p].toString().replace(/'/g,"''")+"'"):f[p]instanceof Date?v.push(d.makeDateString(f[p],r)):v.push(f[p].toString());return v}return f.toString();case"expression-list":o=[];for(var g=0,S=e.value;g<S.length;g++){var _=S[g];o.push(this.evaluateNodeToWhereClause(_,r,a,i,n))}return o;case"unary-expression":return" ( NOT "+this.evaluateNodeToWhereClause(e.expr,r,a,t.BADNESS,n)+" ) ";case"binary-expression":switch(e.operator){case"AND":return" ("+this.evaluateNodeToWhereClause(e.left,r,a,i,n)+" AND "+this.evaluateNodeToWhereClause(e.right,r,a,i,n)+") ";case"OR":return" ("+this.evaluateNodeToWhereClause(e.left,r,a,i,n)+" OR "+this.evaluateNodeToWhereClause(e.right,r,a,i,n)+") ";case"IS":if("null"!==e.right.type)throw new l.SqlError(l.SqlErrorCodes.UnsupportedIsRhs);return" ("+this.evaluateNodeToWhereClause(e.left,r,a,i,n)+" IS NULL )";case"ISNOT":if("null"!==e.right.type)throw new l.SqlError(l.SqlErrorCodes.UnsupportedIsRhs);return" ("+this.evaluateNodeToWhereClause(e.left,r,a,i,n)+" IS NOT NULL )";case"IN":if(s=[],"expression-list"===e.right.type){if("column-reference"===e.left.type&&e.left.column.toUpperCase()===this.field.name.toUpperCase()){for(var N=[],w=!0,C=0,F=e.right.value;C<F.length;C++){if("string"!==(y=F[C]).type){w=!1;break}if(void 0===this.lkp[y.value]){w=!1;break}N.push(this.lkp[y.value].toString())}if(w)return" ("+this.evaluateNodeToWhereClause(e.left,r,a,i,n)+" IN ("+N.join(",")+")) "}return s=this.evaluateNodeToWhereClause(e.right,r,a,i,n)," ("+this.evaluateNodeToWhereClause(e.left,r,a,i,n)+" IN ("+s.join(",")+")) "}return(h=this.evaluateNodeToWhereClause(e.right,r,a,i,n))instanceof Array?" ("+this.evaluateNodeToWhereClause(e.left,r,a,i,n)+" IN ("+h.join(",")+")) ":" ("+this.evaluateNodeToWhereClause(e.left,r,a,i,n)+" IN ("+h+")) ";case"NOT IN":if(s=[],"expression-list"===e.right.type){if("column-reference"===e.left.type&&e.left.column.toUpperCase()===this.field.name.toUpperCase()){N=[],w=!0;for(var T=0,m=e.right.value;T<m.length;T++){var y;if("string"!==(y=m[T]).type){w=!1;break}if(void 0===this.lkp[y.value]){w=!1;break}N.push(this.lkp[y.value].toString())}if(w)return" ("+this.evaluateNodeToWhereClause(e.left,r,a,i,n)+" NOT IN ("+N.join(",")+")) "}return s=this.evaluateNodeToWhereClause(e.right,r,a,i,n)," ("+this.evaluateNodeToWhereClause(e.left,r,a,i,n)+" NOT IN ("+s.join(",")+")) "}return(h=this.evaluateNodeToWhereClause(e.right,r,a,i,n))instanceof Array?" ("+this.evaluateNodeToWhereClause(e.left,r,a,i,n)+" NOT IN ("+h.join(",")+")) ":" ("+this.evaluateNodeToWhereClause(e.left,r,a,i,n)+" NOT IN ("+h+")) ";case"BETWEEN":return u=this.evaluateNodeToWhereClause(e.right,r,a,t.BADNESS,n)," ("+this.evaluateNodeToWhereClause(e.left,r,a,t.BADNESS,n)+" BETWEEN "+u[0]+" AND "+u[1]+" ) ";case"NOTBETWEEN":return u=this.evaluateNodeToWhereClause(e.right,r,a,t.BADNESS,n)," ("+this.evaluateNodeToWhereClause(e.left,r,a,t.BADNESS,n)+" NOT BETWEEN "+u[0]+" AND "+u[1]+" ) ";case"LIKE":return""!==e.escape?" ("+this.evaluateNodeToWhereClause(e.left,r,a,t.BADNESS,n)+" LIKE "+this.evaluateNodeToWhereClause(e.right,r,a,t.BADNESS,n)+" ESCAPE '"+e.escape+"') ":" ("+this.evaluateNodeToWhereClause(e.left,r,a,t.BADNESS,n)+" LIKE "+this.evaluateNodeToWhereClause(e.right,r,a,t.BADNESS,n)+") ";case"NOT LIKE":return""!==e.escape?" ("+this.evaluateNodeToWhereClause(e.left,r,a,t.BADNESS,n)+" NOT LIKE "+this.evaluateNodeToWhereClause(e.right,r,a,t.BADNESS,n)+" ESCAPE '"+e.escape+"') ":" ("+this.evaluateNodeToWhereClause(e.left,r,a,t.BADNESS,n)+" NOT LIKE "+this.evaluateNodeToWhereClause(e.right,r,a,t.BADNESS,n)+") ";case"<>":case"=":if("column-reference"===e.left.type&&"string"===e.right.type){if(e.left.column.toUpperCase()===this.field.name.toUpperCase()&&void 0!==this.lkp[e.right.value.toString()])return" ("+i+" "+e.operator+" "+this.lkp[e.right.value.toString()].toString()+") "}else if("column-reference"===e.right.type&&"string"===e.left.type&&e.right.column.toUpperCase()===this.field.name.toUpperCase())return" ("+this.lkp[e.right.value.toString()].toString()+" "+e.operator+" "+i+") ";return" ("+this.evaluateNodeToWhereClause(e.left,r,a,t.BADNESS,n)+" "+e.operator+" "+this.evaluateNodeToWhereClause(e.right,r,a,t.BADNESS,n)+") ";case"<":case">":case">=":case"<=":case"*":case"-":case"+":case"/":return" ("+this.evaluateNodeToWhereClause(e.left,r,a,t.BADNESS,n)+" "+e.operator+" "+this.evaluateNodeToWhereClause(e.right,r,a,t.BADNESS,n)+") "}case"null":return"null";case"boolean":return!0===e.value?"1":"0";case"string":return"'"+e.value.toString().replace(/'/g,"''")+"'";case"timestamp":case"date":return d.makeDateString(e.value,r);case"number":return e.value.toString();case"current-time":return d.makeToday("date"===e.mode,r);case"column-reference":return a&&a.toLowerCase()===e.column.toLowerCase()?"("+i+")":e.column;case"function":var E=this.evaluateNodeToWhereClause(e.args,r,a,t.BADNESS,n);return d.translateFunctionToDatabaseSpecific(e.name,E,r)}throw new l.SqlError(l.SqlErrorCodes.UnsupportedSyntax,{node:e.type})},t.prototype.extractValue=function(e){return this.codefield instanceof p.WhereClause?this.reverseLkp[this.codefield.calculateValueCompiled(e)]:this.reverseLkp[e.attributes[this.codefield]]},t.BADNESS="_!!!_BAD_LKP_!!!!",t}(v);t.StringToCodeAdapted=_;var N=function(e){function t(t,r){var a=e.call(this,t)||this;return a._sql=r,a}return i(t,e),t.prototype.rewriteSql=function(e,t){return{rewritten:!0,where:d.reformulateWithoutField(e,this.field.name,d.toWhereClause(this._sql,h.FeatureServiceDatabaseType.Standardised),t.getFieldsIndex())}},t.prototype.extractValue=function(e){return this._sql.calculateValueCompiled(e)},t}(v);t.SqlExpressionAdapted=N;var w=function(e){function t(t){var r=e.call(this,t)||this;return r._calcFunc=null,r.declaredClass="esri.arcade.featureset.actions.Adapted",r.adaptedFields=[],r._extraFilter=null,r._extraFilter=t.extraFilter,r._parent=t.parentfeatureset,r._maxProcessing=30,r.adaptedFields=t.adaptedFields,r}return i(t,e),t.findField=function(e,t){for(var r=0,a=e;r<a.length;r++){var i=a[r];if(i.name.toLowerCase()===t.toString().toLowerCase())return i}return null},t.prototype._initialiseFeatureSet=function(){null!==this._parent?(this.geometryType=this._parent.geometryType,this.objectIdField=this._parent.objectIdField,this.globalIdField=this._parent.globalIdField,this.spatialReference=this._parent.spatialReference,this.hasM=this._parent.hasM,this.hasZ=this._parent.hasZ,this.typeIdField=this._parent.typeIdField,this.types=this._parent.types):(this.spatialReference=new f({wkid:4326}),this.objectIdField="",this.globalIdField="",this.geometryType=h.layerGeometryEsriConstants.point,this.typeIdField="",this.types=null),this.fields=[];for(var e=0,t=this.adaptedFields;e<t.length;e++){var r=t[e];r.postInitialization(this,this._parent),this.fields.push(r.field)}},t.prototype._getSet=function(e){var t;return r(this,void 0,void 0,(function(){var r;return a(this,(function(a){switch(a.label){case 0:return null!==this._wset?[3,6]:[4,this._ensureLoaded()];case 1:return a.sent(),r=null,this._extraFilter?[3,3]:[4,null===(t=this._parent)||void 0===t?void 0:t._getSet(e)];case 2:return r=a.sent(),[3,5];case 3:return[4,this._getFilteredSet("",null,null,null,e)];case 4:r=a.sent(),a.label=5;case 5:return this._checkCancelled(e),c.assertIsSome(r),this._wset=new u(r._candidates.slice(0),r._known.slice(0),r._ordered,this._clonePageDefinition(r.pagesDefinition)),[2,this._wset];case 6:return[2,this._wset]}}))}))},t.prototype._isInFeatureSet=function(e){return c.unwrapOrThrow(this._parent)._isInFeatureSet(e)},t.prototype._getFeatures=function(e,t,i,l){var o,h;return r(this,void 0,void 0,(function(){var r,d,c,p,f,v,g,S,_,N,w,C,F,T;return a(this,(function(a){switch(a.label){case 0:return r=[],-1!==t&&void 0===this._featureCache[t]&&r.push(t),d=this._maxQueryRate(),!0!==this._checkIfNeedToExpandKnownPage(e,d)?[3,2]:[4,this._expandPagedSet(e,d,0,0,l)];case 1:return a.sent(),[2,this._getFeatures(e,t,i,l)];case 2:for(c=0,v=e._lastFetchedIndex;v<e._known.length&&(++c<=i&&(e._lastFetchedIndex+=1),!(void 0===this._featureCache[e._known[v]]&&(e._known[v]!==t&&r.push(e._known[v]),r.length>=d)));v++);return 0===r.length?[2,"success"]:(e=new u([],r,e._ordered,null),p=Math.min(r.length,i),[4,null===(o=this._parent)||void 0===o?void 0:o._getFeatures(e,-1,p,l)]);case 3:for(a.sent(),this._checkCancelled(l),f=[],v=0;v<p;v++)void 0!==(g=null===(h=this._parent)||void 0===h?void 0:h._featureFromCache(r[v]))&&f.push({geometry:g.geometry,attributes:g.attributes,id:r[v]});for(S=0,_=f;S<_.length;S++){for(N=_[S],w=[],C=0,F=this.adaptedFields;C<F.length;C++)T=F[C],w[T.field.name]=T.extractValue(N);this._featureCache[N.id]=new n({attributes:w,geometry:s.cloneGeometry(N.geometry)})}return[2,"success"]}}))}))},t.prototype._fetchAndRefineFeatures=function(){return r(this,void 0,void 0,(function(){return a(this,(function(e){throw new l.FeatureSetError(l.FeatureSetErrorCodes.NeverReach)}))}))},t.prototype._getFilteredSet=function(e,t,i,n,s){return r(this,void 0,void 0,(function(){var r,l,o,h,p,f,v,_;return a(this,(function(a){switch(a.label){case 0:if(r=!1,l=this._reformulateWithoutAdaptions(i),r=l.cannot,i=l.where,o=!1,null!==n){for(o=!0,h=[],p=0,f=this.adaptedFields;p<f.length;p++)if(!((v=f[p])instanceof g)&&!0===n.scanForField(v.field.name)){if(!(v instanceof S)){n=null,o=!1;break}h.push({field:v.field.name,newfield:v.originalField.name})}n&&h.length>0&&(n=n.replaceFields(h))}return null!==i?null!==this._extraFilter&&(i=d.combine(this._extraFilter,i)):i=this._extraFilter,[4,this._ensureLoaded()];case 1:return a.sent(),[4,c.unwrapOrThrow(this._parent)._getFilteredSet(e,t,i,n,s)];case 2:return _=a.sent(),this._checkCancelled(s),[2,!0===r?new u(_._candidates.slice(0).concat(_._known.slice(0)),[],!0===o&&_._ordered,this._clonePageDefinition(_.pagesDefinition)):new u(_._candidates.slice(0),_._known.slice(0),!0===o&&_._ordered,this._clonePageDefinition(_.pagesDefinition))]}}))}))},t.prototype._reformulateWithoutAdaptions=function(e){var t={cannot:!1,where:e};if(null!==e)for(var r=0,a=this.adaptedFields;r<a.length;r++){var i=a[r];if(!0===d.scanForField(e,i.field.name)){var n=i.rewriteSql(e,this);if(!0!==n.rewritten){t.cannot=!0,t.where=null;break}t.where=n.where}}return t},t.prototype._stat=function(e,t,i,n,s,l,o){return r(this,void 0,void 0,(function(){var r,u,h;return a(this,(function(a){switch(a.label){case 0:return r=!1,u=this._reformulateWithoutAdaptions(t),r=u.cannot,t=u.where,u=this._reformulateWithoutAdaptions(s),r=r||u.cannot,null!==(s=u.where)?null!==this._extraFilter&&(s=d.combine(this._extraFilter,s)):s=this._extraFilter,!0===r?null===s&&""===i&&null===n?[2,this._manualStat(e,t,l,o)]:[2,{calculated:!1}]:[4,c.unwrapOrThrow(this._parent)._stat(e,t,i,n,s,l,o)];case 1:return!1===(h=a.sent()).calculated?null===s&&""===i&&null===n?[2,this._manualStat(e,t,l,o)]:[2,{calculated:!1}]:[2,h]}}))}))},t.prototype._canDoAggregates=function(e,t,i,n,s){return r(this,void 0,void 0,(function(){var r,l,o,u,h,c,p,f,v;return a(this,(function(a){if(null===this._parent)return[2,!1];for(h=0;h<e.length;h++)for(r=0,l=this.adaptedFields;r<l.length;r++)if(o=l[r],e[h].toLowerCase()===o.field.name.toLowerCase()&&!(o instanceof g))return[2,!1];for(u=[],h=0;h<t.length;h++)if(null!==(c=t[h]).workingexpr){if((p=this._reformulateWithoutAdaptions(c.workingexpr)).cannot)return[2,!1];(f=c.clone()).workingexpr=p.where,u.push(f)}else u.push(c);return(v=this._reformulateWithoutAdaptions(s)).cannot?[2,!1]:(null!==(s=v.where)?null!==this._extraFilter&&(s=d.combine(this._extraFilter,s)):s=this._extraFilter,[2,this._parent._canDoAggregates(e,u,i,n,s)])}))}))},t.prototype._getAggregatePagesDataSourceDefinition=function(e,t,i,n,s,o,u){return r(this,void 0,void 0,(function(){var r,h,c,p,f,v;return a(this,(function(a){if(null===this._parent)throw new l.FeatureSetError(l.FeatureSetErrorCodes.NeverReach);for(r=[],h=0;h<t.length;h++)if(null!==(c=t[h]).workingexpr){if((p=this._reformulateWithoutAdaptions(c.workingexpr)).cannot)throw new l.FeatureSetError(l.FeatureSetErrorCodes.NeverReach);(f=c.clone()).workingexpr=p.where,r.push(f)}else r.push(c);if((v=this._reformulateWithoutAdaptions(s)).cannot)throw new l.FeatureSetError(l.FeatureSetErrorCodes.NeverReach);return null!==(s=v.where)?null!==this._extraFilter&&(s=d.combine(this._extraFilter,s)):s=this._extraFilter,[2,this._parent._getAggregatePagesDataSourceDefinition(e,r,i,n,s,o,u)]}))}))},t}(o);t.AdaptedFeatureSet=w}));