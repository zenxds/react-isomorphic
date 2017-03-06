const chokidar = require('chokidar')
const path = require('path')

const watcher = chokidar.watch([
  path.join(__dirname, '../app'),
  path.join(__dirname, '../server')
])
const start = () => {
  watcher.on('all', (event, p) => {
    console.log("Cleaning module cache")
    Object.keys(require.cache).forEach(function(id) {
      if (/[\/\\](app|server)[\/\\]/.test(id)) {
        cleanCache(id)
      }
    })
  })
}

watcher.on('ready', start)

// http://fex.baidu.com/blog/2015/05/nodejs-hot-swapping/
function cleanCache(modulePath) {
  const module = require.cache[modulePath]
  if (!module) {
    return
  }

  if (module.parent) {
    module.parent.children.splice(module.parent.children.indexOf(module), 1)
  }

  delete require.cache[modulePath]
}
