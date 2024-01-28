import{m as v,D as y}from"./modalMixin.5de6da83.js";import{_ as b,o as l,c as i,a as o,l as u,q as r,y as x,t as h,f as m,F as $,r as k,g as _}from"./index.e77c31ac.js";const L={props:{coupon:{type:Object,default(){return{}}},isNew:{type:Boolean,default:!1}},data(){return{tempCoupon:{},due_date:""}},emits:["update-coupon"],watch:{coupon(){this.tempCoupon=this.coupon;const s=new Date(this.tempCoupon.due_date*1e3).toISOString().split("T");[this.due_date]=s},due_date(){this.tempCoupon.due_date=Math.floor(new Date(this.due_date)/1e3)}},mixins:[v]},w={class:"modal fade",id:"couponModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},D={class:"modal-dialog",role:"document"},N={class:"modal-content"},S={class:"modal-header"},U={class:"modal-title",id:"exampleModalLabel"},V={key:0},B={key:1},T=o("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),I={class:"modal-body"},O={class:"mb-3"},j=o("label",{for:"title"},"\u6A19\u984C",-1),F={class:"mb-3"},q=o("label",{for:"coupon_code"},"\u512A\u60E0\u78BC",-1),z={class:"mb-3"},A=o("label",{for:"due_date"},"\u5230\u671F\u65E5",-1),E={class:"mb-3"},P=o("label",{for:"price"},"\u6298\u6263\u767E\u5206\u6BD4",-1),G={class:"mb-3"},H={class:"form-check"},J=o("label",{class:"form-check-label",for:"is_enabled"}," \u662F\u5426\u555F\u7528 ",-1),K={class:"modal-footer"},Q=o("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close",-1);function R(s,e,d,c,t,p){return l(),i("div",w,[o("div",D,[o("div",N,[o("div",S,[o("h5",U,[d.isNew?(l(),i("span",V,"\u65B0\u589E\u512A\u60E0\u5377")):(l(),i("span",B,"\u7DE8\u8F2F\u512A\u60E0\u5377"))]),T]),o("div",I,[o("div",O,[j,u(o("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":e[0]||(e[0]=n=>t.tempCoupon.title=n),placeholder:"\u8ACB\u8F38\u5165\u6A19\u984C"},null,512),[[r,t.tempCoupon.title]])]),o("div",F,[q,u(o("input",{type:"text",class:"form-control",id:"coupon_code","onUpdate:modelValue":e[1]||(e[1]=n=>t.tempCoupon.code=n),placeholder:"\u8ACB\u8F38\u5165\u512A\u60E0\u78BC"},null,512),[[r,t.tempCoupon.code]])]),o("div",z,[A,u(o("input",{type:"date",class:"form-control",id:"due_date","onUpdate:modelValue":e[2]||(e[2]=n=>t.due_date=n)},null,512),[[r,t.due_date]])]),o("div",E,[P,u(o("input",{type:"number",class:"form-control",id:"price",min:"0","onUpdate:modelValue":e[3]||(e[3]=n=>t.tempCoupon.percent=n),placeholder:"\u8ACB\u8F38\u5165\u6298\u6263\u767E\u5206\u6BD4"},null,512),[[r,t.tempCoupon.percent,void 0,{number:!0}]])]),o("div",G,[o("div",H,[u(o("input",{class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":e[4]||(e[4]=n=>t.tempCoupon.is_enabled=n),id:"is_enabled"},null,512),[[x,t.tempCoupon.is_enabled]]),J])])]),o("div",K,[Q,o("button",{type:"button",class:"btn btn-primary",onClick:e[5]||(e[5]=n=>s.$emit("update-coupon",t.tempCoupon))},h(d.isNew?"\u65B0\u589E\u512A\u60E0\u5377":"\u66F4\u65B0\u512A\u60E0\u5238"),1)])])])],512)}const W=b(L,[["render",R]]),X={components:{CouponModal:W,DelModal:y},props:{config:Object},data(){return{coupons:{},tempCoupon:{title:"",is_enabled:0,percent:100,code:""},isLoading:!1,isNew:!1}},methods:{openCouponModal(s,e){this.isNew=s,this.isNew?this.tempCoupon={due_date:new Date().getTime()/1e3}:this.tempCoupon={...e},this.$refs.couponModal.openModal()},openDelCouponModal(s){this.tempCoupon={...s},this.$refs.delModal.openModal()},getCoupons(){this.isLoading=!0;const s="https://ec-course-api.hexschool.io/api/aaronshih2024/admin/coupons";this.$http.get(s,this.tempProduct).then(e=>{this.coupons=e.data.coupons,this.isLoading=!1}).catch(e=>{this.isLoading=!1,this.$httpMessageState(e.response,"\u932F\u8AA4\u8A0A\u606F")})},updateCoupon(s){this.isLoading=!0;let e="https://ec-course-api.hexschool.io/api/aaronshih2024/admin/coupon",d="post",c=s;this.isNew||(e=`https://ec-course-api.hexschool.io/api/aaronshih2024/admin/coupon/${this.tempCoupon.id}`,d="put",c=this.tempCoupon),this.$http[d](e,{data:c}).then(t=>{this.isLoading=!1,this.$httpMessageState(t,"\u65B0\u589E\u512A\u60E0\u5238"),this.getCoupons(),this.$refs.couponModal.hideModal()}).catch(t=>{this.isLoading=!1,this.$httpMessageState(t.response,"\u932F\u8AA4\u8A0A\u606F")})},delCoupon(){const s=`https://ec-course-api.hexschool.io/api/aaronshih2024/admin/coupon/${this.tempCoupon.id}`;this.isLoading=!0,this.$http.delete(s).then(e=>{this.isLoading=!1,this.$httpMessageState(e,"\u522A\u9664\u512A\u60E0\u5238"),this.$refs.delModal.hideModal(),this.getCoupons()}).catch(e=>{this.isLoading=!1,this.$httpMessageState(e.response,"\u522A\u9664\u512A\u60E0\u5238")})}},created(){this.getCoupons()}},Y={class:"text-end mt-4"},Z={class:"table mt-4"},oo=o("thead",null,[o("tr",null,[o("th",null,"\u540D\u7A31"),o("th",null,"\u6298\u6263\u767E\u5206\u6BD4"),o("th",null,"\u5230\u671F\u65E5"),o("th",null,"\u662F\u5426\u555F\u7528"),o("th",null,"\u7DE8\u8F2F")])],-1),eo={key:0,class:"text-success"},to={key:1,class:"text-muted"},so={class:"btn-group"},no=["onClick"],lo=["onClick"];function io(s,e,d,c,t,p){const n=_("Loading"),C=_("CouponModal"),f=_("DelModal");return l(),i("div",null,[m(n,{active:t.isLoading,"z-index":1060},null,8,["active"]),o("div",Y,[o("button",{class:"btn btn-primary",type:"button",onClick:e[0]||(e[0]=a=>p.openCouponModal(!0))}," \u5EFA\u7ACB\u65B0\u7684\u512A\u60E0\u5238 ")]),o("table",Z,[oo,o("tbody",null,[(l(!0),i($,null,k(t.coupons,(a,M)=>(l(),i("tr",{key:M},[o("td",null,h(a.title),1),o("td",null,h(a.percent)+"%",1),o("td",null,h(s.$filters.date(a.due_date)),1),o("td",null,[a.is_enabled===1?(l(),i("span",eo,"\u555F\u7528")):(l(),i("span",to,"\u672A\u555F\u7528"))]),o("td",null,[o("div",so,[o("button",{class:"btnBS border border-primary px-2 py-1 mx-1 rounded btn-sm",onClick:g=>p.openCouponModal(!1,a)},"\u7DE8\u8F2F",8,no),o("button",{class:"btnBS border border-danger px-2 py-1 mx-1 rounded btn-sm",onClick:g=>p.openDelCouponModal(a)},"\u522A\u9664",8,lo)])])]))),128))])]),m(C,{coupon:t.tempCoupon,"is-new":t.isNew,ref:"couponModal",onUpdateCoupon:p.updateCoupon},null,8,["coupon","is-new","onUpdateCoupon"]),m(f,{item:t.tempCoupon,ref:"delModal",onDelItem:p.delCoupon},null,8,["item","onDelItem"])])}const uo=b(X,[["render",io]]);export{uo as default};
