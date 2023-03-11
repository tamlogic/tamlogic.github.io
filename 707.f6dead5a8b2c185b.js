"use strict";(self.webpackChunksakai=self.webpackChunksakai||[]).push([[707],{9707:(w,p,o)=>{o.r(p),o.d(p,{LoginModule:()=>C});var h=o(69808),m=o(51122),r=o(93075),v=o(44930),e=o(5e3),x=o(8568),b=o(61562),u=o(27232),d=o(40845),g=o(61208),c=o(31424),f=o(78356);let y=(()=>{class t{constructor(a,n,i,s){this.fb=a,this.layoutService=n,this.authService=i,this.router=s,this.appUtil=v.Z,this.valCheck=["remember"],this.loginFrm=new r.cw({}),this.isSubmitting=!1}ngOnInit(){this.loginFrm=this.fb.group({username:[null,[r.kI.required]],password:[null,[r.kI.required]],remember:[!1]})}doLogin(){this.loginFrm.markAllAsTouched(),this.loginFrm.value.username.trim()&&this.loginFrm.value.password.trim()&&(this.isSubmitting=!0,this.authService.login(this.appUtil.toSnakeCaseKey(this.loginFrm.value)).subscribe(n=>{601!==n.status&&602!==n.status&&0!==n.data.id&&(this.authService.setToken(n.data.token),this.authService.setUser(n.data),this.router.navigate([""]).then(()=>{}))}))}}return t.\u0275fac=function(a){return new(a||t)(e.Y36(r.qu),e.Y36(x.P),e.Y36(b.e),e.Y36(m.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-login"]],decls:27,vars:23,consts:[[1,"surface-0","flex","align-items-center","justify-content-center","min-h-screen","min-w-screen","overflow-hidden"],[1,"grid","justify-content-center","p-2","lg:p-0",2,"min-width","80%"],[1,"col-12","xl:col-6",2,"border-radius","56px","padding","0.3rem","background","linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)"],[1,"h-full","w-full","m-0","py-3","px-4",2,"border-radius","53px","background","linear-gradient(180deg, var(--surface-50) 38.9%, var(--surface-0))"],[1,"text-right","py-4"],[1,"flex","flex-column","mb-5"],[1,"flex","justify-content-center"],["src","assets/layout/images/logo.png","alt","Image logo","width","150","height","150",1,"mb-3"],[1,"flex","flex-column","md:flex-row","justify-content-center"],[1,"text-xl","pt-2","font-medium","text-primary","text-center",3,"innerHTML"],[1,"flex","justify-content-center","text-600","font-medium","mt-4",3,"translate"],["autocomplete","off",3,"formGroup","submit"],[1,"w-full","md:w-10","mx-auto"],["for","username",1,"block","text-primary","text-xl","font-bold","mb-2",3,"translate"],["id","username","type","text","formControlName","username","pInputText","",1,"w-full","mb-3",2,"padding","1rem",3,"placeholder","ngModel","ngModelChange"],["for","password",1,"block","text-primary","font-bold","text-xl","mb-2",3,"translate"],["id","password","formControlName","password","styleClass","w-full mb-3",3,"ngModel","placeholder","toggleMask","ngModelChange"],[1,"flex","align-items-center","justify-content-between","mb-5"],[1,"flex","align-items-center"],["id","remember","styleClass","mr-2","formControlName","remember",3,"binary"],["for","remember",3,"translate"],[1,"font-medium","no-underline","ml-2","text-right","cursor-pointer",2,"color","var(--primary-color)",3,"routerLink","translate"],["pButton","","pRipple","",1,"w-full","p-3","text-xl",3,"label"]],template:function(a,n){1&a&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),e._UZ(4,"div",4),e.TgZ(5,"div",5)(6,"div",6),e._UZ(7,"img",7),e.qZA(),e.TgZ(8,"div",8),e._UZ(9,"div",9),e.ALo(10,"translate"),e.qZA(),e._UZ(11,"span",10),e.qZA(),e.TgZ(12,"form",11),e.NdJ("submit",function(){return n.doLogin()}),e.TgZ(13,"div",12),e._UZ(14,"label",13),e.TgZ(15,"input",14),e.NdJ("ngModelChange",function(s){return n.loginFrm.value.username=s}),e.ALo(16,"translate"),e.qZA(),e._UZ(17,"label",15),e.TgZ(18,"p-password",16),e.NdJ("ngModelChange",function(s){return n.loginFrm.value.password=s}),e.ALo(19,"translate"),e.qZA(),e.TgZ(20,"div",17)(21,"div",18),e._UZ(22,"p-checkbox",19)(23,"label",20),e.qZA(),e._UZ(24,"a",21),e.qZA(),e._UZ(25,"button",22),e.ALo(26,"translate"),e.qZA()()()()()()),2&a&&(e.xp6(9),e.Q6J("innerHTML",e.lcZ(10,15,"app_title"),e.oJD),e.xp6(2),e.Q6J("translate","label.sign_in_to_continue"),e.xp6(1),e.Q6J("formGroup",n.loginFrm),e.xp6(2),e.Q6J("translate","label.username"),e.xp6(1),e.Q6J("placeholder",e.lcZ(16,17,"label.username"))("ngModel",n.loginFrm.value.username),e.xp6(2),e.Q6J("translate","label.password"),e.xp6(1),e.s9C("placeholder",e.lcZ(19,19,"label.password")),e.Q6J("ngModel",n.loginFrm.value.password)("toggleMask",n.loginFrm.value.password),e.xp6(4),e.Q6J("binary",!0),e.xp6(1),e.Q6J("translate","label.remember_me"),e.xp6(1),e.Q6J("routerLink","/forgot-password")("translate","label.forgot_password"),e.xp6(1),e.Q6J("label",e.lcZ(26,21,"button.sign_in")))},dependencies:[r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,u.Pi,m.yS,d.Hq,g.XZ,c.o,f.ro,u.X$],styles:["[_nghost-%COMP%]     .p-inputtext{width:100%;padding:1rem}[_nghost-%COMP%]     .pi-eye{transform:scale(1.6);cursor:pointer;color:var(--primary-color)!important}[_nghost-%COMP%]     .pi-eye-slash{transform:scale(1.6);cursor:pointer;color:var(--primary-color)!important}[_nghost-%COMP%]     .p-dropdown{width:auto!important}"]}),t})(),Z=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[m.Bz.forChild([{path:"",component:y}]),m.Bz]}),t})(),C=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[r.u5,r.UX,h.ez,u.aw,Z,d.hJ,g.nD,c.j,f.gz]}),t})()}}]);