(window.webpackJsonp=window.webpackJsonp||[]).push([[12,6,8],{297:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n={name:"SanityImage",functional:!0,props:{assetId:{type:String,required:!0},projectId:{type:String,default:null},dataset:{type:String,default:null},auto:{type:String},bg:{type:String},blur:{type:[Number,String],validator:t=>Number(t)>=0&&Number(t)<=100},crop:{type:String,validator:t=>["top","bottom","left","right","center","focalpoint","entropy"].includes(t)},dl:{type:String},dpr:{type:[Number,String],validator:t=>[1,2,3].includes(Number(t))},fit:{type:String,validator:t=>["clip","crop","fill","fillmax","max","scale","min"].includes(t)},flip:{type:String,validator:t=>["h","v","hv"].includes(t)},fm:{type:String,validator:t=>["jpg","pjpg","png","webp"].includes(t)},fpX:{type:[Number,String],validator:t=>Number(t)<=1&&Number(t)>=0},fpY:{type:[Number,String],validator:t=>Number(t)<=1&&Number(t)>=0},h:{type:[Number,String]},invert:{type:Boolean},maxH:{type:[Number,String]},maxW:{type:[Number,String]},minH:{type:[Number,String]},minW:{type:[Number,String]},or:{type:[Number,String],validator:t=>[0,90,180,270].includes(Number(t))},q:{type:[Number,String],validator:t=>Number(t)>=0&&Number(t)<=100},rect:{type:String},sat:{type:[Number,String]},sharpen:{type:[Number,String],validator:t=>Number(t)>=0&&Number(t)<=100},w:{type:[Number,String]}},render(t,{props:e,data:data,parent:r,scopedSlots:n}){const o=["auto","bg","blur","crop","dl","dpr","fit","flip","fm","fpX","fpY","h","invert","maxH","maxW","minH","minW","or","q","rect","sat","sharpen","w"].map((t=>{const r=t.replace(/[A-Z]/,(t=>"-"+t.toLowerCase()));return e[t]?`${r}=${e[t]}`:void 0})).filter(Boolean).join("&"),c=e.assetId.split("-").slice(1),l=c.pop(),d=`https://cdn.sanity.io/images/${e.projectId||r&&r.$sanity.config.projectId}/${e.dataset||r.$sanity&&r.$sanity.config.dataset||"production"}/${c.join("-")}.${l}${o?"?"+o:""}`,m=()=>t("img",{...data,attrs:{...data.attrs,src:d}});return n.default&&n.default({src:d})||m()}};e.SanityImage=n,e.default=n},298:function(t,e,r){"use strict";function n(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}r.d(e,"a",(function(){return n}))},299:function(t,e,r){"use strict";(function(t){r.d(e,"a",(function(){return n}));r(79);encodeURIComponent;const n=String.raw||((t,...e)=>{const r=t.length-1;return t.slice(0,r).reduce(((t,r,n)=>t+r+e[n]),"")+t[r]});const o=function(t){};o.meta={name:"@nuxtjs/sanity"}}).call(this,"/")},300:function(t,e,r){"use strict";r.r(e);var n={props:{post:{type:Object,require:!0,default:function(){return{title:"",body:[],slug:{current:""}}}}}},o=r(14),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"post"},[t.post.imageId?r("div",{staticClass:"image"},[r("SanityImage",{attrs:{"asset-id":t.post.imageId,auto:"format"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.src;return[r("img",{staticClass:"img-responsive",attrs:{src:n,alt:t.post.title}})]}}],null,!1,520370191)})],1):t._e(),t._v(" "),r("h1",[t._v(t._s(t.post.title))]),t._v(" "),r("div",{staticClass:"meta clearfix"},[r("ul",[t._m(0),t._v(" "),t._m(1),t._v(" "),r("li",[t._v("ngày "+t._s((new Date).toLocaleDateString()))]),t._v(" "),t._m(2),t._v(" "),r("li",[t._v("Quan tâm 299")])]),t._v(" "),r("div",{staticClass:"share-this"},[r("i",{staticClass:"fa fa-share-alt"}),t._v(" "),r("a",{attrs:{href:"https://www.facebook.com/sharer/sharer.php?kid_directed_site=0&sdk=joey&u=https%3A%2F%baoveanninhphiabac.ga%2F"+t.post.slug.current+"%2F&display=popup&ref=plugin&src=share_button"}},[t._v("Chia sẻ việc làm")])])]),t._v(" "),r("div",{staticClass:"description"},[t.post.body.length?r("block-content",{key:t.post.body[0]._id,attrs:{blocks:t.post.body[0]}}):t._e()],1),t._v(" "),r("div",{staticClass:"button"},[r("NuxtLink",{attrs:{to:"/tuyen-dung/"+t.post.slug.current+"/"}},[t._v("Đọc tiếp... ")])],1)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[t._v("tìm việc "),r("a",{attrs:{href:""}},[t._v("Tuyển bảo vệ Đệ Nhất")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[t._v("việc làm "),r("a",{attrs:{href:""}},[t._v(" Bảo Vệ Hà Nội")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[r("a",{attrs:{href:""}},[t._v("17 Hồ sơ")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{SanityImage:r(297).default})},308:function(t,e,r){"use strict";r.r(e);var n,o=r(298),c=r(6),l=(r(39),r(299)),d={components:{Post:r(300).default},asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var r,c,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$sanity,c=Object(l.a)(n||(n=Object(o.a)(["*[_type == \"post\" && author._ref == '3aedb093-827e-46dc-bdc0-992b1a8b818c']{_id, title, body, slug, 'imageId': mainImage.asset->_id}"]))),e.next=4,r.fetch(c);case 4:return d=e.sent,e.abrupt("return",{posts:d});case 6:case"end":return e.stop()}}),e)})))()},head:function(){return{title:"Nộp hồ sơ xin làm nhân viên bảo vệ - Công ty bảo vệ Kawasaki",meta:[{hid:"description",name:"description",content:"Công Ty Bảo Vệ Kawasaki nhận hồ sơ xin làm bảo vệ, kcn khai quang tuyển dụng bảo vệ..."}]}}},m=r(14),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"blog-standard"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-10 col-lg-offset-1"},t._l(t.posts,(function(t){return r("Post",{key:t._id,attrs:{post:t}})})),1)])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Post:r(300).default})}}]);