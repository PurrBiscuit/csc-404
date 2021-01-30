const repl = require('repl')

r = repl.start('recipe_connection > ')

r.context = Object.assign(
  r.context,
  {}
)
