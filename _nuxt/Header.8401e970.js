import{_ as S}from"./nuxt-link.41be867b.js";import C from"./ContentQuery.2ad936b9.js";import{i as M,z as f,R as B,o as i,a as l,b as e,l as g,u as b,f as t,w as s,j as _,F as y,m as $,t as k,p as I,h as L}from"./entry.de22b90f.js";import"./query.e9641e93.js";import"./utils.546e423d.js";import"./preview.5ffe54a0.js";const p=""+globalThis.__publicAssetsURL("mds-logo.png");const d=n=>(I("data-v-9c4ab680"),n=n(),L(),n),N={class:"header-area header-area--absolute"},A={class:"container"},H={class:"row"},V={class:"col-lg-12"},q={class:"header position-relative"},z={class:"header__logo"},E=d(()=>e("img",{src:p,height:"80",class:"light-logo",alt:""},null,-1)),F=d(()=>e("img",{src:p,height:"48",class:"dark-logo",alt:""},null,-1)),R={class:"header-right"},T={class:"header__navigation menu-style-four d-none d-xl-block"},j={class:"navigation-menu"},D=d(()=>e("i",null,null,-1)),Q=[D],U={class:"mobile-menu-overlay__inner"},Y={class:"mobile-menu-overlay__header"},G={class:"container-fluid"},J={class:"row align-items-center"},K={class:"col-md-6 col-8"},O={class:"logo"},P=d(()=>e("img",{src:p,class:"img-fluid",alt:""},null,-1)),W={class:"mobile-menu-overlay__body"},X={class:"offcanvas-navigation"},Z={__name:"Header",setup(n){const c=f(!1),r=f(!1);function w(){c.value=!c.value}function m(){c.value=!1}function x(){window.scrollY<80?r.value=!1:r.value=!0}return B(()=>{window.addEventListener("scroll",x)}),(u,ee)=>{const a=S,v=C;return i(),l("header",null,[e("div",N,[e("div",{class:g(["header-bottom-wrap header-sticky",{"is-sticky":b(r)}])},[e("div",A,[e("div",H,[e("div",V,[e("div",q,[e("div",z,[t(a,{to:"/"},{default:s(()=>[E,F]),_:1})]),e("div",R,[e("div",T,[e("nav",j,[e("ul",null,[e("li",null,[t(a,{to:"/"},{default:s(()=>[_(" Ana Sayfa ")]),_:1})]),t(v,{path:"/",only:["_path","title","position"],where:{_dir:{$eq:""},_path:{$and:[{$ne:"/footer"},{$ne:"/"}]},position:{$gt:0}},sort:{position:1,$numeric:!0}},{default:s(({data:h})=>[(i(!0),l(y,null,$(h,o=>(i(),l("li",{key:o.title},[t(a,{to:o._path==u.$route.path?"":o._path},{default:s(()=>[_(k(o.title),1)]),_:2},1032,["to"])]))),128))]),_:1})])])]),e("div",{id:"mobile-menu-trigger",class:"mobile-navigation-icon white-md-icon d-block d-xl-none",onClick:w},Q)])])])])])],2)]),e("div",{id:"mobile-menu-overlay",class:g(["mobile-menu-overlay",{active:b(c)}]),onClick:m},[e("div",U,[e("div",Y,[e("div",G,[e("div",J,[e("div",K,[e("div",O,[t(a,{to:"/"},{default:s(()=>[P]),_:1})])]),e("div",{class:"col-md-6 col-4"},[e("div",{class:"mobile-menu-content text-end"},[e("span",{id:"mobile-menu-close-trigger",class:"mobile-navigation-close-icon",onClick:m})])])])])]),e("div",W,[e("nav",X,[e("ul",null,[e("li",null,[t(a,{to:"/"},{default:s(()=>[_(" Home ")]),_:1})]),t(v,{path:"/",only:["_path","title","position"],where:{_dir:{$eq:""},_path:{$and:[{$ne:"/footer"},{$ne:"/"}]},position:{$gt:0}},sort:{position:1,$numeric:!0}},{default:s(({data:h})=>[(i(!0),l(y,null,$(h,o=>(i(),l("li",{key:o.title},[t(a,{to:o._path==u.$route.path?"":o._path},{default:s(()=>[_(k(o.title),1)]),_:2},1032,["to"])]))),128))]),_:1})])])])])],2)])}}},ne=M(Z,[["__scopeId","data-v-9c4ab680"]]);export{ne as default};