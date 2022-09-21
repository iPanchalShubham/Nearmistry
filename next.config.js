/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
API_TOKEN :process.env.API_TOKEN,
GET_OCCUPATION_ARRAY_API : process.env.GET_OCCUPATION_ARRAY_API,
MAIN_DATA_GETTING_API:process.env.MAIN_DATA_GETTING_API,
THUMBNAIL_PRESET :process.env.THUMBNAIL_PRESET,
CLOUD_NAME:process.env.CLOUD_NAME
  },
  images: {
    domains: ['res.cloudinary.com'],
}
}
module.exports = nextConfig