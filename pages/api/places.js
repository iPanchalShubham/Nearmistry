import axios from "axios";
// For an API route to work, you need to export a function as default (a.k.a request handler)
export default async function handler(req, res) {
  const { place } = req.query;
  const data = await axios
    .get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?country=in&limit=7&types=place%2Cpostcode%2Caddress%2Clocality%2Cneighborhood%2Cdistrict&autocomplete=true&fuzzyMatch=true&routing=true&worldview=in&access_token=${process.env.API_TOKEN}`
    )
    .then((res) => res.data.features);
  console.log(data);
  res.status(200).json(data);
}
