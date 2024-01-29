import{c as b}from"./cart.33e846ca.js";import{_ as h,e as m,k as w,c,a as t,n as l,F as u,r as v,d as y,g as f,o as n,t as a,f as d,w as _,b as p,l as k}from"./index.9f58ddc3.js";const{VITE_APP_URL:x,VITE_APP_PATH:P}={VITE_APP_URL:"https://ec-course-api.hexschool.io",VITE_APP_PATH:"aaronshih2024",BASE_URL:"/aaronVueProject/",MODE:"production",DEV:!1,PROD:!0},C={data(){return{products:[],tempProduct:[],indexProduct:[],category:"\u5168\u90E8",orderData:{data:{user:{name:"",email:"",tel:"",address:""},message:""}},cart_sidebar:"",cart_sidebar_overlay:"",slidbarClose:""}},methods:{getData(){const r=`${x}/api/${P}/products/all`;this.$http.get(r).then(s=>{this.products=s.data.products,console.log(s.data.products)}).catch(s=>{console.log(s)})},...m(b,["getCart","addToCart"])},components:{RouterLink:w},mounted(){this.getData()}},I=y('<section class="breadcrumb_section text-uppercase" style="background-image:url(../src/assets/image/innerHeroImg.jpeg);"><div class="container"><h1 class="page_title text-white wow fadeInUp" data-wow-delay=".1s">\u7DDA\u4E0A\u5546\u5E97</h1><ul class="breadcrumb_nav ul_li wow fadeInUp" data-wow-delay=".2s"><li><a href="index.html"><i class="fas fa-home"></i> \u9996\u9801</a></li><li>\u7DDA\u4E0A\u5546\u5E97</li></ul></div><div class="breadcrumb_icon_wrap"><div class="container"><div class="breadcrumb_icon wow fadeInUp" data-wow-delay=".3s"><span class="bg_shape d-flex align-items-center justify-content-center"><div style="background-image:url(../src/assets/image/icon_01.png);background-size:cover;background-position:center center;width:35px;height:35px;transform:rotate(-45deg);"></div></span></div></div></div></section>',1),T={class:"shop_section sec_ptb_120 bg_default_gray"},U={class:"container"},V={class:"filters-button-group ul_li_center wow fadeInUp","data-wow-delay":".1s"},A={class:"row wow fadeInUp","data-wow-delay":".3s"},E={key:0,class:"element-item col-lg-4 col-md-6 col-sm-6"},D={class:"shop_card wow fadeInUp","data-wow-delay":".1s"},L={class:"share_btns"},N={type:"button",class:"share_btn"},R=["src"],$={class:"item_content"},B={class:"item_title text-uppercase"},S={class:"btns_group"},j={class:"item_price bg_default_brown"},H=["onClick"],z={key:1,class:"element-item col-lg-4 col-md-6 col-sm-6"},F={class:"shop_card wow fadeInUp","data-wow-delay":".1s"},O={class:"share_btns"},M={type:"button",class:"share_btn"},q=["src"],G={class:"item_content"},J={class:"item_title text-uppercase"},K={class:"btns_group"},Q={class:"item_price bg_default_brown"},W=["onClick"];function X(r,s,Y,Z,o,tt){const i=f("RouterLink");return n(),c(u,null,[I,t("section",T,[t("div",U,[t("ul",V,[t("li",null,[t("button",{class:l(["button text-uppercase",{active:o.category==="\u5168\u90E8"}]),"on:click":s[0]||(s[0]=e=>o.category="\u5168\u90E8")},"\u5168\u90E8",34)]),t("li",null,[t("button",{class:l(["button text-uppercase",{active:o.category==="\u9EC3\u91D1\u70D8\u57F9"}]),"on:click":s[1]||(s[1]=e=>o.category="\u9EC3\u91D1\u70D8\u57F9")},"\u9EC3\u91D1\u70D8\u57F9",34)]),t("li",null,[t("button",{class:l(["button text-uppercase",{active:o.category==="\u4E2D\u5EA6\u70D8\u57F9"}]),"on:click":s[2]||(s[2]=e=>o.category="\u4E2D\u5EA6\u70D8\u57F9")},"\u4E2D\u5EA6\u70D8\u57F9",34)]),t("li",null,[t("button",{class:l(["button text-uppercase",{active:o.category==="\u6DF1\u5EA6\u70D8\u57F9"}]),"on:click":s[3]||(s[3]=e=>o.category="\u6DF1\u5EA6\u70D8\u57F9")},"\u6DF1\u5EA6\u70D8\u57F9",34)])]),t("div",A,[(n(!0),c(u,null,v(o.products,e=>(n(),c(u,{key:e.title},[e.category==o.category?(n(),c("div",E,[t("div",D,[t("div",L,[t("button",N,a(e.category),1)]),d(i,{to:`/product/${e.id}`,class:"item_image"},{default:_(()=>[t("img",{src:e.imageUrl,alt:"image_not_found"},null,8,R)]),_:2},1032,["to"]),t("div",$,[t("h3",B,[d(i,{to:`/product/${e.id}`},{default:_(()=>[p(a(e.title),1)]),_:2},1032,["to"])]),t("div",S,[t("span",j,"NT."+a(e.price),1),t("button",{type:"button",class:"btn btn_border border_black text-uppercase",onClick:g=>r.addToCart(e.id)},"\u52A0\u5165\u8CFC\u7269\u8ECA",8,H)])])])])):o.category==="\u5168\u90E8"?(n(),c("div",z,[t("div",F,[t("div",O,[t("button",M,a(e.category),1)]),d(i,{to:`/product/${e.id}`,class:"item_image"},{default:_(()=>[t("img",{src:e.imageUrl,alt:"image_not_found"},null,8,q)]),_:2},1032,["to"]),t("div",G,[t("h3",J,[d(i,{to:`/product/${e.id}`},{default:_(()=>[p(a(e.title),1)]),_:2},1032,["to"])]),t("div",K,[t("span",Q,"NT."+a(e.price),1),t("button",{type:"button",class:"btn btn_border border_black text-uppercase",onClick:g=>r.addToCart(e.id)},"\u52A0\u5165\u8CFC\u7269\u8ECA",8,W)])])])])):k("",!0)],64))),128))])])])],64)}const ot=h(C,[["render",X]]);export{ot as default};
