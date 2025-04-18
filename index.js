import{a as u,S as f,i as a}from"./assets/vendor-Db2TdIkw.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const d="17166399-e5f7f2e62df2b422af7ff4cab",m="https://pixabay.com/api/";async function p(s){try{return(await u.get(m,{params:{key:d,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch(t){throw console.error("Error fetching images:",t),t}}const c=document.querySelector(".gallery");let y=new f(".gallery a",{captionsData:"alt",captionDelay:250});function h(s){const t=s.map(r=>`
    <li>
      <a href="${r.largeImageURL}">
        <img src="${r.webformatURL}" alt="${r.tags}" />
      </a>
      <div class="info">
        <p>Likes: ${r.likes}</p>
        <p>Views: ${r.views}</p>
        <p>Comments: ${r.comments}</p>
        <p>Downloads: ${r.downloads}</p>
      </div>
    </li>
  `).join("");c.innerHTML=t,y.refresh()}function g(){c.innerHTML=""}function L(){document.querySelector(".loader").classList.add("is-visible")}function w(){document.querySelector(".loader").classList.remove("is-visible")}const l=document.querySelector(".form"),b=l.querySelector('input[name="search-text"]');l.addEventListener("submit",async s=>{s.preventDefault();const t=b.value.trim();if(!t){a.error({title:"Error",message:"Please enter a search term."});return}g(),L();try{const r=await p(t);r.length===0?a.info({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!"}):h(r)}catch{a.error({title:"Error",message:"Something went wrong. Please try again later."})}finally{w()}});
//# sourceMappingURL=index.js.map
