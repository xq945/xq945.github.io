<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { useData } from 'vitepress'

const { page } = useData()

interface Heading {
  id: string
  title: string
  level: number
}

const headings = ref<Heading[]>([])
const activeId = ref('')

function extractHeadings(): Heading[] {
  const result: Heading[] = []
  const hs = document.querySelectorAll('.vp-doc h2, .vp-doc h3, .vp-doc h4')
  hs.forEach((h) => {
    const el = h as HTMLElement
    if (el.id) {
      result.push({
        id: el.id,
        title: el.textContent?.replace(/\s+/g, ' ').trim() || '',
        level: parseInt(el.tagName[1]),
      })
    }
  })
  return result
}

function setActive() {
  const hs = headings.value
  if (!hs.length) {
    activeId.value = ''
    return
  }
  for (let i = hs.length - 1; i >= 0; i--) {
    const el = document.getElementById(hs[i].id)
    if (el) {
      const rect = el.getBoundingClientRect()
      if (rect.top <= 120) {
        activeId.value = hs[i].id
        return
      }
    }
  }
  activeId.value = ''
}

let navEl: HTMLElement | null = null
let checkTimer: ReturnType<typeof setInterval> | null = null

function buildNav() {
  const sidebar = document.querySelector('#VPSidebarNav')
  if (!sidebar) {
    if (!checkTimer) {
      checkTimer = setInterval(() => {
        if (document.querySelector('#VPSidebarNav')) {
          clearInterval(checkTimer!)
          checkTimer = null
          buildNav()
        }
      }, 100)
    }
    return
  }

  removeNav()

  const hs = extractHeadings()
  headings.value = hs

  if (!hs.length) return

  navEl = document.createElement('div')
  navEl.className = 'quick-nav'

  const title = document.createElement('h4')
  title.className = 'quick-nav-title'
  title.textContent = '本页目录'
  navEl.appendChild(title)

  const list = document.createElement('ul')
  list.className = 'quick-nav-list'

  for (const h of hs) {
    const li = document.createElement('li')
    li.className = 'quick-nav-item'
    li.dataset.id = h.id
    li.style.paddingLeft = (h.level - 2) * 12 + 'px'

    const a = document.createElement('a')
    a.href = '#' + h.id
    a.title = h.title
    a.textContent = h.title
    a.addEventListener('click', (e) => {
      e.preventDefault()
      const target = document.getElementById(h.id)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' })
        history.pushState(null, '', '#' + h.id)
        activeId.value = h.id
      }
    })

    li.appendChild(a)
    list.appendChild(li)
  }

  navEl.appendChild(list)
  sidebar.prepend(navEl)
}

function updateActive() {
  if (!navEl) return
  const items = navEl.querySelectorAll<HTMLElement>('.quick-nav-item')
  items.forEach((item) => {
    if (item.dataset.id === activeId.value) {
      item.classList.add('active')
    } else {
      item.classList.remove('active')
    }
  })
}

function removeNav() {
  if (navEl) {
    navEl.remove()
    navEl = null
  }
}

watch(activeId, updateActive)

// 监听页面变化，重新构建
watch(page, () => {
  nextTick(() => {
    buildNav()
    setActive()
  })
})

onMounted(() => {
  buildNav()
  setActive()
  window.addEventListener('scroll', setActive, { passive: true })
})

onUnmounted(() => {
  removeNav()
  if (checkTimer) clearInterval(checkTimer)
  window.removeEventListener('scroll', setActive)
})
</script>

<template>
  <span style="display:none"></span>
</template>

<style>
.quick-nav {
  padding: 0 0 12px;
  margin: 8px 0 0;
  border-bottom: 1px solid var(--vp-c-divider);
}

.quick-nav-title {
  font-size: 12px;
  font-weight: 600;
  color: var(--vp-c-text-3);
  letter-spacing: 0.04em;
  margin: 0 0 8px;
  padding: 0 12px;
}

.quick-nav-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.quick-nav-item {
  line-height: 1.3;
}

.quick-nav-item a {
  display: block;
  padding: 4px 12px;
  font-size: 13px;
  color: var(--vp-c-text-2);
  text-decoration: none;
  border-left: 2px solid transparent;
  transition: color 0.2s, border-color 0.2s;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.quick-nav-item a:hover {
  color: var(--vp-c-brand-1);
}

.quick-nav-item.active a {
  color: var(--vp-c-brand-1);
  border-left-color: var(--vp-c-brand-1);
}
</style>
