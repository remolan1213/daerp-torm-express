function loadPage(pageName) {
    const app = document.getElementById('app');
    fetch(`/views/${pageName}.ejs`)
      .then(response => response.text())
      .then(html => {
        app.innerHTML = html;
      });
  }
  
  function navigate() {
    const hash = window.location.hash.substring(1);
    if (hash === 'login' || hash === 'dashboard' || hash === 'settings') {
      loadPage(hash);
    } else {
      loadPage('login');
    }
  }
  
  window.addEventListener('hashchange', navigate);
  window.addEventListener('load', navigate);