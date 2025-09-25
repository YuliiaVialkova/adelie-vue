import { defineStore } from 'pinia'
import portfolioData from '@/data/portfolio.json'

export const portfolioStore = defineStore('portfolio', {
  state: () => ({
    portfolio: portfolioData,
  }),
})
