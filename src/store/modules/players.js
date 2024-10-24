// store/modules/players.js
export default {
    namespaced: true,
    
    state: {
      allPlayers: [],
      greenRiskPlayers: [],
      yellowRiskPlayers: [],
      redRiskPlayers: [],
      selectedPlayer: null,
      loading: false,
      error: null
    },
  
    mutations: {
      SET_ALL_PLAYERS(state, players) {
        state.allPlayers = players
      },
      SET_RISK_PLAYERS(state, { risk, players }) {
        switch (risk) {
          case 'green':
            state.greenRiskPlayers = players
            break
          case 'yellow':
            state.yellowRiskPlayers = players
            break
          case 'red':
            state.redRiskPlayers = players
            break
        }
      },
      SET_SELECTED_PLAYER(state, player) {
        state.selectedPlayer = player
      },
      SET_LOADING(state, loading) {
        state.loading = loading
      },
      SET_ERROR(state, error) {
        state.error = error
      }
    },
  
    actions: {
      async fetchPlayers({ commit, rootState }) {
        commit('SET_LOADING', true)
        try {
          const { season, position } = rootState.filters
          const response = await fetch(`/api/players?season=${season}&position=${position}`)
          const players = await response.json()
          
          commit('SET_ALL_PLAYERS', players)
          
          const greenRisk = players.filter(p => p.riskLevel === 'green')
          const yellowRisk = players.filter(p => p.riskLevel === 'yellow')
          const redRisk = players.filter(p => p.riskLevel === 'red')
          
          commit('SET_RISK_PLAYERS', { risk: 'green', players: greenRisk })
          commit('SET_RISK_PLAYERS', { risk: 'yellow', players: yellowRisk })
          commit('SET_RISK_PLAYERS', { risk: 'red', players: redRisk })
        } catch (error) {
          commit('SET_ERROR', error.message)
        } finally {
          commit('SET_LOADING', false)
        }
      },
      
      async updatePlayerRisk({ commit }, { playerId, riskLevel }) {
        try {
          await fetch(`/api/players/${playerId}/risk`, {
            method: 'PUT',
            body: JSON.stringify({ riskLevel }),
            headers: { 'Content-Type': 'application/json' }
          })
          this.dispatch('players/fetchPlayers')
        } catch (error) {
          commit('SET_ERROR', error.message)
        }
      }
    },
  
    getters: {
      getPlayerById: (state) => (id) => state.allPlayers.find(player => player.id === id),
      filteredPlayers: (state, getters, rootState) => {
        const { position, riskLevel } = rootState.filters
        return state.allPlayers.filter(player => {
          if (position !== 'All' && player.position !== position) return false
          if (riskLevel !== 'All' && player.riskLevel !== riskLevel) return false
          return true
        })
      },
      topRiskPlayers: (state) => (risk, limit = 4) => {
        switch (risk) {
          case 'green':
            return state.greenRiskPlayers.slice(0, limit)
          case 'yellow':
            return state.yellowRiskPlayers.slice(0, limit)
          case 'red':
            return state.redRiskPlayers.slice(0, limit)
          default:
            return []
        }
      }
    }
  }
  