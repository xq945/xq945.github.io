import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

interface SidebarItem {
  text: string
  link: string
}

interface SidebarGroup {
  text: string
  items: SidebarItem[]
}

function getTitle(filePath: string): string {
  const content = fs.readFileSync(filePath, 'utf-8')

  const frontmatterTitle = content.match(/^---[\s\S]*?^title:\s*(.+)$/m)
  if (frontmatterTitle) {
    return frontmatterTitle[1].trim().replace(/^["']|["']$/g, '')
  }

  const h1 = content.match(/^#\s+(.+)$/m)
  if (h1) {
    return h1[1].trim()
  }

  const base = path.basename(filePath, '.md')
  return base
}

export function generateSidebar(section: string, label: string): SidebarGroup[] {
  const docsRoot = path.resolve(__dirname, '../../')
  const dir = path.join(docsRoot, section)

  if (!fs.existsSync(dir)) {
    return [{ text: label, items: [] }]
  }

  const files = fs
    .readdirSync(dir)
    .filter((file) => file.endsWith('.md'))
    .sort((a, b) => {
      if (a === 'index.md') return -1
      if (b === 'index.md') return 1
      return a.localeCompare(b, 'zh-CN', { numeric: true })
    })

  const items = files.map((file) => {
    const filePath = path.join(dir, file)
    const text = getTitle(filePath)
    const link = file === 'index.md' ? `/${section}/` : `/${section}/${file.replace(/\.md$/, '')}`
    return { text, link }
  })

  return [{ text: label, items }]
}
