"use strict";(self.webpackChunkportfolio2025=self.webpackChunkportfolio2025||[]).push([[924],{834:(e,s,a)=>{a.d(s,{A:()=>c});var i=a(250),n=a(272),t=a(579);function c(){const e=(0,i.zy)(),s=(new Date).getFullYear();return(0,t.jsx)("footer",{role:"contentinfo",className:"section",sectionid:"5",children:(0,t.jsx)("div",{className:"outer-wrapper",children:(0,t.jsxs)("span",{id:"footer",role:"tabpanel",children:[(0,t.jsx)("button",{className:"btn-scroll",onClick:()=>{document.querySelector("#skip").scrollIntoView({behavior:"smooth"})},children:(0,t.jsx)("span",{className:"sr-only",children:"scroll to the top of the page"})}),(0,t.jsxs)("div",{className:"inner-footer-wrapper",children:[(0,t.jsxs)("div",{className:"row one",children:[(0,t.jsxs)("div",{className:"cta-btn",children:["/"===e.pathname?(0,t.jsx)("h6",{children:"Let's Brainstorm"}):(0,t.jsx)("h3",{children:"Let's Brainstorm"}),(0,t.jsx)("div",{className:"btn-wrapper",children:(0,t.jsx)("a",{href:"mailto:erinnicolekahn@gmail.com",children:"Get In Touch"})})]}),(0,t.jsx)("ul",{className:"footer-nav-list",children:n.o8.navigation.map((e=>(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsxs)(i.N_,{className:"nav-link",to:e.linkTo,children:[e.pageTitle,(0,t.jsx)("span",{className:"sr-only",children:"Page"})]})},"nav-".concat(e.id))))})]}),(0,t.jsxs)("div",{className:"row two",children:[(0,t.jsx)("ul",{className:"social",children:n.o8.socialIcons.map((e=>(0,t.jsx)("li",{className:"icon-list-item",children:(0,t.jsx)("a",{className:"icon ".concat(e.siteName),target:"_blank",rel:"noreferrer",href:e.url,children:(0,t.jsx)("span",{className:"sr-only",children:e.siteName})})},"icon-".concat(e.id))))}),(0,t.jsxs)("p",{className:"copyright",children:["Designed & Coded by Erin Kahn ",s]})]})]})]})})})}},985:(e,s,a)=>{a.d(s,{A:()=>t});var i=a(43),n=a(579);function t(e){const[s,a]=(0,i.useState)(0),t=()=>a(window.pageYOffset);return(0,i.useEffect)((()=>(window.addEventListener("scroll",t),()=>{window.removeEventListener("scroll",t)})),[]),(0,n.jsxs)("section",{className:"hero-container",id:"hero",sectionid:"0",role:"tabpanel",style:{minheight:"100vh"},children:[(0,n.jsx)("div",{className:"text-box-container",style:{transform:"translateY(-".concat(.5*s,"px)")},children:(0,n.jsxs)("div",{className:"text-wrapper",children:[(0,n.jsx)("h1",{className:"hero-title",children:e.title}),(0,n.jsx)("h2",{className:"hero-subtitle",children:e.subtitle})]})}),!0===e.scrollBtn&&(0,n.jsx)("button",{onClick:()=>{document.querySelector("#maincontent").scrollIntoView({behavior:"smooth"})},className:"btn-scroll",children:(0,n.jsx)("span",{className:"sr-only",children:"scroll to next section"})})]})}},399:(e,s,a)=>{a.d(s,{A:()=>n});var i=a(579);function n(e){return(0,i.jsx)("section",{className:"section-wrapper",role:"tabpanel","aria-labelledby":e.id,sectionid:e.sectionid,children:e.children})}},127:(e,s,a)=>{a.d(s,{A:()=>n});var i=a(43);const n=e=>{const s=(0,i.useRef)(),[a,n]=(0,i.useState)(),t={root:null,rootMargin:"0%",threshold:.1},c=e=>{n(e[0])};return(0,i.useEffect)((()=>{const a=null===e||void 0===e?void 0:e.current;if(!a)return;s.current&&s.current.disconnect(),s.current=new IntersectionObserver(c,t);const{current:i}=s;return i.observe(a),()=>i.disconnect()}),[e]),{isVisible:!(null===a||void 0===a||!a.isIntersecting),entry:a}}},924:(e,s,a)=>{a.r(s),a.d(s,{default:()=>g});var i=a(555),n=a(52),t=a(985),c=a(43),l=a(399),r=a(272),o=a(127),d=a(579);function h(){const e=(0,c.useRef)(),{isVisible:s}=(0,o.A)(e);return(0,d.jsx)(l.A,{sectionid:"1",children:(0,d.jsx)("div",{className:"services-container",id:"services",children:r.XL.services.map(((a,i)=>(0,d.jsxs)("div",{className:"service ".concat(s?"fade-in-up":"fade-out-down"),children:[(0,d.jsx)("div",{className:"service-img-container",ref:e,children:a.icon}),(0,d.jsx)("h3",{children:a.serviceTitle}),(0,d.jsx)("p",{children:a.description})]},"service-".concat(i))))})})}function m(e){return(0,d.jsx)(d.Fragment,{children:e.featuredData.featured.map(((s,a)=>(0,d.jsx)(c.Suspense,{fallback:(0,d.jsx)("div",{children:"Loading images..."}),children:(0,d.jsx)("div",{className:"img-wrapper ".concat(e.isActive===a?"show":""),"aria-current":a===e.isActive,"aria-hidden":a!==e.isActive,"aria-label":"image ".concat(a+1," of 4"),"aria-labelledby":s.slideNum,role:"tabpanel",children:(0,d.jsx)("img",{loading:"lazy",className:"ft-img",src:s.mobile,width:974,height:1299,srcSet:"".concat(s.mobile," 300w, ").concat(s.tablet," 768w, ").concat(s.desktop," 1280w"),alt:s.alt})})},"featured-".concat(a))))})}function u(){const[e,s]=(0,c.useState)(0),a=(0,c.useRef)(),{isVisible:i}=(0,o.A)(a);return(0,d.jsx)(l.A,{sectionid:"2",children:(0,d.jsxs)("div",{className:"featured-container",id:"featured","aria-label":"carousel",children:[(0,d.jsxs)("div",{className:"title-carousel-wrapper",children:[(0,d.jsx)("div",{className:"slide-title",children:(0,d.jsxs)("h4",{className:"section-title ".concat(i?"fade-in":"fade-out"),ref:a,children:[r.Ds.sectionTitle,r.Ds.featured.map(((s,a)=>(0,d.jsxs)("span",{className:"slide-num ".concat(a===e?"active":""),children:[(0,d.jsx)("span",{className:"sr-only",children:"slide number"}),s.slideNum]},"slide-".concat(a))))]})}),(0,d.jsx)("div",{className:"pager-btns-container",role:"tablist",children:r.Ds.featured.map(((a,n)=>(0,d.jsx)("button",{className:"pager-btn ".concat(n===e?"active":""," ").concat(i?"fade-in-up":"fade-out-down"),"aria-label":"Navigate to slide ".concat(n),"aria-controls":"panel".concat(a.client.replaceAll(" ","")),"aria-current":n===e,role:"tab",id:a.slideNum,onClick:e=>{s(n)}},"btn-".concat(n))))})]}),(0,d.jsx)("div",{className:"slide-images",children:(0,d.jsx)("div",{className:"image-container",children:(0,d.jsx)(m,{featuredData:r.Ds,isActive:e})})}),(0,d.jsxs)("div",{className:"content-container",children:[r.Ds.featured.map(((s,a)=>(0,d.jsxs)("div",{className:"content ".concat(a===e?"active":""),"aria-current":a===e,"aria-hidden":a!==e,"aria-label":"content ".concat(a+1," of 4"),"aria-labelledby":s.slideNum,role:"tabpanel",id:"panel".concat(s.client.replaceAll(" ","")),children:[(0,d.jsx)("p",{className:"h5",children:s.client}),(0,d.jsxs)("p",{children:[(0,d.jsx)("span",{children:"Stack:"})," ",s.tech]}),(0,d.jsx)("p",{children:s.content}),(0,d.jsxs)("p",{children:[(0,d.jsx)("span",{children:"My Role:"})," ",s.role]}),(0,d.jsxs)("p",{children:[(0,d.jsx)("span",{children:"Co-Developers:"})," ",s.devs]})]},"content-".concat(a)))),r.Ds.featured.map(((s,a)=>(0,d.jsx)("a",{className:"site-link ".concat(a===e?"active":""),href:s.url,target:"_blank",rel:"noreferrer",children:"View Live Site"},"link-".concat(a))))]})]})})}const x=(0,c.lazy)((()=>a.e(671).then(a.bind(a,671))));function j(){const e=(0,c.useRef)(),{isVisible:s}=(0,o.A)(e);return(0,d.jsx)(l.A,{sectionid:"3",children:(0,d.jsxs)("div",{className:"about-container",id:"about",ref:e,children:[(0,d.jsxs)("div",{className:"col text ".concat(s?"slide-in-left delay-half":"slide-out-left"),children:[(0,d.jsx)("h5",{className:"section-title",children:r.Wx.sectionTitle}),(0,d.jsx)("p",{children:r.Wx.content}),(0,d.jsx)("p",{children:r.Wx.content2})]}),(0,d.jsx)("div",{className:"col right",children:(0,d.jsx)("div",{className:"image-container ".concat(s?"animate":""),children:(0,d.jsx)(c.Suspense,{fallback:(0,d.jsx)("div",{children:"Loading images..."}),children:(0,d.jsx)(x,{aboutProp:r.Wx.img})})})})]})})}function p(){const[e,s]=(0,c.useState)(0),a=(0,c.useRef)(),{isVisible:i}=(0,o.A)(a);return(0,d.jsx)(l.A,{sectionid:"4",children:(0,d.jsx)("div",{className:"testimonials-container ".concat(i?"animate":""),id:"testimonials",children:(0,d.jsxs)("div",{className:"inner-wrap",ref:a,children:[(0,d.jsx)("h5",{className:"section-title",children:r.So.sectionTitle}),r.So.testimonials.map(((s,a)=>(0,d.jsxs)("div",{"aria-hidden":0!==a,"aria-label":"testimonial ".concat(a+1," of 3"),"aria-labelledby":s.id,id:"testimonial".concat(s.id),className:"testimonial ".concat(a===e?"show":""),children:[(0,d.jsx)("p",{children:s.text}),(0,d.jsx)("p",{className:"person",children:(0,d.jsx)("em",{children:s.person})})]},"testim-".concat(s.id)))),(0,d.jsx)("div",{className:"btns-container",role:"tablist",children:r.So.testimonials.map(((a,n)=>(0,d.jsx)("button",{onClick:e=>{s(n)},role:"tab",id:a.id,"aria-controls":"testimonial".concat(a.id),"aria-label":"Navigate to testimonial ".concat(n),"aria-selected":n===e,className:"testimonial-btn ".concat(n===e?"active":""," ").concat(i?"fade-in-up":"fade-out-down")},"btn-".concat(n))))})]})})})}var v=a(834);function f(e){let{sections:s}=e;const[a,i]=(0,c.useState)(0),n=(0,c.useRef)(null),t=(0,c.useCallback)((()=>{let e=0,a=1/0;s.forEach(((s,i)=>{const n=document.getElementById(s.id);if(console.log(n,s.id),n){const s=n.getBoundingClientRect(),t=Math.abs(s.top);t<a&&(a=t,e=i)}})),i(e)}),[s]);return(0,c.useEffect)((()=>(window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t))),[t,s]),(0,d.jsx)("aside",{ref:n,className:"sectionScrollTabs",children:s.map(((e,s)=>(0,d.jsx)("button",{id:s,className:"".concat(a===s?"active":""),onClick:e=>{i(s),(e=>{e.preventDefault();const s=e.currentTarget.getAttribute("aria-label").replace("Navigate to section ",""),a=document.querySelector("#".concat(s));a&&a.scrollIntoView({behavior:"smooth"})})(e)},"aria-label":"Navigate to section ".concat(e.id),"aria-controls":"".concat(e.title),"aria-current":s===a},"sectionTab-".concat(s))))})}var b=a(455),N=a(464);function g(){return(0,d.jsxs)(b.P.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.75,ease:"easeOut"},children:[(0,d.jsx)(c.Fragment,{children:(0,d.jsx)(N.A,{title:"Erin Kahn | Home",url:"https://erin-kahn.com"})}),(0,d.jsxs)(i.A,{children:[(0,d.jsx)(n.A,{}),(0,d.jsx)(f,{sections:r.V0.homepage}),(0,d.jsx)(t.A,{title:r.l4.home.title,subtitle:r.l4.home.subtitle,scrollBtn:r.l4.home.scrollBtn}),(0,d.jsxs)("main",{id:"maincontent",role:"main",children:[(0,d.jsx)(h,{}),(0,d.jsx)(u,{}),(0,d.jsx)(j,{}),(0,d.jsx)(p,{})]}),(0,d.jsx)(v.A,{})]})]})}}}]);
//# sourceMappingURL=924.468b079c.chunk.js.map