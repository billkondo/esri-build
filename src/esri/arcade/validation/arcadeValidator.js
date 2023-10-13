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

define(["require","exports","../polyfill/tsSupport/assign","../polyfill/tsSupport/spreadarray","../lib/arcade-parser","./diagnosticMessages","./types"],(function(e,i,t,n,o,r,a){"use strict";function s(e,i){return i?e.replace(/\${(.*?)}/g,(function(e,t){var n,o;return null!==(o=null===(n=i[t])||void 0===n?void 0:n.toString())&&void 0!==o?o:""})):e}function c(e){return!!e&&"dictionary"!==e.type}Object.defineProperty(i,"__esModule",{value:!0}),i.validateScript=i.ArcadeValidationService=i.isValueVariable=i.format=void 0,i.format=s,i.isValueVariable=c;var d=function(){function e(e,i){void 0===i&&(i=[]),this._apiDefinitions=e,this._profileVariables=i,this._isInBlock=!1,this._recordIdentifierAssignment=!1,this._scriptScopeIdentifiers=new Map,this._diagnostics=new Array,this._undeclaredIdentifiersInFunctions=new Map}return e.prototype.validateScript=function(e){var i=this;if(!e)return{diagnostics:[],program:null};this._isInBlock=!1,this._recordIdentifierAssignment=!1,this._diagnostics=[],this._scriptScopeIdentifiers.clear(),this._undeclaredIdentifiersInFunctions.clear(),this._functionScopeIdentifiers=void 0;var t=null;try{t=o.parse(e,{tolerant:!0}),this.handleErrors(t.errors),t.body.forEach((function(e){return i.validateStatement(e)})),this.diagnoseIdentifiers(),this._undeclaredIdentifiersInFunctions.size>0&&this._undeclaredIdentifiersInFunctions.forEach((function(e){for(var t=0,n=e;t<n.length;t++){var o=n[t];i.logDiagnostic(o.node.loc,{code:r.DiagnosticCodes.NotDefined,data:{identifier:o.node.name}})}}))}catch(e){this.handleException(e)}return{diagnostics:this._diagnostics,program:t}},e.prototype.recordIdentifierAssignment=function(e,i,t){void 0===t&&(t=!0);var n=this._recordIdentifierAssignment;this._recordIdentifierAssignment=t,e.call(this,i),this._recordIdentifierAssignment=n},e.prototype.inBlock=function(e,i){var t=this._isInBlock;this._isInBlock=!0,e.call(this,i),this._isInBlock=t},Object.defineProperty(e.prototype,"_isInFunctionScope",{get:function(){return!!this._functionScopeIdentifiers},enumerable:!1,configurable:!0}),e.prototype.inFunctionScope=function(e){this._functionScopeIdentifiers=new Map,e.call(this),this.diagnoseIdentifiers(),this._functionScopeIdentifiers=void 0},e.prototype.logDiagnostic=function(e,i){var n,c=t(t({severity:a.DiagnosticSeverity.Error},i),{message:s(null!==(n=r.DiagnosticMessages[i.code])&&void 0!==n?n:o.ParsingErrorMessages[i.code],i.data),range:{start:{line:e.start.line-1,character:e.start.column},end:{line:e.end.line-1,character:e.end.column}}});this._diagnostics.push(c)},e.prototype.handleErrors=function(e){(null!=e?e:[]).forEach(this.handleException,this)},e.prototype.handleException=function(e){if(function(e){var i;return"ParsingError"===(null===(i=e)||void 0===i?void 0:i.name)}(e)){var i=e.range,t=e.code,n=e.data;this.logDiagnostic(i,{code:t,data:n})}else this.logDiagnostic({start:{line:1,column:0},end:{line:1,column:0}},{code:r.DiagnosticCodes.ExecutionError,data:{stack:e.stack}})},e.prototype.getIdentifierInfo=function(e){var i,t;return null!==(t=null===(i=this._functionScopeIdentifiers)||void 0===i?void 0:i.get(e))&&void 0!==t?t:this._scriptScopeIdentifiers.get(e)},e.prototype.setIdentiferInfo=function(e,i){var t;this._functionScopeIdentifiers?this._functionScopeIdentifiers.set(e,i):((null!==(t=this._functionScopeIdentifiers)&&void 0!==t?t:this._scriptScopeIdentifiers).set(e,i),this._functionScopeIdentifiers||this._undeclaredIdentifiersInFunctions.has(e)&&(this._undeclaredIdentifiersInFunctions.delete(e),i.used=!0))},e.prototype.isProfileVariable=function(e){var i;return(null!==(i=this._profileVariables)&&void 0!==i?i:[]).some((function(i){return i.name.toLowerCase()===e}))},e.prototype.isApiItem=function(e){var i,t,n,o,r=!!(null===(t=null===(i=this._apiDefinitions)||void 0===i?void 0:i.constantDefinitions)||void 0===t?void 0:t.get(e)),a=!!(null===(o=null===(n=this._apiDefinitions)||void 0===n?void 0:n.functionDefinitions)||void 0===o?void 0:o.get(e));return r||a},e.prototype.validateStatement=function(e){var i=this;if(e)switch(e.type){case"BlockStatement":return void e.body.forEach((function(e){return i.validateStatement(e)}));case"VariableDeclaration":return void e.declarations.forEach((function(e){return i.validateVariableDeclarator(e)}));case"FunctionDeclaration":return void this.validateFunctionDeclaration(e);case"ExportNamedDeclaration":return void this.validateExportDeclaration(e);case"ImportDeclaration":return void this.validateImportDeclaration(e);case"WhileStatement":return void this.validateWhileStatement(e);case"ForStatement":return void this.validateForStatement(e);case"ForInStatement":return void this.validateForInStatement(e);case"IfStatement":return void this.validateIfStatement(e);case"ReturnStatement":return void this.validateExpression(e.argument);case"ExpressionStatement":return void this.validateExpression(e.expression);case"BreakStatement":case"ContinueStatement":case"EmptyStatement":return}},e.prototype.validateVariableDeclarator=function(e){this.validateExpression(e.init),this.recordVariableIdentifier(e.id,{initialized:!!e.init})},e.prototype.validateFunctionDeclaration=function(e){var i=this;this.recordFunctionIdentifier(e),this.inFunctionScope((function(){e.params.forEach((function(e){return i.recordParamAsIdentifier(e)})),l(e.body)&&i.logDiagnostic(e.body.loc,{code:r.DiagnosticCodes.UnexpectedEmptyFunction,data:{identifier:e.id.name},severity:a.DiagnosticSeverity.Warning}),i.validateStatement(e.body)}))},e.prototype.validateExportDeclaration=function(e){this.validateStatement(e.declaration)},e.prototype.validateImportDeclaration=function(e){this.recordImportIdentifier(e)},e.prototype.validateForStatement=function(e){o.isVariableDeclaration(e.init)?this.inBlock(this.validateStatement,e.init):this.validateExpression(e.init),this.validateExpression(e.update),this.validateExpression(e.test),l(e.body)&&this.logDiagnostic(e.body.loc,{code:r.DiagnosticCodes.EmptyBlockStatement,severity:a.DiagnosticSeverity.Warning}),this.inBlock(this.validateStatement,e.body)},e.prototype.validateWhileStatement=function(e){this.validateExpression(e.test),l(e.body)&&this.logDiagnostic(e.body.loc,{code:r.DiagnosticCodes.EmptyBlockStatement,severity:a.DiagnosticSeverity.Warning}),this.inBlock(this.validateStatement,e.body)},e.prototype.validateForInStatement=function(e){o.isIdentifier(e.left)?this.validateExpression(e.left):this.recordVariableIdentifier(e.left.declarations[0].id,{initialized:!0,inBlock:!0}),this.validateExpression(e.right),l(e.body)&&this.logDiagnostic(e.body.loc,{code:r.DiagnosticCodes.EmptyBlockStatement,severity:a.DiagnosticSeverity.Warning}),this.validateStatement(e.body)},e.prototype.validateIfStatement=function(e){this.validateExpression(e.test),l(e.consequent)&&this.logDiagnostic(e.consequent.loc,{code:r.DiagnosticCodes.EmptyBlockStatement,severity:a.DiagnosticSeverity.Warning}),e.alternate&&l(e.alternate)&&this.logDiagnostic(e.alternate.loc,{code:r.DiagnosticCodes.EmptyBlockStatement,severity:a.DiagnosticSeverity.Warning}),this.inBlock(this.validateStatement,e.consequent),this.inBlock(this.validateStatement,e.alternate)},e.prototype.validateExpression=function(e){var i=this;if(e)switch(e.type){case"AssignmentExpression":return void this.validateAssignmentExpression(e);case"CallExpression":return void this.validateCallExpression(e);case"Identifier":return void this.validateIdentifier(e);case"Literal":return;case"ArrayExpression":return void e.elements.forEach((function(e){return i.validateExpression(e)}));case"ObjectExpression":return void this.validateObjectExpression(e);case"UnaryExpression":return void this.validateUnaryExpression(e);case"UpdateExpression":return void this.validateUpdateExpression(e);case"BinaryExpression":case"LogicalExpression":return void this.validateBinaryAndLogicalExpression(e);case"MemberExpression":return void this.validateMemberExpression(e);case"TemplateLiteral":return void e.expressions.forEach((function(e){return i.validateExpression(e)}));default:return}},e.prototype.validateAssignmentExpression=function(e){this.recordIdentifierAssignment(this.validateExpression,e.left),this.validateExpression(e.right)},e.prototype.validateCallExpression=function(e){var i,t,n=this;if(this.validateExpression(e.callee),o.isIdentifier(e.callee)){var a=e.callee.name.toLowerCase(),s=this.getIdentifierInfo(a),c=null===(t=null===(i=this._apiDefinitions)||void 0===i?void 0:i.functionDefinitions)||void 0===t?void 0:t.get(a);if(!s&&c){var d=function(e,i){if(!e||null==i||i<0)return null;for(var t=null,n=0,o=e.overloads;n<o.length;n++){var a=o[n].parametersInfo,s=a.min,c=a.max;if(i<s)t=s>0?{code:r.DiagnosticCodes.NotEnoughArguments,data:{min:s}}:{code:r.DiagnosticCodes.NoArgumentExpected};else{if(!(c>=0&&i>c))return null;t={code:r.DiagnosticCodes.TooManyArguments,data:{max:c}}}}return t}(c,e.arguments.length);d&&this.logDiagnostic(e.loc,d)}}e.arguments.forEach((function(e){return n.validateExpression(e)}))},e.prototype.validateIdentifier=function(e){var i=e.name.toLowerCase(),t=this.getIdentifierInfo(i);if(t)return this._recordIdentifierAssignment?void(t.initialized=!0):void(t.used=!0);if(!this.isProfileVariable(i)&&!this.isApiItem(i)){if(this._isInFunctionScope){var n=this._undeclaredIdentifiersInFunctions.get(i);return n||(n=[],this._undeclaredIdentifiersInFunctions.set(i,n)),void n.push({node:e,identifier:i})}this.logDiagnostic(e.loc,{code:r.DiagnosticCodes.NotDefined,data:{identifier:e.name}})}},e.prototype.logProfileOrApiConflict=function(e){var i=e.name.toLowerCase(),t=this.isProfileVariable(i),n=this.isApiItem(i);(t||n)&&this.logDiagnostic(e.loc,{code:t?r.DiagnosticCodes.ProfileVariablesConflict:r.DiagnosticCodes.ApiConflict,severity:a.DiagnosticSeverity.Warning,data:{identifier:e.name}})},e.prototype.validateObjectExpression=function(e){var i=this;e.properties.forEach((function(e){i.validateExpression(e.value)}))},e.prototype.validateUnaryExpression=function(e){this.validateExpression(e.argument)},e.prototype.validateUpdateExpression=function(e){this.validateExpression(e.argument)},e.prototype.validateBinaryAndLogicalExpression=function(e){this.validateExpression(e.left),this.validateExpression(e.right)},e.prototype.validateMemberExpression=function(e){var i=this.flattenMemberExpressionAndValidate(e),t=i[0].object;this.recordIdentifierAssignment(this.validateExpression,t,!1),o.isIdentifier(t)&&(this.getIdentifierInfo(t.name.toLowerCase())||this.validateMemberExpressionWithProfile(i)||this.validateConstantMemberExpression(i))},e.prototype.flattenMemberExpressionAndValidate=function(e){switch(e.type){case"MemberExpression":return o.isIdentifier(e.property)&&!e.computed||this.validateExpression(e.property),n(n([],this.flattenMemberExpressionAndValidate(e.object)),[e]);default:return[]}},e.prototype.extractAndValidatePropertyName=function(e){switch(e.type){case"Identifier":return e.name.toLowerCase();case"Literal":return"string"!=typeof e.value?(this.logDiagnostic(e.loc,{code:r.DiagnosticCodes.UnexpectedPropertyIdentifier}),null):e.value.toLowerCase();default:return this.logDiagnostic(e.loc,{code:r.DiagnosticCodes.UnexpectedPropertyIdentifier}),null}},e.prototype.validateConstantMemberExpression=function(e){var i,t,n=e[0];if(!o.isIdentifier(n.object))return!1;var a=n.object.name.toLowerCase(),s=null===(t=null===(i=this._apiDefinitions)||void 0===i?void 0:i.constantDefinitions)||void 0===t?void 0:t.get(a);if(!s)return!1;if("namespace"!==s.type)return this.logDiagnostic(n.property.loc,{code:r.DiagnosticCodes.NotADictionary,data:{identifier:a}}),!0;var c=this.extractAndValidatePropertyName(n.property);if(!c)return!0;if(!s.members.some((function(e){return e.key===c}))){var d=s.members.reduce((function(e,i){return e+(e?" | ":"")+i.completion.label.split(".").pop()}),"");this.logDiagnostic(n.property.loc,{code:r.DiagnosticCodes.InvalidConstantIdentifier,data:{list:d}})}return e.length>1&&this.logDiagnostic(e[1].property.loc,{code:r.DiagnosticCodes.UnexpectedPropertyIdentifier}),!0},e.prototype.validateMemberExpressionWithProfile=function(e){var i,t,n,o=e[0];if("Identifier"!==o.object.type)return!1;var s=o.object.name.toLowerCase(),d=null===(i=this._profileVariables)||void 0===i?void 0:i.find((function(e){return e.key===s}));if(!d)return!1;if(c(d))return this.logDiagnostic(o.object.loc,{code:r.DiagnosticCodes.NotADictionary,data:{identifier:d.name}}),!0;if(this._recordIdentifierAssignment)return this.logDiagnostic(o.loc,{code:r.DiagnosticCodes.ProfileVariablesAreImmutable}),!0;for(var l=d,p=function(i){if(e[i].computed)return{value:!0};if(c(l))return f.logDiagnostic(null!==(n=null===(t=e[i-1])||void 0===t?void 0:t.property.loc)&&void 0!==n?n:e[i].object.loc,{code:r.DiagnosticCodes.NotADictionary,data:{identifier:l.name}}),{value:!0};var o=f.extractAndValidatePropertyName(e[i].property);if(!o)return{value:!0};if(0===l.properties.length)return f.logDiagnostic(e[i].property.loc,{code:r.DiagnosticCodes.UnknownPropertyIdentifier,data:{identifier:o},severity:a.DiagnosticSeverity.Warning}),{value:!0};var s=l.properties.find((function(e){return e.name.toLowerCase()===o}));if(!s){var d=l.properties.reduce((function(e,i){return e+(e?" | ":"")+i.name.split(".").pop()}),"");return f.logDiagnostic(e[i].property.loc,{code:r.DiagnosticCodes.InvalidPropertyIdentifier,data:{list:d}}),{value:!0}}l=s},f=this,u=0;u<e.length;u++){var v=p(u);if("object"==typeof v)return v.value}return!0},e.prototype.recordVariableIdentifier=function(e,i){var t;this.logProfileOrApiConflict(e);var n=e.name.toLowerCase(),o=this.getIdentifierInfo(n),s=o&&this._isInFunctionScope&&"function"===o.scope,c=o&&!this._isInFunctionScope&&"script"===o.scope;(s||c)&&this.logDiagnostic(e.loc,{code:r.DiagnosticCodes.AlreadyDefined,data:{identifier:e.name},severity:a.DiagnosticSeverity.Warning});var d=null!==(t=i.inBlock)&&void 0!==t?t:this._isInBlock,l=i.initialized;!o||this._isInFunctionScope&&"function"!==o.scope?o={node:e,used:!1,initialized:l,scope:this._isInFunctionScope?"function":d?"block":"script"}:(o.node=e,o.used=!1,o.initialized=l);return"block"!==o.scope||d||(o.scope="script",this.logDiagnostic(e.loc,{code:r.DiagnosticCodes.AlreadyDefined,data:{identifier:e.name},severity:a.DiagnosticSeverity.Warning})),this.setIdentiferInfo(n,o),!1},e.prototype.recordImportIdentifier=function(e){var i=e.specifiers[0].local;this.logProfileOrApiConflict(i);var n=i.name.toLowerCase(),o=this.getIdentifierInfo(n);(null==o?void 0:o.scope)&&this.logDiagnostic(e.specifiers[0].local.loc,{code:r.DiagnosticCodes.AlreadyDefined,data:{identifier:e.specifiers[0].local.name},severity:a.DiagnosticSeverity.Warning}),o=t(t({node:e.specifiers[0].local,used:!1},o),{scope:"script",initialized:!0}),this.setIdentiferInfo(n,o)},e.prototype.recordFunctionIdentifier=function(e){this.logProfileOrApiConflict(e.id);var i=e.id.name.toLowerCase(),n=this.getIdentifierInfo(i);(null==n?void 0:n.scope)&&this.logDiagnostic(e.id.loc,{code:r.DiagnosticCodes.AlreadyDefined,data:{identifier:e.id.name},severity:a.DiagnosticSeverity.Warning}),n=t(t({node:e.id,used:!1},n),{scope:"script",initialized:!0}),this.setIdentiferInfo(i,n)},e.prototype.recordParamAsIdentifier=function(e){return this.recordVariableIdentifier(e,{initialized:!0})},e.prototype.diagnoseIdentifiers=function(){var e,i=this;(null!==(e=this._functionScopeIdentifiers)&&void 0!==e?e:this._scriptScopeIdentifiers).forEach((function(e){e.node&&(e.used?e.initialized||i.logDiagnostic(e.node.loc,{code:r.DiagnosticCodes.DefinedNeverAssigned,data:{identifier:e.node.name},severity:a.DiagnosticSeverity.Warning}):i.logDiagnostic(e.node.loc,{code:e.initialized?r.DiagnosticCodes.AssignedNeverUsed:r.DiagnosticCodes.DefinedNeverUsed,data:{identifier:e.node.name},severity:a.DiagnosticSeverity.Warning}))}))},e}();function l(e){return o.isEmptyStatement(e)||o.isBlockStatement(e)&&!(null==e?void 0:e.body.length)}i.ArcadeValidationService=d,i.validateScript=function(e,i,t){return void 0===i&&(i=[]),e?new d(t,i).validateScript(e):{diagnostics:[]}}}));