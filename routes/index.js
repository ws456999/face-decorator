const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index')
})

module.exports = router
