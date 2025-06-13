<script setup lang="ts"></script>

<template>
  <div class="title-container">
    <img src="/peel-onion.png" alt="洋葱标志" class="logo-image" />
    <h1 class="app-title">Create <span class="gradient-text">Onion</span> App</h1>
  </div>

  <a href="#" class="glass-button">
    Documentation
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="arrow-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M5 12h14"></path>
      <path d="M12 5l7 7-7 7"></path>
    </svg>
  </a>
</template>

<style scoped>
.title-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}

.logo-image {
  width: 180px;
  height: 180px;
  object-fit: contain;
  margin-bottom: 2rem;
  filter: drop-shadow(0 0 1rem rgba(255, 255, 255, 0.5));
  transition: transform 0.3s ease;
}

.logo-image:hover {
  transform: scale(1.1);
}

.app-title {
  font-size: 4rem;
  font-weight: 700;
  color: white;
  margin-bottom: 2rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  letter-spacing: 1px;
}

.gradient-text {
  background: linear-gradient(to bottom, #d25cf6 0%, #434343 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: inline-block;
}

.glass-button {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  max-width: 200px;
  margin: 1rem auto;
  padding: 0.8rem 1.5rem;
  font-size: 1.2rem;
  font-weight: 500;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.95);
  background: rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.4);
  box-shadow:
    0 8px 24px rgba(0, 0, 0, 0.3),
    inset 0 1px 2px rgba(255, 255, 255, 0.6);
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  text-align: center;
  letter-spacing: 0.5px;
  z-index: 1;
}

.arrow-icon {
  width: 1.2rem;
  height: 1.2rem;
  transition: transform 0.3s ease;
}

.glass-button:hover .arrow-icon {
  transform: translateX(3px);
}

.glass-button:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-3px) scale(1.02);
  box-shadow:
    0 12px 28px rgba(0, 0, 0, 0.4),
    inset 0 2px 3px rgba(255, 255, 255, 0.7);
  border-color: rgba(255, 255, 255, 0.6);
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.4);
}

.glass-button:active {
  transform: translateY(0) scale(0.98);
  box-shadow:
    0 4px 16px rgba(0, 0, 0, 0.3),
    inset 0 1px 1px rgba(255, 255, 255, 0.4);
  border-color: rgba(255, 255, 255, 0.3);
}

.framework-logos {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1rem;
}

.logo {
  height: 4em;
  padding: 1em;
  will-change: filter;
  transition: filter 0.3s;
}

.logo:hover {
  filter: drop-shadow(0 0 2em rgba(255, 255, 255, 0.8));
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
