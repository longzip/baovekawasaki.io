(window.webpackJsonp=window.webpackJsonp||[]).push([[14,8,10],{298:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const r={name:"SanityImage",functional:!0,props:{assetId:{type:String,required:!0},projectId:{type:String,default:null},dataset:{type:String,default:null},auto:{type:String},bg:{type:String},blur:{type:[Number,String],validator:t=>Number(t)>=0&&Number(t)<=100},crop:{type:String,validator:t=>["top","bottom","left","right","center","focalpoint","entropy"].includes(t)},dl:{type:String},dpr:{type:[Number,String],validator:t=>[1,2,3].includes(Number(t))},fit:{type:String,validator:t=>["clip","crop","fill","fillmax","max","scale","min"].includes(t)},flip:{type:String,validator:t=>["h","v","hv"].includes(t)},fm:{type:String,validator:t=>["jpg","pjpg","png","webp"].includes(t)},fpX:{type:[Number,String],validator:t=>Number(t)<=1&&Number(t)>=0},fpY:{type:[Number,String],validator:t=>Number(t)<=1&&Number(t)>=0},h:{type:[Number,String]},invert:{type:Boolean},maxH:{type:[Number,String]},maxW:{type:[Number,String]},minH:{type:[Number,String]},minW:{type:[Number,String]},or:{type:[Number,String],validator:t=>[0,90,180,270].includes(Number(t))},q:{type:[Number,String],validator:t=>Number(t)>=0&&Number(t)<=100},rect:{type:String},sat:{type:[Number,String]},sharpen:{type:[Number,String],validator:t=>Number(t)>=0&&Number(t)<=100},w:{type:[Number,String]}},render(t,{props:e,data:data,parent:n,scopedSlots:r}){const o=["auto","bg","blur","crop","dl","dpr","fit","flip","fm","fpX","fpY","h","invert","maxH","maxW","minH","minW","or","q","rect","sat","sharpen","w"].map((t=>{const n=t.replace(/[A-Z]/,(t=>"-"+t.toLowerCase()));return e[t]?`${n}=${e[t]}`:void 0})).filter(Boolean).join("&"),l=e.assetId.split("-").slice(1),c=l.pop(),d=`https://cdn.sanity.io/images/${e.projectId||n&&n.$sanity.config.projectId}/${e.dataset||n.$sanity&&n.$sanity.config.dataset||"production"}/${l.join("-")}.${c}${o?"?"+o:""}`,m=()=>t("img",{...data,attrs:{...data.attrs,src:d}});return r.default&&r.default({src:d})||m()}};e.SanityImage=r,e.default=r},299:function(t,e,n){"use strict";function r(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}n.d(e,"a",(function(){return r}))},300:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return r}));n(81);encodeURIComponent;const r=String.raw||((t,...e)=>{const n=t.length-1;return t.slice(0,n).reduce(((t,n,r)=>t+n+e[r]),"")+t[n]});const o=function(t){};o.meta={name:"@nuxtjs/sanity"}}).call(this,"/")},301:function(t,e,n){"use strict";n.r(e);var r={props:{post:{type:Object,require:!0,default:function(){return{title:"",body:[],slug:{current:""}}}}}},o=n(14),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto"},[n("a",{staticClass:"w-full block h-full",attrs:{href:"/tuyen-dung/"+t.post.slug.current+"/"}},[n("SanityImage",{attrs:{"asset-id":t.post.imageId,auto:"format"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.src;return[n("img",{staticClass:"max-h-40 w-full object-cover",attrs:{src:r,alt:t.post.title}})]}}])}),t._v(" "),n("div",{staticClass:"bg-white dark:bg-gray-800 w-full p-4"},[n("p",{staticClass:"text-indigo-500 text-md font-medium"},[t._v("Tuyển dụng")]),t._v(" "),n("p",{staticClass:"text-gray-800 dark:text-white text-xl font-medium mb-2"},[t._v("\n        "+t._s(t.post.title)+"\n      ")]),t._v(" "),t.post.body.length?n("block-content",{key:t.post.body[0]._id,attrs:{blocks:t.post.body[0]}}):t._e()],1)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SanityImage:n(298).default})},307:function(t,e,n){"use strict";n.r(e);var r,o=n(299),l=n(6),c=(n(39),n(300)),d={components:{Post:n(301).default},asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var n,l,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$sanity,l=Object(c.a)(r||(r=Object(o.a)(["*[_type == \"post\" && author._ref == '3aedb093-827e-46dc-bdc0-992b1a8b818c']{_id, title, body, slug, 'imageId': mainImage.asset->_id}"]))),e.next=4,n.fetch(l);case 4:return d=e.sent,e.abrupt("return",{posts:d});case 6:case"end":return e.stop()}}),e)})))()},head:function(){return{title:"Nộp hồ sơ xin làm nhân viên bảo vệ - Công ty bảo vệ Kawasaki",meta:[{hid:"description",name:"description",content:"Công Ty Bảo Vệ Kawasaki nhận hồ sơ xin làm bảo vệ, kcn khai quang tuyển dụng bảo vệ..."}]}}},m=n(14),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),n("div",{staticClass:"mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12"},t._l(t.posts,(function(t){return n("Post",{key:t._id,attrs:{post:t}})})),1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative pt-16 pb-32 flex content-center items-center justify-center",staticStyle:{"min-height":"75vh"}},[n("div",{staticClass:"absolute top-0 w-full h-full bg-center bg-cover",staticStyle:{"background-image":"url('/images/cong-ty-bao-ve-kawasaki-tuyen-dung.jpg')"}},[n("span",{staticClass:"w-full h-full absolute opacity-10 bg-black",attrs:{id:"blackOverlay"}})]),t._v(" "),n("div",{staticClass:"container relative mx-auto"},[n("div",{staticClass:"items-center flex flex-wrap"},[n("div",{staticClass:"w-full lg:w-6/12 px-4 ml-auto mr-auto text-center"},[n("div",{staticClass:"pr-12"},[n("h1",{staticClass:"text-white font-semibold text-5xl"},[t._v("\n              Thông báo tuyển dụng nhân viên bảo vệ\n            ")]),t._v(" "),n("p",{staticClass:"mt-4 text-lg text-gray-300"},[t._v("\n              Công ty bảo vệ kawasaki cần tuyển dụng nhân viên bảo vệ đi làm\n              ngay.\n            ")])])])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Post:n(301).default})}}]);