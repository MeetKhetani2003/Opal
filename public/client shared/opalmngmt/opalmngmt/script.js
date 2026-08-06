document.addEventListener('DOMContentLoaded', function () {

  /* ---------- Sticky header shadow on scroll ---------- */
  const header = document.getElementById('siteHeader');
  const scrollTopBtn = document.getElementById('scrollTop');

  function onScroll() {
    if (window.scrollY > 12) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    if (window.scrollY > 500) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  scrollTopBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ---------- Mobile hamburger menu ---------- */
  const hamburger = document.getElementById('hamburger');
  const mainNav = document.getElementById('mainNav');

  hamburger.addEventListener('click', function () {
    const isOpen = mainNav.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  // Close mobile menu when a link is clicked
  mainNav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      mainNav.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  /* ---------- Active nav link on scroll ---------- */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function setActiveLink() {
    let current = sections[0] ? sections[0].id : '';
    const scrollPos = window.scrollY + 140;

    sections.forEach(function (section) {
      if (scrollPos >= section.offsetTop) {
        current = section.id;
      }
    });

    navLinks.forEach(function (link) {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
  }
  window.addEventListener('scroll', setActiveLink, { passive: true });
  setActiveLink();

  /* ---------- Job Seeker / For Employer pill toggle ---------- */
  const pills = document.querySelectorAll('.pill');
  pills.forEach(function (pill) {
    pill.addEventListener('click', function () {
      pills.forEach(function (p) { p.classList.remove('pill-active'); });
      pill.classList.add('pill-active');
    });
  });

  /* =====================================================
     JOB SEEKER SLIDE-IN FORM
  ===================================================== */

  // PASTE YOUR DEPLOYED GOOGLE APPS SCRIPT WEB APP URL HERE
  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxUMALc4LR5cnKeV_GG5fHpaVXI6sXKpmpepOvGSa59EOqCWLuxR6r8feYNS8LwxiNa/exec';

  const jobSeekerPill = document.querySelector('[data-pill="job-seeker"]');
  const jsformOverlay = document.getElementById('jsformOverlay');
  const jsformPanel = document.getElementById('jsformPanel');
  const jsformClose = document.getElementById('jsformClose');
  const jobSeekerForm = document.getElementById('jobSeekerForm');
  const jsformStatus = document.getElementById('jsformStatus');
  const jsformSubmit = document.getElementById('jsformSubmit');
  const fsResume = document.getElementById('fsResume');
  const uploadBox = document.getElementById('uploadBox');
  const uploadText = document.getElementById('uploadText');

  function openJobSeekerForm() {
    jsformOverlay.classList.add('open');
    jsformPanel.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeJobSeekerForm() {
    jsformOverlay.classList.remove('open');
    jsformPanel.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (jobSeekerPill) {
    jobSeekerPill.addEventListener('click', openJobSeekerForm);
  }
  if (jsformClose) jsformClose.addEventListener('click', closeJobSeekerForm);
  if (jsformOverlay) jsformOverlay.addEventListener('click', closeJobSeekerForm);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && jsformPanel.classList.contains('open')) {
      closeJobSeekerForm();
    }
  });

  if (fsResume) {
    fsResume.addEventListener('change', function () {
      if (fsResume.files && fsResume.files[0]) {
        const file = fsResume.files[0];
        if (file.size > 5 * 1024 * 1024) {
          uploadText.textContent = 'File too large — max 5 MB';
          uploadBox.classList.remove('has-file');
          fsResume.value = '';
          return;
        }
        uploadText.textContent = file.name;
        uploadBox.classList.add('has-file');
      } else {
        uploadText.textContent = 'Click to upload your resume';
        uploadBox.classList.remove('has-file');
      }
    });
  }

  function fileToBase64(file) {
    return new Promise(function (resolve, reject) {
      const reader = new FileReader();
      reader.onload = function () { resolve(reader.result.split(',')[1] || ''); };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  if (jobSeekerForm) {
    jobSeekerForm.addEventListener('submit', function (e) {
      e.preventDefault();

      if (!jobSeekerForm.checkValidity()) {
        jobSeekerForm.reportValidity();
        return;
      }

      if (SCRIPT_URL.indexOf('PASTE_YOUR') === 0) {
        jsformStatus.textContent = 'Form is not connected to Google Sheets yet - add your Apps Script URL in script.js.';
        jsformStatus.className = 'jsform-status error';
        return;
      }

      jsformSubmit.disabled = true;
      jsformSubmit.innerHTML = '<span class="spinner"></span> Submitting...';
      jsformStatus.textContent = '';
      jsformStatus.className = 'jsform-status';

      const payload = {
        name: document.getElementById('fsName').value.trim(),
        email: document.getElementById('fsEmail').value.trim(),
        phone: document.getElementById('fsPhone').value.trim(),
        position: document.getElementById('fsPosition').value.trim(),
        experience: document.getElementById('fsExperience').value,
        qualification: document.getElementById('fsQualification').value,
        message: document.getElementById('fsMessage').value.trim(),
        resumeBase64: '',
        resumeName: '',
        resumeType: ''
      };

      const resumeFile = fsResume.files && fsResume.files[0] ? fsResume.files[0] : null;

      const sendPayload = function () {
        fetch(SCRIPT_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify(payload)
        })
        .then(function () {
          jsformStatus.textContent = 'Application submitted successfully. We will be in touch soon!';
          jsformStatus.className = 'jsform-status success';
          jobSeekerForm.reset();
          uploadText.textContent = 'Click to upload your resume';
          uploadBox.classList.remove('has-file');
          setTimeout(closeJobSeekerForm, 1800);
        })
        .catch(function () {
          jsformStatus.textContent = 'Something went wrong. Please try again.';
          jsformStatus.className = 'jsform-status error';
        })
        .finally(function () {
          jsformSubmit.disabled = false;
          jsformSubmit.textContent = 'Submit Application';
        });
      };

      if (resumeFile) {
        fileToBase64(resumeFile).then(function (base64) {
          payload.resumeBase64 = base64;
          payload.resumeName = resumeFile.name;
          payload.resumeType = resumeFile.type;
          sendPayload();
        }).catch(function () {
          sendPayload();
        });
      } else {
        sendPayload();
      }
    });
  }

  /* ---------- Scroll reveal ---------- */
  const revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(function (el) { revealObserver.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------- Animated stat counter (13+) ---------- */
  const statNumber = document.querySelector('.stat-number');

  function animateCount(el) {
    const target = parseInt(el.getAttribute('data-target'), 10) || 0;
    const duration = 1200;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target);
      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        el.textContent = target;
      }
    }
    requestAnimationFrame(tick);
  }

  if (statNumber && 'IntersectionObserver' in window) {
    const statObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    statObserver.observe(statNumber);
  }

  /* ---------- Smooth anchor scrolling with header offset ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId.length > 1) {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          const offset = 84;
          const top = targetEl.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: top, behavior: 'smooth' });
        }
      }
    });
  });

});