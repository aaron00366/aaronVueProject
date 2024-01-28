import{c as b}from"./cart.3df8cf7f.js";import{_ as g,e as m,c as i,a as t,t as e,F as r,r as v,d as h,g as w,o as n,f as l,w as _,b as f}from"./index.e77c31ac.js";const{VITE_APP_URL:u,VITE_APP_PATH:p}={VITE_APP_URL:"https://ec-course-api.hexschool.io",VITE_APP_PATH:"aaronshih2024",BASE_URL:"/aaronVueProject/",MODE:"production",DEV:!1,PROD:!0},y={data(){return{product:{},CategoryProducts:{}}},methods:{getProduct(){const{id:o}=this.$route.params;this.$http(`${u}/v2/api/${p}/product/${o}`).then(a=>{this.product=a.data.product,console.log(this.product),this.getCategoryProducts()})},getCategoryProducts(){const{category:o}=this.product;this.$http(`${u}/v2/api/${p}/products?category=${o}`).then(a=>{this.CategoryProducts=a.data.products,console.log("\u76F8\u4F3C",a)})},...m(b,["addToCart"])},mounted(){this.getProduct()}},x=h('<section class="breadcrumb_section text-uppercase" style="background-image:url(../src/assets/image/innerHeroImg.jpeg);"><div class="container"><h1 class="page_title text-white wow fadeInUp" data-wow-delay=".1s">\u7DDA\u4E0A\u5546\u5E97</h1><ul class="breadcrumb_nav ul_li wow fadeInUp" data-wow-delay=".2s"><li><a href="index.html"><i class="fas fa-home"></i> \u9996\u9801</a></li><li>\u7DDA\u4E0A\u5546\u5E97</li></ul></div><div class="breadcrumb_icon_wrap"><div class="container"><div class="breadcrumb_icon wow fadeInUp" data-wow-delay=".3s"><span class="bg_shape d-flex align-items-center justify-content-center"><div style="background-image:url(../src/assets/image/icon_01.png);background-size:cover;background-position:center center;width:35px;height:35px;transform:rotate(-45deg);"></div></span></div></div></div></section>',1),P={class:"details_section shop_details sec_ptb_120 bg_default_gray"},k={class:"container"},C={class:"row justify-content-lg-between justify-content-md-center justify-content-sm-center"},I={class:"col-lg-6 col-md-7"},T={class:"d-flex justify-content-center bg-white"},U=["src"],V={class:"col-lg-6 col-md-7"},$={class:"details_content wow fadeInUp","data-wow-delay":".2s"},A={class:"details_flex_title"},E={class:"details_title text-uppercase"},j={class:"details_price"},L={class:"price_text"},N={class:"btns_group ul_li"},R=h('<li><div class="quantity_input quantity_boxed"><h4 class="quantity_title text-uppercase">\u6578\u91CF</h4><form action="#"><button type="button" class="input_number_decrement">\u2013</button><input class="input_number" type="text" value="2"><button type="button" class="input_number_increment">+</button></form></div></li>',1),B={class:"product_description_wrap wow fadeInUp","data-wow-delay":".3s"},D=t("ul",{class:"tabs_nav ul_li nav",role:"tablist"},[t("li",null,[t("button",{class:"active","data-bs-toggle":"tab","data-bs-target":"#product_description",type:"button",role:"tab","aria-selected":"true"},"\u7522\u54C1\u6558\u8FF0")]),t("li",null,[t("button",{"data-bs-toggle":"tab","data-bs-target":"#product_additional_info",type:"button",role:"tab","aria-selected":"false"},"\u7522\u54C1\u5167\u5BB9")])],-1),S={class:"tab-content"},q={class:"tab-pane fade show active",id:"product_description",role:"tabpanel"},H={class:"mb-0"},F={class:"tab-pane fade",id:"product_additional_info",role:"tabpanel"},O={class:"mb-0"},z={class:"related_products"},M=t("h4",{class:"area_title text-uppercase mb-0 wow fadeInUp","data-wow-delay":".1s"},"\u76F8\u95DC\u7522\u54C1",-1),G={class:"row"},J={class:"shop_card wow fadeInUp","data-wow-delay":".1s"},K={class:"share_btns"},Q={type:"button",class:"share_btn"},W=["src"],X={class:"item_content"},Y={class:"item_title text-uppercase"},Z={class:"btns_group"},tt={class:"item_price bg_default_brown"},st=["onClick"];function et(o,a,ot,at,c,ct){const d=w("RouterLink");return n(),i(r,null,[x,t("section",P,[t("div",k,[t("div",C,[t("div",I,[t("div",T,[t("img",{src:c.product.imageUrl,alt:""},null,8,U)])]),t("div",V,[t("div",$,[t("div",A,[t("h2",E,e(c.product.title),1)]),t("p",null,e(c.product.description),1),t("div",j,[t("strong",L,"NT. "+e(c.product.price),1)]),t("ul",N,[R,t("li",null,[t("button",{type:"button",class:"btn btn_border border_black text-uppercase",onClick:a[0]||(a[0]=s=>o.addToCart(o.item.id))},"\u52A0\u5165\u8CFC\u7269\u8ECA")])])])])]),t("div",B,[D,t("div",S,[t("div",q,[t("p",H,e(c.product.description),1)]),t("div",F,[t("p",O,e(c.product.content),1)])])]),t("div",z,[M,t("div",G,[(n(!0),i(r,null,v(c.CategoryProducts,s=>(n(),i("div",{class:"col-lg-4 col-md-6 col-sm-6",key:s.id},[t("div",J,[t("div",K,[t("button",Q,e(s.category),1)]),l(d,{to:`/product/${s.id}`,class:"item_image"},{default:_(()=>[t("img",{src:s.imageUrl,alt:"image_not_found"},null,8,W)]),_:2},1032,["to"]),t("div",X,[t("h3",Y,[l(d,{to:`/product/${s.id}`},{default:_(()=>[f(e(s.title),1)]),_:2},1032,["to"])]),t("div",Z,[t("span",tt,"NT."+e(s.price),1),t("button",{type:"button",class:"btn btn_border border_black text-uppercase",onClick:it=>o.addToCart(s.id)},"\u52A0\u5165\u8CFC\u7269\u8ECA",8,st)])])])]))),128))])])])])],64)}const rt=g(y,[["render",et]]);export{rt as default};