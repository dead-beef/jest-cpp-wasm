const path = require('path');
const crypto = require('crypto');
const child_process = require('child_process');

module.exports = {
  getCacheKey: function getCacheKey(src, filename, configStr) {
    return crypto
      .createHash('md5')
      .update(src)
      .update(filename)
      .update(configStr)
      .digest('hex');
  },

  getConfig: function getConfig(filename, config) {
    //console.log('getConfig', filename);
    for (const transform of config.transform) {
      const expr = new RegExp(transform[0]);
      //console.log('match transform', expr, expr.test(filename));
      if (expr.test(filename)) {
        //console.log('matched transform', transform);
        return transform[2] || {};
      }
    }
    return {};
  },

  process: function process(src, filename, config/*, options*/) {
    //console.log('cpp-to-wasm process');
    const wasmConfig = this.getConfig(filename, config);
    //console.log('config =', wasmConfig);
    return child_process.execFileSync(
      path.join(__dirname, 'cpp-wasm-build'),
      [ filename, JSON.stringify(wasmConfig) ],
      { encoding: 'utf8' }
    );
  }
};
