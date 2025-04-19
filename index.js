/* empty css                      */import{a as L,S as b,i as c}from"./assets/vendor-Db2TdIkw.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const w="17166399-e5f7f2e62df2b422af7ff4cab",$="https://pixabay.com/api/";async function S(t,r=1){const s=`${$}?key=${w}&q=${encodeURIComponent(t)}&image_type=photo&orientation=horizontal&safesearch=true&per_page=15&page=${r}`;try{const e=await L.get(s),{hits:o,totalHits:a}=e.data;return{hits:o,totalHits:a}}catch(e){throw console.error("Error fetching images:",e),e}}const u=document.querySelector(".gallery"),f=document.querySelector(".load-more"),p=document.querySelector(".loader"),P=new b(".gallery a",{captionsData:"alt",captionDelay:250});function M(t){const r=t.map(({webformatURL:n,largeImageURL:s,tags:e,likes:o,views:a,comments:y,downloads:v})=>`
      <a href="${s}" class="gallery-item photo-card">
        <img src="${n}" alt="${e}" loading="lazy" />
        <div class="info">
          <div class="info-block">
            <p class="label">Likes</p>
            <p class="value">${o}</p>
          </div>
          <div class="info-block">
            <p class="label">Views</p>
            <p class="value">${a}</p>
          </div>
          <div class="info-block">
            <p class="label">Comments</p>
            <p class="value">${y}</p>
          </div>
          <div class="info-block">
            <p class="label">Downloads</p>
            <p class="value">${v}</p>
          </div>
        </div>
      </a>
    `).join("");u.insertAdjacentHTML("beforeend",r),P.refresh()}function q(){u.innerHTML=""}function B(){p.classList.remove("hidden")}function E(){p.classList.add("hidden")}function O(){f.classList.remove("hidden")}function m(){f.classList.add("hidden")}let d,i;document.addEventListener("DOMContentLoaded",()=>{d=document.querySelector(".form"),i=document.querySelector(".load-more"),d?d.addEventListener("submit",C):console.error(".form Not found"),i?i.addEventListener("click",I):console.error(".load-more Not found"),i.classList.add("hidden")});let h="",l=1;const R=15;async function C(t){t.preventDefault(),q(),m();const r=t.currentTarget.elements.searchQuery;if(!r||!r.value.trim()){c.warning({title:"Attention",message:"Please enter a search query",position:"topRight"});return}h=r.value.trim(),l=1,await g()}async function I(){l+=1,await g()}async function g(){B();try{const t=await S(h,l);if(!t||!t.hits||t.hits.length===0){c.info({title:"Інформація",message:"На жаль, за вашим запитом нічого не знайдено.",position:"topRight"});return}M(t.hits);const r=Math.ceil(t.totalHits/R);l>=r?(m(),c.info({title:"Кінець результатів",message:"Ви досягли кінця результатів пошуку.",position:"topRight"})):O();const n=document.querySelector(".gallery-item");if(n){const{height:s}=n.getBoundingClientRect();window.scrollBy({top:s*2,behavior:"smooth"})}}catch(t){console.error("Помилка під час отримання даних: ",t),c.error({title:"Помилка",message:"Сталася помилка при завантаженні зображень. Спробуйте ще раз.",position:"topRight"})}finally{E()}}
//# sourceMappingURL=index.js.map
