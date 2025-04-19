/* empty css                      */import{a as g,S as y,i as c}from"./assets/vendor-Db2TdIkw.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const v="17166399-e5f7f2e62df2b422af7ff4cab",L="https://pixabay.com/api/";async function b(t,o=1){const n=`${L}?key=${v}&q=${encodeURIComponent(t)}&image_type=photo&orientation=horizontal&safesearch=true&per_page=15&page=${o}`;try{const e=await g.get(n),{hits:r,totalHits:i}=e.data;return{hits:r,totalHits:i}}catch(e){throw console.error("Error fetching images:",e),e}}const w=document.querySelector(".gallery"),u=document.querySelector(".load-more"),f=document.querySelector(".loader"),S=new y(".gallery a",{captionsData:"alt",captionDelay:250});function $(t){const o=t.map(s=>`
      <div class="gallery-item photo-card">
        <img src="${s.webformatURL}" alt="${s.tags}" loading="lazy" />
        <div class="info">
          <div class="info-block">
            <p class="label">Likes</p>
            <p class="value">${s.likes}</p>
          </div>
          <div class="info-block">
            <p class="label">Views</p>
            <p class="value">${s.views}</p>
          </div>
          <div class="info-block">
            <p class="label">Comments</p>
            <p class="value">${s.comments}</p>
          </div>
          <div class="info-block">
            <p class="label">Downloads</p>
            <p class="value">${s.downloads}</p>
          </div>
        </div>
      </div>
    `).join("");gallery.insertAdjacentHTML("beforeend",o),S.refresh()}function P(){w.innerHTML=""}function M(){f.classList.remove("hidden")}function q(){f.classList.add("hidden")}function B(){u.classList.remove("hidden")}function p(){u.classList.add("hidden")}let d,a;document.addEventListener("DOMContentLoaded",()=>{d=document.querySelector(".form"),a=document.querySelector(".load-more"),d?d.addEventListener("submit",E):console.error(".form Not found"),a?a.addEventListener("click",O):console.error(".load-more Not found"),a.classList.add("hidden")});let m="",l=1;const R=15;async function E(t){t.preventDefault(),P(),p();const o=t.currentTarget.elements.searchQuery;if(!o||!o.value.trim()){c.warning({title:"Attention",message:"Please enter a search query",position:"topRight"});return}m=o.value.trim(),l=1,await h()}async function O(){l+=1,await h()}async function h(){M();try{const t=await b(m,l);if(!t||!t.hits||t.hits.length===0){c.info({title:"Інформація",message:"На жаль, за вашим запитом нічого не знайдено.",position:"topRight"});return}$(t.hits);const o=Math.ceil(t.totalHits/R);l>=o?(p(),c.info({title:"Кінець результатів",message:"Ви досягли кінця результатів пошуку.",position:"topRight"})):B();const s=document.querySelector(".gallery-item");if(s){const{height:n}=s.getBoundingClientRect();window.scrollBy({top:n*2,behavior:"smooth"})}}catch(t){console.error("Помилка під час отримання даних: ",t),c.error({title:"Помилка",message:"Сталася помилка при завантаженні зображень. Спробуйте ще раз.",position:"topRight"})}finally{q()}}
//# sourceMappingURL=index.js.map
