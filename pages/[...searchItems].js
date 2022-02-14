import React from "react";
import Header from "../Components/Header.js";
import ItemCard from "../Components/ItemCard.js";
import axios from "axios";
import Footer from "../Components/Footer.jsx";
import Pagination from '../Components/Pagination'
import Head from "next/head";
export default function ResultItems({ data }) {
  return (
    <div>
      <Head>
        <title>
          Get Workers for contruction, renovation, maintainance etc. in
          karnal,haryana
        </title>
        <meta
          name="og:title"
          content="Get instant, Police verified workers like Painters, Rajmistry, Labours and many more... for contruction, maintainance, renovation like works in karnal,haryana."
        />
        <meta
          name="description"
          content="Get instant, Police verified workers like Painters, Rajmistry, Labours and many more... for contruction, maintainance, renovation like works in karnal,haryana."
        />
      </Head>
      <Header/>
      <main className="max-w-8xl mx-auto">
        <div className="pt-6">
          <div className="grid grid-cols-1 justify-center sm:grid-cols-1 sm:px-10  md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {data?.data.map((data, index) => (
              <ItemCard
                key={index}
                img={data?.resizedBase64}
                fName={data?.fName}
                lName={data?.lName}
                occupation={data?.occupation}
                age={data?.age}
                gender={data?.gender}
                phoneNumber={data?.phoneNumber}
                selectedFile={data?.selectedFile}
              />
            ))}
          </div>
        </div>
      </main>
      <Pagination noOfPages={data.numberOfPages} currentCategory={data.data[0].occupation}/>
      <Footer />
    </div>
  );
}
export async function getStaticProps({ params }) {
  // const {occupation} = context.query
  const { data } = await axios.get(
    `${process.env.MAIN_DATA_GETTING_API}=${Number(
      params.searchItems[1]
    )}&occupation=${params.searchItems[0]}&lat=29.6857&lng=76.9905`
  );

  return {
    props: {
      data,
    },
    revalidate: 20,
  };
}

export async function getStaticPaths() {
  // /homePage/getInfo
  const { data } = await axios.get(
    `${process.env.GET_OCCUPATION_ARRAY_API}`
  );
  let fetchedOccupations = data;
  const modifiedOccupations = [];

  for (let i = 0; i < fetchedOccupations.length; i++) {
    for (let y = 1; y <= fetchedOccupations[i].numberOfPages; y++) {
      let key = "occupation";
      let key1 = "numberOfPages";
      let obj = {};
      obj[key] = fetchedOccupations[i].occupation;
      obj[key1] = y;
      modifiedOccupations.push(obj);
    }
  }
  return {
    paths: modifiedOccupations.map((modifiedOccupation) => {
      return {
        params: {
          searchItems: [
            modifiedOccupation.occupation,
            `${modifiedOccupation.numberOfPages}`,
          ],
        },
      };
    }),
    fallback: false,
  };
}
