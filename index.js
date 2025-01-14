import{i as f,S as d}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const h="48210883-f70532ba3d786d958e1d4920f",m="https://pixabay.com/api/";function y(o,t=1,n=9){const s=`${m}?key=${h}&q=${encodeURIComponent(o)}&image_type=photo&orientation=horizontal&safesearch=true&page=${t}&per_page=${n}`;return fetch(s).then(e=>{if(!e.ok)throw new Error("Failed to fetch data");return e.json()}).then(e=>e).catch(e=>{throw console.error("Error fetching images:",e),e})}function g(o){const t=document.querySelector(".gallery"),n=o.map(({webformatURL:s,largeImageURL:e,tags:r,likes:i,views:l,comments:u,downloads:p})=>`
        <a href="${e}" class="gallery-item">
          <img src="${s}" alt="${r}" loading="lazy" />
          <div class="info">
            <p>
                <span>${i}</span>
                <span>Likes</span>
            </p>
            <p>
                <span>${l}</span>
                <span>Views</span>
            </p>
            <p>
                <span>${u}</span>
                <span>Comments</span>
            </p>
            <p>
                <span>${p}</span>
                <span>Downloads</span>
            </p>
          </div>
        </a>
      `).join("");t.innerHTML=n}function a(o,t="info"){f[t]({title:o,position:"topRight"})}function L(){document.querySelector(".gallery").innerHTML=""}const S=document.querySelector(".search-form"),$=document.querySelector(".search-input");document.querySelector(".gallery");const c=document.querySelector(".loader"),q=new d(".gallery a");S.addEventListener("submit",w);function w(o){o.preventDefault();const t=$.value.trim();if(!t){a("Please enter a search query!","error");return}L(),b(),y(t,1,9).then(n=>{if(n.hits.length===0){a("Sorry, there are no images matching your search query. Please try again!","error");return}g(n.hits),q.refresh()}).catch(()=>{a("Something went wrong. Please try again later!","error")}).finally(()=>{v()})}function b(){c.classList.add("visible")}function v(){c.classList.remove("visible")}
//# sourceMappingURL=index.js.map
