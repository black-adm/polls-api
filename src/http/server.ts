import fastify from 'fastify'

const app = fastify()

app.get('/', () => {
  console.log("Success")
})

app.listen({ port: 3333 }).then(() => {
  console.log("Server is running ...")
})


