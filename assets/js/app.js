let year = new Date(); let loadScreeen = document.querySelector("#loadingScreen"); let copyright = document.querySelector("#year"); let content = document.querySelector("#main__content");  window.addEventListener('load', () => { setTimeout(() => { loadScreeen.classList.add("hidden"); content.style.display = "block"; copyright.innerHTML = `Copyrigth ${ year.getFullYear() }`; }, 1000); });