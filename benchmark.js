const autocannon = require('autocannon')

const query = `
  {
    users {
      col1
      col2
      col3
      col4
      col5
      col6
      col7
      col8
      col9
      col10
    }
  }
`

const cannon = autocannon(
	{
		url: 'http://localhost:4000',
		body: JSON.stringify({ query }),
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
	},
	console.log,
)

process.once('SIGINT', () => cannon.stop())

autocannon.track(cannon, { renderLatencyTable: true })
