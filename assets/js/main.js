/**
 * SM AUTOMOTIVE CONTROL CABLES - JAVASCRIPT
 * Vanilla JS, lightweight, accessible, zero framework dependencies
 * Final Platform Target: WordPress + Hello Elementor Compatible
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initActiveNav();
  initContactForm();
  initUrlParamPrefill();
});

/**
 * 1. Accessible Mobile Navigation
 */
function initMobileNav() {
  const toggleBtn = document.querySelector('.nav-toggle');
  const siteNav = document.querySelector('.site-nav');

  if (!toggleBtn || !siteNav) return;

  toggleBtn.addEventListener('click', () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', !isExpanded);
    siteNav.classList.toggle('is-open');

    // Accessibility label
    toggleBtn.setAttribute('aria-label', isExpanded ? 'Open Navigation Menu' : 'Close Navigation Menu');
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!siteNav.contains(e.target) && !toggleBtn.contains(e.target) && siteNav.classList.contains('is-open')) {
      siteNav.classList.remove('is-open');
      toggleBtn.setAttribute('aria-expanded', 'false');
      toggleBtn.setAttribute('aria-label', 'Open Navigation Menu');
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && siteNav.classList.contains('is-open')) {
      siteNav.classList.remove('is-open');
      toggleBtn.setAttribute('aria-expanded', 'false');
      toggleBtn.focus();
    }
  });
}

/**
 * 2. Active Navigation Item Detection
 */
function initActiveNav() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach((link) => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html') || (currentPath === 'blog-template.html' && href === 'blog.html')) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    } else {
      link.classList.remove('active');
      link.removeAttribute('aria-current');
    }
  });
}

/**
 * 3. B2B Enquiry Form Validation & Prototype Success State
 */
function initContactForm() {
  const form = document.getElementById('b2b-quote-form');
  const successPanel = document.getElementById('form-success-panel');

  if (!form || !successPanel) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let hasErrors = false;
    const requiredInputs = form.querySelectorAll('[required]');

    // Validate fields
    requiredInputs.forEach((input) => {
      const formGroup = input.closest('.form-group');
      const val = input.value.trim();

      let isInvalid = false;
      if (input.type === 'checkbox') {
        isInvalid = !input.checked;
      } else if (!val) {
        isInvalid = true;
      } else if (input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
        isInvalid = true;
      }

      if (isInvalid) {
        hasErrors = true;
        if (formGroup) formGroup.classList.add('has-error');
        input.classList.add('is-invalid');
      } else {
        if (formGroup) formGroup.classList.remove('has-error');
        input.classList.remove('is-invalid');
      }

      // Clear error on input or selection change
      const clearError = () => {
        const isNowValid = input.type === 'checkbox' ? input.checked : Boolean(input.value.trim());
        if (isNowValid) {
          if (formGroup) formGroup.classList.remove('has-error');
          input.classList.remove('is-invalid');
        }
      };
      input.addEventListener('input', clearError);
      input.addEventListener('change', clearError);
    });

    if (hasErrors) {
      const firstInvalid = form.querySelector('.is-invalid');
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    // Prototype submission demo
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Processing Enquiry...';

    setTimeout(() => {
      // Gather submitted details for preview
      const formData = new FormData(form);
      const name = formData.get('fullName') || 'Valued Buyer';
      const company = formData.get('companyName') || 'Company';
      const market = formData.get('market') || 'International';
      const product = formData.get('productCategory') || 'Automotive Cables';
      const volume = formData.get('estimatedVolume') || 'Commercial Requirement';

      // Populate summary container
      const summaryPlaceholder = document.getElementById('submitted-summary-content');
      if (summaryPlaceholder) {
        summaryPlaceholder.innerHTML = `
          <p><strong>Contact:</strong> ${escapeHtml(name)} (${escapeHtml(company)})</p>
          <p><strong>Destination Market:</strong> ${escapeHtml(market)}</p>
          <p><strong>Primary Interest:</strong> ${escapeHtml(product)}</p>
          <p><strong>Order Requirement:</strong> ${escapeHtml(volume)}</p>
        `;
      }

      // Hide form, show success state
      form.style.display = 'none';
      successPanel.classList.add('is-active');
      successPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });

      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
    }, 450);
  });

  // Handle "Submit another enquiry" button
  const resetBtn = document.getElementById('btn-reset-form');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      form.reset();
      form.style.display = 'block';
      successPanel.classList.remove('is-active');
      form.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
}

/**
 * 4. Pre-fill product interest from URL query params (e.g. ?product=clutch)
 */
function initUrlParamPrefill() {
  const urlParams = new URLSearchParams(window.location.search);
  const productParam = urlParams.get('product');
  const productSelect = document.getElementById('productCategory');

  if (productParam && productSelect) {
    const cleanParam = productParam.toLowerCase().replace(/[-_\s]/g, '');
    for (let i = 0; i < productSelect.options.length; i++) {
      const cleanOption = productSelect.options[i].value.toLowerCase().replace(/[-_\s]/g, '');
      if (cleanOption.includes(cleanParam) || cleanParam.includes(cleanOption)) {
        productSelect.selectedIndex = i;
        break;
      }
    }
  }
}

function escapeHtml(string) {
  const div = document.createElement('div');
  div.textContent = string;
  return div.innerHTML;
}
