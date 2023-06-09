import express, { Router } from 'express'
const router = Router()
const app = express()

router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request)
  Object.setPrototypeOf(res, app.response)

  req.res = res
  res.req = req

  next()
})

export default {
  path: '/api',
  handler: router,
}
