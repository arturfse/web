<script lang="ts">
  import { onMount } from 'svelte';
  import ThemeToggle from '../components/ThemeToggle.svelte';
  import { navigateToSection } from '../stores/navigation';

  let mounted = false;
  let ready = false;
  let isMobile = false;

  // Warm amber accent colors - matching landings
  const accentColors = ['#D97706', '#EA580C', '#B85C38', '#F59E0B', '#C97B5D'];
  let colorIndex = 0;

  function handleNavClick(e: MouseEvent, sectionIndex: number) {
    if (!isMobile) {
      e.preventDefault();
      navigateToSection(sectionIndex);
    }
  }

  onMount(() => {
    mounted = true;
    isMobile = window.innerWidth < 768;
    setTimeout(() => ready = true, 100);

    const colorInterval = setInterval(() => {
      colorIndex = (colorIndex + 1) % accentColors.length;
    }, 4000);

    return () => clearInterval(colorInterval);
  });

  $: currentColor = accentColors[colorIndex];
  $: nextColor = accentColors[(colorIndex + 1) % accentColors.length];
</script>

<section id="home" class="hero">
  <!-- Warm gradient background like landings -->
  <div class="bg-gradient"></div>
  <div class="bg-blob blob-1" style="background: {currentColor}"></div>
  <div class="bg-blob blob-2" style="background: {nextColor}"></div>
  <div class="bg-grid"></div>

  <!-- Ink splatter decorations from Real Ink -->
  <div class="ink-splatter ink-1"></div>
  <div class="ink-splatter ink-2"></div>

  {#if mounted}
    <div class="container" class:ready>
      <!-- Header -->
      <header class="header">
        <nav class="nav">
          <a href="#about" on:click={(e) => handleNavClick(e, 1)}>About</a>
          <a href="#work" on:click={(e) => handleNavClick(e, 2)}>Work</a>
          <a href="#contact" class="nav-cta" on:click={(e) => handleNavClick(e, 5)}>Contact</a>
          <ThemeToggle />
        </nav>
      </header>

      <!-- Main content -->
      <main class="main">
        <div class="headline">
          <div class="line">
            <span class="word glitch-text" data-text="Artur">Artur</span>
          </div>
          <div class="line">
            <span class="word glitch-text" data-text="Arslanov">Arslanov</span>
            <span class="accent-dot" style="background: {currentColor}"></span>
          </div>
        </div>

        <p class="bio">
          Building digital products with precision and care.
        </p>

        <div class="tech-stack">
          <span class="stack-item">TypeScript</span>
          <span class="stack-item">React</span>
          <span class="stack-item">Node.js</span>
          <span class="stack-item">PostgreSQL</span>
        </div>
      </main>

      <!-- Footer -->
      <footer class="footer">
        <div class="scroll-hint">
          <div class="scroll-line"></div>
          <span>Scroll to explore</span>
        </div>

        <a href="#work" class="cta" on:click={(e) => handleNavClick(e, 2)}>
          View Work
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M7 17L17 7M17 7H7M17 7v10"/>
          </svg>
        </a>
      </footer>
    </div>
  {/if}
</section>

<style>
  .hero {
    width: 100%;
    height: 100vh;
    min-height: 100vh;
    position: relative;
    background: var(--bg-base);
    overflow: hidden;
    padding: 1rem 2rem 2rem;
  }

  /* Warm gradient background */
  .bg-gradient {
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at 30% 20%, rgba(217, 119, 6, 0.08) 0%, transparent 50%),
                radial-gradient(ellipse at 70% 80%, rgba(184, 92, 56, 0.06) 0%, transparent 50%);
    pointer-events: none;
  }

  .bg-blob {
    position: absolute;
    border-radius: 50%;
    filter: blur(100px);
    opacity: 0.12;
    transition: background 2s ease, transform 8s ease;
    pointer-events: none;
    animation: float 20s ease-in-out infinite;
  }

  .blob-1 {
    top: -15%;
    right: -5%;
    width: 45vw;
    height: 45vw;
  }

  .blob-2 {
    bottom: -20%;
    left: -10%;
    width: 40vw;
    height: 40vw;
    animation-delay: -10s;
  }

  @keyframes float {
    0%, 100% { transform: translate(0, 0) scale(1); }
    25% { transform: translate(2%, 3%) scale(1.02); }
    50% { transform: translate(-1%, 5%) scale(0.98); }
    75% { transform: translate(3%, -2%) scale(1.01); }
  }

  /* Ink splatters from Real Ink */
  .ink-splatter {
    position: absolute;
    pointer-events: none;
    opacity: 0.08;
    z-index: 0;
  }

  .ink-1 {
    width: 200px;
    height: 200px;
    top: 10%;
    left: 0;
    background: radial-gradient(ellipse at 30% 40%, var(--color-primary) 0%, transparent 60%);
    filter: blur(20px);
    animation: ink-spread 8s ease-in-out infinite;
  }

  .ink-2 {
    width: 150px;
    height: 150px;
    bottom: 20%;
    right: 0;
    background: radial-gradient(ellipse at 70% 50%, var(--color-secondary) 0%, transparent 55%);
    filter: blur(15px);
    animation: ink-spread 6s ease-in-out infinite reverse;
  }

  @keyframes ink-spread {
    0%, 100% {
      transform: scale(1) rotate(0deg);
      opacity: 0.08;
    }
    50% {
      transform: scale(1.2) rotate(5deg);
      opacity: 0.12;
    }
  }

  .bg-grid {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(217, 119, 6, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(217, 119, 6, 0.03) 1px, transparent 1px);
    background-size: 60px 60px;
    pointer-events: none;
  }

  :global([data-theme="light"]) .bg-grid {
    background-image:
      linear-gradient(rgba(180, 83, 9, 0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(180, 83, 9, 0.05) 1px, transparent 1px);
  }

  /* Container */
  .container {
    height: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 1rem 4rem 0;
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 1;
  }

  .container.ready .word,
  .container.ready .bio,
  .container.ready .tech-stack,
  .container.ready .footer,
  .container.ready .scroll-hint {
    opacity: 1;
    transform: translateY(0);
  }

  /* Header */
  .header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0.5rem 0;
    flex-shrink: 0;
    opacity: 0;
    animation: fadeIn 0.6s ease 0.2s forwards;
    position: relative;
    z-index: 10;
  }

  @keyframes fadeIn {
    to { opacity: 1; }
  }

  .nav {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .nav a {
    font-size: var(--text-sm);
    color: var(--text-muted);
    text-decoration: none;
    transition: color 0.3s ease;
    font-weight: 500;
  }

  .nav a:hover {
    color: var(--color-primary);
  }

  .nav-cta {
    padding: 0.5rem 1.25rem;
    background: var(--gradient-primary);
    color: white !important;
    border-radius: 8px;
    transition: all 0.3s ease;
    font-weight: 600;
    border: 2px solid transparent;
  }

  .nav-cta:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(217, 119, 6, 0.4);
  }

  /* Main */
  .main {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    min-height: 0;
  }

  /* Headline */
  .headline {
    display: flex;
    flex-direction: column;
  }

  .line {
    display: flex;
    align-items: baseline;
    gap: 1rem;
  }

  .word {
    font-family: var(--font-display);
    font-size: clamp(3rem, 10vw, 8rem);
    font-weight: 700;
    letter-spacing: -0.04em;
    line-height: 1;
    color: var(--text-primary);
    opacity: 0;
    transform: translateY(50px);
    transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    position: relative;
  }

  /* Glitch effect on hover */
  .word.glitch-text:hover::before,
  .word.glitch-text:hover::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    letter-spacing: inherit;
    line-height: inherit;
  }

  .word.glitch-text:hover::before {
    color: var(--color-accent-1);
    animation: glitch-1 0.3s infinite;
    clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
  }

  .word.glitch-text:hover::after {
    color: var(--color-secondary);
    animation: glitch-2 0.3s infinite;
    clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%);
  }

  @keyframes glitch-1 {
    0%, 100% { transform: translate(0); }
    20% { transform: translate(-3px, 3px); }
    40% { transform: translate(-3px, -3px); }
    60% { transform: translate(3px, 3px); }
    80% { transform: translate(3px, -3px); }
  }

  @keyframes glitch-2 {
    0%, 100% { transform: translate(0); opacity: 0.8; }
    20% { transform: translate(3px, -3px); }
    40% { transform: translate(3px, 3px); }
    60% { transform: translate(-3px, -3px); }
    80% { transform: translate(-3px, 3px); }
  }

  .line:nth-child(2) .word {
    transition-delay: 0.1s;
  }

  .accent-dot {
    width: clamp(1rem, 3vw, 2.5rem);
    height: clamp(1rem, 3vw, 2.5rem);
    border-radius: 50%;
    flex-shrink: 0;
    transition: background 1.5s ease;
    box-shadow: 0 0 30px currentColor;
  }

  /* Bio */
  .bio {
    max-width: 500px;
    font-size: var(--text-lg);
    color: var(--text-secondary);
    line-height: 1.6;
    margin: 0;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.6s ease 0.3s;
  }

  /* Tech Stack - pill style from landings */
  .tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.6s ease 0.4s;
  }

  .stack-item {
    font-size: var(--text-sm);
    font-weight: 500;
    color: var(--text-primary);
    padding: 0.5rem 1rem;
    background: var(--glass-bg);
    border: 2px solid var(--border-color);
    border-radius: 100px;
    transition: all 0.3s ease;
  }

  .stack-item:hover {
    background: var(--bg-subtle);
    border-color: var(--color-primary);
    color: var(--color-primary);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(217, 119, 6, 0.2);
  }

  /* Footer */
  .footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
    padding-bottom: 2rem;
    margin-top: auto;
    flex-shrink: 0;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.6s ease 0.5s;
  }

  .scroll-hint {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
  }

  .scroll-line {
    width: 2px;
    height: 40px;
    background: linear-gradient(to bottom, var(--color-primary), transparent);
    animation: scrollPulse 2s ease-in-out infinite;
  }

  @keyframes scrollPulse {
    0%, 100% { opacity: 0.3; transform: scaleY(1); }
    50% { opacity: 1; transform: scaleY(1.2); }
  }

  .scroll-hint span {
    font-size: 10px;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.15em;
  }

  .cta {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: var(--text-sm);
    font-weight: 600;
    color: white;
    text-decoration: none;
    padding: 0.875rem 1.5rem;
    background: var(--gradient-primary);
    border: 2px solid transparent;
    border-radius: 12px;
    transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
    box-shadow: 0 4px 20px rgba(217, 119, 6, 0.3);
  }

  .cta:hover {
    transform: translateY(-3px) rotate(-1deg);
    box-shadow: 0 8px 30px rgba(217, 119, 6, 0.5);
    gap: 0.75rem;
  }

  .cta svg {
    transition: transform 0.3s ease;
  }

  .cta:hover svg {
    transform: translate(3px, -3px);
  }

  /* Responsive */
  @media (max-width: 768px) {
    .hero {
      height: auto !important;
      min-height: auto !important;
      padding: 1.5rem 1.25rem 2.5rem;
      overflow: visible;
      display: block;
    }

    .container {
      padding: 0;
      height: auto;
      display: flex;
      flex-direction: column;
      gap: 0;
    }

    .header {
      padding: 0 0 2rem;
      justify-content: flex-end;
      align-items: center;
    }

    .nav {
      display: flex;
      flex-direction: row;
      gap: 1.25rem;
      justify-content: flex-end;
      align-items: center;
    }

    .nav a:not(.nav-cta) {
      display: flex;
      align-items: center;
      font-size: var(--text-sm);
      color: var(--text-secondary);
      height: 38px;
      padding: 0;
    }

    .nav-cta {
      display: flex;
      align-items: center;
      height: 38px;
      padding: 0 1rem;
      font-size: var(--text-sm);
      border-radius: 8px;
    }

    .main {
      gap: 1.75rem;
      flex: none;
      justify-content: flex-start;
    }

    .headline {
      gap: 0.25rem;
    }

    .line {
      gap: 0.5rem;
    }

    .word {
      font-size: clamp(2.75rem, 13vw, 4rem);
      letter-spacing: -0.03em;
      opacity: 1 !important;
      transform: none !important;
    }

    .accent-dot {
      width: 0.6rem;
      height: 0.6rem;
      align-self: center;
    }

    .bio {
      font-size: var(--text-base);
      max-width: 100%;
      line-height: 1.6;
      opacity: 1 !important;
      transform: none !important;
    }

    .tech-stack {
      gap: 0.5rem;
      opacity: 1 !important;
      transform: none !important;
    }

    .stack-item {
      padding: 0.5rem 1rem;
      font-size: var(--text-sm);
      background: var(--bg-elevated);
      border-color: var(--border-color);
    }

    .footer {
      gap: 0;
      padding: 2.5rem 0 0;
      margin-top: 0 !important;
      opacity: 1;
      transform: none;
    }

    .scroll-hint {
      display: none;
    }

    .cta {
      width: 100%;
      justify-content: center;
      padding: 1rem 1.5rem;
      font-size: var(--text-base);
      border-radius: 12px;
      font-weight: 600;
    }

    .blob-1, .blob-2 {
      display: none;
    }

    .ink-1, .ink-2 {
      display: none;
    }

    .bg-grid {
      opacity: 0.3;
    }
  }
</style>
