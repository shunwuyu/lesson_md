const catchError = async (ctx, next) => {
  try {
    await next()
  } catch (error) {
    ctx.body = {
      msg: error.msg
    }
    ctx.response.status = error.code
  }
}