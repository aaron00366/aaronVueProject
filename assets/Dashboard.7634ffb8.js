import{T as f,e as g}from"./ToastMessages.b0fe9faa.js";import{_,h as c,o as p,c as u,a as s,f as e,w as r,u as b,b as i,y as $,l as k,F as x}from"./index.f06dda5c.js";import{_ as M}from"./logo_white_1x.76901fd1.js";const N={inject:["emitter"],methods:{logout(){const o="https://ec-course-api.hexschool.io/logout";this.$http.post(o).then(t=>{this.$httpMessageState(t,"\u767B\u51FA"),t.data.success&&this.$router.push("/")}).catch(t=>{this.$httpMessageState(t.response,"\u932F\u8AA4\u8A0A\u606F")})}}},T={class:"navbar navbar-expand-lg navbar-dark bg-dark"},w={class:"container-fluid"},y=s("a",{class:"navbar-brand",href:"#"},[s("img",{src:M,alt:"",style:{height:"50px","object-fit":"cover"}})],-1),A=s("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},[s("span",{class:"navbar-toggler-icon"})],-1),B={class:"collapse navbar-collapse",id:"navbarNavAltMarkup"},C={class:"navbar-nav"},S=i("\u7522\u54C1"),V=i("\u8A02\u55AE"),j=i("\u512A\u60E0\u5238"),F=i("\u8CBC\u6587");function z(o,t,n,v,h,l){const a=c("router-link");return p(),u("nav",T,[s("div",w,[y,A,s("div",B,[s("div",C,[e(a,{to:"/admin/products",class:"nav-link"},{default:r(()=>[S]),_:1}),e(a,{to:"/admin/orders",class:"nav-link"},{default:r(()=>[V]),_:1}),e(a,{to:"/admin/coupons",class:"nav-link"},{default:r(()=>[j]),_:1}),e(a,{to:"/admin/article",class:"nav-link"},{default:r(()=>[F]),_:1}),s("a",{href:"#",onClick:t[0]||(t[0]=b((...d)=>l.logout&&l.logout(...d),["prevent"])),class:"nav-link"},"\u767B\u51FA")])])])])}const D=_(N,[["render",z]]),E={components:{Navbar:D,ToastMessages:f},data(){return{status:!1}},provide(){return{emitter:g}},created(){const o=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=`${o}`;const t="https://ec-course-api.hexschool.io/api/user/check";this.$http.post(t).then(n=>{this.$httpMessageState(n,"\u767B\u5165"),this.status=!0}).catch(n=>{this.$router.push("/"),this.$httpMessageState(n.response,"\u932F\u8AA4\u8A0A\u606F")})}},q={class:"container-fluid mt-3 position-relative"};function G(o,t,n,v,h,l){const a=c("Navbar"),d=c("ToastMessages"),m=c("router-view");return p(),u(x,null,[e(a),s("div",q,[e(d),h.status?(p(),$(m,{key:0})):k("",!0)])],64)}const K=_(E,[["render",G]]);export{K as default};