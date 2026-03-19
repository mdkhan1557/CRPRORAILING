// ── SHARED COMPONENTS — CR PRO RAILING ──

const NAV_HTML = `
<nav id="navbar">
  <a class="nav-logo" href="index.html">
    <img class="logo-img" src="images/cr-pro-logo.png" alt="CR PRO RAILING Logo"/>
  </a>
  <ul class="nav-links" id="navLinks">
    <li><a href="index.html">Home</a></li>
    <li><a href="about.html">About</a></li>
    <li><a href="products.html">Products</a></li>
    <li><a href="category.html">Category</a></li>
    <li><a href="gallery.html">Our Work</a></li>
    <li><a href="contact.html" class="nav-cta">Get Quote</a></li>
  </ul>
  <button class="hamburger" id="hamburger" aria-label="Menu">
    <span></span><span></span><span></span>
  </button>
</nav>`;

const WHATSAPP_BTN = `
<div class="whatsapp-float">
  <a class="whatsapp-btn"
     href="https://wa.me/919000916120?text=Hi%20CR%20PRO%20RAILING%2C%20I%20would%20like%20to%20enquire%20about%20your%20railing%20products."
     target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 .4C7.4.4.4 7.4.4 16c0 2.8.7 5.4 2 7.7L.4 31.6l8.2-2.1c2.2 1.2 4.7 1.9 7.4 1.9 8.6 0 15.6-7 15.6-15.6S24.6.4 16 .4zm0 28.6c-2.5 0-4.8-.7-6.8-1.9l-.5-.3-4.9 1.3 1.3-4.7-.3-.5C3.5 20.8 2.7 18.5 2.7 16 2.7 8.6 8.6 2.7 16 2.7S29.3 8.6 29.3 16 23.4 29 16 29zm8.5-9.7c-.5-.2-2.7-1.3-3.1-1.5-.4-.1-.7-.2-1 .2-.3.4-1.2 1.5-1.4 1.8-.3.3-.5.3-1 .1-.5-.2-2-.7-3.8-2.4-1.4-1.3-2.3-2.8-2.6-3.3-.3-.5 0-.7.2-1 .2-.2.5-.5.7-.8.2-.3.3-.5.4-.8.1-.3 0-.6-.1-.8-.1-.2-1-2.5-1.4-3.4-.4-.9-.8-.8-1-.8h-.9c-.3 0-.8.1-1.2.6-.4.5-1.6 1.5-1.6 3.7s1.6 4.3 1.9 4.6c.2.3 3.2 4.9 7.8 6.8 1.1.5 1.9.8 2.6 1 1.1.3 2 .3 2.8.2.8-.1 2.7-1.1 3-2.2.4-1 .4-1.9.3-2.1-.1-.2-.4-.3-.9-.5z"/>
    </svg>
  </a>
  <span class="whatsapp-label">Chat with us!</span>
</div>`;

const FOOTER_HTML = `
<footer>
  <div class="footer-grid">
    <div class="footer-brand">
      <img src="images/cr-pro-logo.png" alt="CR PRO RAILING" style="height:70px;width:auto;object-fit:contain;margin-bottom:16px;display:block;"/>
      <p>Premium manufacturer of Aluminum, Stainless Steel &amp; Glass railings. Trusted by homeowners and architects across Hyderabad &amp; Telangana.</p>
      <div class="footer-social">
        <a href="https://wa.me/919000916120" target="_blank" title="WhatsApp" style="font-size:18px;">💬</a>
        <a href="mailto:crprorailing@gmail.com" title="Email" style="font-size:18px;">✉</a>
        <a href="https://maps.google.com/?q=Pilar+180+Near+Kotak+Bank+Upparpally+Rajendra+Nagar+Hyderabad" target="_blank" title="Location" style="font-size:18px;">📍</a>
      </div>
    </div>
    <div class="footer-col">
      <h4>Quick Links</h4>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About Us</a></li>
        <li><a href="products.html">Products</a></li>
        <li><a href="category.html">Categories</a></li>
        <li><a href="gallery.html">Our Work</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Products</h4>
      <ul>
        <li><a href="category.html#aluminum">Aluminum Railings</a></li>
        <li><a href="category.html#glass">Glass Railings</a></li>
        <li><a href="category.html#steel">SS Railings</a></li>
        <li><a href="category.html#balcony">Balcony Railings</a></li>
        <li><a href="category.html#stair">Stair Railings</a></li>
        <li><a href="category.html#deck">Deck Railings</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Contact Us</h4>
      <ul>
        <li><a href="tel:+919000916120">📞 9000916120</a></li>
        <li><a href="tel:+919581901555">📞 9581901555</a></li>
        <li><a href="mailto:crprorailing@gmail.com">✉ crprorailing@gmail.com</a></li>
        <li><a href="https://maps.google.com/?q=Pilar+180+Near+Kotak+Bank+Upparpally+Rajendra+Nagar+Hyderabad+500048" target="_blank" style="line-height:1.6;">📍 Pilar 180, Near Kotak Bank, Upparpally, Rajendra Nagar, Hyd – 500048</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <p>© 2025 CR PRO RAILING | Chhogaram Vishnoi | Hyderabad, Telangana – 500048</p>
  </div>
</footer>`;

function injectComponents(activePage) {
  document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
  document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);
  document.body.insertAdjacentHTML('beforeend', WHATSAPP_BTN);

  const links = document.querySelectorAll('.nav-links a:not(.nav-cta)');
  links.forEach(link => {
    if (link.getAttribute('href') === activePage) link.classList.add('active');
  });

  document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('open');
  });

  window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    nav.style.height = window.scrollY > 50 ? '62px' : '75px';
  });
}
