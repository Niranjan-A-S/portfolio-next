/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

const nextConfig = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        MONGODB_USERNAME: 'next-user',
        MONGODB_PASSWORD: 'rE3mNIWe8fOv45DP',
        MONGODB_CLUSTER: 'cluster0',
        MONGODB_DATABASE: 'portfolio-dev'
      }
    }
  }

  //production config
  return {
    env: {
      MONGODB_USERNAME: 'next-user',
      MONGODB_PASSWORD: 'rE3mNIWe8fOv45DP',
      MONGODB_CLUSTER: 'cluster0',
      MONGODB_DATABASE: 'portfolio'
    }
  }
}

module.exports = nextConfig
