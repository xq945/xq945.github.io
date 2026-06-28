<template>
  <div class="article-info" v-if="showInfo">
    <h3 class="info-title">文章信息</h3>
    <div class="info-list">
      <div class="info-item" v-if="author">
        <svg viewBox="0 0 24 24" width="14" height="14"><path fill="currentColor" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
        <span>{{ author }}</span>
      </div>
      <div class="info-item" v-if="date">
        <svg viewBox="0 0 24 24" width="14" height="14"><path fill="currentColor" d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/></svg>
        <span>{{ date }}</span>
      </div>
      <div class="info-item" v-if="readingTime">
        <svg viewBox="0 0 24 24" width="14" height="14"><path fill="currentColor" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
        <span>{{ readingTime }}</span>
      </div>
      <div class="info-item" v-if="wordCount">
        <svg viewBox="0 0 24 24" width="14" height="14"><path fill="currentColor" d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zM13 9V3.5L18.5 9H13z"/></svg>
        <span>{{ wordCount }} 字</span>
      </div>
    </div>
    <div class="info-tags" v-if="tags && tags.length">
      <span class="tag" v-for="tag in tags" :key="tag">{{ tag }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

const { page, frontmatter } = useData()

const showInfo = computed(() => {
  return page.value && !page.value.isNotFound
})

const author = computed(() => frontmatter.value.author || 'Nova')
const date = computed(() => {
  const d = frontmatter.value.date
  if (d) return new Date(d).toLocaleDateString('zh-CN')
  return ''
})
const tags = computed(() => frontmatter.value.tags || [])

const wordCount = computed(() => {
  // approximate word count for Chinese text
  return ''
})

const readingTime = computed(() => {
  return ''
})
</script>

<style scoped>
.article-info {
  border-radius: 12px;
  background: var(--vp-c-bg-elv);
  border: 1px solid var(--vp-c-divider);
  padding: 16px;
  margin-bottom: 16px;
}

.info-title {
  font-size: 13px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0 0 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--vp-c-divider);
}

.info-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: var(--vp-c-text-2);
}

.info-item svg {
  color: var(--vp-c-text-3);
  flex-shrink: 0;
}

.info-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid var(--vp-c-divider);
}

.tag {
  display: inline-block;
  padding: 2px 8px;
  font-size: 11px;
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  border-radius: 6px;
}
</style>
