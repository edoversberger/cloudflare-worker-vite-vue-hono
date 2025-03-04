//Imports
import { Hono } from 'hono'

//Init Hono app
const app = new Hono()

//Serve HTML (SPA)
app.get('/', (c) => {
  return c.html(
    `<!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <link rel="icon" href="/favicon.ico">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Vite App</title>
        </head>
        <body>
          <dov>Here</div>
          <div id="app"></div>
          <script>import("/@vite/client")</script>
          <script type="module" src="src/main.js"></script>
          </script>
        </body>
      </html>`
  )
})

//Export
export default app