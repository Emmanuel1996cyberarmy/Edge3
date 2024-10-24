// store/modules/schedule.js
export default {
    namespaced: true,
    
    state: {
      games: [],
      loading: false,
      error: null
    },
  
    mutations: {
      SET_GAMES(state, games) {
        state.games = games
      },
      SET_LOADING(state, loading) {
        state.loading = loading
      },
      SET_ERROR(state, error) {
        state.error = error
      }
    },
  
    actions: {
      async fetchSchedule({ commit, rootState }) {
        commit('SET_LOADING', true)
        try {
          const { season } = rootState.filters
          const response = await fetch(`/api/schedule?season=${season}`)
          const games = await response.json()
          commit('SET_GAMES', games)
        } catch (error) {
          commit('SET_ERROR', error.message)
        } finally {
          commit('SET_LOADING', false)
        }
      }
    },
  
    getters: {
      upcomingGames: (state) => (limit = 4) => state.games
        .filter(game => new Date(game.date) >= new Date())
        .sort((a, b) => new Date(a.date) - new Date(b.date))
        .slice(0, limit)
    }
  }
  