import{c as f}from"./cart.c078fefe.js";import{_ as b,e as y,m as I,c as n,a as A,n as u,t as e,f as i,w as l,F as m,r as g,d as p,b as o,h as w,o as d}from"./index.d4a218a9.js";import{_ as U}from"./icon_01.289ddc78.js";import{_ as x}from"./cafeImg.7646b6b6.js";const E="/aaronVueProject/assets/img_01.39da9b2e.png",V="/aaronVueProject/assets/bg_01.aaf554e2.png",j="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAjCAMAAABfPfHgAAAApVBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABU/knhAAAAN3RSTlMABuHTCxVAzcl76bVnVEs2GlmKa1FE5teoPL25okclHxLcrYHGX1zrn5pv8cGSjjIqhXMudmL9hon0yQAAAi5JREFUOMtdU+m2oyAYCyCCW627VWsXu++9vXfe/9EG0E6dmx94PuJJQkT8wyJZS8aYXCcL/Ib1XFXO5P64z51qdZv+T055NyfoQex6NRmTp8tSa0dO7ERaN8n9D7nN1bttU4jyWIri0ALzfPcmX3kK7Gg5M9OspIoJ8tfgU18B342Mv14iV+levT7HZMVhu3MohCIElK5rgw/J1jGsSweN45+jeXYXC/HaiLEQAbOMZREUxtxiKWZsqmUEQXMD33UljRHT8rnjuDUgQpslHsgmwOO8P6UWrPTknh8INgReAsBpwKUNZGzbH77IAFtyNM6IhU1TAAFVJDKx7FlfK5vDVj4I/Ar6nUop+yaVhcNVh5f21+XLljrq8gFLaBHObEwKDoRnWp9qeg4VmSojxqFQXkGqWLHeDwHZeoqNVRvXEhoZXSDUNRMAZg3cEAuVrq/yAER5gjf8PAIO62Fq6VZ/i1qVAVWHp/vf0hYDJvtARb4x5pUeY/pWBfvP3bFd6hCVNPO//YwDxKHu4Kp22ekupNGF0d6Ie8LeY1Cp9p1CdoEd2sFTFo6axffA8qVZIzcXhcj3ETdZaH/pn8P1C9mDLEnLZp9zqs28H8mmvz3Opnd8UbVPvHjogPE+oxh66WqCaDX/OXQEnG3RIyqmIHGZTOgO8iyrht4RV3ijjhHSYy33EmmmsnmnqXJ5o53B8YCpPfSV1Ovj+I/0N/5obPfuYjy6bosRmi+MkQxKfwEZJii2xkSNTQAAAABJRU5ErkJggg==",k="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAjCAMAAADL21gSAAAAqFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAs30iGAAAAN3RSTlMABPpz8723sl5I9uveTRPn4pduZBgI8AzIaTzZ1s2MgkMvKdLCr6SHJSEPrJJ5US18WTc0HFae7VCxSQAAAkNJREFUOMt1UteW6jAMlB07vZIGhJAQeu/r//+z60jLuecsMA/OoBlbYxn4gu3R9F1PHh+af7OsRHywneCgxOibZ1TUDtNftlgM1Pqjha3cFEk+rFlTcPuTx/JmxBIvb/jdKMp300+xYddck1bNAuVA6aVvnoHqYD7Xm1k83fGBruzl/y45fjYqZeNrqJkt2HLYl1KfHJlh+v4wGQNYC9jXWJtPO4XhxhG1iNQyiQ1LmCnfBCSd3cfKRPWGpim3ZXqqtWApEyQN5uhnroOsjTFqC3JwqvqC4do7htL+4BQ7ZEaFUXWUZixCutyY7uE/pxYFXuqueIXE3PAzlg4emnXouiF7PALdGaOX0fW3dqAeoQiw4PBMP2aOd8lWe0Cc1Fav/rH16DlM3fVXmxxbrvvQgACevDRJGPcTqQ3kFx/iC5kMj7F4/VA32r3SS/REHvKTLejKD7FpPFgu8MdaZHrVuekor5yviA6H/B4ovKytUC4CUnL/0CniPyrN+LFnV0X/Xt/WCyW8N1GOz1SXvonplEGa1HEJyTz3sDiKJ5IB3GXxfEkYkLI7g5hhk+UuDEx3uX1JtsAWmMUsOY5fVb6ILHpE2l9gfkqVyaQ/vDIGAY3jBUu+WB4F6bwfQQJ/cdNzD0Lyr+9uBqUXwBuk1ONDNl1s3DPg5P9iy0fhuuvjG5OtuMFkCh9gqxasutMDqraiG+mOn7Dmp9AStj6p8wyewmcYPMmcGzSLmVIX+IZ2UiSn1oyqKIXvYLY1iSvZPD6J/wCs+jFdnn3s7gAAAABJRU5ErkJggg==",C="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAkCAMAAABL02EiAAAAqFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAs30iGAAAAN3RSTlMA9oI26eevqEcv9CESxo4Vzn8mGNqKOstWQfxDCgb48GXj1LWia+3fvXEsJHhfwZt7S9WZlA4NUpl4lQAAAWFJREFUKM990NeSgjAYhuEfEIIxIFgIHWkK2Lfl/u9sExB3Iju+w+Q7eCYcBHjmTJHLdjBU7z1NamM/ZJepcro6CkZy+6foq4VUMcot1KVydh2A7Nul1Jkpx15OegxSFmOfYn9wLYOPD04mLt1er1C7URsEEM9aGYJ0bblaugBf+ZalQuBs4eBCVcoQ52ch2wboTpaO/4eqEBwgL+2xU7KzNS282riwkQ6ZZYx9Ja4ReGFpVMhoZqAEIGUqiZgjF/NViJj5W/HMi/PsYnqY2NSqV1w0Nd/yXFecuarh9QFRa6ULQcCLAnEiIZvu9BADYE0Zc9YARi+e+ycVRZRW/0ic+db5juOpEHwvIi8lU0k2qmG7m2Qq4KcfYejDVDhRy4dRtFFKQkjSf6TsxdwO0jKFh7E4WavhZZEy48glWkbms4hECunMaNG9fetAlkCJxfC3Duu5VB0GYvwMnNlL+2GKX4CiJJKXPBO9AAAAAElFTkSuQmCC",P="/aaronVueProject/assets/offerImg.56c85cb2.jpg",{VITE_APP_URL:r,VITE_APP_PATH:_}={VITE_APP_URL:"https://ec-course-api.hexschool.io",VITE_APP_PATH:"aaronshih2024",BASE_URL:"/aaronVueProject/",MODE:"production",DEV:!1,PROD:!0},B={data(){return{products:[],articles:[],indexArticles:[],tempProduct:[],indexProduct:[],category:"\u5168\u90E8",orderData:{data:{user:{name:"",email:"",tel:"",address:""},message:""}},bannerImg:E,opentimeImg:V}},methods:{getData(){const t=`${r}/api/${_}/products/all`;this.$http.get(t).then(s=>{this.products=s.data.products,console.log(s.data.products)}).catch(s=>{console.log(s)})},getIndexSixData(){const t=`${r}/api/${_}/products`;this.$http.get(t).then(s=>{this.indexProduct=s.data.products.splice(0,6),console.log("\u9996\u9801\u7522\u54C1",this.indexProduct)}).catch(s=>{console.log(s)})},getArticles(){const t=`${r}/api/${_}/articles`;this.$http.get(t).then(s=>{this.articles=s.data.articles,console.log("\u6587\u7AE0",this.articles)}).catch(s=>{console.log(s)})},getIndexArticles(){const t=`${r}/api/${_}/articles`;this.$http.get(t).then(s=>{this.indexArticles=s.data.articles.splice(0,3)}).catch(s=>{console.log(s)})},...y(f,["getCart","addToCart"]),openSiderbar(){console.log("dsds")},deleteItem(t){this.$http.delete(`${r}/api/${_}/cart/${t.id}`).then(s=>{console.log("\u522A\u9664\u8CFC\u7269\u8ECA\u54C1\u9805",s),this.getCarts()})}},computed:{...I(f,["carts","total","final_total"])},mounted(){this.getData(),this.getIndexSixData(),this.getCart(),this.getArticles(),this.getIndexArticles()}},N={class:"slider_section slider_dark homeBanner"},F={class:"main_slider pb-0 wow fadeInUp","data-wow-delay":".1s"},S={class:"container"},q={class:"row justify-content-lg-start justify-content-md-center"},M={class:"col-lg-6 col-md-8"},R={class:"title_text text-white","data-aos":"fade-up"},L={"data-aos":"fade-up","data-aos-delay":"300"},D={class:"btns_group ul_li","data-aos":"fade-up","data-aos-delay":"500"},X=A("div",{class:"slider_social_wrap",style:{height:"38px"}},[A("div",{class:"container maxw_1560"})],-1),H=p('<section class="feature_primary_section"><div class="container"><div class="row feature_primary_section_row"><div class="col-lg-3 col-md-4 col-sm-6" data-aos="fade-down"><div class="feature_primary wow fadeInUp" data-wow-delay=".1s"><div class="item_icon"><span class="item_serial">1</span><span class="d-flex align-items-center justify-content-center"><img src="'+U+'" alt=""></span></div><h3 class="item_title">\u7368\u7279\u98A8\u5473</h3><p class="mb-0"> \u6211\u5011\u7684\u5496\u5561\uFF0C\u6563\u767C\u8457\u7368\u7279\u4E14\u64B2\u9F3B\u7684\u98A8\u5473\uFF0C\u6210\u70BA\u60A8\u5473\u857E\u7684\u7F8E\u597D\u4EAB\u53D7 </p></div></div><div class="col-lg-3 col-md-4 col-sm-6" data-aos="fade-down" data-aos-delay="50"><div class="feature_primary wow fadeInUp" data-wow-delay=".2s"><div class="item_icon"><span class="item_serial">2</span><span class="d-flex align-items-center justify-content-center"><img src="'+j+'" alt=""></span></div><h3 class="item_title">\u65B0\u9BAE\u70D8\u7119</h3><p class="mb-0"> \u6BCF\u4E00\u676F\u5496\u5561\u90FD\u662F\u7531\u65B0\u9BAE\u70D8\u7119\u7684\u8C46\u5B50\u88FD\u4F5C\u800C\u6210\uFF0C\u5E36\u4F86\u6E90\u6E90\u4E0D\u7D55\u7684\u7F8E\u5473\u9999\u6C23 </p></div></div><div class="col-lg-3 col-md-4 col-sm-6" data-aos="fade-down" data-aos-delay="100"><div class="feature_primary wow fadeInUp" data-wow-delay=".3s"><div class="item_icon"><span class="item_serial">3</span><span class="d-flex align-items-center justify-content-center"><img src="'+k+'" alt=""></span></div><h3 class="item_title">\u7CBE\u9078\u5496\u5561\u8C46</h3><p class="mb-0"> \u7CBE\u5FC3\u6311\u9078\u7684\u5496\u5561\u8C46\uFF0C\u8B93\u60A8\u54C1\u5690\u5230\u9AD8\u54C1\u8CEA\u4E14\u8C50\u5BCC\u53E3\u611F\u7684\u5496\u5561\u9AD4\u9A57 </p></div></div><div class="col-lg-3 col-md-4 col-sm-6" data-aos="fade-down" data-aos-delay="150"><div class="feature_primary wow fadeInUp" data-wow-delay=".4s"><div class="item_icon"><span class="item_serial">4</span><span class="d-flex align-items-center justify-content-center"><img src="'+C+'" alt=""></span></div><h3 class="item_title">\u7368\u7279\u6C1B\u570D</h3><p class="mb-0"> \u6211\u5011\u5496\u5561\u5E97\u7279\u6709\u7684\u6C1B\u570D\uFF0C\u71DF\u9020\u51FA\u8B93\u4EBA\u6D41\u9023\u5FD8\u8FD4\u7684\u7368\u7279\u9B45\u529B\u8207\u8212\u9069\u611F </p></div></div></div></div></section>',1),J={class:"shop_section sec_ptb_120 bg_gray"},O={class:"container"},T={class:"section_title"},Z={class:"row align-items-center"},G=A("div",{class:"col-lg-6 col-md-8"},[A("h2",{class:"small_title wow fadeInUp","data-wow-delay":".1s"},[A("i",{class:"bi bi-cup-hot-fill"}),o(" \u7DDA\u4E0A\u5546\u5E97")]),A("h3",{class:"big_title wow fadeInUp","data-wow-delay":".2s"}," \u6211\u5011\u7684\u6700\u65B0\u7522\u54C1 ")],-1),Y={class:"col-lg-6 col-md-4"},Q={class:"abtn_wrap text-lg-end text-md-end wow fadeInUp","data-wow-delay":".3s"},K=o("\u67E5\u770B\u6240\u6709\u7522\u54C1"),W={class:"row justify-content-center"},$={class:"shop_card","data-aos":"fade-down"},z={class:"share_btns"},AA={class:"share_btn"},sA=["src"],tA={class:"item_content"},aA={class:"item_title"},eA={class:"btns_group"},oA={class:"item_price bg_default_brown"},iA=["onClick"],lA={class:"about_section sec_ptb_120"},cA={class:"container"},nA={class:"row align-items-center justify-content-lg-between"},dA=A("div",{class:"col-lg-6 col-md-6 order-last","data-aos":"fade-left"},[A("div",{class:"about_image1"},[A("img",{src:x,alt:"image_not_found"})])],-1),rA={class:"col-lg-6 col-md-6","data-aos":"fade-right","data-aos-delay":"50"},_A={class:"about_content"},pA=p('<div class="section_title"><h2 class="small_title"><i class="bi bi-cup-hot-fill"></i>\u95DC\u65BC\u6211\u5011</h2><h3 class="big_title wow fadeInUp" data-wow-delay=".1s"> \u6211\u5011\u7684\u5496\u5561\u4E4B\u65C5 </h3></div><ul class="about_info ul_li_block"><li class="wow fadeInUp" data-wow-delay=".3s"><h4>\u8FFD\u5C0B\u5496\u5561\u7684\u7CBE\u9AD3</h4><p class="mb-0"> \u6211\u5011\u7684\u65C5\u7A0B\u59CB\u65BC\u5C0D\u5496\u5561\u6DF1\u539A\u7684\u71B1\u611B\uFF0C\u6211\u5011\u63A2\u5C0B\u8457\u5496\u5561\u7684\u5404\u7A2E\u98A8\u5473\u3001\u6587\u5316\u548C\u6280\u85DD\u3002 </p></li><li class="wow fadeInUp" data-wow-delay=".4s"><h4>\u54C1\u8CEA\u8207\u5320\u5FC3\u70D8\u7119</h4><p class="mb-0"> \u6211\u5011\u5805\u6301\u9AD8\u54C1\u8CEA\u7684\u5496\u5561\u8C46\u548C\u5320\u5FC3\u70D8\u7119\uFF0C\u70BA\u60A8\u6253\u9020\u7CBE\u7DFB\u3001\u7D30\u81A9\u7684\u5496\u5561\u9957\u5BB4\u3002 </p></li><li class="wow fadeInUp" data-wow-delay=".3s"><h4>\u5171\u4EAB\u3001\u4EA4\u6D41\u8207\u6EAB\u6696</h4><p class="mb-0"> \u6211\u5011\u52AA\u529B\u71DF\u9020\u4E00\u500B\u6EAB\u99A8\u7684\u793E\u5340\u7A7A\u9593\uFF0C\u4FC3\u9032\u4EBA\u8207\u4EBA\u4E4B\u9593\u7684\u4EA4\u6D41\u8207\u5171\u4EAB\u3002 </p></li><li class="wow fadeInUp" data-wow-delay=".3s"><h4>\u878D\u5408\u5275\u610F\u7684\u5496\u5561\u9AD4\u9A57</h4><p class="mb-0"> \u6211\u5011\u71B1\u8877\u65BC\u5275\u65B0\u8207\u85DD\u8853\uFF0C\u70BA\u60A8\u5E36\u4F86\u878D\u5408\u5275\u610F\u7684\u7368\u7279\u5496\u5561\u9AD4\u9A57\uFF0C\u6BCF\u4E00\u676F\u90FD\u662F\u6211\u5011\u5C0D\u71B1\u60C5\u7684\u8868\u9054\u3002 </p></li></ul>',2),hA={class:"btns_group ul_li wow fadeInUp","data-wow-delay":".5s"},mA=o("\u67E5\u770B\u66F4\u591A"),fA=A("li",null,null,-1),uA={class:"offer_section"},gA={class:"container-fluid p-0"},wA={class:"row g-0"},vA=A("div",{class:"col-lg-4","data-aos":"fade-right"},[A("div",{class:"offer_video"},[A("div",{class:"overlay"}),A("img",{src:P,alt:"image_not_found"})])],-1),bA={class:"col-lg-8","data-aos":"fade-left","data-aos-delay":"50"},yA=p('<div class="offer_area"><div class="offer_content"><div class="section_title"><h2 class="small_title"><i class="bi bi-cup-hot-fill"></i> \u6211\u5011\u63D0\u4F9B</h2><h3 class="big_title wow fadeInUp" data-wow-delay=".2s"> \u7CBE\u9078\u5496\u5561\u6587\u5316\uFF1A<br>\u6211\u5011\u7368\u7279\u7684\u54C1\u5473\u8207\u670D\u52D9 </h3></div><p class="wow fadeInUp" data-wow-delay=".3s"> \u6211\u5011\u4E0D\u50C5\u63D0\u4F9B\u5496\u5561\uFF0C\u66F4\u70BA\u60A8\u5E36\u4F86\u7684\u662F\u4E00\u7A2E\u751F\u6D3B\u65B9\u5F0F\u548C\u54C1\u5473\u9AD4\u9A57\u3002\u6211\u5011\u7CBE\u5FC3\u6311\u9078\u4E16\u754C\u5404\u5730\u6700\u512A\u8CEA\u7684\u5496\u5561\u8C46\uFF0C\u4EE5\u6700\u7D30\u81A9\u7684\u70D8\u7119\u5DE5\u85DD\u5448\u73FE\u51FA\u9BAE\u660E\u7684\u98A8\u5473\u548C\u8C50\u5BCC\u7684\u5C64\u6B21\u611F\u3002\u7121\u8AD6\u60A8\u662F\u71B1\u611B\u6FC3\u7E2E\u5496\u5561\u3001\u62FF\u9435\u3001\u5361\u5E03\u5947\u8AFE\uFF0C\u9084\u662F\u71B1\u8877\u65BC\u54C1\u5617\u5404\u7A2E\u7279\u8272\u624B\u6C96\u5496\u5561\uFF0C\u6211\u5011\u90FD\u80FD\u6EFF\u8DB3\u60A8\u7684\u53E3\u5473\u548C\u559C\u597D\u3002\u6B64\u5916\uFF0C\u6211\u5011\u4E5F\u63D0\u4F9B\u7CBE\u9078\u7684\u5496\u5561\u8C46\u4F9B\u60A8\u8CFC\u8CB7\uFF0C\u8B93\u60A8\u53EF\u4EE5\u5728\u5BB6\u4E2D\u540C\u6A23\u4EAB\u53D7\u5230\u6211\u5011\u5E97\u88E1\u7684\u7F8E\u5473\u5496\u5561\u3002\u6211\u5011\u5E97\u5167\u6C1B\u570D\u8212\u9069\uFF0C\u662F\u8207\u670B\u53CB\u805A\u6703\u3001\u8207\u646F\u611B\u5171\u5EA6\u6642\u5149\u7684\u7D55\u4F73\u5834\u6240\u3002\u7121\u8AD6\u60A8\u662F\u5496\u5561\u611B\u597D\u8005\uFF0C\u6216\u50C5\u662F\u60F3\u8981\u653E\u9B06\u4F11\u9592\u7684\u4E00\u523B\uFF0C\u6211\u5011\u90FD\u671F\u5F85\u70BA\u60A8\u5E36\u4F86\u6700\u7F8E\u597D\u7684\u5496\u5561\u9AD4\u9A57\u3002 </p></div></div>',1),IA={class:"row g-0"},UA=p('<div class="offerinfo_col col-lg-4"><div class="offer_info_item table_reservation_contact wow fadeInUp" data-wow-delay=".1s"><h3 class="offer_info_title">\u8A02\u4F4D. . . .<i class="fal fa-heart"></i></h3><ul class="ul_li_block"><li><div class="item_icon"><i class="bi bi-telephone-fill"></i></div><div class="item_content"><span>(02) 23346789</span><span>+886 0978-724-555</span></div></li><li><div class="item_icon"><i class="bi bi-envelope-fill"></i></div><div class="item_content"><span>coffeee@webmail.com</span><span>coffeeee@mail.com</span></div></li><li><div class="item_icon"><i class="bi bi-house-add-fill"></i></div><div class="item_content"><span>08744,Sadar pur 8973</span><span>08744,Sadar pur 8973</span></div></li></ul><a class="btn btn_secondary" href="contact.html">\u806F\u7D61\u6211\u5011</a></div></div>',1),xA={class:"offerinfo_col col-lg-4"},EA=p('<h3 class="offer_info_title text-white">\u71DF\u696D\u6642\u9593. . . . <i class="fal fa-clock"></i></h3><ul class="ul_li_block"><li> \u661F\u671F\u4E00 <span>9:00 - 18:00</span></li><li> \u661F\u671F\u4E8C <span>10:00 - 18:00</span></li><li> \u661F\u671F\u4E09 <span>11:00 - 18:00</span></li><li> \u661F\u671F\u56DB <span>12:00 - 18:00</span></li><li> \u661F\u671F\u4E94 <span>14:00 - 18:00</span></li><li> \u661F\u671F\u516D <span>16:00 - 18:00</span></li><li> \u661F\u671F\u65E5 <span>\u4F11\u606F</span></li></ul>',2),VA=[EA],jA={class:"blog_section sec_ptb_120"},kA={class:"container"},CA=A("div",{class:"section_title text-center"},[A("h2",{class:"small_title wow fadeInUp","data-wow-delay":".1s"},[A("i",{class:"bi bi-cup-hot-fill"}),o(" \u76F8\u95DC\u6587\u7AE0")]),A("h3",{class:"big_title wow fadeInUp","data-wow-delay":".2s"},"\u6700\u65B0\u6587\u7AE0")],-1),PA={class:"row justify-content-center"},BA={class:"blog_grid"},NA={class:"item_image",href:"blog_details.html"},FA=["src"],SA={class:"item_content"},qA={class:"item_title"},MA={href:"blog_details.html"},RA={class:"multiline-ellipsis"},LA=A("a",{class:"btn_text",href:"blog_details.html"},[A("span",null,"\u67E5\u770B\u66F4\u591A"),A("i",{class:"bi bi-arrow-right-short"})],-1),DA={class:"load_more text-center wow fadeInUp","data-wow-delay":".1s"},XA=o(" \u76F8\u95DC\u6587\u7AE0 ");function HA(t,s,JA,OA,h,TA){const c=w("RouterLink"),v=w("router-link");return d(),n(m,null,[A("section",N,[A("div",F,[A("div",{class:"slider_item text-white",style:u({backgroundImage:`url(${h.bannerImg})`})},[A("div",S,[A("div",q,[A("div",M,[A("h3",R,e(t.$t("header.titleText")),1),A("p",L,e(t.$t("header.subtitleText")),1),A("ul",D,[A("li",null,[i(c,{to:"/products",class:"btn btn_primary"},{default:l(()=>[o(e(t.$t("header.actBtn")),1)]),_:1})])])])])])],4)]),X]),H,A("section",J,[A("div",O,[A("div",T,[A("div",Z,[G,A("div",Y,[A("div",Q,[i(v,{class:"btn btn_border border_black",to:"/products"},{default:l(()=>[K]),_:1})])])])]),A("div",W,[(d(!0),n(m,null,g(h.indexProduct,a=>(d(),n("div",{class:"col-lg-4 col-md-6 col-sm-6",key:a.title},[A("div",$,[A("div",z,[A("div",AA,e(a.category),1)]),i(c,{to:`/product/${a.id}`,class:"item_image"},{default:l(()=>[A("img",{src:a.imageUrl,alt:"image_not_found"},null,8,sA)]),_:2},1032,["to"]),A("div",tA,[A("h3",aA,[i(c,{to:`/product/${a.id}`},{default:l(()=>[o(e(a.title),1)]),_:2},1032,["to"])]),A("div",eA,[A("span",oA,"NT."+e(a.price),1),A("button",{type:"button",class:"btn btn_border border_black",onClick:ZA=>t.addToCart(a.id)},"\u52A0\u5165\u8CFC\u7269\u8ECA",8,iA)])])])]))),128))])])]),A("section",lA,[A("div",cA,[A("div",nA,[dA,A("div",rA,[A("div",_A,[pA,A("ul",hA,[A("li",null,[i(c,{class:"btn btn_primary",to:"/about"},{default:l(()=>[mA]),_:1})]),fA])])])])])]),A("section",uA,[A("div",gA,[A("div",wA,[vA,A("div",bA,[yA,A("div",IA,[UA,A("div",xA,[A("div",{class:"offer_info_item opening_time text-white wow fadeInUp","data-wow-delay":".2s",style:u({backgroundImage:`url(${h.opentimeImg})`})},VA,4)])])])])])]),A("section",jA,[A("div",kA,[CA,A("div",PA,[(d(!0),n(m,null,g(h.indexArticles,a=>(d(),n("div",{class:"col-lg-4 col-md-6 col-sm-6",key:a.id,"data-aos":"fade-down"},[A("div",BA,[A("a",NA,[A("img",{src:a.imageUrl,alt:"image_not_found",style:{"object-fit":"cover",height:"250px"}},null,8,FA)]),A("div",SA,[A("h3",qA,[A("a",MA,e(a.title),1)]),A("p",RA,e(a.description),1),LA])])]))),128))]),A("div",DA,[i(c,{class:"btn btn_border border_black",to:"/articles",role:"button"},{default:l(()=>[XA]),_:1})])])])],64)}const WA=b(B,[["render",HA]]);export{WA as default};
