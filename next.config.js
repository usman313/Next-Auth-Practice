/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
      API_URL: "http://localhost:3001",
    
      MONGODB_URL: 'mongodb://127.0.0.1:27017/test-next-auth',
      NEXTAUTH_SECRET: 'SECRET_KEY',
      // GOOGLE_CLIENT_ID,
      // GOOGLE_CLIENT_SECRET,
      NEXTAUTH_URL:"http://localhost:3001"
  },
  images: {
      domains: ["res.cloudinary.com"],
    },
};

module.exports = nextConfig;
