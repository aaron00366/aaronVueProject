import{i as l}from"./innerHeroImg.d782344b.js";import{_ as n,c as r,a as e,n as _,b as a,t as i,F as d,o as h,d as u}from"./index.28c1b21c.js";const{VITE_APP_URL:m,VITE_APP_PATH:p}={VITE_APP_URL:"https://ec-course-api.hexschool.io",VITE_APP_PATH:"aaronshih2024",BASE_URL:"/aaronVueProject/",MODE:"production",DEV:!1,PROD:!0},g={data(){return{article:[],innerHeroImg:l}},methods:{getArticle(){const{id:o}=this.$route.params;console.log(o);const c=`${m}/api/${p}/article/${o}`;this.$http.get(c).then(s=>{this.article=s.data.article,console.log("\u6587\u7AE0",this.article)}).catch(s=>{console.log(s)})}},mounted(){this.getArticle()}},f=u('<div class="container"><h1 class="page_title text-white wow fadeInUp" data-wow-delay=".1s">\u76F8\u95DC\u6587\u7AE0</h1><ul class="breadcrumb_nav ul_li wow fadeInUp" data-wow-delay=".2s"><li><a href="index.html"><i class="fas fa-home"></i> \u9996\u9801</a></li><li>\u76F8\u95DC\u6587\u7AE0</li></ul></div><div class="breadcrumb_icon_wrap"><div class="container"><div class="breadcrumb_icon wow fadeInUp" data-wow-delay=".3s"><span class="bg_shape d-flex align-items-center justify-content-center"><div style="background-image:url(../src/assets/image/icon_01.png);background-size:cover;background-position:center center;width:35px;height:35px;transform:rotate(-45deg);"></div></span></div></div></div>',2),b=[f],w={class:"blog_section sec_ptb_120 bg_default_gray"},v={class:"container"},x={class:"row justify-content-lg-between justify-content-md-center justify-content-sm-center"},y={class:"col-lg-8 col-md-8"},P={class:"blog_standard"},I={class:"item_image",href:"blog_details.html"},A=["src"],V={class:"item_content"},E={class:"post_meta ul_li"},T=e("i",{class:"bi bi-person-fill"},null,-1),U=e("i",{class:"bi bi-calendar-fill"},null,-1),j={class:"item_title text-uppercase"},k={href:"blog_details.html"};function D(o,c,s,H,t,B){return h(),r(d,null,[e("section",{class:"breadcrumb_section text-uppercase",style:_({backgroundImage:`url(${t.innerHeroImg})`})},b,4),e("section",w,[e("div",v,[e("div",x,[e("div",y,[e("div",P,[e("a",I,[e("img",{src:t.article.imageUrl,alt:"image_not_found",style:{"object-fit":"cover",height:"280px"}},null,8,A)]),e("div",V,[e("ul",E,[e("li",null,[T,a(" "+i(t.article.author),1)]),e("li",null,[U,a(" "+i(new Date(t.article.create_at)),1)])]),e("h3",j,[e("a",k,i(t.article.title),1)]),e("p",null,i(t.article.description),1)])])])])])])],64)}const $=n(g,[["render",D]]);export{$ as default};
