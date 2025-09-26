import { defineStore } from 'pinia'
import portfolioData from '@/data/portfolio.json'

export const usePortfolioStore = defineStore('portfolio', {
  state: () => ({
    portfolio: portfolioData,
  }),
})
