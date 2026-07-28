document.addEventListener("DOMContentLoaded", function() {

  let toggles = document.querySelectorAll('button.realfake');

  toggles.forEach((toggle) => {
    toggle.addEventListener('click', (e) => {
    
      let pressed = !(e.target.getAttribute('aria-pressed') === 'true');
      e.target.setAttribute('aria-pressed', pressed);
      e.target.textContent = pressed ? 'Fake' : 'Real';
      
      let name = e.target.getAttribute('name');
      let radios = document.querySelectorAll('input[name='+name+']');
      let targetRadio;
      radios.forEach((radio) => {
        if (!radio.checked) {
          targetRadio = radio;
        }
      });
      targetRadio.checked = true;
      
    });
  });
  
});


function resetAll() {
  
  let toggles = document.querySelectorAll('button.realfake');
  toggles.forEach((toggle) => {
    toggle.setAttribute('aria-pressed', 'false');
    toggle.textContent = 'Real';
  });
  
  let radios = document.querySelectorAll('label:first-of-type > input[type=radio]');
  radios.forEach((radio) => {
    radio.checked = true;
  });
  
}


function popOut() {
  window.open("index.html", "popout", "width=640,height=580,popup=true");
}

