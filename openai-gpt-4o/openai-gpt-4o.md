Created by OpenAI Assistant in Playground using gpt-4o-2024-5-13

Folder Structure
project-root/
├── client/
│   ├── index.html
│   ├── app.js
│   ├── login.html
│   ├── dashboard.html
│   ├── settings.html
│   └── styles.css
├── server/
│   ├── app.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── dashboard.js
│   │   └── settings.js
├── package.json
└── package-lock.json

Client
1. index.html
This will be the entry point of our application.

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SPA with Vanilla JS</title>
  <link rel="stylesheet" href="/styles.css">
</head>
<body>
  <div id="app"></div>
  <script src="/app.js"></script>
</body>
</html>

2. login.html
The login page.

<div>
  <h2>Login</h2>
  <form id="loginForm">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" required>
    
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required>
    
    <button type="submit">Login</button>
  </form>
</div>

3. dashboard.html
The dashboard page.

<div>
  <h2>Dashboard</h2>
  <p>Welcome to the dashboard!</p>
</div>

4. settings.html
The settings page.

<div>
  <h2>Settings</h2>
  <p>Manage your settings here.</p>
</div>

5. styles.css
body {
  font-family: Arial, sans-serif;
}
#app {
  padding: 20px;
}

6. app.js

document.addEventListener("DOMContentLoaded", () => {
  const appDiv = document.getElementById("app");

  const loadContent = (url) => {
    fetch(url)
      .then(response => response.text())
      .then(html => appDiv.innerHTML = html)
      .catch(err => console.error('Failed to load content', err));
  };

  const routes = {
    "/": "/login.html",
    "/dashboard": "/dashboard.html",
    "/settings": "/settings.html"
  };

  const onRouteChange = () => {
    const path = window.location.pathname;
    const resource = routes[path] || routes["/"];
    loadContent(resource);
  };

  window.onpopstate = onRouteChange;

  const handleRouteChange = (event) => {
    event.preventDefault();
    const path = event.target.getAttribute("href");
    window.history.pushState({}, path, window.location.origin + path);
    onRouteChange();
  };

  document.addEventListener("click", event => {
    if (event.target.matches("a")) handleRouteChange(event);
  });
  
  onRouteChange();

  appDiv.addEventListener("submit", (event) => {
    if (event.target.id === "loginForm") {
      event.preventDefault();
      const formData = new FormData(event.target);
      fetch("/login", {
        method: "POST",
        body: JSON.stringify({
          username: formData.get("username"),
          password: formData.get("password")
        }),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            window.history.pushState({}, "/dashboard", window.location.origin + "/dashboard");
            onRouteChange();
          } else {
            alert("Login failed!");
          }
        })
        .catch(err => console.error('Login failed', err));
    }
  });
});

Server
1. server/app.js
The main server file.

const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const authRoutes = require('./routes/auth');
const dashboardRoutes = require('./routes/dashboard');
const settingsRoutes = require('./routes/settings');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '..', 'client')));

app.use(authRoutes);
app.use(dashboardRoutes);
app.use(settingsRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'client', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

2. server/routes/auth.js
Authentication routes.
const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'user' && password === 'password') {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

module.exports = router;

3. server/routes/dashboard.js
Dashboard routes.

const express = require('express');
const router = express.Router();

router.get('/dashboard', (req, res) => {
  res.json({ success: true, message: 'Welcome to the dashboard!' });
});

module.exports = router;

4. server/routes/settings.js
Settings routes.

const express = require('express');
const router = express.Router();

router.get('/settings', (req, res) => {
  res.json({ success: true, message: 'Manage your settings here.' });
});

module.exports = router;

Install Dependencies
In project-root/, run:

npm init -y
npm install express body-parser

This sets up a basic structure for a single-page application with Vanilla JavaScript for the client-side routing and Express.js for the server-side framework. The login mechanism is very basic and is for demonstration purposes only. In a real application, you would add more sophisticated user authentication and session management.