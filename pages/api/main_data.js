// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const { data } = await axios.get(
    `https://labrecruit.herokuapp.com/volunteerSection/homePage?page=1&occupation=Labour`
  );
  res.send(data)
}
