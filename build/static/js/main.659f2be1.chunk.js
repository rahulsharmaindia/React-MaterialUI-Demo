(this.webpackJsonpfixura=this.webpackJsonpfixura||[]).push([[0],{69:function(e,t,a){e.exports=a(82)},75:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),l=a.n(c),u=a(43),o=a(28),i=a(19),s=a.n(i),m=a(30),d=a(24),f=a(116),b=a(120),p=a(136),v=a(123),h="https://qmkjbvj35b.execute-api.eu-north-1.amazonaws.com/",E={"x-api-key":"ifGIBNTP5b4TVSbDylpST5vhabFJCSBJ7fqmMSKB"},g=function(){var e=Object(m.a)(s.a.mark((function e(t){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(h).concat("get/").concat("user/").concat(t),{method:"GET",headers:E}).then((function(e){return e.json()})).catch((function(e){return console.log(e),null}));case 2:if(null===(a=e.sent)){e.next=10;break}return e.next=6,a;case 6:return n=e.sent,e.abrupt("return",n);case 10:return e.abrupt("return",null);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(m.a)(s.a.mark((function e(t){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(h).concat("get/").concat("user/").concat(t,"/").concat("investments/"),{method:"GET",headers:E}).then((function(e){return e.json()})).catch((function(e){return console.log(e),null}));case 2:if(null===(a=e.sent)){e.next=10;break}return e.next=6,a;case 6:return n=e.sent,e.abrupt("return",n);case 10:return e.abrupt("return",null);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=(a(75),Object(o.f)((function(e){var t=Object(n.useState)(145127236),a=Object(d.a)(t,2),c=a[0],l=a[1],u=function(){var t=Object(m.a)(s.a.mark((function t(){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g(c);case 2:a=t.sent,console.log("response",a),null!=a&&e.history.push("/user/".concat(c,"/"),{userId:c,userDetails:a});case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return r.a.createElement(f.a,{maxWidth:"sm",className:"app-container"},r.a.createElement("div",{className:"app"},r.a.createElement(b.a,null,"Enter UserId"),r.a.createElement(p.a,{id:"outlined-helperText",label:"User ID",defaultValue:c,helperText:"Enter User ID",variant:"outlined",onChange:function(e){return function(e){l(e.target.value)}(e)}}),r.a.createElement(v.a,{variant:"contained",color:"primary",type:"submit",onClick:u},"Submit")))}))),D=a(124),j=a(125),I=a(83),k=a(126),w=a(127),A=a(128),S=a(129),x=a(130),B=a(131),T=a(133),C=a(135),N=a(132),L=a(16),P=function(e){var t=JSON.stringify(new Date(e)).slice(1,11);return new Date(t).toDateString()},W=function(e,t){return"BEFORE_NUMBER"==t.currency.currencySymbolPosition?t.currency.symbol+" "+t.availableBalance:t.availableBalance+" "+t.currency.symbol},H=(a(81),Object(N.a)({root:{width:"100%",marginTop:50},container:{maxHeight:600}})),J=Object(o.f)((function(e){var t=e.history.location.state.userId,a=e.history.location.state.userDetails,c=Object(n.useState)([]),l=Object(d.a)(c,2),u=l[0],o=l[1],i=Object(n.useState)([]),f=Object(d.a)(i,2),h=f[0],E=f[1],g=H(),y=r.a.useState(0),N=Object(d.a)(y,2),J=N[0],U=N[1],V=r.a.useState(10),M=Object(d.a)(V,2),F=M[0],G=M[1],R=r.a.useState(null),q=Object(d.a)(R,2),z=q[0],K=q[1],_=r.a.useState({}),Q=Object(d.a)(_,2),X=Q[0],Y=Q[1],Z=function(){K(null)},$=Boolean(z),ee=$?"simple-popover":void 0;Object(n.useEffect)((function(){function e(){return(e=Object(m.a)(s.a.mark((function e(){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(t);case 2:a=e.sent,o(a),E(a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]);var te,ae={columns:[{id:"id",label:"ID",minWidth:100},{id:"accountHolderType",label:"Account Holder Type",minWidth:120},{id:"name",label:"Name",minWidth:150},{id:"accountType",label:"Account Type",minWidth:150},{id:"availableBalance",label:"Available Balance",minWidth:180},{id:"accountState",label:"Account State",minWidth:120},{id:"ViewDetails"}],rows:(te=u).map((function(e){return{id:e.id,accountHolderType:e.accountHolderType,name:e.name,accountType:e.accountType,availableBalance:W(e.availableBalance,e),accountState:e.accountState}})),allData:te.map((function(e){var t;return t={id:e.id,accruedInterest:W(e.accruedInterest,e),activationDate:P(e.activationDate),balance:W(e.balance,e),currencyCode:e.currencyCode},Object(L.a)(t,"accruedInterest",W(e.accruedInterest,e)),Object(L.a)(t,"overdraftInterestAccrued",W(e.overdraftInterestAccrued,e)),Object(L.a)(t,"technicalOverdraftInterestAccrued",W(e.technicalOverdraftInterestAccrued,e)),Object(L.a)(t,"overdraftAmount",W(e.overdraftAmount,e)),Object(L.a)(t,"technicalOverdraftAmount",W(e.technicalOverdraftAmount,e)),Object(L.a)(t,"interestDue",W(e.interestDue,e)),Object(L.a)(t,"technicalInterestDue",W(e.technicalInterestDue,e)),Object(L.a)(t,"feesDue",W(e.feesDue,e)),Object(L.a)(t,"overdraftLimit",W(e.overdraftLimit,e)),Object(L.a)(t,"lockedBalance",W(e.lockedBalance,e)),Object(L.a)(t,"holdBalance",W(e.holdBalance,e)),Object(L.a)(t,"allowOverdraft",e.allowOverdraft),t}))};return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(D.a,{position:"static"},r.a.createElement(j.a,{className:"toolbar"},r.a.createElement(b.a,{variant:"h6"},"UserId: ",a.id),r.a.createElement(b.a,{variant:"h6"},"Hello ",a.firstName," ",a.lastName,"!"),r.a.createElement(b.a,{variant:"h6"},"Email: ",a.emailAddress),r.a.createElement(b.a,{variant:"h6"},"Preferred Language: ",a.preferredLanguage),r.a.createElement(b.a,{variant:"h6",style:"ACTIVE"===a.state?{backgroundColor:"darkgreen",padding:10}:null},a.state),r.a.createElement(b.a,{variant:"h6",onClick:e.history.goBack},"Logout")))),r.a.createElement("div",{className:"user-details"},r.a.createElement("span",null,"Creation Date: ",P(a.creationDate)),r.a.createElement("span",null,"Last Modified Date: ",P(a.lastModifiedDate)),r.a.createElement("span",null,"Approved Date: ",P(a.approvedDate)),r.a.createElement("span",null,"Activation Date: ",P(a.activationDate)),r.a.createElement("span",null,"Birth Date: ",P(a.birthDate))),r.a.createElement(I.a,{className:g.root},r.a.createElement("div",{align:"left"},r.a.createElement(p.a,{id:"outlined-search",label:"Search Account",type:"search",variant:"outlined",onChange:function(e){return function(e){var t=e.target.value.toLowerCase();if(0!==t.length){var a=u.filter((function(e){var a=e.accountHolderType.toString(),n=e.name.toString(),r=e.accountType.toString(),c=e.balance.toString(),l=e.accountState.toString();return e.id.concat(" ",a," ",n," ",r," ",c," ",l).toLowerCase().includes(t)}));o(a)}else o(h)}(e)}})),r.a.createElement(k.a,{className:g.container},r.a.createElement(w.a,{stickyHeader:!0,"aria-label":"sticky table"},r.a.createElement(A.a,null,r.a.createElement(S.a,null,ae.columns.map((function(e){return r.a.createElement(x.a,{key:e.id,align:e.align,style:{minWidth:e.minWidth,fontWeight:800}},e.label)})))),r.a.createElement(B.a,null,ae.rows.slice(J*F,J*F+F).map((function(e,t){return r.a.createElement(S.a,{hover:!0,role:"checkbox",tabIndex:-1,key:t},ae.columns.map((function(t){var a=e[t.id];t.id;return r.a.createElement(x.a,{key:t.id,align:t.align},void 0!==a?a:r.a.createElement(v.a,{variant:"contained",color:"primary",onClick:function(t){return function(e,t){var a=ae.allData.find((function(e){return e.id===t}));console.log(a),Y(a),K(e.currentTarget)}(t,e.id)}},"View Details"))})),r.a.createElement(T.a,{id:ee,open:$,anchorEl:z,onClose:Z,anchorOrigin:{vertical:"bottom",horizontal:"left"}},r.a.createElement("div",{style:{margin:10}},r.a.createElement(b.a,null,r.a.createElement("b",null,"ID:")," ",X.id),r.a.createElement(b.a,null,r.a.createElement("b",null,"Balance:")," ",X.balance),r.a.createElement(b.a,null,r.a.createElement("b",null,"Locked Balance:")," ",X.lockedBalance),r.a.createElement(b.a,null,r.a.createElement("b",null,"Hold Balance:")," ",X.holdBalance),r.a.createElement(b.a,null,r.a.createElement("b",null,"Activation Date:")," ",X.activationDate),r.a.createElement(b.a,null,r.a.createElement("b",null,"Currency Code:")," ",X.currencyCode),r.a.createElement(b.a,null,r.a.createElement("b",null,"Accrued Interest:")," ",X.accruedInterest),r.a.createElement(b.a,null,r.a.createElement("b",null,"Interest Due:")," ",X.interestDue),r.a.createElement(b.a,null,r.a.createElement("b",null,"Technical Interest Due:")," ",X.technicalInterestDue),r.a.createElement(b.a,null,r.a.createElement("b",null,"Fees Due:")," ",X.feesDue),r.a.createElement(b.a,null,r.a.createElement("b",null,"Overdraft Limit:")," ",X.overdraftLimit),r.a.createElement(b.a,null,r.a.createElement("b",null,"Overdraft amount:")," ",X.overdraftAmount),r.a.createElement(b.a,null,r.a.createElement("b",null,"Overdraft Interest Accrued:")," ",X.overdraftInterestAccrued),r.a.createElement(b.a,null,r.a.createElement("b",null,"Technical Overdraft Amount:")," ",X.technicalOverdraftAmount),r.a.createElement(b.a,null,r.a.createElement("b",null,"Technical Overdraft Interest Accrued:")," ",X.technicalOverdraftInterestAccrued))))}))))),r.a.createElement(C.a,{rowsPerPageOptions:[10,25,100],component:"div",count:ae.rows.length,rowsPerPage:F,page:J,onChangePage:function(e,t){U(t)},onChangeRowsPerPage:function(e){G(+e.target.value),U(0)}})))})),U=r.a.createElement(u.a,null,r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",component:y}),r.a.createElement(o.a,{path:"/user/:userId/",component:J})));l.a.render(U,document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.659f2be1.chunk.js.map