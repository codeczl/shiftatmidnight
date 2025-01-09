import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'data', 'md')

// 添加获取文章数据的辅助函数
function getArticlesData() {
  const articlesPath = path.join(process.cwd(), 'data/json/articles.json')
  const fileContents = fs.readFileSync(articlesPath, 'utf8')
  return JSON.parse(fileContents)
}

export function getSortedPostsData(locale = 'en') {
  const articles = getArticlesData()
  
  return articles
    .map(article => ({
      id: article.id,
      ...article.translations[locale] || article.translations['en'] // 如果没有对应语言版本，使用英文
    }))
    .sort((a, b) => {
      if (a.date < b.date) {
        return 1
      } else {
        return -1
      }
    })
}

export async function getPostData(slug, locale = 'en') {
  const articles = getArticlesData()
  const article = articles.find(a => a.id === slug)
  
  if (!article) {
    throw new Error(`Article not found: ${slug}`)
  }

  // 获取指定语言的文章数据，如果不存在则使用英文
  const translation = article.translations[locale] || article.translations['en']
  const fullPath = path.join(process.cwd(), translation.path)
  
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const matterResult = matter(fileContents)
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  return {
    slug,
    contentHtml,
    ...translation
  }
}

export async function getPostData2(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}