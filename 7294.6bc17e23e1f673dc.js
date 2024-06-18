"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[7294],{7294:(h,g,n)=>{n.r(g),n.d(g,{MessagesDemoModule:()=>k});var s=n(6814),u=n(5628),d=n(5219),e=n(5678),l=n(9502),f=n(2591),r=n(2736),o=n(3823),i=n(8468);function I(t,m){1&t&&e._UZ(0,"CheckIcon",4),2&t&&e.Q6J("styleClass","p-inline-message-icon")}function M(t,m){1&t&&e._UZ(0,"InfoCircleIcon",4),2&t&&e.Q6J("styleClass","p-inline-message-icon")}function T(t,m){1&t&&e._UZ(0,"TimesCircleIcon",4),2&t&&e.Q6J("styleClass","p-inline-message-icon")}function Z(t,m){1&t&&e._UZ(0,"ExclamationTriangleIcon",4),2&t&&e.Q6J("styleClass","p-inline-message-icon")}function w(t,m){if(1&t&&e._UZ(0,"span",6),2&t){const c=e.oxw(2);e.Q6J("innerHTML",c.text,e.oJD)}}function D(t,m){if(1&t&&(e.TgZ(0,"div"),e.YNc(1,w,1,1,"span",5),e.qZA()),2&t){const c=e.oxw();e.xp6(1),e.Q6J("ngIf",!c.escape)}}function E(t,m){if(1&t&&(e.TgZ(0,"span",8),e._uU(1),e.qZA()),2&t){const c=e.oxw(2);e.xp6(1),e.Oqu(c.text)}}function U(t,m){if(1&t&&e.YNc(0,E,2,1,"span",7),2&t){const c=e.oxw();e.Q6J("ngIf",c.escape)}}const A=(t,m,c,p,a)=>({"p-inline-message-info":t,"p-inline-message-warn":m,"p-inline-message-error":c,"p-inline-message-success":p,"p-inline-message-icon-only":a});let x=(()=>{class t{severity;text;escape=!0;style;styleClass;get icon(){return this.severity&&this.severity.trim()?this.severity:"info"}static \u0275fac=function(p){return new(p||t)};static \u0275cmp=e.Xpm({type:t,selectors:[["p-message"]],hostAttrs:[1,"p-element"],inputs:{severity:"severity",text:"text",escape:"escape",style:"style",styleClass:"styleClass"},decls:8,vars:16,consts:[["aria-live","polite",1,"p-inline-message","p-component","p-inline-message",3,"ngStyle","ngClass"],[3,"styleClass",4,"ngIf"],[4,"ngIf","ngIfElse"],["escapeOut",""],[3,"styleClass"],["class","p-inline-message-text",3,"innerHTML",4,"ngIf"],[1,"p-inline-message-text",3,"innerHTML"],["class","p-inline-message-text",4,"ngIf"],[1,"p-inline-message-text"]],template:function(p,a){if(1&p&&(e.TgZ(0,"div",0),e.YNc(1,I,1,1,"CheckIcon",1)(2,M,1,1,"InfoCircleIcon",1)(3,T,1,1,"TimesCircleIcon",1)(4,Z,1,1,"ExclamationTriangleIcon",1)(5,D,2,1,"div",2)(6,U,1,1,"ng-template",null,3,e.W1O),e.qZA()),2&p){const C=e.MAs(7);e.Tol(a.styleClass),e.Q6J("ngStyle",a.style)("ngClass",e.qbA(10,A,"info"===a.severity,"warn"===a.severity,"error"===a.severity,"success"===a.severity,null==a.text)),e.xp6(1),e.Q6J("ngIf","success"===a.icon),e.xp6(1),e.Q6J("ngIf","info"===a.icon),e.xp6(1),e.Q6J("ngIf","error"===a.icon),e.xp6(1),e.Q6J("ngIf","warn"===a.icon),e.xp6(1),e.Q6J("ngIf",!a.escape)("ngIfElse",C)}},dependencies:()=>[s.mk,s.O5,s.PC,f.n,o.u,i.x,r.L],styles:["@layer primeng{.p-inline-message{display:inline-flex;align-items:center;justify-content:center;vertical-align:top}.p-inline-message-icon-only .p-inline-message-text{visibility:hidden;width:0}.p-fluid .p-inline-message{display:flex}}\n"],encapsulation:2,changeDetection:0})}return t})(),L=(()=>{class t{static \u0275fac=function(p){return new(p||t)};static \u0275mod=e.oAB({type:t});static \u0275inj=e.cJS({imports:[s.ez,f.n,o.u,i.x,r.L]})}return t})();var _=n(707),v=n(4104),y=n(3714);let O=(()=>{class t{constructor(c){this.service=c,this.msgs=[]}showInfoViaToast(){this.service.add({key:"tst",severity:"info",summary:"Info Message",detail:"PrimeNG rocks"})}showWarnViaToast(){this.service.add({key:"tst",severity:"warn",summary:"Warn Message",detail:"There are unsaved changes"})}showErrorViaToast(){this.service.add({key:"tst",severity:"error",summary:"Error Message",detail:"Validation failed"})}showSuccessViaToast(){this.service.add({key:"tst",severity:"success",summary:"Success Message",detail:"Message sent"})}showInfoViaMessages(){this.msgs=[],this.msgs.push({severity:"info",summary:"Info Message",detail:"PrimeNG rocks"})}showWarnViaMessages(){this.msgs=[],this.msgs.push({severity:"warn",summary:"Warn Message",detail:"There are unsaved changes"})}showErrorViaMessages(){this.msgs=[],this.msgs.push({severity:"error",summary:"Error Message",detail:"Validation failed"})}showSuccessViaMessages(){this.msgs=[],this.msgs.push({severity:"success",summary:"Success Message",detail:"Message sent"})}static#e=this.\u0275fac=function(p){return new(p||t)(e.Y36(d.ez))};static#s=this.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],features:[e._Bn([d.ez])],decls:47,vars:1,consts:[[1,"grid"],[1,"col-12","lg:col-6"],[1,"card"],["key","tst"],[1,"flex","flex-wrap","gap-2"],["type","button","pButton","","label","Success",1,"p-button-success",3,"click"],["type","button","pButton","","label","Info",1,"p-button-info",3,"click"],["type","button","pButton","","label","Warn",1,"p-button-warning",3,"click"],["type","button","pButton","","label","Error",1,"p-button-danger",3,"click"],[1,"card","z-3"],[3,"value"],[1,"col-12","lg:col-8"],[1,"flex","align-items-center","flex-wrap","gap-2","mb-3"],["for","username",1,"w-9rem"],["id","username","type","text","pInputText","","placeholder","Username",1,"ng-dirty","ng-invalid"],["username",""],["severity","error","text","Field is required"],[1,"flex","align-items-center","flex-wrap","gap-2"],["for","email",1,"w-9rem"],["type","text","pInputText","","placeholder","Email","label","email",1,"ng-dirty","ng-invalid"],["email",""],["severity","error"],[1,"col-12","lg:col-4"],[1,"field","p-fluid"],["for","username2"],["id","username2","type","username","aria-describedby","username-help","pInputText","",1,"ng-dirty","ng-invalid"],["id","username-help",1,"p-error"]],template:function(p,a){1&p&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h5"),e._uU(4,"Toast"),e.qZA(),e._UZ(5,"p-toast",3),e.TgZ(6,"div",4)(7,"button",5),e.NdJ("click",function(){return a.showSuccessViaToast()}),e.qZA(),e.TgZ(8,"button",6),e.NdJ("click",function(){return a.showInfoViaToast()}),e.qZA(),e.TgZ(9,"button",7),e.NdJ("click",function(){return a.showWarnViaToast()}),e.qZA(),e.TgZ(10,"button",8),e.NdJ("click",function(){return a.showErrorViaToast()}),e.qZA()()()(),e.TgZ(11,"div",1)(12,"div",9)(13,"h5"),e._uU(14,"Messages"),e.qZA(),e.TgZ(15,"div",4)(16,"button",5),e.NdJ("click",function(){return a.showSuccessViaMessages()}),e.qZA(),e.TgZ(17,"button",6),e.NdJ("click",function(){return a.showInfoViaMessages()}),e.qZA(),e.TgZ(18,"button",7),e.NdJ("click",function(){return a.showWarnViaMessages()}),e.qZA(),e.TgZ(19,"button",8),e.NdJ("click",function(){return a.showErrorViaMessages()}),e.qZA()(),e._UZ(20,"p-messages",10),e.qZA()(),e.TgZ(21,"div",11)(22,"div",2)(23,"h5"),e._uU(24,"Inline"),e.qZA(),e.TgZ(25,"div",12)(26,"label",13),e._uU(27,"Username"),e.qZA(),e._UZ(28,"input",14,15)(30,"p-message",16),e.qZA(),e.TgZ(31,"div",17)(32,"label",18),e._uU(33,"Email"),e.qZA(),e._UZ(34,"input",19,20)(36,"p-message",21),e.qZA()()(),e.TgZ(37,"div",22)(38,"div",2)(39,"h5"),e._uU(40,"Help Text"),e.qZA(),e.TgZ(41,"div",23)(42,"label",24),e._uU(43,"Username"),e.qZA(),e._UZ(44,"input",25),e.TgZ(45,"small",26),e._uU(46,"Enter your username to reset your password."),e.qZA()()()()()),2&p&&(e.xp6(20),e.Q6J("value",a.msgs))},dependencies:[l.V,x,_.Hq,v.FN,y.o],encapsulation:2})}return t})(),b=(()=>{class t{static#e=this.\u0275fac=function(p){return new(p||t)};static#s=this.\u0275mod=e.oAB({type:t});static#t=this.\u0275inj=e.cJS({imports:[u.Bz.forChild([{path:"",component:O}]),u.Bz]})}return t})(),k=(()=>{class t{static#e=this.\u0275fac=function(p){return new(p||t)};static#s=this.\u0275mod=e.oAB({type:t});static#t=this.\u0275inj=e.cJS({imports:[s.ez,b,l.$,L,_.hJ,v.EV,y.j]})}return t})()},2591:(h,g,n)=>{n.d(g,{n:()=>d});var s=n(5678),u=n(4713);let d=(()=>{class e extends u.s{static \u0275fac=(()=>{let f;return function(o){return(f||(f=s.n5z(e)))(o||e)}})();static \u0275cmp=s.Xpm({type:e,selectors:[["CheckIcon"]],standalone:!0,features:[s.qOj,s.jDz],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z","fill","currentColor"]],template:function(r,o){1&r&&(s.O4$(),s.TgZ(0,"svg",0),s._UZ(1,"path",1),s.qZA()),2&r&&(s.Tol(o.getClassNames()),s.uIk("aria-label",o.ariaLabel)("aria-hidden",o.ariaHidden)("role",o.role))},encapsulation:2})}return e})()},2736:(h,g,n)=>{n.d(g,{L:()=>e});var s=n(5678),u=n(4713),d=n(2332);let e=(()=>{class l extends u.s{pathId;ngOnInit(){this.pathId="url(#"+(0,d.Th)()+")"}static \u0275fac=(()=>{let r;return function(i){return(r||(r=s.n5z(l)))(i||l)}})();static \u0275cmp=s.Xpm({type:l,selectors:[["ExclamationTriangleIcon"]],standalone:!0,features:[s.qOj,s.jDz],decls:8,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M13.4018 13.1893H0.598161C0.49329 13.189 0.390283 13.1615 0.299143 13.1097C0.208003 13.0578 0.131826 12.9832 0.0780112 12.8932C0.0268539 12.8015 0 12.6982 0 12.5931C0 12.4881 0.0268539 12.3848 0.0780112 12.293L6.47985 1.08982C6.53679 1.00399 6.61408 0.933574 6.70484 0.884867C6.7956 0.836159 6.897 0.810669 7 0.810669C7.103 0.810669 7.2044 0.836159 7.29516 0.884867C7.38592 0.933574 7.46321 1.00399 7.52015 1.08982L13.922 12.293C13.9731 12.3848 14 12.4881 14 12.5931C14 12.6982 13.9731 12.8015 13.922 12.8932C13.8682 12.9832 13.792 13.0578 13.7009 13.1097C13.6097 13.1615 13.5067 13.189 13.4018 13.1893ZM1.63046 11.989H12.3695L7 2.59425L1.63046 11.989Z","fill","currentColor"],["d","M6.99996 8.78801C6.84143 8.78594 6.68997 8.72204 6.57787 8.60993C6.46576 8.49782 6.40186 8.34637 6.39979 8.18784V5.38703C6.39979 5.22786 6.46302 5.0752 6.57557 4.96265C6.68813 4.85009 6.84078 4.78686 6.99996 4.78686C7.15914 4.78686 7.31179 4.85009 7.42435 4.96265C7.5369 5.0752 7.60013 5.22786 7.60013 5.38703V8.18784C7.59806 8.34637 7.53416 8.49782 7.42205 8.60993C7.30995 8.72204 7.15849 8.78594 6.99996 8.78801Z","fill","currentColor"],["d","M6.99996 11.1887C6.84143 11.1866 6.68997 11.1227 6.57787 11.0106C6.46576 10.8985 6.40186 10.7471 6.39979 10.5885V10.1884C6.39979 10.0292 6.46302 9.87658 6.57557 9.76403C6.68813 9.65147 6.84078 9.58824 6.99996 9.58824C7.15914 9.58824 7.31179 9.65147 7.42435 9.76403C7.5369 9.87658 7.60013 10.0292 7.60013 10.1884V10.5885C7.59806 10.7471 7.53416 10.8985 7.42205 11.0106C7.30995 11.1227 7.15849 11.1866 6.99996 11.1887Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(o,i){1&o&&(s.O4$(),s.TgZ(0,"svg",0)(1,"g"),s._UZ(2,"path",1)(3,"path",2)(4,"path",3),s.qZA(),s.TgZ(5,"defs")(6,"clipPath",4),s._UZ(7,"rect",5),s.qZA()()()),2&o&&(s.Tol(i.getClassNames()),s.uIk("aria-label",i.ariaLabel)("aria-hidden",i.ariaHidden)("role",i.role),s.xp6(1),s.uIk("clip-path",i.pathId),s.xp6(5),s.Q6J("id",i.pathId))},encapsulation:2})}return l})()},3823:(h,g,n)=>{n.d(g,{u:()=>e});var s=n(5678),u=n(4713),d=n(2332);let e=(()=>{class l extends u.s{pathId;ngOnInit(){this.pathId="url(#"+(0,d.Th)()+")"}static \u0275fac=(()=>{let r;return function(i){return(r||(r=s.n5z(l)))(i||l)}})();static \u0275cmp=s.Xpm({type:l,selectors:[["InfoCircleIcon"]],standalone:!0,features:[s.qOj,s.jDz],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M3.11101 12.8203C4.26215 13.5895 5.61553 14 7 14C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.61553 13.5895 4.26215 12.8203 3.11101C12.0511 1.95987 10.9579 1.06266 9.67879 0.532846C8.3997 0.00303296 6.99224 -0.13559 5.63437 0.134506C4.2765 0.404603 3.02922 1.07129 2.05026 2.05026C1.07129 3.02922 0.404603 4.2765 0.134506 5.63437C-0.13559 6.99224 0.00303296 8.3997 0.532846 9.67879C1.06266 10.9579 1.95987 12.0511 3.11101 12.8203ZM3.75918 2.14976C4.71846 1.50879 5.84628 1.16667 7 1.16667C8.5471 1.16667 10.0308 1.78125 11.1248 2.87521C12.2188 3.96918 12.8333 5.45291 12.8333 7C12.8333 8.15373 12.4912 9.28154 11.8502 10.2408C11.2093 11.2001 10.2982 11.9478 9.23232 12.3893C8.16642 12.8308 6.99353 12.9463 5.86198 12.7212C4.73042 12.4962 3.69102 11.9406 2.87521 11.1248C2.05941 10.309 1.50384 9.26958 1.27876 8.13803C1.05367 7.00647 1.16919 5.83358 1.61071 4.76768C2.05222 3.70178 2.79989 2.79074 3.75918 2.14976ZM7.00002 4.8611C6.84594 4.85908 6.69873 4.79698 6.58977 4.68801C6.48081 4.57905 6.4187 4.43185 6.41669 4.27776V3.88888C6.41669 3.73417 6.47815 3.58579 6.58754 3.4764C6.69694 3.367 6.84531 3.30554 7.00002 3.30554C7.15473 3.30554 7.3031 3.367 7.4125 3.4764C7.52189 3.58579 7.58335 3.73417 7.58335 3.88888V4.27776C7.58134 4.43185 7.51923 4.57905 7.41027 4.68801C7.30131 4.79698 7.1541 4.85908 7.00002 4.8611ZM7.00002 10.6945C6.84594 10.6925 6.69873 10.6304 6.58977 10.5214C6.48081 10.4124 6.4187 10.2652 6.41669 10.1111V6.22225C6.41669 6.06754 6.47815 5.91917 6.58754 5.80977C6.69694 5.70037 6.84531 5.63892 7.00002 5.63892C7.15473 5.63892 7.3031 5.70037 7.4125 5.80977C7.52189 5.91917 7.58335 6.06754 7.58335 6.22225V10.1111C7.58134 10.2652 7.51923 10.4124 7.41027 10.5214C7.30131 10.6304 7.1541 10.6925 7.00002 10.6945Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(o,i){1&o&&(s.O4$(),s.TgZ(0,"svg",0)(1,"g"),s._UZ(2,"path",1),s.qZA(),s.TgZ(3,"defs")(4,"clipPath",2),s._UZ(5,"rect",3),s.qZA()()()),2&o&&(s.Tol(i.getClassNames()),s.uIk("aria-label",i.ariaLabel)("aria-hidden",i.ariaHidden)("role",i.role),s.xp6(1),s.uIk("clip-path",i.pathId),s.xp6(3),s.Q6J("id",i.pathId))},encapsulation:2})}return l})()},8468:(h,g,n)=>{n.d(g,{x:()=>e});var s=n(5678),u=n(4713),d=n(2332);let e=(()=>{class l extends u.s{pathId;ngOnInit(){this.pathId="url(#"+(0,d.Th)()+")"}static \u0275fac=(()=>{let r;return function(i){return(r||(r=s.n5z(l)))(i||l)}})();static \u0275cmp=s.Xpm({type:l,selectors:[["TimesCircleIcon"]],standalone:!0,features:[s.qOj,s.jDz],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(o,i){1&o&&(s.O4$(),s.TgZ(0,"svg",0)(1,"g"),s._UZ(2,"path",1),s.qZA(),s.TgZ(3,"defs")(4,"clipPath",2),s._UZ(5,"rect",3),s.qZA()()()),2&o&&(s.Tol(i.getClassNames()),s.uIk("aria-label",i.ariaLabel)("aria-hidden",i.ariaHidden)("role",i.role),s.xp6(1),s.uIk("clip-path",i.pathId),s.xp6(3),s.Q6J("id",i.pathId))},encapsulation:2})}return l})()}}]);