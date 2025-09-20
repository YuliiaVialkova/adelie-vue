import { defineStore } from 'pinia'
import articlesData from '@/data/articles.json'

export const useArticlesStore = defineStore('articles', {
  state: () => ({
    articles: articlesData,
  }),
})
