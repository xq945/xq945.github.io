<template>
  <button
    class="bg-toggle"
    :class="{ active: enabled }"
    @click="toggle"
    :title="enabled ? '关闭背景' : '开启背景'"
  >
    <svg viewBox="0 0 24 24" width="18" height="18">
      <path
        fill="currentColor"
        d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"
      />
    </svg>
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

const STORAGE_KEY = 'novablog-bg-enabled'

const enabled = ref(false)

onMounted(() => {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved === 'true') {
    enabled.value = true
  }
  apply(enabled.value)
})

watch(enabled, (val) => {
  localStorage.setItem(STORAGE_KEY, val ? 'true' : 'false')
  apply(val)
})

function apply(val: boolean) {
  document.documentElement.classList.toggle('bg-enabled', val)
}

function toggle() {
  enabled.value = !enabled.value
}
</script>

<style scoped>
.bg-toggle {
  position: fixed;
  top: 16px;
  left: 16px;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg-elv);
  color: var(--vp-c-text-3);
  cursor: pointer;
  transition: color 0.2s, border-color 0.2s, box-shadow 0.2s;
}

.bg-toggle:hover {
  color: var(--vp-c-text-1);
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.bg-toggle.active {
  color: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
}
</style>
