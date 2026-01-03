<script lang="ts">
  import { onMount } from 'svelte';

  let mounted = false;
  let ready = false;

  function scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  onMount(() => {
    mounted = true;
    setTimeout(() => ready = true, 100);
  });
</script>

<section class="hero">
  <!-- Background Elements -->
  <div class="hero-bg">
    <div class="bg-gradient"></div>
    <div class="bg-grid"></div>
    <div class="bg-glow glow-1"></div>
    <div class="bg-glow glow-2"></div>
  </div>

  <!-- Floating shapes -->
  <div class="hero-shapes">
    <div class="shape shape-1"></div>
    <div class="shape shape-2"></div>
    <div class="shape shape-3"></div>
  </div>

  {#if mounted}
    <div class="container" class:ready>
      <!-- Badge -->
      <div class="hero-badge fade-up">
        <span class="badge-dot"></span>
        Available for work
      </div>

      <!-- Headline -->
      <h1 class="headline fade-up">
        <span class="line">Hi, I'm</span>
        <span class="line name">
          <span class="gradient-text glitch-text" data-text="Artur Arslanov">Artur Arslanov</span>
          <span class="accent-dot"></span>
        </span>
      </h1>

      <!-- Subtitle -->
      <p class="subtitle fade-up">
        Senior Software Engineer crafting <span class="highlight">high-performance</span> web applications with modern technologies.
      </p>

      <!-- CTA Buttons -->
      <div class="hero-buttons fade-up">
        <button class="btn btn-primary" on:click={() => scrollToSection('projects')}>
          <span class="btn-text">View Projects</span>
          <svg class="btn-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M7 17L17 7M17 7H7M17 7v10"/>
          </svg>
        </button>
        <button class="btn btn-secondary" on:click={() => scrollToSection('contact')}>
          <span class="btn-text">Get in Touch</span>
        </button>
      </div>

      <!-- Scroll indicator -->
      <div class="scroll-indicator fade-up">
        <div class="scroll-line"></div>
        <span class="scroll-text">Scroll to explore</span>
      </div>
    </div>
  {/if}
</section>

<style>
  .hero {
    width: 100%;
    min-height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6rem 2rem 4rem;
    overflow: hidden;
  }

  /* Background */
  .hero-bg {
    position: absolute;
    inset: 0;
    overflow: hidden;
  }

  .bg-gradient {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse at 20% 30%, rgba(217, 119, 6, 0.12) 0%, transparent 50%),
      radial-gradient(ellipse at 80% 70%, rgba(184, 92, 56, 0.08) 0%, transparent 50%),
      radial-gradient(ellipse at 50% 50%, rgba(234, 88, 12, 0.05) 0%, transparent 70%);
  }

  .bg-grid {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(217, 119, 6, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(217, 119, 6, 0.03) 1px, transparent 1px);
    background-size: 60px 60px;
  }

  :global([data-theme="light"]) .bg-grid {
    background-image:
      linear-gradient(rgba(180, 83, 9, 0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(180, 83, 9, 0.05) 1px, transparent 1px);
  }

  .bg-glow {
    position: absolute;
    border-radius: 50%;
    filter: blur(100px);
    pointer-events: none;
  }

  .glow-1 {
    top: -20%;
    right: -10%;
    width: 50vw;
    height: 50vw;
    background: var(--color-primary);
    opacity: 0.08;
    animation: float-glow 20s ease-in-out infinite;
  }

  .glow-2 {
    bottom: -20%;
    left: -10%;
    width: 40vw;
    height: 40vw;
    background: var(--color-secondary);
    opacity: 0.06;
    animation: float-glow 15s ease-in-out infinite reverse;
  }

  @keyframes float-glow {
    0%, 100% { transform: translate(0, 0) scale(1); }
    50% { transform: translate(30px, -30px) scale(1.1); }
  }

  /* Floating shapes */
  .hero-shapes {
    position: absolute;
    inset: 0;
    overflow: hidden;
    pointer-events: none;
  }

  .shape {
    position: absolute;
    border-radius: 50%;
    background: var(--gradient-primary);
    opacity: 0.1;
    filter: blur(1px);
  }

  .shape-1 {
    top: 20%;
    right: 15%;
    width: 80px;
    height: 80px;
    animation: float-shape 8s ease-in-out infinite;
  }

  .shape-2 {
    bottom: 30%;
    left: 10%;
    width: 60px;
    height: 60px;
    animation: float-shape 6s ease-in-out infinite reverse;
    animation-delay: -2s;
  }

  .shape-3 {
    top: 60%;
    right: 25%;
    width: 40px;
    height: 40px;
    animation: float-shape 10s ease-in-out infinite;
    animation-delay: -4s;
  }

  @keyframes float-shape {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(180deg); }
  }

  /* Container */
  .container {
    position: relative;
    z-index: 1;
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  /* Fade up animation */
  .fade-up {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .container.ready .fade-up {
    opacity: 1;
    transform: translateY(0);
  }

  .container.ready .fade-up:nth-child(1) { transition-delay: 0.1s; }
  .container.ready .fade-up:nth-child(2) { transition-delay: 0.2s; }
  .container.ready .fade-up:nth-child(3) { transition-delay: 0.3s; }
  .container.ready .fade-up:nth-child(4) { transition-delay: 0.4s; }
  .container.ready .fade-up:nth-child(5) { transition-delay: 0.5s; }

  /* Badge */
  .hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: var(--bg-subtle);
    border: 1px solid var(--border-color);
    border-radius: 100px;
    font-size: var(--text-sm);
    font-weight: 500;
    color: var(--text-secondary);
  }

  .badge-dot {
    width: 8px;
    height: 8px;
    background: #22c55e;
    border-radius: 50%;
    animation: pulse-dot 2s ease-in-out infinite;
  }

  @keyframes pulse-dot {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(1.2); }
  }

  /* Headline */
  .headline {
    font-family: var(--font-display);
    font-size: clamp(2.5rem, 8vw, 5rem);
    font-weight: 700;
    line-height: 1.1;
    letter-spacing: -0.03em;
    color: var(--text-primary);
    margin: 0;
  }

  .line {
    display: block;
  }

  .name {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  .gradient-text {
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  /* Glitch effect on hover */
  .glitch-text {
    position: relative;
    cursor: default;
  }

  .glitch-text:hover::before,
  .glitch-text:hover::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .glitch-text:hover::before {
    animation: glitch-1 0.3s infinite;
    clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
  }

  .glitch-text:hover::after {
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
    0%, 100% { transform: translate(0); }
    20% { transform: translate(3px, -3px); }
    40% { transform: translate(3px, 3px); }
    60% { transform: translate(-3px, -3px); }
    80% { transform: translate(-3px, 3px); }
  }

  .accent-dot {
    width: clamp(0.8rem, 2vw, 1.5rem);
    height: clamp(0.8rem, 2vw, 1.5rem);
    background: var(--gradient-primary);
    border-radius: 50%;
    flex-shrink: 0;
    box-shadow: 0 0 20px var(--color-primary);
    animation: pulse-glow 3s ease-in-out infinite;
  }

  @keyframes pulse-glow {
    0%, 100% { box-shadow: 0 0 20px var(--color-primary); }
    50% { box-shadow: 0 0 40px var(--color-primary), 0 0 60px rgba(217, 119, 6, 0.3); }
  }

  /* Subtitle */
  .subtitle {
    font-size: var(--text-lg);
    color: var(--text-secondary);
    max-width: 600px;
    line-height: 1.7;
    margin: 0;
  }

  .highlight {
    color: var(--color-primary);
    font-weight: 600;
  }

  /* Buttons */
  .hero-buttons {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 2rem;
    font-family: var(--font-sans);
    font-size: var(--text-base);
    font-weight: 600;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
    text-decoration: none;
    border: 2px solid transparent;
  }

  .btn-primary {
    background: var(--gradient-primary);
    color: white;
    box-shadow: 0 4px 20px rgba(217, 119, 6, 0.3);
  }

  .btn-primary:hover {
    transform: translateY(-3px) rotate(-1deg);
    box-shadow: 0 8px 30px rgba(217, 119, 6, 0.5);
  }

  .btn-primary:hover .btn-icon {
    transform: translate(3px, -3px);
  }

  .btn-secondary {
    background: var(--glass-bg);
    color: var(--text-primary);
    border-color: var(--border-color);
    backdrop-filter: blur(10px);
  }

  .btn-secondary:hover {
    border-color: var(--color-primary);
    color: var(--color-primary);
    transform: translateY(-3px);
  }

  .btn-icon {
    transition: transform 0.3s ease;
  }

  /* Scroll indicator */
  .scroll-indicator {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
    margin-top: auto;
    padding-top: 2rem;
  }

  .scroll-line {
    width: 2px;
    height: 40px;
    background: linear-gradient(to bottom, var(--color-primary), transparent);
    animation: scroll-pulse 2s ease-in-out infinite;
  }

  @keyframes scroll-pulse {
    0%, 100% { opacity: 0.3; transform: scaleY(1); }
    50% { opacity: 1; transform: scaleY(1.2); }
  }

  .scroll-text {
    font-size: var(--text-xs);
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.15em;
  }

  /* Responsive */
  @media (max-width: 768px) {
    .hero {
      padding: 5rem 1.5rem 3rem;
      min-height: auto;
    }

    .container {
      gap: 1.5rem;
    }

    .headline {
      font-size: clamp(2rem, 10vw, 3rem);
    }

    .name {
      flex-wrap: wrap;
    }

    .subtitle {
      font-size: var(--text-base);
    }

    .hero-buttons {
      flex-direction: column;
      width: 100%;
    }

    .btn {
      width: 100%;
      justify-content: center;
    }

    .scroll-indicator {
      display: none;
    }

    .shape {
      display: none;
    }

    .glow-1, .glow-2 {
      opacity: 0.04;
    }
  }
</style>
