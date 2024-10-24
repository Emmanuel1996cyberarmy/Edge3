// store/modules/filters.js
export default {
    namespaced: true,
    
    state: {
      season: '2024/25',
      position: 'All',
      riskLevel: 'All',
      dateRange: { start: null, end: null }
    },
  
    mutations: {
      SET_SEASON(state, season) {
        state.season = season
      },
      SET_POSITION(state, position) {
        state.position = position
      },
      SET_RISK_LEVEL(state, riskLevel) {
        state.riskLevel = riskLevel
      },
      SET_DATE_RANGE(state, { start, end }) {
        state.dateRange = { start, end }
      }
    },
  
    actions: {
      updateFilters({ commit, dispatch }, filters) {
        if (filters.season) commit('SET_SEASON', filters.season)
        if (filters.position) commit('SET_POSITION', filters.position)
        if (filters.riskLevel) commit('SET_RISK_LEVEL', filters.riskLevel)
        if (filters.dateRange) commit('SET_DATE_RANGE', filters.dateRange)
        
        dispatch('players/fetchPlayers', null, { root: true })
        dispatch('schedule/fetchSchedule', null, { root: true })
      }
    }
  }
  