"use strict";(self.webpackChunksakai=self.webpackChunksakai||[]).push([[913],{26913:(F,s,m)=>{m.r(s),m.d(s,{TimelineDemoModule:()=>$});var o=m(69808),u=m(51122),p=m(59783),e=m(5e3);function d(t,i){1&t&&e.GkF(0)}function f(t,i){1&t&&e.GkF(0)}const r=function(t){return{$implicit:t}};function _(t,i){if(1&t&&(e.ynx(0),e.YNc(1,f,1,0,"ng-container",4),e.BQk()),2&t){const n=e.oxw().$implicit,l=e.oxw();e.xp6(1),e.Q6J("ngTemplateOutlet",l.markerTemplate)("ngTemplateOutletContext",e.VKq(2,r,n))}}function T(t,i){1&t&&e._UZ(0,"div",10)}function h(t,i){1&t&&e._UZ(0,"div",11)}function x(t,i){1&t&&e.GkF(0)}function Z(t,i){if(1&t&&(e.TgZ(0,"div",2)(1,"div",3),e.YNc(2,d,1,0,"ng-container",4),e.qZA(),e.TgZ(3,"div",5),e.YNc(4,_,2,4,"ng-container",6),e.YNc(5,T,1,0,"ng-template",null,7,e.W1O),e.YNc(7,h,1,0,"div",8),e.qZA(),e.TgZ(8,"div",9),e.YNc(9,x,1,0,"ng-container",4),e.qZA()()),2&t){const n=i.$implicit,l=i.last,c=e.MAs(6),a=e.oxw();e.xp6(2),e.Q6J("ngTemplateOutlet",a.oppositeTemplate)("ngTemplateOutletContext",e.VKq(7,r,n)),e.xp6(2),e.Q6J("ngIf",a.markerTemplate)("ngIfElse",c),e.xp6(3),e.Q6J("ngIf",!l),e.xp6(2),e.Q6J("ngTemplateOutlet",a.contentTemplate)("ngTemplateOutletContext",e.VKq(9,r,n))}}const A=function(t,i,n,l,c,a,B){return{"p-timeline p-component":!0,"p-timeline-left":t,"p-timeline-right":i,"p-timeline-top":n,"p-timeline-bottom":l,"p-timeline-alternate":c,"p-timeline-vertical":a,"p-timeline-horizontal":B}};let C=(()=>{class t{constructor(n){this.el=n,this.align="left",this.layout="vertical"}getBlockableElement(){return this.el.nativeElement.children[0]}ngAfterContentInit(){this.templates.forEach(n=>{switch(n.getType()){case"content":this.contentTemplate=n.template;break;case"opposite":this.oppositeTemplate=n.template;break;case"marker":this.markerTemplate=n.template}})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(e.SBq))},t.\u0275cmp=e.Xpm({type:t,selectors:[["p-timeline"]],contentQueries:function(n,l,c){if(1&n&&e.Suo(c,p.jx,4),2&n){let a;e.iGM(a=e.CRH())&&(l.templates=a)}},hostAttrs:[1,"p-element"],inputs:{value:"value",style:"style",styleClass:"styleClass",align:"align",layout:"layout"},decls:2,vars:13,consts:[[3,"ngStyle","ngClass"],["class","p-timeline-event",4,"ngFor","ngForOf"],[1,"p-timeline-event"],[1,"p-timeline-event-opposite"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"p-timeline-event-separator"],[4,"ngIf","ngIfElse"],["marker",""],["class","p-timeline-event-connector",4,"ngIf"],[1,"p-timeline-event-content"],[1,"p-timeline-event-marker"],[1,"p-timeline-event-connector"]],template:function(n,l){1&n&&(e.TgZ(0,"div",0),e.YNc(1,Z,10,11,"div",1),e.qZA()),2&n&&(e.Tol(l.styleClass),e.Q6J("ngStyle",l.style)("ngClass",e.Hh0(5,A,"left"===l.align,"right"===l.align,"top"===l.align,"bottom"===l.align,"alternate"===l.align,"vertical"===l.layout,"horizontal"===l.layout)),e.xp6(1),e.Q6J("ngForOf",l.value))},dependencies:[o.mk,o.sg,o.O5,o.tP,o.PC],styles:[".p-timeline{display:flex;flex-grow:1;flex-direction:column}.p-timeline-left .p-timeline-event-opposite{text-align:right}.p-timeline-left .p-timeline-event-content{text-align:left}.p-timeline-right .p-timeline-event{flex-direction:row-reverse}.p-timeline-right .p-timeline-event-opposite{text-align:left}.p-timeline-right .p-timeline-event-content{text-align:right}.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even){flex-direction:row-reverse}.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-opposite{text-align:right}.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-content{text-align:left}.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-opposite{text-align:left}.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-content{text-align:right}.p-timeline-event{display:flex;position:relative;min-height:70px}.p-timeline-event:last-child{min-height:0}.p-timeline-event-opposite,.p-timeline-event-content{flex:1;padding:0 1rem}.p-timeline-event-separator{flex:0;display:flex;align-items:center;flex-direction:column}.p-timeline-event-marker{display:flex;align-self:baseline}.p-timeline-event-connector{flex-grow:1}.p-timeline-horizontal{flex-direction:row}.p-timeline-horizontal .p-timeline-event{flex-direction:column;flex:1}.p-timeline-horizontal .p-timeline-event:last-child{flex:0}.p-timeline-horizontal .p-timeline-event-separator{flex-direction:row}.p-timeline-horizontal .p-timeline-event-connector{width:100%}.p-timeline-bottom .p-timeline-event{flex-direction:column-reverse}.p-timeline-horizontal.p-timeline-alternate .p-timeline-event:nth-child(even){flex-direction:column-reverse}\n"],encapsulation:2,changeDetection:0}),t})(),y=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[o.ez,p.m8]}),t})();var g=m(40845),v=m(74297);function q(t,i){1&t&&e._uU(0),2&t&&e.hij(" ",i.$implicit.status," ")}function D(t,i){1&t&&e._uU(0),2&t&&e.hij(" ",i.$implicit.status," ")}function U(t,i){1&t&&e._uU(0),2&t&&e.hij(" ",i.$implicit.status," ")}function z(t,i){if(1&t&&(e.TgZ(0,"small",13),e._uU(1),e.qZA()),2&t){const n=i.$implicit;e.xp6(1),e.Oqu(n.date)}}function J(t,i){1&t&&e._uU(0),2&t&&e.hij(" ",i.$implicit.status," ")}function Q(t,i){if(1&t&&(e.TgZ(0,"span",14),e._UZ(1,"i",15),e.qZA()),2&t){const n=i.$implicit;e.Udp("background-color",n.color),e.xp6(1),e.Q6J("ngClass",n.icon)}}function w(t,i){if(1&t&&e._UZ(0,"img",20),2&t){const n=e.oxw().$implicit;e.Q6J("src","assets/demo/images/product/"+n.image,e.LSH)("alt",n.name)}}function N(t,i){if(1&t&&(e.TgZ(0,"p-card",16),e.YNc(1,w,1,2,"img",17),e.TgZ(2,"p",18),e._uU(3,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!"),e.qZA(),e._UZ(4,"button",19),e.qZA()),2&t){const n=i.$implicit;e.Q6J("header",n.status)("subheader",n.date),e.xp6(1),e.Q6J("ngIf",n.image)}}function O(t,i){1&t&&e._uU(0),2&t&&e.hij(" ",i.$implicit," ")}function Y(t,i){1&t&&e._uU(0),2&t&&e.hij(" ",i.$implicit," ")}function k(t,i){1&t&&e._uU(0),2&t&&e.hij(" ",i.$implicit," ")}function M(t,i){1&t&&e._uU(0," \xa0 ")}let b=(()=>{class t{constructor(){this.events1=[],this.events2=[]}ngOnInit(){this.events1=[{status:"Ordered",date:"15/10/2020 10:30",icon:p.dv.SHOPPING_CART,color:"#9C27B0",image:"game-controller.jpg"},{status:"Processing",date:"15/10/2020 14:00",icon:p.dv.COG,color:"#673AB7"},{status:"Shipped",date:"15/10/2020 16:15",icon:p.dv.ENVELOPE,color:"#FF9800"},{status:"Delivered",date:"16/10/2020 10:00",icon:p.dv.CHECK,color:"#607D8B"}],this.events2=["2020","2021","2022","2023"]}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:48,vars:8,consts:[[1,"grid"],[1,"col-12","md:col-6"],[1,"card"],[3,"value"],["pTemplate","content"],["align","right",3,"value"],["align","alternate",3,"value"],["pTemplate","opposite"],["align","alternate","styleClass","customized-timeline",3,"value"],["pTemplate","marker"],["layout","horizontal","align","top",3,"value"],["layout","horizontal","align","bottom",3,"value"],["layout","horizontal","align","alternate",3,"value"],[1,"p-text-secondary"],[1,"flex","z-1","w-2rem","h-2rem","align-items-center","justify-content-center","text-white","border-circle","shadow-2"],[3,"ngClass"],[3,"header","subheader"],["width","200","class","shadow-2",3,"src","alt",4,"ngIf"],[1,"line-height-3","my-3"],["pButton","","label","Read more",1,"p-button-outlined","mb-5"],["width","200",1,"shadow-2",3,"src","alt"]],template:function(n,l){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h5"),e._uU(4,"Left Align"),e.qZA(),e.TgZ(5,"p-timeline",3),e.YNc(6,q,1,1,"ng-template",4),e.qZA()()(),e.TgZ(7,"div",1)(8,"div",2)(9,"h5"),e._uU(10,"Right Align"),e.qZA(),e.TgZ(11,"p-timeline",5),e.YNc(12,D,1,1,"ng-template",4),e.qZA()()(),e.TgZ(13,"div",1)(14,"div",2)(15,"h5"),e._uU(16,"Alternate Align"),e.qZA(),e.TgZ(17,"p-timeline",6),e.YNc(18,U,1,1,"ng-template",4),e.qZA()()(),e.TgZ(19,"div",1)(20,"div",2)(21,"h5"),e._uU(22,"Opposite Content"),e.qZA(),e.TgZ(23,"p-timeline",3),e.YNc(24,z,2,1,"ng-template",4),e.YNc(25,J,1,1,"ng-template",7),e.qZA()()()(),e.TgZ(26,"div",2)(27,"h5"),e._uU(28,"Customized"),e.qZA(),e.TgZ(29,"p-timeline",8),e.YNc(30,Q,2,3,"ng-template",9),e.YNc(31,N,5,3,"ng-template",4),e.qZA()(),e.TgZ(32,"div",2)(33,"h5"),e._uU(34,"Horizontal"),e.qZA(),e.TgZ(35,"h6"),e._uU(36,"Top Align"),e.qZA(),e.TgZ(37,"p-timeline",10),e.YNc(38,O,1,1,"ng-template",4),e.qZA(),e.TgZ(39,"h6"),e._uU(40,"Bottom Align"),e.qZA(),e.TgZ(41,"p-timeline",11),e.YNc(42,Y,1,1,"ng-template",4),e.qZA(),e.TgZ(43,"h6"),e._uU(44,"Alternate Align"),e.qZA(),e.TgZ(45,"p-timeline",12),e.YNc(46,k,1,1,"ng-template",4),e.YNc(47,M,1,0,"ng-template",7),e.qZA()()),2&n&&(e.xp6(5),e.Q6J("value",l.events1),e.xp6(6),e.Q6J("value",l.events1),e.xp6(6),e.Q6J("value",l.events1),e.xp6(6),e.Q6J("value",l.events1),e.xp6(6),e.Q6J("value",l.events1),e.xp6(8),e.Q6J("value",l.events2),e.xp6(4),e.Q6J("value",l.events2),e.xp6(4),e.Q6J("value",l.events2))},dependencies:[o.mk,o.O5,C,p.jx,g.Hq,v.Z],styles:["@media screen and (max-width: 960px){  .customized-timeline .p-timeline-event:nth-child(even){flex-direction:row!important}  .customized-timeline .p-timeline-event:nth-child(even) .p-timeline-event-content{text-align:left!important}  .customized-timeline .p-timeline-event-opposite{flex:0}  .customized-timeline .p-card{margin-top:1rem}}"]}),t})(),j=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[u.Bz.forChild([{path:"",component:b}]),u.Bz]}),t})(),$=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[o.ez,y,g.hJ,v.d,j]}),t})()}}]);