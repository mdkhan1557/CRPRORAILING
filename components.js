// Shared components injected by each page
const NAV_HTML = `
<nav id="navbar">
  <a class="nav-logo" href="index.html">
    <div class="logo-icon">🔩</div>
    <span>Railing<em>World</em></span>
  </a>
  <ul class="nav-links" id="navLinks">
    <li><a href="index.html">Home</a></li>
    <li><a href="about.html">About</a></li>
    <li><a href="products.html">Products</a></li>
    <li><a href="category.html">Category</a></li>
    <li><a href="contact.html" class="nav-cta">Get Quote</a></li>
  </ul>
  <button class="hamburger" id="hamburger" aria-label="Menu">
    <span></span><span></span><span></span>
  </button>
</nav>`;

const FOOTER_HTML = `
<footer>
  <div class="footer-grid">
    <div class="footer-brand">
      <a class="nav-logo" href="index.html" style="display:inline-flex;margin-bottom:0">
        <div class="logo-icon">🔩</div>
        <span style="font-family:'Playfair Display',serif;font-size:20px;font-weight:700;color:#fff">Railing<em style="color:#C9A84C;font-style:normal">World</em></span>
      </a>
      <p>Premium manufacturer of Aluminum, Stainless Steel & Glass railings. Trusted by thousands of homeowners and architects across India.</p>
      <div class="footer-social">
        <a href="#">f</a><a href="#">in</a><a href="#">yt</a>
      </div>
    </div>
    <div class="footer-col">
      <h4>Quick Links</h4>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About Us</a></li>
        <li><a href="products.html">Products</a></li>
        <li><a href="category.html">Categories</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Products</h4>
      <ul>
        <li><a href="category.html#aluminum">Aluminum Railings</a></li>
        <li><a href="category.html#glass">Glass Railings</a></li>
        <li><a href="category.html#steel">Steel Railings</a></li>
        <li><a href="category.html#balcony">Balcony Railings</a></li>
        <li><a href="category.html#stair">Stair Railings</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Contact</h4>
      <ul>
        <li><a href="tel:+91XXXXXXXXXX">+91 98765 43210</a></li>
        <li><a href="mailto:info@railingworld.in">info@railingworld.in</a></li>
        <li><a href="#">Mumbai, Maharashtra</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <p>© 2025 RailingWorld. All rights reserved. Crafted with precision.</p>
  </div>
</footer>`;

function injectComponents(activePage) {
  // Inject nav
  document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
  // Inject footer
  document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);

  // Set active nav link
  const links = document.querySelectorAll('.nav-links a:not(.nav-cta)');
  links.forEach(link => {
    if (link.getAttribute('href') === activePage) link.classList.add('active');
  });

  // Hamburger toggle
  document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('open');
  });

  // Scroll effect on nav
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
      nav.style.height = '62px';
    } else {
      nav.style.height = '75px';
    }
  });
}
