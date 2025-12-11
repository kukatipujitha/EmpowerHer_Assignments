// components/navbar.js
export function createNavbar() {
  const nav = document.createElement('nav');
  nav.className = 'navbar';
  nav.style.display = 'flex';
  nav.style.justifyContent = 'space-between';
  nav.style.alignItems = 'center';
  nav.style.padding = '10px 16px';
  nav.style.borderBottom = '1px solid #ddd';

  const brand = document.createElement('div');
  brand.innerHTML = `<strong>MyApp</strong>`;
  nav.appendChild(brand);

  const links = document.createElement('div');
  links.className = 'nav-links';

  const makeLink = (text, href, id = '') => {
    const a = document.createElement('a');
    a.href = href;
    a.textContent = text;
    a.style.margin = '0 8px';
    if (id) a.id = id;
    return a;
  };

  const homeLink = makeLink('Home', 'index.html');
  const signupLink = makeLink('Signup', 'signup.html', 'nav-signup');
  const loginLink = makeLink('Login', 'login.html', 'nav-login');
  const todosLink = makeLink('Todos', 'todos.html', 'nav-todos');
  const logoutLink = makeLink('Logout', '#', 'nav-logout');

  links.appendChild(homeLink);
  links.appendChild(todosLink);
  links.appendChild(signupLink);
  links.appendChild(loginLink);
  links.appendChild(logoutLink);
  nav.appendChild(links);

  // update visible links according to login state
  function refresh() {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      signupLink.style.display = 'none';
      loginLink.style.display = 'none';
      logoutLink.style.display = 'inline';
      todosLink.style.display = 'inline';
    } else {
      signupLink.style.display = 'inline';
      loginLink.style.display = 'inline';
      logoutLink.style.display = 'none';
      todosLink.style.display = 'inline';
    }
  }
  refresh();

  // Logout handler
  logoutLink.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.removeItem('currentUser');
    refresh();
    // send user to login
    window.location.href = 'login.html';
  });

  // observe storage changes in other tabs
  window.addEventListener('storage', () => refresh());

  return nav;
}
