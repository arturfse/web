<script lang="ts">
  import { onMount } from 'svelte';

  let mounted = false;
  let ready = false;
  let terminalText = '';
  let showResult = false;
  let scanProgress = 0;

  const codeSnippet = `const developer = {
  name: 'Arthur',
  role: 'Senior Engineer',
  stack: ['React', 'Node', 'TS'],
  passion: 'Clean Code'
};`;

  function scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  onMount(() => {
    mounted = true;
    setTimeout(() => ready = true, 100);

    // Typewriter effect
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < codeSnippet.length) {
        terminalText = codeSnippet.slice(0, i + 1);
        i++;
      } else {
        clearInterval(typeInterval);
        // Start scan animation
        const scanInterval = setInterval(() => {
          if (scanProgress < 100) {
            scanProgress += 2;
          } else {
            clearInterval(scanInterval);
            showResult = true;
          }
        }, 30);
      }
    }, 25);
  });

  const orbitTech = [
    { name: 'React', angle: 0, orbit: 1 },
    { name: 'Node', angle: 72, orbit: 1 },
    { name: 'TS', angle: 144, orbit: 1 },
    { name: 'SQL', angle: 216, orbit: 1 },
    { name: 'AWS', angle: 288, orbit: 1 },
    { name: 'Next', angle: 30, orbit: 2 },
    { name: 'Nest', angle: 120, orbit: 2 },
    { name: 'Vue', angle: 210, orbit: 2 },
    { name: 'Go', angle: 300, orbit: 2 },
  ];
</script>

<section class="hero">
  <!-- CRT Scanlines overlay -->
  <div class="scanlines"></div>

  <!-- Background Elements -->
  <div class="hero-bg">
    <div class="bg-gradient"></div>
    <div class="bg-grid"></div>
    <!-- Floating glitch artifacts -->
    <div class="artifact artifact-1"></div>
    <div class="artifact artifact-2"></div>
    <div class="artifact artifact-3"></div>
  </div>

  {#if mounted}
    <div class="hero-layout" class:ready>
      <!-- Left: Terminal Demo Card -->
      <div class="hero-content">
        <!-- Badge with glitch -->
        <div class="hero-badge fade-up">
          <span class="badge-dot"></span>
          <span class="badge-text" data-text="Available for work">Available for work</span>
        </div>

        <!-- Terminal Card - Real Ink inspired -->
        <div class="terminal-card fade-up">
          <div class="terminal-header">
            <div class="terminal-dots">
              <span class="dot red"></span>
              <span class="dot yellow"></span>
              <span class="dot green"></span>
            </div>
            <span class="terminal-title">developer.ts</span>
            <span class="terminal-status">
              {#if showResult}
                <span class="status-icon">✓</span> verified
              {:else if scanProgress > 0}
                scanning...
              {:else}
                ready
              {/if}
            </span>
          </div>

          <div class="terminal-body">
            <pre class="code-block"><code>{terminalText}<span class="cursor">|</span></code></pre>

            <!-- Scan bar animation -->
            {#if scanProgress > 0 && !showResult}
              <div class="scan-bar" style="top: {scanProgress}%"></div>
            {/if}
          </div>

          <!-- Result panel -->
          {#if showResult}
            <div class="result-panel">
              <div class="result-item human">
                <span class="result-icon">⚡</span>
                <span class="result-label">Ready to ship</span>
                <span class="result-value">100%</span>
              </div>
            </div>
          {/if}
        </div>

        <!-- Headline -->
        <h1 class="headline fade-up">
          <span class="glitch-text" data-text="Engineering">Engineering</span> excellence,
          <span class="gradient-text">delivered</span>
        </h1>

        <!-- Description -->
        <p class="hero-description fade-up">
          6+ years building scalable systems. React, Node.js, TypeScript.
          No compromises on quality. Just clean, performant code.
        </p>

        <!-- CTA Buttons -->
        <div class="hero-buttons fade-up">
          <a href="#projects-section" class="btn btn-primary" on:click|preventDefault={() => scrollToSection('projects-section')}>
            <span class="btn-glow"></span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
            </svg>
            <span>View Projects</span>
          </a>
          <a href="#contact-section" class="btn btn-secondary" on:click|preventDefault={() => scrollToSection('contact-section')}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
            <span>Let's Talk</span>
          </a>
        </div>
      </div>

      <!-- Right: Orbital Tech Visualization -->
      <div class="hero-visual fade-up">
        <div class="orbit-container">
          <!-- Orbit rings -->
          <div class="orbit-ring ring-1"></div>
          <div class="orbit-ring ring-2"></div>

          <!-- Center core -->
          <div class="orbit-core">
            <div class="core-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
              </svg>
            </div>
            <div class="core-pulse"></div>
          </div>

          <!-- Tech blips on orbits -->
          {#each orbitTech as tech, i}
            <div
              class="tech-blip orbit-{tech.orbit}"
              style="--angle: {tech.angle}deg; --delay: {i * 0.1}s"
            >
              <span class="blip-label">{tech.name}</span>
              <span class="blip-ping"></span>
            </div>
          {/each}

          <!-- Connection lines (animated) -->
          <svg class="connections" viewBox="0 0 300 300">
            <line class="connection-line" x1="150" y1="150" x2="200" y2="80" />
            <line class="connection-line" x1="150" y1="150" x2="80" y2="120" />
            <line class="connection-line" x1="150" y1="150" x2="220" y2="180" />
          </svg>
        </div>

        <!-- Floating stats -->
        <div class="floating-stats">
          <div class="floating-stat stat-1">
            <span class="stat-value">50+</span>
            <span class="stat-label">Projects</span>
          </div>
          <div class="floating-stat stat-2">
            <span class="stat-value">99%</span>
            <span class="stat-label">Uptime</span>
          </div>
          <div class="floating-stat stat-3">
            <span class="stat-value">6+</span>
            <span class="stat-label">Years</span>
          </div>
        </div>
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

  /* CRT Scanlines - Pixel Proof style */
  .scanlines {
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(0, 0, 0, 0.03) 2px,
      rgba(0, 0, 0, 0.03) 4px
    );
    pointer-events: none;
    z-index: 100;
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
      radial-gradient(ellipse at 20% 30%, rgba(217, 119, 6, 0.2) 0%, transparent 50%),
      radial-gradient(ellipse at 80% 70%, rgba(184, 92, 56, 0.15) 0%, transparent 50%);
  }

  .bg-grid {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(217, 119, 6, 0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(217, 119, 6, 0.04) 1px, transparent 1px);
    background-size: 40px 40px;
  }

  /* Glitch artifacts */
  .artifact {
    position: absolute;
    border: 2px solid var(--color-primary);
    opacity: 0.15;
    animation: artifact-glitch 8s ease-in-out infinite;
  }

  .artifact-1 {
    width: 60px;
    height: 60px;
    top: 15%;
    right: 10%;
    animation-delay: 0s;
  }

  .artifact-2 {
    width: 40px;
    height: 40px;
    bottom: 20%;
    left: 8%;
    animation-delay: 2s;
  }

  .artifact-3 {
    width: 30px;
    height: 80px;
    top: 60%;
    right: 25%;
    animation-delay: 4s;
  }

  @keyframes artifact-glitch {
    0%, 100% { transform: translate(0, 0) skew(0deg); opacity: 0.15; }
    20% { transform: translate(-5px, 3px) skew(-2deg); opacity: 0.25; }
    40% { transform: translate(3px, -5px) skew(1deg); opacity: 0.1; }
    60% { transform: translate(-3px, 5px) skew(2deg); opacity: 0.2; }
    80% { transform: translate(5px, -3px) skew(-1deg); opacity: 0.15; }
  }

  /* Layout */
  .hero-layout {
    position: relative;
    z-index: 1;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 4rem;
    align-items: center;
  }

  /* Fade animations */
  .fade-up {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .hero-layout.ready .fade-up {
    opacity: 1;
    transform: translateY(0);
  }

  .hero-layout.ready .hero-content .fade-up:nth-child(1) { transition-delay: 0.1s; }
  .hero-layout.ready .hero-content .fade-up:nth-child(2) { transition-delay: 0.2s; }
  .hero-layout.ready .hero-content .fade-up:nth-child(3) { transition-delay: 0.4s; }
  .hero-layout.ready .hero-content .fade-up:nth-child(4) { transition-delay: 0.5s; }
  .hero-layout.ready .hero-content .fade-up:nth-child(5) { transition-delay: 0.6s; }
  .hero-layout.ready .hero-visual { transition-delay: 0.3s; }

  /* Hero Content */
  .hero-content {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  /* Badge */
  .hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: var(--bg-elevated);
    border: 2px solid var(--border-color);
    border-radius: 100px;
    font-size: var(--text-sm);
    font-weight: 600;
    color: var(--text-secondary);
    width: fit-content;
  }

  .badge-dot {
    width: 8px;
    height: 8px;
    background: #22c55e;
    border-radius: 50%;
    animation: pulse-dot 2s ease-in-out infinite;
    box-shadow: 0 0 10px rgba(34, 197, 94, 0.5);
  }

  .badge-text {
    position: relative;
  }

  @keyframes pulse-dot {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(1.3); }
  }

  /* Terminal Card - Real Ink style */
  .terminal-card {
    background: var(--bg-elevated);
    border: 3px solid var(--border-color);
    border-radius: 16px;
    overflow: hidden;
    box-shadow: var(--shadow-lg);
    position: relative;
  }

  .terminal-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: var(--gradient-primary);
  }

  .terminal-header {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 16px;
    background: var(--bg-overlay);
    border-bottom: 1px solid var(--border-color);
  }

  .terminal-dots {
    display: flex;
    gap: 6px;
  }

  .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }

  .dot.red { background: #EF4444; }
  .dot.yellow { background: #F59E0B; }
  .dot.green { background: #22C55E; }

  .terminal-title {
    font-family: var(--font-mono);
    font-size: var(--text-xs);
    color: var(--text-muted);
    flex: 1;
  }

  .terminal-status {
    display: flex;
    align-items: center;
    gap: 4px;
    font-family: var(--font-mono);
    font-size: 0.65rem;
    color: var(--text-muted);
    padding: 4px 8px;
    background: var(--bg-subtle);
    border-radius: 100px;
  }

  .status-icon {
    color: #22c55e;
  }

  .terminal-body {
    padding: 16px;
    position: relative;
    min-height: 140px;
  }

  .code-block {
    margin: 0;
    font-family: var(--font-mono);
    font-size: 0.8rem;
    line-height: 1.6;
    color: var(--text-secondary);
    white-space: pre-wrap;
  }

  .cursor {
    animation: blink 1s step-end infinite;
    color: var(--color-primary);
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }

  /* Scan bar */
  .scan-bar {
    position: absolute;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--color-primary), var(--color-accent-2), transparent);
    box-shadow: 0 0 10px var(--color-primary);
    transition: top 0.03s linear;
  }

  /* Result panel */
  .result-panel {
    padding: 12px 16px;
    background: var(--bg-subtle);
    border-top: 1px solid var(--border-color);
    animation: slide-up 0.3s ease;
  }

  @keyframes slide-up {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .result-item {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .result-item.human {
    color: #22c55e;
  }

  .result-icon {
    font-size: 1rem;
  }

  .result-label {
    flex: 1;
    font-size: var(--text-sm);
    font-weight: 600;
  }

  .result-value {
    font-family: var(--font-mono);
    font-size: var(--text-sm);
    font-weight: 700;
  }

  /* Glitch text */
  .glitch-text {
    position: relative;
    display: inline-block;
  }

  .glitch-text:hover::before,
  .glitch-text:hover::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .glitch-text:hover::before {
    color: #EA580C;
    animation: glitch-1 0.3s infinite;
    clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
    text-shadow: -2px 0 #EA580C;
  }

  .glitch-text:hover::after {
    color: #B85C38;
    animation: glitch-2 0.3s infinite;
    clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%);
    text-shadow: 2px 0 #B85C38;
  }

  @keyframes glitch-1 {
    0%, 100% { transform: translate(0); }
    20% { transform: translate(-3px, 2px); }
    40% { transform: translate(-2px, -2px); }
    60% { transform: translate(3px, 2px); }
    80% { transform: translate(2px, -2px); }
  }

  @keyframes glitch-2 {
    0%, 100% { transform: translate(0); }
    20% { transform: translate(3px, -2px); }
    40% { transform: translate(2px, 2px); }
    60% { transform: translate(-3px, -2px); }
    80% { transform: translate(-2px, 2px); }
  }

  /* Headline */
  .headline {
    font-family: var(--font-display);
    font-size: clamp(2rem, 4vw, 2.75rem);
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -0.02em;
    color: var(--text-primary);
    margin: 0;
  }

  .gradient-text {
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  /* Description */
  .hero-description {
    font-size: var(--text-base);
    color: var(--text-secondary);
    line-height: 1.7;
    margin: 0;
    max-width: 450px;
  }

  /* Buttons */
  .hero-buttons {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.875rem 1.25rem;
    font-family: var(--font-sans);
    font-size: var(--text-sm);
    font-weight: 700;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    text-decoration: none;
    border: 3px solid transparent;
    position: relative;
    overflow: hidden;
  }

  .btn-primary {
    background: var(--gradient-primary);
    color: white;
    box-shadow: var(--shadow-sm);
  }

  .btn-glow {
    position: absolute;
    inset: 0;
    background: linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent);
    transform: translateX(-100%);
    transition: transform 0.6s;
  }

  .btn-primary:hover .btn-glow {
    transform: translateX(100%);
  }

  .btn-primary:hover {
    transform: translate(2px, 2px);
    box-shadow: 2px 2px 0 var(--color-primary-dark);
  }

  .btn-secondary {
    background: var(--bg-elevated);
    color: var(--text-primary);
    border-color: var(--border-color);
  }

  .btn-secondary:hover {
    border-color: var(--color-primary);
    color: var(--color-primary);
    transform: translate(2px, 2px);
    box-shadow: 2px 2px 0 var(--color-primary);
  }

  /* Orbit Visualization */
  .hero-visual {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .orbit-container {
    position: relative;
    width: 320px;
    height: 320px;
  }

  .orbit-ring {
    position: absolute;
    border-radius: 50%;
    border: 1px dashed var(--border-color);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .ring-1 {
    width: 180px;
    height: 180px;
    animation: orbit-pulse 4s ease-in-out infinite;
  }

  .ring-2 {
    width: 280px;
    height: 280px;
    animation: orbit-pulse 4s ease-in-out infinite 1s;
  }

  @keyframes orbit-pulse {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 0.6; }
  }

  /* Core */
  .orbit-core {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 5;
  }

  .core-icon {
    width: 70px;
    height: 70px;
    background: var(--bg-elevated);
    border: 3px solid var(--color-primary);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-primary);
    position: relative;
    z-index: 2;
    box-shadow: var(--shadow-md), 0 0 30px rgba(217, 119, 6, 0.3);
  }

  .core-pulse {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 2px solid var(--color-primary);
    animation: core-pulse 2s ease-out infinite;
  }

  @keyframes core-pulse {
    0% { transform: translate(-50%, -50%) scale(1); opacity: 0.8; }
    100% { transform: translate(-50%, -50%) scale(1.8); opacity: 0; }
  }

  /* Tech blips */
  .tech-blip {
    position: absolute;
    top: 50%;
    left: 50%;
    transform-origin: center;
    animation: blip-appear 0.5s ease forwards;
    animation-delay: var(--delay);
    opacity: 0;
  }

  .tech-blip.orbit-1 {
    transform: rotate(var(--angle)) translateX(90px) rotate(calc(-1 * var(--angle)));
  }

  .tech-blip.orbit-2 {
    transform: rotate(var(--angle)) translateX(140px) rotate(calc(-1 * var(--angle)));
  }

  @keyframes blip-appear {
    from { opacity: 0; transform: rotate(var(--angle)) translateX(50px) rotate(calc(-1 * var(--angle))) scale(0); }
    to { opacity: 1; }
  }

  .blip-label {
    display: block;
    padding: 6px 12px;
    background: var(--bg-elevated);
    border: 2px solid var(--color-primary);
    border-radius: 100px;
    font-size: 0.7rem;
    font-weight: 700;
    color: var(--color-primary);
    white-space: nowrap;
    position: relative;
    z-index: 2;
    transition: all 0.3s ease;
  }

  .tech-blip:hover .blip-label {
    background: var(--gradient-primary);
    color: white;
    transform: scale(1.1);
    box-shadow: var(--shadow-sm);
  }

  .blip-ping {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    border-radius: 100px;
    border: 1px solid var(--color-primary);
    animation: blip-ping 2s ease-out infinite;
    opacity: 0;
  }

  .tech-blip:nth-child(odd) .blip-ping {
    animation-delay: 0s;
  }

  .tech-blip:nth-child(even) .blip-ping {
    animation-delay: 1s;
  }

  @keyframes blip-ping {
    0% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
    100% { transform: translate(-50%, -50%) scale(2); opacity: 0; }
  }

  /* Connection lines */
  .connections {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    overflow: visible;
  }

  .connection-line {
    stroke: var(--color-primary);
    stroke-width: 1;
    stroke-dasharray: 4 4;
    opacity: 0.3;
    animation: dash-flow 2s linear infinite;
  }

  @keyframes dash-flow {
    to { stroke-dashoffset: -16; }
  }

  /* Floating stats */
  .floating-stats {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .floating-stat {
    position: absolute;
    padding: 10px 14px;
    background: var(--bg-elevated);
    border: 2px solid var(--border-color);
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
    box-shadow: var(--shadow-sm);
    animation: float-stat 6s ease-in-out infinite;
  }

  .stat-1 {
    top: 5%;
    right: 0;
    animation-delay: 0s;
  }

  .stat-2 {
    bottom: 15%;
    right: 5%;
    animation-delay: 2s;
  }

  .stat-3 {
    bottom: 5%;
    left: 0;
    animation-delay: 4s;
  }

  @keyframes float-stat {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }

  .floating-stat .stat-value {
    font-family: var(--font-display);
    font-size: var(--text-base);
    font-weight: 700;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .floating-stat .stat-label {
    font-size: 0.6rem;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  /* Responsive */
  @media (max-width: 1024px) {
    .hero-layout {
      grid-template-columns: 1fr;
      text-align: center;
      gap: 3rem;
    }

    .hero-content {
      align-items: center;
    }

    .hero-description {
      max-width: 100%;
    }

    .orbit-container {
      width: 280px;
      height: 280px;
    }

    .ring-1 { width: 150px; height: 150px; }
    .ring-2 { width: 240px; height: 240px; }

    .tech-blip.orbit-1 {
      transform: rotate(var(--angle)) translateX(75px) rotate(calc(-1 * var(--angle)));
    }

    .tech-blip.orbit-2 {
      transform: rotate(var(--angle)) translateX(120px) rotate(calc(-1 * var(--angle)));
    }
  }

  @media (max-width: 768px) {
    .hero {
      padding: 5rem 1.5rem 3rem;
      min-height: auto;
    }

    .headline {
      font-size: clamp(1.75rem, 6vw, 2rem);
    }

    .terminal-card {
      width: 100%;
    }

    .code-block {
      font-size: 0.7rem;
    }

    .hero-buttons {
      flex-direction: column;
      width: 100%;
    }

    .btn {
      width: 100%;
      justify-content: center;
    }

    .orbit-container {
      width: 250px;
      height: 250px;
    }

    .core-icon {
      width: 55px;
      height: 55px;
    }

    .floating-stats {
      display: none;
    }

    .blip-label {
      font-size: 0.6rem;
      padding: 4px 8px;
    }
  }
</style>
