import{A as x,S as y,N as b,K as w,M as g,P as V,a as L,i as A}from"./assets/vendor-0d44c75d.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=t(o);fetch(o.href,n)}})();const z=document.querySelector(".close"),M=document.querySelector(".burger"),T=document.querySelector(".mob-menu");z.addEventListener("click",D);function D(){M.classList.add("activ-burger"),T.classList.add("is-open"),X.addEventListener("click",N),window.addEventListener("scroll",k)}function k(){window.scrollY>10&&(N(),window.removeEventListener("scroll",k))}const u=document.querySelector(".list-menu-header"),K=document.querySelector(".header_menu");let E=!1;const F=`
            display: flex;
            text-align: center;
            flex-direction: column;
            row-gap: 5px;
            position: absolute;
            left: 50.6%;
            top: 119px;
            transform: translate(-50%, -50%);
            opacity: 1;
            visibility: visible;
            pointer-events: auto;
        `;K.addEventListener("click",Y);function Y(s){if(s.preventDefault(),E){_();return}window.addEventListener("scroll",B),U()}function _(){document.querySelectorAll(".list-menu-header-item").forEach((e,t)=>{t%2===0?(e.style.transform="translateX(-500%)",e.style.opacity="0",e.style.visibility="hidden",e.style.pointerEvents="none"):(e.style.transform="translateX(500%)",e.style.opacity="0",e.style.visibility="hidden",e.style.pointerEvents="none")}),u.style.opacity="0",u.style.visibility="hidden",u.style.pointerEvents="none",E=!1}function U(){u.style.cssText=F,document.querySelectorAll(".list-menu-header-item").forEach((e,t)=>{setTimeout(()=>{e.style.transition="all 1000ms cubic-bezier(0.4, 0, 0.2, 1)",e.style.transform="translateX(0)",e.style.opacity="1",e.style.visibility="visible",e.style.pointerEvents="auto"},t*100)}),E=!0}function B(){window.scrollY>10&&(_(),window.removeEventListener("scroll",B))}const X=document.querySelector(".close-modal"),Z=document.querySelector(".burger-modal");function N(){Z.classList.remove("activ-burger"),M.classList.remove("activ-burger"),T.classList.remove("is-open")}const J={el:document.querySelector(".btn-up"),show(){this.el.classList.remove("btn-up_hide")},hide(){this.el.classList.add("btn-up_hide")},addEventListener(){window.addEventListener("scroll",()=>{(window.scrollY||document.documentElement.scrollTop)>600?this.show():this.hide()}),document.querySelector(".btn-up").onclick=()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})}}};J.addEventListener();class G{constructor(e){this.el=e,this.chars="!<>-_\\/[]{}—=+*^?#________",this.update=this.update.bind(this)}setText(e){const t=this.el.innerText,r=Math.max(t.length,e.length),o=new Promise(n=>this.resolve=n);this.queue=[];for(let n=0;n<r;n++){const i=t[n]||"",m=e[n]||"",d=Math.floor(Math.random()*40),c=d+Math.floor(Math.random()*40);this.queue.push({from:i,to:m,start:d,end:c})}return cancelAnimationFrame(this.frameRequest),this.frame=0,this.update(),o}update(){let e="",t=0;for(let r=0,o=this.queue.length;r<o;r++){let{from:n,to:i,start:m,end:d,char:c}=this.queue[r];this.frame>=d?(t++,e+=i):this.frame>=m?((!c||Math.random()<.28)&&(c=this.randomChar(),this.queue[r].char=c),e+=`<span class="dud">${c}</span>`):e+=n}this.el.innerHTML=e,t===this.queue.length?this.resolve():(this.frameRequest=requestAnimationFrame(this.update),this.frame++)}randomChar(){return this.chars[Math.floor(Math.random()*this.chars.length)]}}const S=["I&#39;m Fullstack developer Lloyd Jefferson."],Q=document.querySelector(".text"),W=new G(Q);let p=0;const P=()=>{p<S.length&&(W.setText(S[p]).then(()=>{setTimeout(P,800)}),p++)};P();const h=document.querySelectorAll(".arrow"),I=document.querySelector(".accordion-wrapper"),ee=new x(I,{showMultiple:!0});ee.open(0);I.addEventListener("click",s=>{const e=s.target.closest("button");e&&e.tagName==="BUTTON"&&(e.id==="ac-trigger-0"?h[0].classList.toggle("rotate"):e.id==="ac-trigger-1"?h[1].classList.toggle("rotate"):e.id==="ac-trigger-2"&&h[2].classList.toggle("rotate"))});document.querySelector(".arrow-next");new y(".swiper2",{loop:!0,slidesPerView:2,spaceBetween:0,modules:[b,w,g],navigation:{nextEl:".sbn"},keyboard:{enabled:!0},mousewheel:{enabled:!0,forceToAxis:!0},breakpoints:{767:{slidesPerView:3},1440:{slidesPerView:6}}});const te=document.querySelectorAll('a[href^="#"]');te.forEach(s=>{s.addEventListener("click",function(e){e.preventDefault(),setTimeout(()=>{this.blur()},500),document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"})})});new y(".swiper1",{direction:"horizontal",loop:!1,speed:500,spaceBetween:20,modules:[b,w,g,V],navigation:{nextEl:".swiper-btn-next",prevEl:".swiper-btn-prev"},keyboard:{enabled:!0},mousewheel:{enabled:!0,forceToAxis:!0},parallax:!0});const se=document.querySelector(".accordion-container");new x(se,{showMultiple:!0});window.addEventListener("load",function(){(e=>{const t=document.querySelector(e),r=t.innerHTML;t.insertAdjacentHTML("beforeend",r),t.insertAdjacentHTML("beforeend",r),new IntersectionObserver(n=>{n[0].isIntersecting?t.classList.add("animate-marquee"):t.classList.remove("animate-marquee")}).observe(t)})(".covers-list")});const H=document.querySelector(".reviews");function re(s){const e=s.map(({avatar_url:t,author:r,review:o})=>`<li class="review-item swiper-slide">
      <img
        class="review-image"
        src="${t}"
        alt="${r}"
        loading="lazy"
        height="48"
        width="48"
      />
      <div class="review-textbox">
        <h3 class="review-author">${r}</h3>
        <p class="review-text">${o}</p>
      </div>
    </li>`).join("");H.insertAdjacentHTML("beforeend",e),new y(".swiper6",{modules:[b,w,g],slidesPerView:1,spaceBetween:16,breakpoints:{768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}},navigation:{nextEl:".swiper-btn-next-review",prevEl:".swiper-btn-prev-review"},keyboard:{enabled:!0},mousewheel:{enabled:!0,forceToAxis:!0}})}L.defaults.baseURL="https://portfolio-js.b.goit.study/api/";async function oe(){try{const s=await ie();re(s)}catch{ne()}}function ne(s){A.show({fontSize:"large",position:"topRight",messageColor:"white",timeout:6e3,backgroundColor:"#ED3B44",theme:"dark",progressBar:!1,message:"Something went wrong"}),H.insertAdjacentHTML("beforeend",`<li class="not-found-item">
    <p class="not-found-text">Not found</p></li>`)}async function ie(){return(await L.get("reviews")).data}oe();const l=document.getElementById("form"),ce=document.querySelector("[data-close-button]"),v=document.getElementById("overlay"),f=document.getElementById("modal"),ae=L.create({baseURL:"https://portfolio-js.b.goit.study/api",headers:{Accept:"application/json"}}),C=s=>{f!==null&&(s==="open"?(f.classList.add("active"),v.classList.add("active")):s==="close"&&(f.classList.remove("active"),v.classList.remove("active")))},le=()=>{C("open"),j()},q=()=>{C("close"),O()},de=async s=>{try{const e=await ae.post("/requests",s);ue(e.data)}catch(e){me(e.message)}},ue=s=>{he(s),l.reset()},me=s=>{A.error({title:"Error",message:s,position:"topRight"})},a=(s,e,t)=>{const r=s.parentNode;r.classList.add(t);const o=document.createElement("label");o.classList.add(`${t}-label`),o.textContent=e,r.append(o)},pe=s=>{const e=s.parentNode;e.classList.remove("error","success");const t=e.querySelector(".error-label");t&&t.remove();const r=e.querySelector(".success-label");r&&r.remove()},he=s=>{const{title:e,message:t}=s,r=document.querySelector(".content");r.innerHTML="";const o=document.createElement("h2");o.textContent=e;const n=document.createElement("p");n.textContent=t,r.append(o,n),le(),j()},R=()=>{const s=l.querySelectorAll(".form-control"),e=[];return s.forEach(t=>{const r=t.parentNode,o=t.getAttribute("type")||t.tagName.toLowerCase();switch(pe(t),o){case"text":t.value.trim()===""?(r.classList.add("error"),a(t,"The field is required.","error"),e.push(t.getAttribute("name"))):(r.classList.remove("error"),a(t,"Success!","success"));break;case"email":const n=/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;t.value.trim()===""||!n.test(t.value)?(r.classList.add("error"),a(t,"Invalid email, please try again","error"),e.push(t.getAttribute("name"))):(r.classList.remove("error"),a(t,"Success!","success"));break;default:t.value.trim()===""?(r.classList.add("error"),a(t,"The field is required.","error"),e.push(t.getAttribute("name"))):(r.classList.remove("error"),a(t,"Success!","success"));break}}),e.length>0},$=s=>{s.key==="Escape"&&(q(),O())},j=()=>{document.addEventListener("keydown",$)},O=()=>{document.removeEventListener("keydown",$)};ce.addEventListener("click",q);v.addEventListener("click",q);l.addEventListener("submit",s=>{if(s.preventDefault(),!R()){let t=Object.fromEntries(new FormData(document.getElementById("form")).entries());de(t),Array.prototype.forEach.call(l.querySelectorAll("label"),r=>{r.parentNode.removeChild(r)}),Array.prototype.forEach.call(document.querySelectorAll(".input-holder"),r=>{r.classList.remove("success")})}});l.addEventListener("input",s=>{R()});
//# sourceMappingURL=commonHelpers.js.map