// api/mockApi.js
export const mockApi = {
    async get(endpoint) {
      await new Promise(resolve => setTimeout(resolve, 500))
      
      const data = {
        '/api/players': [
          { id: 1, name: 'Player 1', position: 'HB', riskLevel: 'green', rating: 80 },
          { id: 2, name: 'Player 2', position: 'HB', riskLevel: 'yellow', rating: 75 },
        ],
        '/api/schedule': [
          { id: 1, date: '2024-12-03', opponent: 'Team A', time: '1:30 PM' },
          { id: 2, date: '2024-12-10', opponent: 'Team B', time: '1:30 PM' }
        ],
        '/api/staff': [
          { id: 1, name: 'Coach 1', role: 'Head Coach' },
          { id: 2, name: 'Coach 2', role: 'Assistant Coach' }
        ]
      }
      
      return data[endpoint] || []
    }
  }
  