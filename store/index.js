import Bootstrap from 'bootstrap'
import Vuex from 'vuex'

import posts from './posts'
import authors from './authors'

Bootstrap.use(Vuex)

export default function () {
  const Store = new Vuex.Store({
    modules: {
      content
    },

    strict: process.env.DEV
  })

  return Store
}