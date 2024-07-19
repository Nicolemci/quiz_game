const { environment } = require('@rails/webpacker')

// Remove invalid properties
environment.config.node = {
  __dirname: true,
  __filename: true,
  global: true
}

module.exports = environment
