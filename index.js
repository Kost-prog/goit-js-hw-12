/* empty css                      */import{a as y,S as g,i}from"./assets/vendor-Db2TdIkw.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();const v="17166399-e5f7f2e62df2b422af7ff4cab",L="https://pixabay.com/api/";async function b(t,o=1){const r=`${L}?key=${v}&q=${encodeURIComponent(t)}&image_type=photo&orientation=horizontal&safesearch=true&per_page=15&page=${o}`;try{const e=await y.get(r),{hits:s,totalHits:a}=e.data;return{hits:s,totalHits:a}}catch(e){throw console.error("Error fetching images:",e),e}}const w=document.querySelector(".gallery"),u=document.querySelector(".load-more"),f=document.querySelector(".loader");new g(".gallery a",{captionsData:"alt",captionDelay:250});function S(t){const o=document.querySelector(".gallery"),n=t.map(r=>`
      <div class="gallery-item photo-card">
        <img src="${r.webformatURL}" alt="${r.tags}" loading="lazy" />
        <div class="info">
          <div class="info-block">
            <p class="label">Likes</p>
            <p class="value">${r.likes}</p>
          </div>
          <div class="info-block">
            <p class="label">Views</p>
            <p class="value">${r.views}</p>
          </div>
          <div class="info-block">
            <p class="label">Comments</p>
            <p class="value">${r.comments}</p>
          </div>
          <div class="info-block">
            <p class="label">Downloads</p>
            <p class="value">${r.downloads}</p>
          </div>
        </div>
      </div>
    `).join("");o.insertAdjacentHTML("beforeend",n)}function $(){w.innerHTML=""}function P(){f.classList.remove("hidden")}function q(){f.classList.add("hidden")}function M(){u.classList.remove("hidden")}function p(){u.classList.add("hidden")}let l,d;document.addEventListener("DOMContentLoaded",()=>{l=document.querySelector(".form"),d=document.querySelector(".load-more"),l?l.addEventListener("submit",R):console.error(".form Not found"),d?d.addEventListener("click",E):console.error(".load-more Not found")});let m="",c=1;const B=15;async function R(t){t.preventDefault(),$(),p();const o=t.currentTarget.elements.searchQuery;if(!o||!o.value.trim()){i.warning({title:"Attention",message:"Please enter a search query",position:"topRight"});return}m=o.value.trim(),c=1,await h()}async function E(){c+=1,await h()}async function h(){P();try{const t=await b(m,c);if(!t||!t.hits||t.hits.length===0){i.info({title:"Інформація",message:"На жаль, за вашим запитом нічого не знайдено.",position:"topRight"});return}S(t.hits);const o=Math.ceil(t.totalHits/B);c>=o?(p(),i.info({title:"Кінець результатів",message:"Ви досягли кінця результатів пошуку.",position:"topRight"})):M();const n=document.querySelector(".gallery-item");if(n){const{height:r}=n.getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}}catch(t){console.error("Помилка під час отримання даних: ",t),i.error({title:"Помилка",message:"Сталася помилка при завантаженні зображень. Спробуйте ще раз.",position:"topRight"})}finally{q()}}
//# sourceMappingURL=index.js.map
