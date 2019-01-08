const { PHASE_PRODUCTION_SERVER } =
  process.env.NODE_ENV === 'development'
    ? {}
    : !process.env.NOW_REGION
    ? require('next/constants')
    : require('next-server/constants');

const config = {
  manifest,
  workboxOpts
};

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_PRODUCTION_SERVER) {
    // Config used to run in production.
    return {};
  }
  // ✅ Put the require call here.

  const withTypescript = require('@zeit/next-typescript');

  return withTypescript();
};
