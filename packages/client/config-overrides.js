module.exports = function override(config, env) {
  //do stuff with the webpack config...
  config;
  config.resolve.symlinks = false
  config.exclude = ['env/']
  return config
}
