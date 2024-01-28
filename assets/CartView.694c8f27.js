import{c as i}from"./cart.3df8cf7f.js";import{_,m as u,e as p,c as n,a as t,F as l,r,t as a,f as h,w as m,d as g,g as b,o as c,l as v,v as f,b as w}from"./index.e77c31ac.js";const y={data(){return{}},computed:{...u(i,["carts","total","final_total"])},components:{Loading},methods:{...p(i,["getCart","deleteItem","updateCartItem"])},mounted(){this.getCart()}},k=g('<section class="breadcrumb_section text-uppercase" style="background-image:url(../src/assets/image/innerHeroImg.jpeg);"><div class="container"><h1 class="page_title text-white wow fadeInUp" data-wow-delay=".1s">\u8CFC\u7269\u8ECA</h1><ul class="breadcrumb_nav ul_li wow fadeInUp" data-wow-delay=".2s"><li><a href="index.html"><i class="fas fa-home"></i> \u9996\u9801</a></li><li>\u8CFC\u7269\u8ECA</li></ul></div><div class="breadcrumb_icon_wrap"><div class="container"><div class="breadcrumb_icon wow fadeInUp" data-wow-delay=".3s"><span class="bg_shape d-flex align-items-center justify-content-center"><div style="background-image:url(../src/assets/image/icon_01.png);background-size:cover;background-position:center center;width:35px;height:35px;transform:rotate(-45deg);"></div></span></div></div></div></section>',1),x={class:"cart_section sec_ptb_120 bg_default_gray"},C={class:"container"},I={class:"cart_table"},N={class:"table"},U=t("thead",null,[t("tr",null,[t("th",{class:"bg-transparent"},"\u7522\u54C1\u540D\u7A31"),t("th",{class:"bg-transparent"},"\u50F9\u683C"),t("th",{class:"bg-transparent"},"\u6578\u91CF"),t("th",{class:"bg-transparent"},"\u5C0F\u8A08")])],-1),V={class:"carttable_product_item"},$={class:"item_image d-flex align-items-center justify-content-center"},S=["src"],j=["onClick"],L=t("i",{class:"bi bi-x"},null,-1),T=[L],q={class:"item_title"},B={class:"price_text1"},D={class:"quantity_input"},F=["onUpdate:modelValue","onChange"],R=["value"],z={class:"price_text2"},A={class:"carttable_footer ul_li_right wow fadeInUp","data-wow-delay":".1s"},E={class:"total_price text-uppercase"},H=t("span",null,"\u7E3D\u8A08:",-1),M=w("\u7D50\u5E33");function G(o,J,K,O,P,Q){const d=b("RouterLink");return c(),n(l,null,[k,t("section",x,[t("div",C,[t("div",I,[t("table",N,[U,t("tbody",null,[(c(!0),n(l,null,r(o.carts,e=>(c(),n("tr",{"data-wow-delay":".1s",class:"cart_item",key:e.id},[t("td",null,[t("div",V,[t("div",$,[t("img",{src:e.product.imageUrl,alt:""},null,8,S)]),t("button",{type:"button",class:"remove_btn",onClick:s=>o.deleteItem(e)},T,8,j),t("h3",q,a(e.product.title),1)])]),t("td",null,[t("span",B,"NT. "+a(e.product.price),1)]),t("td",null,[t("div",D,[v(t("select",{name:"",id:"",class:"form-control","onUpdate:modelValue":s=>e.qty=s,onChange:s=>o.updateCartItem(e)},[(c(),n(l,null,r(20,s=>t("option",{value:s,key:`${s}dlskj`},a(s),9,R)),64))],40,F),[[f,e.qty]])])]),t("td",null,[t("span",z,"NT. "+a(e.total),1)])]))),128))])])]),t("ul",A,[t("li",null,[t("div",E,[H,t("span",null,"NT. "+a(o.total),1)])]),t("li",null,[h(d,{class:"btn btn_primary text-uppercase",to:"checkout"},{default:m(()=>[M]),_:1})])])])])],64)}const Y=_(y,[["render",G]]);export{Y as default};
