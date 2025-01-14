import{i as f,S as d}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const m="48210883-f70532ba3d786d958e1d4920f",h="https://pixabay.com/api/";function y(n){const t=`${h}?key=${m}&q=${encodeURIComponent(n)}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(t).then(o=>{if(!o.ok)throw new Error("Failed to fetch data");return o.json()}).catch(o=>{throw console.error("Error fetching images:",o),o})}function g(n){const t=document.querySelector(".gallery"),o=n.map(({webformatURL:i,largeImageURL:e,tags:r,likes:s,views:l,comments:u,downloads:p})=>`
        <a href="${e}" class="gallery-item">
          <img src="${i}" alt="${r}" loading="lazy" />
          <div class="info">
            <p>
                <span>Likes</span>
                <span>${s}</span>
                
            </p>
            <p>
                <span>Views</span>
                <span>${l}</span>
                
            </p>
            <p>
                
                <span>Comments</span>
                <span>${u}</span>
            </p>
            <p>
                
                <span>Downloads</span>
                <span>${p}</span>
            </p>
          </div>
        </a>
      `).join("");t.innerHTML=o}function a(n,t="info"){f[t]({title:n,position:"topRight"})}function L(){document.querySelector(".gallery").innerHTML=""}const S=document.querySelector(".search-form"),q=document.querySelector(".search-input");document.querySelector(".gallery");const c=document.querySelector(".loader"),w=new d(".gallery a");S.addEventListener("submit",b);function b(n){n.preventDefault();const t=q.value.trim();if(!t){a("Please enter a search query!","error");return}L(),v(),y(t).then(o=>{if(o.hits.length===0){a("Sorry, there are no images matching your search query. Please try again!","error");return}g(o.hits),w.refresh()}).catch(()=>{a("Something went wrong. Please try again later!","error")}).finally(()=>{$()})}function v(){c.classList.add("visible")}function $(){c.classList.remove("visible")}
//# sourceMappingURL=index.js.map
