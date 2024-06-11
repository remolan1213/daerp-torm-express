// Client-Side Routing (main.js)
// client/js/main.js

document.addEventListener("DOMContentLoaded", function () {
  const routes = {
    "/": () => import("./routes/home.html"),
    "/login": () => import("./routes/login.html"),
    "/settings": () => import("./routes/settings.html"),
    "/dashboard": () => import("./routes/dashboard.html"),
  };

  function loadPage(path) {
    window.history.pushState({}, "", path);
    routes[path].then(
      (content) =>
        (document.getElementById("content").innerHTML = content.default)
    );
  }

  window.addEventListener("popstate", () => loadPage(window.location.pathname));

  // Load the initial content
  loadPage(window.location.pathname);

  // Add event listeners to the navigation links
  document.querySelectorAll("#app a").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      loadPage(this.getAttribute("href"));
    });
  });
});
