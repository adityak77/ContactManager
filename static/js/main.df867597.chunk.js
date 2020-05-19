(this.webpackJsonpcontactmanager=this.webpackJsonpcontactmanager||[]).push([[0],{24:function(e,a,t){e.exports=t(36)},35:function(e,a,t){},36:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(20),l=t.n(c),o=t(12),m=t(1),s=t(6),i=t(7),u=t(9),d=t(8),p=t(23),h=t(14),E=r.a.createContext(),v=function(e,a){switch(a.type){case"DELETE_CONTACT":return Object(h.a)(Object(h.a)({},e),{},{contacts:e.contacts.filter((function(e){return e.id!==a.payload}))});case"ADD_CONTACT":return Object(h.a)(Object(h.a)({},e),{},{contacts:[].concat(Object(p.a)(e.contacts),[a.payload])});default:return e}},b=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={contacts:[{id:1,name:"Aditya Kannan",email:"ak@andrew.cmu.edu",phone:"111-111-1111"},{id:2,name:"Nithya Kannan",email:"nk@yahoo.com",phone:"222-222-2222"},{id:3,name:"Kannan Sundararajan",email:"ks@yahoo.com",phone:"333-333-3333"}],dispatch:function(a){return e.setState((function(e){return v(e,a)}))}},e}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(E.Provider,{value:this.state},this.props.children)}}]),t}(n.Component),f=E.Consumer,N=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={showContactInfo:!1},e.onShowClick=function(){e.setState({showContactInfo:!e.state.showContactInfo})},e.onDeleteClick=function(e,a){a({type:"DELETE_CONTACT",payload:e})},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this,a=this.props.contact,t=this.state.showContactInfo;return r.a.createElement(f,null,(function(n){var c=n.dispatch;return r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("h4",null,a.name," ",r.a.createElement("i",{onClick:e.onShowClick,className:"fas fa-sort-down",style:{cursor:"pointer"}}),r.a.createElement("i",{className:"fas fa-times",style:{cursor:"pointer",float:"right",color:"red"},onClick:e.onDeleteClick.bind(e,a.id,c)})),t?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"Email: ",a.email),r.a.createElement("li",{className:"list-group-item"},"Phone: ",a.phone)):null)}))}}]),t}(n.Component),y=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(f,null,(function(e){var a=e.contacts;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"display-4 mb-2"},r.a.createElement("span",{className:"text-danger"},"Contact")," List"),a.map((function(e){return r.a.createElement(N,{key:e.id,contact:e})})))}))}}]),t}(n.Component),g=t(11),C=t(38),O=t(21),j=t.n(O),k=function(e){var a=e.label,t=e.name,n=e.value,c=e.placeholder,l=e.type,o=e.onChange,m=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:t},a),r.a.createElement("input",{type:l,name:t,className:j()("form-control form-control-lg",{"is-invalid":m}),placeholder:c,value:n,onChange:o}),m&&r.a.createElement("div",{className:"invalid-feedback"},m))};k.defaultProps={type:"text"};var w=k,A=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={name:"",email:"",phone:"",errors:{}},e.onSubmit=function(a,t){t.preventDefault();var n=e.state,r=n.name,c=n.email,l=n.phone;""!==r?""!==c?""!==l?(a({type:"ADD_CONTACT",payload:{id:Object(C.a)(),name:r,email:c,phone:l}}),e.setState({name:"",email:"",phone:"",errors:{}}),e.props.history.push("/")):e.setState({errors:{phone:"Phone is required"}}):e.setState({errors:{email:"Email is required"}}):e.setState({errors:{name:"Name is required"}})},e.onChange=function(a){return e.setState(Object(g.a)({},a.target.name,a.target.value))},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this,a=this.state,t=a.name,n=a.email,c=a.phone,l=a.errors;return r.a.createElement(f,null,(function(a){var o=a.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Add Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,o)},r.a.createElement(w,{label:"Name",name:"name",placeholder:"Enter Name",value:t,onChange:e.onChange,error:l.name}),r.a.createElement(w,{label:"Email",name:"email",placeholder:"Enter Email",value:n,onChange:e.onChange,error:l.email}),r.a.createElement(w,{label:"Phone",name:"phone",placeholder:"Enter Phone",value:c,onChange:e.onChange,error:l.phone}),r.a.createElement("input",{type:"submit",value:"Add Contact",className:"btn btn-light btn-block"}))))}))}}]),t}(n.Component),S=(n.Component,function(e){return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"/",className:"navbar-brand"},e.branding),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{to:"/",className:"nav-link"},r.a.createElement("i",{className:"fas fa-home"})," Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{to:"/contact/add",className:"nav-link"},r.a.createElement("i",{className:"fas fa-plus"})," Add")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{to:"/about",className:"nav-link"},r.a.createElement("i",{className:"fas fa-question"})," About"))))))});S.defaultProps={branding:"My App"};var x=S,T=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"About Contact Manager"),r.a.createElement("p",{className:"lead"},"Simple app to manage contacts"),r.a.createElement("p",{className:"text-secondary"},"Version 1.0.0"))},D=(t(34),t(35),function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"404 Page Not Found"),r.a.createElement("p",{className:"lead"},"Sorry, that page does not exist."))});var P=function(){return r.a.createElement(b,null,r.a.createElement(o.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(x,{branding:"Contact Manager"}),r.a.createElement("div",{className:"container"},r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/",component:y}),r.a.createElement(m.a,{exact:!0,path:"/contact/add",component:A}),r.a.createElement(m.a,{exact:!0,path:"/about",component:T}),r.a.createElement(m.a,{component:D}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.df867597.chunk.js.map