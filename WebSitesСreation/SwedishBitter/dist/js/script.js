"use strict";"NodeList"in window&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(t,o){o=o||window;for(var i=0;i<this.length;i++)t.call(o,this[i],i,this)});
"use strict";var allForms=document.querySelectorAll(".form");allForms.forEach((function(e){e.addEventListener("submit",(function(e){e.preventDefault()}))}));
"use strict";function openTabsContentInAttribute(t,e,n,i,a){var s=document.querySelectorAll(t),c=document.querySelectorAll(e);s.forEach((function(t){t.addEventListener("click",(function(t){var r=t.target,o=r.getAttribute(n);c.forEach((function(t){return t.style.display="none"})),document.querySelector("".concat(e,"[").concat(n,'="').concat(o,'"]')).style.display=i,s.forEach((function(t){return t.classList.remove(a)})),r.classList.add(a)}))}))}openTabsContentInAttribute(".list-ailments__item",".list-skeleton__item","data-list","flex","list-ailments__item_active"),openTabsContentInAttribute(".reviews-tabs__tab",".reviews-content__reviews","data-reviews","flex","reviews-tabs__tab_active");
"use strict";var allLinks=document.querySelectorAll(".prevent-default");allLinks.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault()}))}));