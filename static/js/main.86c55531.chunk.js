(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(4),s=a.n(r),l=(a(9),a(2)),o=(a(10),a(0));function i(e){return Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})})}),Object(o.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(o.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),Object(o.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"light"===e.mode?"Enable dark mode":"Enable light mode"})]})]})]})})}function d(e){var t=Object(c.useState)("Enter text here"),a=Object(l.a)(t,2),n=a[0],r=a[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"},children:[Object(o.jsxs)("div",{className:"mb-3 my-4",children:[Object(o.jsx)("h1",{children:e.heading}),Object(o.jsx)("textarea",{className:"form-control my-2",value:n,onChange:function(e){console.log("On Change"),r(e.target.value)},style:{backgroundColor:"dark"===e.mode?"#dee2e6":"white",color:(e.mode,"dark")},id:"mybox",rows:"8"})]}),Object(o.jsx)("button",{className:"btn btn-dark",onClick:function(){var t=n.toUpperCase();r(t),e.showAlert("Converted to Uppercase","Success")},children:"Convert to upper-case"}),Object(o.jsx)("button",{className:"btn btn-dark mx-3",onClick:function(){var t=n.toLowerCase();r(t),e.showAlert("Converted to Lowercase","Success")},children:"Convert to lower-case"}),Object(o.jsx)("button",{className:"btn btn-dark",onClick:function(){r(" "),e.showAlert("Text Cleared","Success")},children:"Clear Text"})]}),Object(o.jsxs)("div",{className:"container my-4",children:[Object(o.jsx)("h2",{style:{color:"dark"===e.mode?"white":"black"},children:"Your text summary"}),Object(o.jsxs)("p",{children:[n.split(" ").length," words, ",n.length," characters"]}),Object(o.jsxs)("p",{children:["Time required to read: ",.008*n.split(" ").length," minutes"]}),Object(o.jsx)("h3",{style:{color:"dark"===e.mode?"white":"black"},children:"Preview"}),Object(o.jsx)("p",{children:n.length>0?n:"Enter Something to preview it here"})]})]})}i.defaultProps={title:"TextUtils",about:"About"};var b=function(e){return e.alert&&Object(o.jsxs)("div",{className:"alert alert-".concat(e.alert.msg," alert-dismissible fade show"),role:"alert",children:[Object(o.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)}),": ",e.alert.msg]})};var h=function(){var e=Object(c.useState)("dark"),t=Object(l.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(null),s=Object(l.a)(r,2),h=s[0],j=s[1],m=function(e,t){j({msg:e,type:t}),setTimeout((function(){j(null)}),1500)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(i,{tittle:"TextUtils",mode:a,toggleMode:function(){"light"===a?(n("dark"),document.body.style.background="#6c757d",m("Dark mode has been enabled","success")):(n("light"),document.body.style.background="white",m("Light mode has been enabled","success"))}}),Object(o.jsx)(b,{alert:h}),Object(o.jsx)("div",{className:"container",children:Object(o.jsx)(d,{showAlert:m,heading:"Enter the text to analyze below"})})]})},j=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,13)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))};s.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root")),j()},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.86c55531.chunk.js.map