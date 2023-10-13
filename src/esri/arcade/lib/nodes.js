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

define(["require","exports","../polyfill/tsSupport/awaiter","../polyfill/tsSupport/generator","../polyfill/tsSupport/extends","./syntax"],(function(t,r,e,n,a,i){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.ImportDefaultSpecifier=r.ImportDeclaration=r.ExportSpecifier=r.ExportNamedDeclaration=r.VariableDeclarator=r.VariableDeclaration=r.UpdateExpression=r.UpdateOperators=r.UnaryExpression=r.UnaryOperators=r.TemplateLiteral=r.TemplateElement=r.Program=r.ReturnStatement=r.Property=r.ObjectExpression=r.Literal=r.IfStatement=r.Identifier=r.FunctionDeclaration=r.WhileStatement=r.ForStatement=r.ForInStatement=r.ExpressionStatement=r.EmptyStatement=r.ContinueStatement=r.StaticMemberExpression=r.ComputedMemberExpression=r.CallExpression=r.BreakStatement=r.BlockStatement=r.BinaryExpression=r.BinaryOperators=r.LogicalOperators=r.AssignmentExpression=r.AssignmentOperators=r.ArrayExpression=r.Comment=void 0;var o=function(){},s=function(t){function r(r,e){var n=t.call(this)||this;return n.type=r,n.value=e,n}return a(r,t),r}(o);r.Comment=s;var u=function(t){function r(r){var e=t.call(this)||this;return e.elements=r,e.type=i.Syntax.ArrayExpression,e}return a(r,t),r}(o);r.ArrayExpression=u,r.AssignmentOperators=["=","/=","*=","%=","+=","-="];var c=function(t){function r(r,e,n){var a=t.call(this)||this;return a.operator=r,a.left=e,a.right=n,a.type=i.Syntax.AssignmentExpression,a}return a(r,t),r}(o);r.AssignmentExpression=c,r.LogicalOperators=["||","&&"],r.BinaryOperators=["|","&",">>","<<",">>",">>>","^","==","!=","<","<=",">",">=","+","-","*","/","%"];var l=function(t){function e(e,n,a){var o=t.call(this)||this;return o.operator=e,o.left=n,o.right=a,o.type=r.LogicalOperators.includes(e)?i.Syntax.LogicalExpression:i.Syntax.BinaryExpression,o}return a(e,t),e}(o);r.BinaryExpression=l;var p=function(t){function r(r){var e=t.call(this)||this;return e.body=r,e.type=i.Syntax.BlockStatement,e}return a(r,t),r}(o);r.BlockStatement=p;var y=function(t){function r(){var r=null!==t&&t.apply(this,arguments)||this;return r.type=i.Syntax.BreakStatement,r}return a(r,t),r}(o);r.BreakStatement=y;var f=function(t){function r(r,e){var n=t.call(this)||this;return n.callee=r,n.args=e,n.type=i.Syntax.CallExpression,n.arguments=e,n}return a(r,t),r}(o);r.CallExpression=f;var m=function(t){function r(r,e){var n=t.call(this)||this;return n.object=r,n.property=e,n.type=i.Syntax.MemberExpression,n.computed=!0,n}return a(r,t),r}(o);r.ComputedMemberExpression=m;var x=function(t){function r(r,e){var n=t.call(this)||this;return n.object=r,n.property=e,n.type=i.Syntax.MemberExpression,n.computed=!1,n}return a(r,t),r}(o);r.StaticMemberExpression=x;var h=function(t){function r(){var r=null!==t&&t.apply(this,arguments)||this;return r.type=i.Syntax.ContinueStatement,r}return a(r,t),r}(o);r.ContinueStatement=h;var S=function(t){function r(){var r=null!==t&&t.apply(this,arguments)||this;return r.type=i.Syntax.EmptyStatement,r}return a(r,t),r}(o);r.EmptyStatement=S;var v=function(t){function r(r){var e=t.call(this)||this;return e.expression=r,e.type=i.Syntax.ExpressionStatement,e}return a(r,t),r}(o);r.ExpressionStatement=v;var E=function(t){function r(r,e,n){var a=t.call(this)||this;return a.left=r,a.right=e,a.body=n,a.type=i.Syntax.ForInStatement,a.each=!1,a}return a(r,t),r}(o);r.ForInStatement=E;var d=function(t){function r(r,e,n,a){var o=t.call(this)||this;return o.init=r,o.test=e,o.update=n,o.body=a,o.type=i.Syntax.ForStatement,o}return a(r,t),r}(o);r.ForStatement=d;var b=function(t){function r(r,e){var n=t.call(this)||this;return n.test=r,n.body=e,n.type=i.Syntax.WhileStatement,n}return a(r,t),r}(o);r.WhileStatement=b;var g=function(t){function r(r,e,n){var a=t.call(this)||this;return a.id=r,a.params=e,a.body=n,a.type=i.Syntax.FunctionDeclaration,a.generator=!1,a.expression=!1,a.async=!1,a}return a(r,t),r}(o);r.FunctionDeclaration=g;var D=function(t){function r(r){var e=t.call(this)||this;return e.name=r,e.type=i.Syntax.Identifier,e}return a(r,t),r}(o);r.Identifier=D;var I=function(t){function r(r,e,n){var a=t.call(this)||this;return a.test=r,a.consequent=e,a.alternate=n,a.type=i.Syntax.IfStatement,a}return a(r,t),r}(o);r.IfStatement=I;var O=function(t){function r(r,e){var n=t.call(this)||this;return n.value=r,n.raw=e,n.type=i.Syntax.Literal,n}return a(r,t),r}(o);r.Literal=O;var B=function(t){function r(r){var e=t.call(this)||this;return e.properties=r,e.type=i.Syntax.ObjectExpression,e}return a(r,t),r}(o);r.ObjectExpression=B;var C=function(t){function r(r,e,n,a,o,s){var u=t.call(this)||this;return u.kind=r,u.key=e,u.computed=n,u.value=a,u.method=o,u.shorthand=s,u.type=i.Syntax.Property,u}return a(r,t),r}(o);r.Property=C;var L=function(t){function r(r){var e=t.call(this)||this;return e.argument=r,e.type=i.Syntax.ReturnStatement,e}return a(r,t),r}(o);r.ReturnStatement=L;var U=function(t){function r(r){var e=t.call(this)||this;return e.body=r,e.type=i.Syntax.Program,e}return a(r,t),r}(o);r.Program=U;var k=function(t){function r(r,e){var n=t.call(this)||this;return n.value=r,n.tail=e,n.type=i.Syntax.TemplateElement,n}return a(r,t),r}(o);r.TemplateElement=k;var F=function(t){function r(r,e){var n=t.call(this)||this;return n.quasis=r,n.expressions=e,n.type=i.Syntax.TemplateLiteral,n}return a(r,t),r}(o);r.TemplateLiteral=F,r.UnaryOperators=["-","+","!","~"];var A=function(t){function r(r,e){var n=t.call(this)||this;return n.operator=r,n.argument=e,n.type=i.Syntax.UnaryExpression,n.prefix=!0,n}return a(r,t),r}(o);r.UnaryExpression=A,r.UpdateOperators=["++","--"];var M=function(t){function r(r,e,n){var a=t.call(this)||this;return a.operator=r,a.argument=e,a.prefix=n,a.type=i.Syntax.UpdateExpression,a}return a(r,t),r}(o);r.UpdateExpression=M;var P=function(t){function r(r,e){var n=t.call(this)||this;return n.declarations=r,n.kind=e,n.type=i.Syntax.VariableDeclaration,n}return a(r,t),r}(o);r.VariableDeclaration=P;var j=function(t){function r(r,e){var n=t.call(this)||this;return n.id=r,n.init=e,n.type=i.Syntax.VariableDeclarator,n}return a(r,t),r}(o);r.VariableDeclarator=j;var T=function(t){function r(r,e,n){var a=t.call(this)||this;return a.type=i.Syntax.ExportNamedDeclaration,a.declaration=r,a.specifiers=e,a.source=n,a}return a(r,t),r}(o);r.ExportNamedDeclaration=T;var V=function(t){function r(r,e){var n=t.call(this)||this;return n.type=i.Syntax.ExportSpecifier,n.exported=e,n.local=r,n}return a(r,t),r}(o);r.ExportSpecifier=V;var q=function(t){function r(r,e){var n=t.call(this)||this;return n.type=i.Syntax.ImportDeclaration,n.specifiers=r,n.source=e,n}return a(r,t),r}(o);r.ImportDeclaration=q;var N=function(t){function r(r){var e=t.call(this)||this;return e.type=i.Syntax.ImportDefaultSpecifier,e.local=r,e}return a(r,t),r}(o);r.ImportDefaultSpecifier=N}));