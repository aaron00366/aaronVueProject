import{i as b}from"./innerHeroImg.d782344b.js";import{c as g}from"./cart.892370f6.js";import{_ as m,e as v,c as n,a as t,n as f,t as o,F as r,r as w,d as h,h as y,o as i,f as l,w as _,b as x}from"./index.28c1b21c.js";const{VITE_APP_URL:u,VITE_APP_PATH:p}={VITE_APP_URL:"https://ec-course-api.hexschool.io",VITE_APP_PATH:"aaronshih2024",BASE_URL:"/aaronVueProject/",MODE:"production",DEV:!1,PROD:!0},P={data(){return{product:{},CategoryProducts:{},innerHeroImg:b}},methods:{getProduct(){const{id:a}=this.$route.params;this.$http(`${u}/v2/api/${p}/product/${a}`).then(c=>{this.product=c.data.product,console.log(this.product),this.getCategoryProducts()})},getCategoryProducts(){const{category:a}=this.product;this.$http(`${u}/v2/api/${p}/products?category=${a}`).then(c=>{this.CategoryProducts=c.data.products,console.log("\u76F8\u4F3C",c)})},...v(g,["addToCart"])},mounted(){this.getProduct()}},I=h('<div class="container"><h1 class="page_title text-white wow fadeInUp" data-wow-delay=".1s">\u7DDA\u4E0A\u5546\u5E97</h1><ul class="breadcrumb_nav ul_li wow fadeInUp" data-wow-delay=".2s"><li><a href="index.html"><i class="fas fa-home"></i> \u9996\u9801</a></li><li>\u7DDA\u4E0A\u5546\u5E97</li></ul></div><div class="breadcrumb_icon_wrap"><div class="container"><div class="breadcrumb_icon wow fadeInUp" data-wow-delay=".3s"><span class="bg_shape d-flex align-items-center justify-content-center"><div style="background-image:url(../src/assets/image/icon_01.png);background-size:cover;background-position:center center;width:35px;height:35px;transform:rotate(-45deg);"></div></span></div></div></div>',2),k=[I],C={class:"details_section shop_details sec_ptb_120 bg_default_gray"},T={class:"container"},U={class:"row justify-content-lg-between justify-content-md-center justify-content-sm-center"},V={class:"col-lg-6 col-md-7"},$={class:"d-flex justify-content-center bg-white"},A=["src"],E={class:"col-lg-6 col-md-7"},j={class:"details_content wow fadeInUp","data-wow-delay":".2s"},L={class:"details_flex_title"},N={class:"details_title text-uppercase"},R={class:"details_price"},H={class:"price_text"},S={class:"btns_group ul_li"},B=h('<li><div class="quantity_input quantity_boxed"><h4 class="quantity_title text-uppercase">\u6578\u91CF</h4><form action="#"><button type="button" class="input_number_decrement">\u2013</button><input class="input_number" type="text" value="2"><button type="button" class="input_number_increment">+</button></form></div></li>',1),D={class:"product_description_wrap wow fadeInUp","data-wow-delay":".3s"},q=t("ul",{class:"tabs_nav ul_li nav",role:"tablist"},[t("li",null,[t("button",{class:"active","data-bs-toggle":"tab","data-bs-target":"#product_description",type:"button",role:"tab","aria-selected":"true"},"\u7522\u54C1\u6558\u8FF0")]),t("li",null,[t("button",{"data-bs-toggle":"tab","data-bs-target":"#product_additional_info",type:"button",role:"tab","aria-selected":"false"},"\u7522\u54C1\u5167\u5BB9")])],-1),z={class:"tab-content"},F={class:"tab-pane fade show active",id:"product_description",role:"tabpanel"},O={class:"mb-0"},M={class:"tab-pane fade",id:"product_additional_info",role:"tabpanel"},G={class:"mb-0"},J={class:"related_products"},K=t("h4",{class:"area_title text-uppercase mb-0 wow fadeInUp","data-wow-delay":".1s"},"\u76F8\u95DC\u7522\u54C1",-1),Q={class:"row"},W={class:"shop_card wow fadeInUp","data-wow-delay":".1s"},X={class:"share_btns"},Y={type:"button",class:"share_btn"},Z=["src"],tt={class:"item_content"},st={class:"item_title text-uppercase"},et={class:"btns_group"},ot={class:"item_price bg_default_brown"},at=["onClick"];function ct(a,c,nt,it,e,dt){const d=y("RouterLink");return i(),n(r,null,[t("section",{class:"breadcrumb_section text-uppercase",style:f({backgroundImage:`url(${e.innerHeroImg})`})},k,4),t("section",C,[t("div",T,[t("div",U,[t("div",V,[t("div",$,[t("img",{src:e.product.imageUrl,alt:""},null,8,A)])]),t("div",E,[t("div",j,[t("div",L,[t("h2",N,o(e.product.title),1)]),t("p",null,o(e.product.description),1),t("div",R,[t("strong",H,"NT. "+o(e.product.price),1)]),t("ul",S,[B,t("li",null,[t("button",{type:"button",class:"btn btn_border border_black text-uppercase",onClick:c[0]||(c[0]=s=>a.addToCart(a.item.id))},"\u52A0\u5165\u8CFC\u7269\u8ECA")])])])])]),t("div",D,[q,t("div",z,[t("div",F,[t("p",O,o(e.product.description),1)]),t("div",M,[t("p",G,o(e.product.content),1)])])]),t("div",J,[K,t("div",Q,[(i(!0),n(r,null,w(e.CategoryProducts,s=>(i(),n("div",{class:"col-lg-4 col-md-6 col-sm-6",key:s.id},[t("div",W,[t("div",X,[t("button",Y,o(s.category),1)]),l(d,{to:`/product/${s.id}`,class:"item_image"},{default:_(()=>[t("img",{src:s.imageUrl,alt:"image_not_found"},null,8,Z)]),_:2},1032,["to"]),t("div",tt,[t("h3",st,[l(d,{to:`/product/${s.id}`},{default:_(()=>[x(o(s.title),1)]),_:2},1032,["to"])]),t("div",et,[t("span",ot,"NT."+o(s.price),1),t("button",{type:"button",class:"btn btn_border border_black text-uppercase",onClick:rt=>a.addToCart(s.id)},"\u52A0\u5165\u8CFC\u7269\u8ECA",8,at)])])])]))),128))])])])])],64)}const pt=m(P,[["render",ct]]);export{pt as default};
