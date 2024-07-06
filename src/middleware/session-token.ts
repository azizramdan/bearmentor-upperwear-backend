import { createMiddleware } from 'hono/factory'

export type SessionTokenEnv = {
  Variables: {
    sessionToken: string
  }
}

export const sessionToken = createMiddleware<SessionTokenEnv>(async (c, next) => {
  const token = c.req.header('X-Session-Token')

  // TODO: for users who have logged in, the session token must be the same as the user id
  if (!token) {
    return c.json({
      message: 'Session token header is required',
    }, 400)
  }

  c.set('sessionToken', token)

  await next()
})
