import c from"./ContentDoc.17ddcec4.js";import{M as p,A as i,J as m,a as u,u as h,c as l,q as _,o as r}from"./entry.bfa13e1e.js";import"./ContentRenderer.ac0f3687.js";import"./ContentRendererMarkdown.3f4192f4.js";import"./index.a6ef77ff.js";import"./preview.3c9f2f86.js";import"./ContentQuery.3cb87c98.js";import"./query.1d5dca59.js";import"./utils.dc5afda4.js";const P={__name:"[...content-page]",setup(f){const t=p(),o=t.path!=="/"&&t.path.endsWith("/");return i(async()=>{if(o){const{path:a,query:n,hash:e}=t,s={path:a.replace(/\/+$/,""),query:n,hash:e};await m(s,{replace:!0})}}),(a,n)=>{const e=c;return r(),u("div",null,[h(o)?_("",!0):(r(),l(e,{key:0,head:!1}))])}}};export{P as default};