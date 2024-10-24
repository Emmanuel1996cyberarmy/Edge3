// store/modules/staff.js
export default {
    namespaced: true,
    
    state: {
      coaches: [],
      loading: false,
      error: null
    },
  
    mutations: {
      SET_COACHES(state, coaches) {
        state.coaches = coaches
      },
      SET_LOADING(state, loading) {
        state.loading = loading
      },
      SET_ERROR(state, error) {
        state.error = error
      }
    },
  
    actions: {
      async fetchStaff({ commit }) {
        commit('SET_LOADING', true)
        try {
          const response = await fetch('/api/staff')
          const coaches = await response.json()
          commit('SET_COACHES', coaches)
        } catch (error) {
          commit('SET_ERROR', error.message)
        } finally {
          commit('SET_LOADING', false)
        }
      }
    },
  
    getters: {
      staffByRole: (state) => (role) => state.coaches.filter(coach => coach.role === role)
    }
  }
  