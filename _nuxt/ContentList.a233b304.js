import n from"./ContentQuery.d9f27cf1.js";import{e as c,s as l,v as p}from"./entry.78fd44d8.js";import"./query.c648a91a.js";import"./utils.8eafc8a4.js";import"./preview.5316bd1c.js";const u=(r,t)=>p("pre",null,JSON.stringify({message:"You should use slots with <ContentList>",slot:r,data:t},null,2)),S=c({name:"ContentList",props:{path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0}},render(r){const t=l(),{path:f,query:a}=r,m={...a||{},path:f||(a==null?void 0:a.path)||"/"};return p(n,m,{default:t!=null&&t.default?({data:e,refresh:o,isPartial:d})=>t.default({list:e,refresh:o,isPartial:d,...this.$attrs}):e=>u("default",e.data),empty:e=>t!=null&&t.empty?t.empty(e):u("default",e==null?void 0:e.data),"not-found":e=>{var o;return t!=null&&t["not-found"]?(o=t==null?void 0:t["not-found"])==null?void 0:o.call(t,e):u("not-found",e==null?void 0:e.data)}})}});export{S as default};