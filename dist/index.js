"use strict";function toggleMenu(){var e=document.querySelector("body"),s=document.getElementById("menuButton"),d=document.getElementById("menu"),t=document.getElementById("menuClosed"),n=document.getElementById("shareButton"),i=document.getElementById("share");s.addEventListener("click",(function(){e.classList.add("no-scroll"),s.classList.add("hidden"),t.classList.remove("hidden"),d.classList.remove("hidden"),d.classList.add("show")})),n.addEventListener("click",(function(){e.classList.add("no-scroll"),n.classList.add("hidden"),s.classList.remove("show"),s.classList.add("hidden"),i.classList.remove("hidden"),i.classList.add("show"),t.classList.remove("hidden")})),t.addEventListener("click",(function(){e.classList.remove("no-scroll"),s.classList.remove("hidden"),n.classList.remove("hidden"),t.classList.add("hidden"),d.classList.remove("show"),d.classList.add("hidden"),i.classList.remove("show"),i.classList.add("hidden")}))}toggleMenu();
//# sourceMappingURL=index.js.map