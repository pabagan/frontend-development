# Navbar
```html
<header class="app-header" role="banner">
  <div class="app-logo">
    <a class="app-logo__link" href="/" rel="home">
      <span class="site-title sr-only">Carofile</span>
      <img class="app-logo__img" alt="" src="assets/img/logo.png" />
    </a>
  </div><!-- #app-logo -->

  <button class="app-nav-toggle" data-toggle-classes type="button" aria-expanded="false" aria-controls="app-navigation">
    <span class="app-nav-toggle__icon" aria-hidden="true"></span>
    <span class="sr-only"> Primary Menu </span>
  </button><!-- .nav-toggle -->

  <nav id="app-navigation" class="app-nav" role="navigation">
    <ul id="primary-menu" class="app-nav__list">
      <li class="app-nav__item">
        <a class="app-nav__link" href="#home" data-scroll-to="#home">Home</a>
      </li>
      <li class="app-nav__item">
        <a class="app-nav__link app-nav__link--active" href="#about" data-scroll-to="#about">About</a>
      </li>
    </ul><!-- .app-nav__list -->
  </nav><!-- .app-nav -->
</header><!-- .app-header -->
```