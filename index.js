if (process.errnos || process.UV_ERRORS) {
  module.exports = process.errnos || process.UV_ERRORS
} else {
  module.exports = requireMap()
}

function requireMap () {
  try {
    // just avoid inlining util with some bundlers
    const loadUtil = require.bind(null, 'util')
    return loadUtil().getSystemErrorMap()
  } catch {
    return new Map()
  }
}
