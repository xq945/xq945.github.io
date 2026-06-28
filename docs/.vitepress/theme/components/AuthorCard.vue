<template>
  <div class="author-card">
    <div class="author-cover"></div>
    <div class="author-body">
      <div class="author-avatar">N</div>
      <h3 class="author-name">Nova</h3>
      <p class="author-desc">Java 后端开发者，记录学习、踩坑与思考。</p>
      <div class="author-stats">
        <div class="stat-item">
          <span class="stat-num">8</span>
          <span class="stat-label">文章</span>
        </div>
        <div class="stat-item">
          <span class="stat-num">12</span>
          <span class="stat-label">标签</span>
        </div>
        <div class="stat-item">
          <span class="stat-num">1k</span>
          <span class="stat-label">阅读</span>
        </div>
      </div>
      <div class="author-social">
        <a href="https://github.com/xq945" target="_blank" rel="noopener noreferrer" title="GitHub">
          <svg viewBox="0 0 24 24" width="18" height="18">
            <path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.419-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.author-card {
  border-radius: 12px;
  background: var(--vp-c-bg-elv);
  border: 1px solid var(--vp-c-divider);
  overflow: hidden;
  margin-bottom: 16px;
}

.author-cover {
  height: 72px;
  background: linear-gradient(135deg, var(--vp-c-brand-1) 0%, #06b6d4 100%);
}

.author-body {
  padding: 0 16px 16px;
  text-align: center;
}

.author-avatar {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  border: 3px solid var(--vp-c-bg-elv);
  margin: -36px auto 10px;
  background: var(--vp-c-bg-soft);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  font-weight: 700;
  color: var(--vp-c-brand-1);
}

.author-name {
  font-size: 16px;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin: 0 0 6px;
}

.author-desc {
  font-size: 12px;
  color: var(--vp-c-text-2);
  line-height: 1.5;
  margin: 0 0 14px;
}

.author-stats {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 14px;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-num {
  font-size: 15px;
  font-weight: 700;
  color: var(--vp-c-text-1);
}

.stat-label {
  font-size: 11px;
  color: var(--vp-c-text-3);
  margin-top: 2px;
}

.author-social {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.author-social a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  color: var(--vp-c-text-2);
  background: var(--vp-c-bg-soft);
  transition: color 0.2s, background 0.2s;
}

.author-social a:hover {
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
}
</style>
