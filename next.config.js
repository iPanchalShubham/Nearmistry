const nextConfig = {
  env: {
NEXT_PUBLIC_API_TOKEN :process.env.API_TOKEN,
GET_OCCUPATION_ARRAY_API : process.env.GET_OCCUPATION_ARRAY_API,
MAIN_DATA_GETTING_API:process.env.MAIN_DATA_GETTING_API,
  }
}
module.exports = nextConfig