import{_ as l,c as n,a as e,b as o,t as i,F as r,d as _,o as d}from"./index.e77c31ac.js";const{VITE_APP_URL:h,VITE_APP_PATH:u}={VITE_APP_URL:"https://ec-course-api.hexschool.io",VITE_APP_PATH:"aaronshih2024",BASE_URL:"/aaronVueProject/",MODE:"production",DEV:!1,PROD:!0},p={data(){return{article:[]}},methods:{getArticle(){const{id:c}=this.$route.params;console.log(c);const a=`${h}/api/${u}/article/${c}`;this.$http.get(a).then(s=>{this.article=s.data.article,console.log("\u6587\u7AE0",this.article)}).catch(s=>{console.log(s)})}},mounted(){this.getArticle()}},g=_('<section class="breadcrumb_section text-uppercase" style="background-image:url(../src/assets/image/innerHeroImg.jpeg);"><div class="container"><h1 class="page_title text-white wow fadeInUp" data-wow-delay=".1s">\u76F8\u95DC\u6587\u7AE0</h1><ul class="breadcrumb_nav ul_li wow fadeInUp" data-wow-delay=".2s"><li><a href="index.html"><i class="fas fa-home"></i> \u9996\u9801</a></li><li>\u76F8\u95DC\u6587\u7AE0</li></ul></div><div class="breadcrumb_icon_wrap"><div class="container"><div class="breadcrumb_icon wow fadeInUp" data-wow-delay=".3s"><span class="bg_shape d-flex align-items-center justify-content-center"><div style="background-image:url(../src/assets/image/icon_01.png);background-size:cover;background-position:center center;width:35px;height:35px;transform:rotate(-45deg);"></div></span></div></div></div></section>',1),m={class:"blog_section sec_ptb_120 bg_default_gray"},b={class:"container"},f={class:"row justify-content-lg-between justify-content-md-center justify-content-sm-center"},w={class:"col-lg-8 col-md-8"},v={class:"blog_standard"},x={class:"item_image",href:"blog_details.html"},y=["src"],P={class:"item_content"},A={class:"post_meta ul_li"},V=e("i",{class:"bi bi-person-fill"},null,-1),E=e("i",{class:"bi bi-calendar-fill"},null,-1),I={class:"item_title text-uppercase"},j={href:"blog_details.html"};function T(c,a,s,U,t,k){return d(),n(r,null,[g,e("section",m,[e("div",b,[e("div",f,[e("div",w,[e("div",v,[e("a",x,[e("img",{src:t.article.imageUrl,alt:"image_not_found",style:{"object-fit":"cover",height:"280px"}},null,8,y)]),e("div",P,[e("ul",A,[e("li",null,[V,o(" "+i(t.article.author),1)]),e("li",null,[E,o(" "+i(new Date(t.article.create_at)),1)])]),e("h3",I,[e("a",j,i(t.article.title),1)]),e("p",null,i(t.article.description),1)])])])])])])],64)}const B=l(p,[["render",T]]);export{B as default};
