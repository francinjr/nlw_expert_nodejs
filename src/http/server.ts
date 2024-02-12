import fastify from 'fastify'
import cookie from '@fastify/cookie'
import { z } from 'zod'
import { PrismaClient } from '@prisma/client'
import { createPoll } from './routes/create-poll'
import { getPoll } from './routes/get-poll'
import { voteOnPoll } from './routes/vote-on-poll'


const app = fastify()

app.register(cookie, {
    secret: "francinjr",
    hook: 'onRequest',
})

app.register(createPoll)
app.register(getPoll)
app.register(voteOnPoll)

app.listen({ port: 3333 }).then(() => {
    console.log('HTTP server runnig')
})

