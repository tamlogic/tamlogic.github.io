"use strict";(self.webpackChunksakai=self.webpackChunksakai||[]).push([[225],{84225:(I,f,n)=>{n.r(f),n.d(f,{LandingModule:()=>S});var s=n(69808),m=n(51122),e=n(5e3),x=n(8568),c=n(93075),a=n(78092),p=n(31424),o=n(73407);function l(t,r){if(1&t){const i=e.EpF();e.TgZ(0,"div",7)(1,"div"),e._UZ(2,"img",8),e.qZA(),e.TgZ(3,"span",9),e._UZ(4,"i",10),e.TgZ(5,"input",11),e.NdJ("ngModelChange",function(h){e.CHM(i);const v=e.oxw();return e.KtG(v.value3=h)})("keypress",function(h){e.CHM(i);const v=e.oxw();return e.KtG(v.onchange(h))}),e.qZA()()()}if(2&t){const i=e.oxw();e.xp6(5),e.Q6J("ngModel",i.value3)}}function g(t,r){1&t&&(e.TgZ(0,"div",1),e._UZ(1,"textarea",12),e.qZA())}let u=(()=>{class t{constructor(i,d,h){this.layoutService=i,this.router=d,this.elementRef=h,this.items=[],this.value3="",this.activeIndex=0,this.elementRef.nativeElement.ownerDocument.body.style.overflowX="hidden"}ngOnInit(){this.items=[{label:"T\xecm ki\u1ebfm",command:i=>{this.activeIndex=0}},{label:"Ch\u1edd \u0111\u1ee3i",command:i=>{this.activeIndex=1}},{label:"Xem k\u1ebft qu\u1ea3",command:i=>{this.activeIndex=2}}]}onchange(i){console.log("event: ",i),13===i.keyCode&&(this.activeIndex=2)}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(x.P),e.Y36(m.F0),e.Y36(e.SBq))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-landing"]],decls:7,vars:4,consts:[[1,"landing-page","grid","p-7"],[1,"col-6","col-offset-3"],[1,"w-full",3,"model","activeIndex","activeIndexChange"],[1,"col-12","flex","justify-content-center"],["src","assets/layout/images/logo.png","alt","Image",1,"pt-6",2,"width","180px","height","220px"],["class","col-6 col-offset-3 flex align-items-center",4,"ngIf"],["class","col-6 col-offset-3",4,"ngIf"],[1,"col-6","col-offset-3","flex","align-items-center"],["src","assets/layout/images/favpng_search-engine-optimization-computer-programming.png","alt","Image",2,"width","150px","height","150px"],[1,"ml-4","p-input-icon-right","w-full"],[1,"pi","pi-search"],["type","text","pInputText","","placeholder","Nh\u1eadp Imei \u0111\u1ec3 t\xecm ki\u1ebfm",1,"w-full",3,"ngModel","ngModelChange","keypress"],["rows","5","cols","30","pInputTextarea","",1,"w-full"]],template:function(i,d){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"p-steps",2),e.NdJ("activeIndexChange",function(v){return d.activeIndex=v}),e.qZA()(),e.TgZ(3,"div",3),e._UZ(4,"img",4),e.qZA(),e.YNc(5,l,6,1,"div",5),e.YNc(6,g,2,0,"div",6),e.qZA()),2&i&&(e.xp6(2),e.Q6J("model",d.items)("activeIndex",d.activeIndex),e.xp6(3),e.Q6J("ngIf",0===d.activeIndex),e.xp6(1),e.Q6J("ngIf",2===d.activeIndex))},dependencies:[c.Fj,c.JJ,c.On,s.O5,a.R,p.o,o.g],encapsulation:2}),t})(),y=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[m.Bz.forChild([{path:"",component:u}]),m.Bz]}),t})();var C=n(23986),M=n(7376),T=n(50464),E=n(28061),z=n(40845),R=n(44466);let S=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[c.u5,R.m,s.ez,y,M.x,C.l,T.S,E.Q,z.hJ,a.q,p.j,o.A]}),t})()},73407:(I,f,n)=>{n.d(f,{A:()=>c,g:()=>x});var s=n(5e3),m=n(69808),e=n(93075);let x=(()=>{class a{constructor(o,l,g,u){this.el=o,this.ngModel=l,this.control=g,this.cd=u,this.onResize=new s.vpe}ngOnInit(){this.ngModel&&(this.ngModelSubscription=this.ngModel.valueChanges.subscribe(()=>{this.updateState()})),this.control&&(this.ngControlSubscription=this.control.valueChanges.subscribe(()=>{this.updateState()}))}ngAfterViewInit(){this.autoResize&&this.resize(),this.updateFilledState(),this.cd.detectChanges()}onInput(o){this.updateState()}updateFilledState(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length}onFocus(o){this.autoResize&&this.resize(o)}onBlur(o){this.autoResize&&this.resize(o)}resize(o){this.el.nativeElement.style.height="auto",this.el.nativeElement.style.height=this.el.nativeElement.scrollHeight+"px",parseFloat(this.el.nativeElement.style.height)>=parseFloat(this.el.nativeElement.style.maxHeight)?(this.el.nativeElement.style.overflowY="scroll",this.el.nativeElement.style.height=this.el.nativeElement.style.maxHeight):this.el.nativeElement.style.overflow="hidden",this.onResize.emit(o||{})}updateState(){this.updateFilledState(),this.autoResize&&this.resize()}ngOnDestroy(){this.ngModelSubscription&&this.ngModelSubscription.unsubscribe(),this.ngControlSubscription&&this.ngControlSubscription.unsubscribe()}}return a.\u0275fac=function(o){return new(o||a)(s.Y36(s.SBq),s.Y36(e.On,8),s.Y36(e.a5,8),s.Y36(s.sBO))},a.\u0275dir=s.lG2({type:a,selectors:[["","pInputTextarea",""]],hostAttrs:[1,"p-inputtextarea","p-inputtext","p-component","p-element"],hostVars:4,hostBindings:function(o,l){1&o&&s.NdJ("input",function(u){return l.onInput(u)})("focus",function(u){return l.onFocus(u)})("blur",function(u){return l.onBlur(u)}),2&o&&s.ekj("p-filled",l.filled)("p-inputtextarea-resizable",l.autoResize)},inputs:{autoResize:"autoResize"},outputs:{onResize:"onResize"}}),a})(),c=(()=>{class a{}return a.\u0275fac=function(o){return new(o||a)},a.\u0275mod=s.oAB({type:a}),a.\u0275inj=s.cJS({imports:[m.ez]}),a})()}}]);