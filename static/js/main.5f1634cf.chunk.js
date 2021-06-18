(this["webpackJsonpplanets-fact-site"]=this["webpackJsonpplanets-fact-site"]||[]).push([[0],{31:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(17),r=n.n(s),i=n(13),l=n.n(i),o=n(18),j=n(4),u=n(8),d=n(2),b=n(0);function O(e){function t(t){!function(e){var t=document.querySelectorAll(".link-page");Array.from(t).forEach((function(t,n){t===e.target?t.setAttribute("id","border-".concat(n)):t.removeAttribute("id","border-".concat(n))}))}(t),e.closeMenu()}return Object(b.jsx)("nav",{id:"main-nav",children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)(u.b,{to:"/mercury",className:"link-page",id:"border-0",onClick:t,children:"Mercury"})}),Object(b.jsx)("li",{children:Object(b.jsx)(u.b,{to:"/venus",className:"link-page",onClick:t,children:"Venus"})}),Object(b.jsx)("li",{children:Object(b.jsx)(u.b,{to:"/earth",className:"link-page",onClick:t,children:"Earth"})}),Object(b.jsx)("li",{children:Object(b.jsx)(u.b,{to:"/mars",className:"link-page",onClick:t,children:"Mars"})}),Object(b.jsx)("li",{children:Object(b.jsx)(u.b,{to:"/jupiter",className:"link-page",onClick:t,children:"Jupiter"})}),Object(b.jsx)("li",{children:Object(b.jsx)(u.b,{to:"/saturn",className:"link-page",onClick:t,children:"Saturn"})}),Object(b.jsx)("li",{children:Object(b.jsx)(u.b,{to:"/uranus",className:"link-page",onClick:t,children:"Uranus"})}),Object(b.jsx)("li",{children:Object(b.jsx)(u.b,{to:"/neptune",className:"link-page",onClick:t,children:"Neptune"})})]})})}function h(e){return Object(b.jsx)("svg",{onClick:function(){e.toggleMenu()},className:"burger-icon",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"17",children:Object(b.jsx)("g",{fill:"#FFF","fill-rule":"evenodd",children:Object(b.jsx)("path",{d:"M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z"})})})}var m=function(){Object(c.useEffect)((function(){}));var e=Object(c.useState)(!1),t=Object(j.a)(e,2),n=t[0],a=t[1];return Object(b.jsxs)("header",{className:"main-header",children:[Object(b.jsxs)("div",{className:"main-header__header",children:[Object(b.jsx)("h1",{children:"THE PLANETS"}),Object(b.jsx)(h,{toggleMenu:function(){var e=document.getElementById("main-nav");n?(e.classList.remove("show-menu"),a(!1)):(e.classList.add("show-menu"),a(!0))}})]}),Object(b.jsx)(O,{closeMenu:function(){document.getElementById("main-nav").classList.remove("show-menu"),a(!1)}})]})};function p(e){var t=Object(c.useState)(e.name),n=Object(j.a)(t,2),a=n[0],s=n[1],r=Object(c.useState)(e.overview.content),i=Object(j.a)(r,2),l=i[0],o=i[1],u=Object(c.useState)(e.images.planet),d=Object(j.a)(u,2),O=d[0],h=d[1],m=Object(c.useState)(e.images.geology),p=Object(j.a)(m,2),x=p[0],f=p[1],v=Object(c.useState)(e.overview.source),g=Object(j.a)(v,2),w=g[0],N=g[1],y=Object(c.useState)(!1),k=Object(j.a)(y,2),S=k[0],C=k[1],E=Object(c.useState)(e.planet.color),I=Object(j.a)(E,2),M=I[0],_=I[1],z=Object(c.useState)(e.planet.size),A=Object(j.a)(z,2),L=A[0],q=A[1],B=Object(c.useState)(!1),V=Object(j.a)(B,2),H=V[0],W=V[1],F=Object(c.useState)(!1),J=Object(j.a)(F,2),T=J[0],U=J[1],P=Object(c.useState)(!1),D=Object(j.a)(P,2),G=D[0],K=D[1],Q=Object(c.useState)({borderBottom:"3px solid ".concat(M),color:"#fff"}),R=Object(j.a)(Q,2),X=R[0],Y=R[1],Z=Object(c.useState)(window.innerWidth),$=Object(j.a)(Z,2),ee=$[0],te=$[1];function ne(){s(e.name),o(e.overview.content),h(e.images.planet),N(e.overview.source),q(e.planet.size),_(e.planet.color),ce(),W(!0),U(!1),K(!1)}function ce(){C(!1)}return Object(c.useEffect)((function(){return ne(),window.addEventListener("resize",(function(){te(window.innerWidth)})),ee<600?(function(e){Y({borderBottom:"3px solid ".concat(e),color:"#fff"})}(M),function(){var e=document.querySelector("#structureItem"),t=document.querySelector("#surfaceItem");e.childNodes[1].nodeValue="structure",t.childNodes[1].nodeValue="geology"}()):(function(e){Y({backgroundColor:"".concat(e)})}(M),function(){var e=document.querySelector("#structureItem"),t=document.querySelector("#surfaceItem");e.childNodes[1].nodeValue="iternal structure",t.childNodes[1].nodeValue="surface geology"}()),function(){window.addEventListener("resize",(function(){te(window.innerWidth)}))}}),[e.name,ee,M]),console.log(O),Object(b.jsxs)("div",{className:"planet-card__container",children:[Object(b.jsx)("nav",{className:"planet-card__nav",children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsxs)("button",{onClick:ne,id:"overviewItem",style:H?X:null,children:[Object(b.jsx)("span",{className:"hide",children:"01"}),"Overview"]})}),Object(b.jsx)("li",{children:Object(b.jsxs)("button",{onClick:function(){o(e.planet.structure.content),h(e.images.internal),N(e.planet.structure.source),ce(),U(!0),W(!1),K(!1)},id:"structureItem",style:T?X:null,children:[Object(b.jsx)("span",{className:"hide",children:"02"}),"Structure"]})}),Object(b.jsx)("li",{children:Object(b.jsxs)("button",{onClick:function(){o(e.planet.geology.content),N(e.planet.geology.source),h(e.images.planet),f(e.images.geology),C(!0),K(!0),U(!1),W(!1)},id:"surfaceItem",style:G?X:null,children:[Object(b.jsx)("span",{className:"hide",children:"03"}),"Surface"]})})]})}),Object(b.jsx)("div",{className:"planet-image-container",style:{backgroundImage:"url(".concat("/planet-fact-site").concat(O.substring(1),")"),width:"".concat(L,"%")},children:S?Object(b.jsx)("img",{className:"surface-image",src:"".concat("/planet-fact-site").concat(x.substring(1)),alt:"surface planet"}):null}),Object(b.jsxs)("main",{className:"planet-card__main",children:[Object(b.jsx)("h2",{children:a}),Object(b.jsx)("p",{children:l}),Object(b.jsxs)("span",{children:["Source: ",Object(b.jsx)("a",{href:w,children:"Wikipedia"})]})]})]})}function x(e){return Object(b.jsxs)("ul",{className:"planet-card__info",children:[Object(b.jsx)(f,{name:"rotation time",value:e.planet.rotation}),Object(b.jsx)(f,{name:"revolution time",value:e.planet.revolution}),Object(b.jsx)(f,{name:"radius",value:e.planet.radius}),Object(b.jsx)(f,{name:"average temp.",value:e.planet.temperature})]})}function f(e){return Object(b.jsxs)("li",{children:[Object(b.jsx)("span",{children:e.name}),Object(b.jsx)("span",{className:"info-value",children:e.value})]})}var v=function(e){return Object(b.jsxs)("div",{className:"planet-card",children:[Object(b.jsx)(p,{planet:e.planetObj,name:e.planetObj.name,overview:e.planetObj.overview,structure:e.planetObj.structure,geology:e.planetObj.geology,images:e.planetObj.images}),Object(b.jsx)(x,{planet:e.planetObj})]})};function g(){var e=Object(d.g)().planetName,t=Object(c.useState)(null),n=Object(j.a)(t,2),a=n[0],s=n[1];function r(e){return e.charAt(0).toUpperCase()+e.slice(1)}return Object(c.useEffect)((function(){function t(){return(t=Object(o.a)(l.a.mark((function e(){var t,n,c=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:"Mercury",e.next=3,fetch("data.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return n=e.sent,e.next=6,n.json();case 6:e.sent.find((function(e){e.name===r(t)&&s(e)}));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}(e)}),[e]),null===a?Object(b.jsx)("p",{children:"Loading profile..."}):Object(b.jsx)(v,{planetName:e,planetObj:a})}var w=function(){return Object(b.jsx)(u.a,{children:Object(b.jsxs)("div",{children:[Object(b.jsx)(m,{}),Object(b.jsxs)(d.d,{children:[Object(b.jsx)(d.b,{exact:!0,path:"/",children:Object(b.jsx)(d.a,{to:"/mercury"})}),Object(b.jsx)(d.b,{path:"/:planetName",children:Object(b.jsx)(g,{})})]})]})})};n(31);r.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(w,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.5f1634cf.chunk.js.map