const sidebar = document.getElementById("sidebar");
const menuToggle = document.getElementById("menuToggle");
const backdrop = document.getElementById("backdrop");
const navLinks = document.querySelectorAll(".nav a");
const firstNavLink = sidebar?.querySelector(".nav a");

document.querySelectorAll("ion-icon").forEach((icon) => {
  icon.setAttribute("aria-hidden", "true");
  icon.setAttribute("focusable", "false");
});

function closeSidebar({ returnFocus = false } = {}) {
  sidebar.classList.remove("open");
  backdrop.classList.remove("show");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation menu");
  if (returnFocus) menuToggle.focus();
}

function openSidebar() {
  sidebar.classList.add("open");
  backdrop.classList.add("show");
  menuToggle.setAttribute("aria-expanded", "true");
  menuToggle.setAttribute("aria-label", "Close navigation menu");
  if (window.innerWidth <= 920) firstNavLink?.focus();
}

menuToggle.addEventListener("click", () => {
  const isOpen = sidebar.classList.contains("open");
  if (isOpen) {
    closeSidebar();
  } else {
    openSidebar();
  }
});

backdrop.addEventListener("click", () =>
  closeSidebar({ returnFocus: true }),
);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && sidebar.classList.contains("open")) {
    closeSidebar({ returnFocus: true });
  }
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 920) closeSidebar();
  });
});

const sections = [...document.querySelectorAll("section[id]")];
const linkMap = new Map(
  sections.map((section) => [
    section.id,
    document.querySelector(`.nav a[href="#${section.id}"]`),
  ]),
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          link.removeAttribute("aria-current");
        });
        const active = linkMap.get(entry.target.id);
        if (active) {
          active.classList.add("active");
          active.setAttribute("aria-current", "location");
        }
      }
    });
  },
  {
    rootMargin: "-38% 0px -48% 0px",
    threshold: 0.01,
  },
);

sections.forEach((section) => observer.observe(section));

const guidedEnquiryForm = document.getElementById("guidedEnquiryForm");
const guidedRoute = document.getElementById("guidedRoute");
const guidedNeed = document.getElementById("guidedNeed");
const guidedName = document.getElementById("guidedName");
const guidedEmail = document.getElementById("guidedEmail");
const guidedCompany = document.getElementById("guidedCompany");
const guidedProblem = document.getElementById("guidedProblem");
const guidedResult = document.getElementById("guidedEnquiryResult");
const guidedInboxLink = document.getElementById("guidedInboxLink");
const guidedSubject = document.getElementById("guidedSubject");
const guidedMessage = document.getElementById("guidedMessage");
const guidedCopy = document.getElementById("guidedCopy");
const guidedDraftLink = document.getElementById("guidedDraftLink");
const guidedStatus = document.getElementById("guidedStatus");

const routeLabels = {
  founder: "Startup Business Builder / founder planning",
  ifv: "IFV Builder / visa pathway",
  rotaplan: "Rotaplan / shift planning",
  warewise: "Warewise / warehouse control",
  accounts: "DII Accounts / finance operations",
  "not-sure": "Not sure yet",
};

const needLabels = {
  direction: "Help choosing the right route",
  sales: "Product demo or commercial discussion",
  support: "Existing product or account support",
  legal: "Legal or formal contact",
};

function getGuidedInbox(route, need) {
  if (need === "legal") {
    return "legal@dii.ltd";
  }

  if (route === "ifv") {
    if (need === "sales") return "sales.ifv@dii.ltd";
    if (need === "support") return "support.ifv@dii.ltd";
    return "contact.ifv@dii.ltd";
  }

  if (need === "sales") return "sales@dii.ltd";
  if (need === "support") return "support@dii.ltd";
  return "contact@dii.ltd";
}

function buildGuidedMessage() {
  const name = guidedName.value.trim();
  const email = guidedEmail.value.trim();
  const company = guidedCompany.value.trim() || "Not provided";
  const route = guidedRoute.value;
  const need = guidedNeed.value;
  const problem = guidedProblem.value.trim();
  const routeLabel = routeLabels[route] || route;
  const needLabel = needLabels[need] || need;
  const inbox = getGuidedInbox(route, need);
  const subject = `${routeLabel} | ${needLabel} | ${name}`;
  const message = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company}`,
    `Closest route: ${routeLabel}`,
    `What I need: ${needLabel}`,
    "",
    "What I am trying to solve:",
    problem,
  ].join("\n");

  return { inbox, subject, message };
}

function fallbackCopyText(text) {
  const temp = document.createElement("textarea");
  temp.value = text;
  temp.setAttribute("readonly", "");
  temp.style.position = "absolute";
  temp.style.left = "-9999px";
  document.body.appendChild(temp);
  temp.select();
  temp.setSelectionRange(0, temp.value.length);
  const copied = document.execCommand("copy");
  document.body.removeChild(temp);
  return copied;
}

function renderGuidedEnquiry({ announce = false } = {}) {
  const { inbox, subject, message } = buildGuidedMessage();
  guidedResult.hidden = false;
  guidedInboxLink.textContent = inbox;
  guidedInboxLink.href = `mailto:${inbox}`;
  guidedSubject.textContent = subject;
  guidedMessage.value = message;
  guidedDraftLink.href = `mailto:${inbox}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(message)}`;

  if (announce) {
    guidedStatus.textContent =
      "Enquiry prepared. Send this as your starting brief, or copy it into your normal email service.";
  }

  return { inbox, subject, message };
}

if (guidedEnquiryForm) {
  guidedEnquiryForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!guidedEnquiryForm.reportValidity()) return;

    renderGuidedEnquiry({ announce: true });

    guidedResult.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "nearest",
    });
  });

  [
    guidedName,
    guidedEmail,
    guidedCompany,
    guidedProblem,
    guidedRoute,
    guidedNeed,
  ].forEach((field) => {
    field?.addEventListener("input", () => {
      if (guidedResult.hidden) return;
      if (!guidedEnquiryForm.checkValidity()) {
        guidedStatus.textContent =
          "Complete the required fields to refresh the enquiry.";
        return;
      }

      renderGuidedEnquiry();
      guidedStatus.textContent =
        "Enquiry updated. Send or copy the latest version so the starting brief stays accurate.";
    });

    field?.addEventListener("change", () => {
      if (guidedResult.hidden) return;
      if (!guidedEnquiryForm.checkValidity()) return;

      renderGuidedEnquiry();
      guidedStatus.textContent =
        "Enquiry updated. Send or copy the latest version so the starting brief stays accurate.";
    });
  });

  guidedCopy?.addEventListener("click", async () => {
    if (!guidedEnquiryForm.reportValidity()) {
      guidedStatus.textContent =
        "Complete the required fields before copying the enquiry.";
      return;
    }

    const { inbox, subject, message } = renderGuidedEnquiry();
    const copyText = `Send to: ${inbox}\nSubject: ${subject}\n\n${message}`;

    try {
      await navigator.clipboard.writeText(copyText);
      guidedStatus.textContent =
        "Enquiry details copied. Paste them into your normal email service so the first message keeps the full brief.";
    } catch (error) {
      const copied = fallbackCopyText(copyText);
      guidedStatus.textContent = copied
        ? "Enquiry details copied. Paste them into your normal email service so the first message keeps the full brief."
        : "Copy did not complete automatically. Use the draft link or copy the message manually.";
    }
  });
}

const carousel = document.getElementById("heroCarousel");
const slides = carousel ? carousel.querySelectorAll(".hero-slide") : [];
const dots = carousel
  ? carousel.querySelectorAll(".hero-carousel-dot")
  : [];
const prevBtn = document.getElementById("heroPrev");
const nextBtn = document.getElementById("heroNext");

let currentSlide = 0;
let autoplayId = null;
const autoplayDelay = 5000;

function showSlide(index) {
  if (!slides.length) return;

  currentSlide = (index + slides.length) % slides.length;

  slides.forEach((slide, i) => {
    const isActive = i === currentSlide;
    slide.classList.toggle("active", isActive);
    slide.setAttribute("aria-hidden", isActive ? "false" : "true");
  });

  dots.forEach((dot, i) => {
    const isActive = i === currentSlide;
    dot.classList.toggle("active", isActive);
    dot.setAttribute("aria-pressed", isActive ? "true" : "false");
  });
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

function startAutoplay() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
    return;
  if (carousel?.matches(":hover, :focus-within")) return;
  stopAutoplay();
  autoplayId = window.setInterval(nextSlide, autoplayDelay);
}

function stopAutoplay() {
  if (autoplayId) {
    window.clearInterval(autoplayId);
    autoplayId = null;
  }
}

if (slides.length) {
  showSlide(0);

  nextBtn?.addEventListener("click", () => {
    nextSlide();
    startAutoplay();
  });

  prevBtn?.addEventListener("click", () => {
    prevSlide();
    startAutoplay();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index);
      startAutoplay();
    });
  });

  carousel.addEventListener("mouseenter", stopAutoplay);
  carousel.addEventListener("mouseleave", startAutoplay);
  carousel.addEventListener("focusin", stopAutoplay);
  carousel.addEventListener("focusout", startAutoplay);

  startAutoplay();
}

const reduceMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

if (!reduceMotion && window.gsap) {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".hero-copy .eyebrow", {
    opacity: 0,
    y: 18,
    duration: 0.55,
    ease: "power2.out",
  });

  gsap.from(".hero-copy h1", {
    opacity: 0,
    y: 26,
    duration: 0.7,
    delay: 0.06,
    ease: "power2.out",
  });

  gsap.from(".hero-copy .lede", {
    opacity: 0,
    y: 18,
    duration: 0.65,
    delay: 0.14,
    ease: "power2.out",
  });

  gsap.from(".hero-actions .btn", {
    opacity: 0,
    y: 16,
    stagger: 0.07,
    duration: 0.55,
    delay: 0.2,
    ease: "power2.out",
  });

  gsap.from(".hero-point", {
    opacity: 0,
    y: 18,
    stagger: 0.08,
    duration: 0.55,
    delay: 0.26,
    ease: "power2.out",
  });

  gsap.from(".hero-panel-main", {
    opacity: 0,
    x: 18,
    duration: 0.7,
    delay: 0.1,
    ease: "power2.out",
  });

  gsap.from(".hero-panel-bottom", {
    opacity: 0,
    y: 18,
    duration: 0.72,
    delay: 0.24,
    ease: "power2.out",
  });

  gsap.from(".hero-carousel-controls, .hero-carousel-dots", {
    opacity: 0,
    y: 10,
    duration: 0.5,
    delay: 0.4,
    ease: "power2.out",
  });

  document.querySelectorAll(".reveal").forEach((section) => {
    gsap.from(
      section.querySelectorAll(
        ".card, .pillar, .contact-card, .timeline-card, .timeline-summary, .metric, .knowledge-panel, .contact-panel",
      ),
      {
        opacity: 0,
        y: 24,
        duration: 0.65,
        stagger: 0.06,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 78%",
          toggleActions: "play none none reverse",
        },
      },
    );
  });
}
