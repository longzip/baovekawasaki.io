(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{299:function(t,e,n){"use strict";function r(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}n.d(e,"a",(function(){return r}))},300:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return r}));n(81);encodeURIComponent;const r=String.raw||((t,...e)=>{const n=t.length-1;return t.slice(0,n).reduce(((t,n,r)=>t+n+e[r]),"")+t[n]});const o=function(t){};o.meta={name:"@nuxtjs/sanity"}}).call(this,"/")},308:function(t,e,n){"use strict";n.r(e);var r,o=n(299),l=n(6),c=(n(122),n(40),n(39),n(300)),d={asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var n,l,d,h;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.params,l=t.$sanity,d=Object(c.a)(r||(r=Object(o.a)(['*[_type == "post" && slug.current == "','"][0]{_id, title, body, slug, \'imageId\': mainImage.asset->_id, "imageUrl": mainImage.asset->url}'])),n.slug),e.next=4,l.fetch(d);case 4:return h=e.sent,e.abrupt("return",{post:h});case 6:case"end":return e.stop()}}),e)})))()},head:function(){return{title:this.post.title,meta:[{hid:"description",name:"description",content:this.post.body[0].children[0].text}],__dangerouslyDisableSanitizers:["script"],script:[{type:"application/ld+json",json:{"@context":"https://schema.org/","@type":"JobPosting",title:this.post.body[1].children[0].text,description:"<p>"+this.post.body.map((function(t){return t.children.map((function(t){return t.text})).join("<br> ")})).join("<br> ")+"</p>",identifier:{"@type":"PropertyValue",name:"Hồ Thị Thắm",value:"84978333963"},datePosted:(new Date).toISOString(),validThrough:new Date(Date.now()+25056e5).toISOString(),employmentType:"CONTRACTOR",hiringOrganization:{"@type":"Organization",name:"Công Ty TNHH Liên Doanh Dịch Vụ Bảo Vệ Kawasaki Việt Nam",sameAs:"https://baovekawasaki.tk",logo:"https://baovekawasaki.tk/images/logo.png"},jobLocation:{"@type":"Place",address:{"@type":"PostalAddress",streetAddress:"Tầng 1, nhà chung cư 12 tầng, Thị Trấn Quang Minh, Huyện Mê Linh, Thành phố Hà Nội, Việt Nam",addressLocality:"Hà Nội",addressRegion:"Hà Nội",postalCode:"12907",addressCountry:"VN"}},baseSalary:{"@type":"MonetaryAmount",currency:"VND",value:{"@type":"QuantitativeValue",minValue:14e3,maxValue:16e3,unitText:"HOUR"}}}}]}}},h=n(14),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.post?n("article",{staticClass:"blog-detail"},[n("SocialHead",{attrs:{title:t.post.title,description:t.post.body[0].children[0].text,image:t.post.imageUrl}}),t._v(" "),n("div",{staticClass:"relative pt-16 pb-32 flex content-center items-center justify-center",staticStyle:{"min-height":"75vh"}},[n("div",{staticClass:"absolute top-0 w-full h-full bg-center bg-cover",style:"background-image: url('"+t.post.imageUrl+"');"},[n("span",{staticClass:"w-full h-full absolute opacity-10 bg-black",attrs:{id:"blackOverlay"}})]),t._v(" "),n("div",{staticClass:"container relative mx-auto"},[n("div",{staticClass:"items-center flex flex-wrap"},[n("div",{staticClass:"w-full lg:w-6/12 px-4 ml-auto mr-auto text-center"},[n("div",{staticClass:"pr-12"},[n("h1",{staticClass:"text-white font-semibold text-5xl"},[t._v("\n              "+t._s(t.post.title)+"\n            ")])])])])])]),t._v(" "),n("article",{staticClass:"pb-20 relative block bg-blue-900"},[n("div",{staticClass:"container mx-auto px-4 lg:pt-24 lg:pb-64"},[n("div",{staticClass:"flex flex-wrap"},[n("div",{staticClass:"w-full lg:w-6/12 px-4 text-white"},t._l(t.post.body,(function(t){return n("block-content",{key:t._id,attrs:{blocks:t}})})),1)])])])],1):t._e()}),[],!1,null,null,null);e.default=component.exports}}]);