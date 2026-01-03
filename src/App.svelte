<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import Hero from './lib/sections/Hero.svelte';
  import About from './lib/sections/About.svelte';
  import Work from './lib/sections/Work.svelte';
  import Projects from './lib/sections/Projects.svelte';
  import Publications from './lib/sections/Publications.svelte';
  import Contact from './lib/sections/Contact.svelte';
  import ThemeToggle from './lib/components/ThemeToggle.svelte';
  import CustomCursor from './lib/components/CustomCursor.svelte';
  import { theme } from './lib/stores/theme';

  let mounted = false;
  let scrollProgress = 0;
  let headerSolid = false;
  let mobileMenuOpen = false;

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'work', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'writing', label: 'Writing' },
    { id: 'contact', label: 'Contact' }
  ];

  // Stats for the stats bar
  const stats = [
    { value: '6+', label: 'Years Experience' },
    { value: '50+', label: 'Projects Shipped' },
    { value: '1M+', label: 'LinkedIn Views' },
    { value: '99%', label: 'Uptime Record' }
  ];

  // Marquee items
  const marqueeItems = [
    'TypeScript Expert',
    'React Specialist',
    'Full-Stack Developer',
    'Open Source Contributor',
    'Performance Focused',
    'Clean Code Advocate'
  ];

  function updateScroll() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    scrollProgress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    headerSolid = scrollTop > 50;
  }

  function scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      mobileMenuOpen = false;
    }
  }

  // Intersection observer for scroll animations
  function setupAnimations() {
    if (typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in, .stagger-children').forEach((el) => {
      observer.observe(el);
    });
  }

  onMount(() => {
    mounted = true;
    theme.init();
    window.addEventListener('scroll', updateScroll, { passive: true });
    updateScroll();
    setTimeout(setupAnimations, 100);
  });

  onDestroy(() => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', updateScroll);
    }
  });
</script>

{#if mounted}
  <!-- Ink Splatter Decorations -->
  <div class="ink-splatter ink-splatter-1" aria-hidden="true"></div>
  <div class="ink-splatter ink-splatter-2" aria-hidden="true"></div>
  <div class="ink-splatter ink-splatter-3" aria-hidden="true"></div>

  <!-- Scroll Progress Bar -->
  <div class="scroll-progress" style="--progress: {scrollProgress}%"></div>

  <!-- Custom Cursor (desktop only) -->
  <div class="cursor-wrapper">
    <CustomCursor />
  </div>

  <!-- Fixed Header -->
  <header class="header" class:solid={headerSolid}>
    <div class="header-content">
      <a href="#home" class="logo" on:click|preventDefault={() => scrollToSection('home')}>
        <span class="logo-icon">A</span>
        <span class="logo-text">Artur</span>
      </a>

      <nav class="nav" class:open={mobileMenuOpen}>
        {#each navItems as item}
          <a
            href="#{item.id}"
            class="nav-link"
            on:click|preventDefault={() => scrollToSection(item.id)}
          >
            {item.label}
          </a>
        {/each}
      </nav>

      <div class="header-right">
        <ThemeToggle />
        <button
          class="mobile-menu-btn"
          class:open={mobileMenuOpen}
          on:click={() => mobileMenuOpen = !mobileMenuOpen}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </header>

  <!-- Main Content -->
  <main class="main-content">
    <!-- Hero Section -->
    <section class="section hero-section" id="home">
      <Hero />
    </section>

    <!-- Stats Bar -->
    <section class="stats-bar">
      <div class="stats-container fade-in">
        {#each stats as stat}
          <div class="stat-item">
            <span class="stat-value">{stat.value}</span>
            <span class="stat-label">{stat.label}</span>
          </div>
        {/each}
      </div>
    </section>

    <!-- Trust Marquee -->
    <section class="trust-marquee">
      <div class="marquee-track">
        <div class="marquee-content">
          {#each [...marqueeItems, ...marqueeItems] as item}
            <span class="marquee-item">{item}</span>
            <span class="marquee-dot"></span>
          {/each}
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="section" id="about">
      <About />
    </section>

    <!-- Work Section -->
    <section class="section" id="work">
      <Work />
    </section>

    <!-- Projects Section -->
    <section class="section" id="projects">
      <Projects />
    </section>

    <!-- Publications Section -->
    <section class="section" id="writing">
      <Publications />
    </section>

    <!-- Contact Section -->
    <section class="section" id="contact">
      <Contact />
    </section>
  </main>

  <!-- Footer -->
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-left">
        <span class="footer-logo">Artur Arslanov</span>
        <span class="footer-divider">·</span>
        <span class="footer-role">Senior Software Engineer</span>
      </div>
      <div class="footer-links">
        <a href="https://github.com/arslanoov" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/artur-arslanov" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:artur.arslanov.work@gmail.com">Email</a>
      </div>
      <div class="footer-right">
        <span class="footer-copy">© {new Date().getFullYear()} All rights reserved</span>
      </div>
    </div>
  </footer>
{/if}

<style>
  /* Ink Splatter Decorations - like Real Ink */
  .ink-splatter {
    position: fixed;
    pointer-events: none;
    opacity: 0.06;
    z-index: 0;
  }

  .ink-splatter-1 {
    width: 300px;
    height: 300px;
    top: 10%;
    left: -5%;
    background: radial-gradient(ellipse at 30% 40%, var(--color-primary) 0%, transparent 60%);
    filter: blur(40px);
    animation: ink-drift 20s ease-in-out infinite;
  }

  .ink-splatter-2 {
    width: 250px;
    height: 250px;
    top: 50%;
    right: -5%;
    background: radial-gradient(ellipse at 70% 50%, var(--color-secondary) 0%, transparent 55%);
    filter: blur(35px);
    animation: ink-drift 15s ease-in-out infinite reverse;
  }

  .ink-splatter-3 {
    width: 200px;
    height: 200px;
    bottom: 20%;
    left: 10%;
    background: radial-gradient(ellipse at 50% 50%, var(--color-accent-1) 0%, transparent 50%);
    filter: blur(30px);
    animation: ink-drift 18s ease-in-out infinite;
    animation-delay: -5s;
  }

  @keyframes ink-drift {
    0%, 100% {
      transform: translate(0, 0) scale(1);
      opacity: 0.06;
    }
    25% {
      transform: translate(20px, -30px) scale(1.1);
      opacity: 0.08;
    }
    50% {
      transform: translate(-10px, 20px) scale(0.95);
      opacity: 0.05;
    }
    75% {
      transform: translate(15px, 10px) scale(1.05);
      opacity: 0.07;
    }
  }

  /* Scroll Progress Bar */
  .scroll-progress {
    position: fixed;
    top: 0;
    left: 0;
    height: 3px;
    width: var(--progress, 0%);
    background: var(--gradient-primary);
    z-index: 10001;
    transition: width 0.1s ease-out;
    box-shadow: 0 0 10px var(--color-primary), 0 0 20px rgba(217, 119, 6, 0.3);
  }

  /* Cursor wrapper - hide on mobile */
  .cursor-wrapper {
    display: block;
  }

  @media (max-width: 768px) {
    .cursor-wrapper {
      display: none;
    }
  }

  /* Header */
  .header {
    position: fixed;
    top: 3px;
    left: 0;
    right: 0;
    z-index: 1000;
    padding: 1rem 2rem;
    transition: all 0.3s ease;
  }

  .header.solid {
    background: var(--glass-bg);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--glass-border);
    padding: 0.75rem 2rem;
  }

  .header-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    text-decoration: none;
    color: var(--text-primary);
    font-weight: 600;
    font-size: var(--text-lg);
    transition: transform 0.3s ease;
  }

  .logo:hover {
    transform: scale(1.02);
  }

  .logo-icon {
    width: 40px;
    height: 40px;
    background: var(--gradient-primary);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 700;
    font-size: var(--text-lg);
    font-family: var(--font-display);
    box-shadow: 0 4px 12px rgba(217, 119, 6, 0.3);
  }

  .logo-text {
    font-family: var(--font-display);
  }

  /* Navigation */
  .nav {
    display: flex;
    align-items: center;
    gap: 2.5rem;
  }

  .nav-link {
    text-decoration: none;
    color: var(--text-secondary);
    font-size: var(--text-sm);
    font-weight: 500;
    transition: all 0.2s ease;
    position: relative;
    padding: 0.5rem 0;
  }

  .nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--gradient-primary);
    transition: width 0.3s ease;
  }

  .nav-link:hover {
    color: var(--color-primary);
  }

  .nav-link:hover::after {
    width: 100%;
  }

  .header-right {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  /* Mobile Menu Button */
  .mobile-menu-btn {
    display: none;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    width: 40px;
    height: 40px;
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    border-radius: 10px;
    cursor: pointer;
    padding: 10px;
    z-index: 1001;
  }

  .mobile-menu-btn span {
    width: 20px;
    height: 2px;
    background: var(--text-primary);
    transition: all 0.3s ease;
    transform-origin: center;
  }

  .mobile-menu-btn.open span:first-child {
    transform: translateY(7px) rotate(45deg);
  }

  .mobile-menu-btn.open span:nth-child(2) {
    opacity: 0;
  }

  .mobile-menu-btn.open span:last-child {
    transform: translateY(-7px) rotate(-45deg);
  }

  /* Main Content */
  .main-content {
    background-color: var(--bg-base);
  }

  .section {
    position: relative;
  }

  .hero-section {
    padding-top: 0;
  }

  .section > :global(section) {
    width: 100%;
  }

  /* Stats Bar - like landings */
  .stats-bar {
    background: var(--bg-elevated);
    border-top: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
    padding: 3rem 2rem;
  }

  .stats-container {
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    text-align: center;
  }

  .stat-item {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .stat-value {
    font-family: var(--font-display);
    font-size: var(--text-2xl);
    font-weight: 700;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .stat-label {
    font-size: var(--text-sm);
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  /* Trust Marquee - like landings */
  .trust-marquee {
    background: var(--bg-base);
    padding: 1.5rem 0;
    overflow: hidden;
    border-bottom: 1px solid var(--border-color);
  }

  .marquee-track {
    display: flex;
    width: max-content;
  }

  .marquee-content {
    display: flex;
    align-items: center;
    gap: 2rem;
    animation: marquee 30s linear infinite;
  }

  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  .marquee-item {
    font-size: var(--text-sm);
    font-weight: 500;
    color: var(--text-secondary);
    white-space: nowrap;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  .marquee-dot {
    width: 6px;
    height: 6px;
    background: var(--color-primary);
    border-radius: 50%;
    flex-shrink: 0;
  }

  /* Footer */
  .footer {
    background: var(--bg-elevated);
    border-top: 1px solid var(--border-color);
    padding: 3rem 2rem;
  }

  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1.5rem;
  }

  .footer-left {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .footer-logo {
    font-weight: 600;
    color: var(--text-primary);
    font-family: var(--font-display);
    font-size: var(--text-lg);
  }

  .footer-divider {
    color: var(--text-muted);
  }

  .footer-role {
    color: var(--text-muted);
    font-size: var(--text-sm);
  }

  .footer-links {
    display: flex;
    gap: 2rem;
  }

  .footer-links a {
    color: var(--text-secondary);
    font-size: var(--text-sm);
    font-weight: 500;
    text-decoration: none;
    transition: color 0.2s ease;
  }

  .footer-links a:hover {
    color: var(--color-primary);
  }

  .footer-copy {
    color: var(--text-muted);
    font-size: var(--text-sm);
  }

  /* Scroll animations */
  .fade-in {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }

  .fade-in.visible {
    opacity: 1;
    transform: translateY(0);
  }

  /* Mobile Styles */
  @media (max-width: 900px) {
    .ink-splatter {
      display: none;
    }

    .header {
      padding: 0.75rem 1rem;
    }

    .header.solid {
      padding: 0.5rem 1rem;
    }

    .mobile-menu-btn {
      display: flex;
    }

    .nav {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: var(--bg-base);
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
      z-index: 999;
    }

    .nav.open {
      opacity: 1;
      visibility: visible;
    }

    .nav-link {
      font-size: var(--text-xl);
      font-weight: 600;
    }

    .stats-bar {
      padding: 2rem 1rem;
    }

    .stats-container {
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
    }

    .stat-value {
      font-size: var(--text-xl);
    }

    .section > :global(section) {
      min-height: auto;
      height: auto;
    }

    .footer-content {
      flex-direction: column;
      text-align: center;
    }

    .footer-left {
      flex-direction: column;
      gap: 0.25rem;
    }

    .footer-divider {
      display: none;
    }

    .footer-links {
      gap: 1.5rem;
    }
  }

  @media (max-width: 600px) {
    .logo-text {
      display: none;
    }

    .trust-marquee {
      padding: 1rem 0;
    }

    .marquee-item {
      font-size: var(--text-xs);
    }

    .footer {
      padding: 2rem 1rem;
    }
  }
</style>
