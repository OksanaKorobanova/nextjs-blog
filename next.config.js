/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

const nextConfig = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'oksanavitol',
        mongodb_password: 'LiS8yU0CQWWTlGZr',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'blog-dev',
      },
    };
  }
  return {
    env: {
      mongodb_username: 'oksanavitol',
      mongodb_password: 'LiS8yU0CQWWTlGZr',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'blog',
    },
  };
};

module.exports = nextConfig;
