import React from "react";
import Header from "../components/Static_components/Header.js";
import ItemCard from "../components/UI/IndiCard.js";
import Footer from "../components/Static_components/Footer.jsx";
import Pagination from "../components/Lib/Pagination";
import BusinessCard from "../components/UI/BusinessCard";
import axios from "axios";
import Head from "next/head";

export default function ResultItems({ data }) {
  // C
  const occupation = `${data.data[0].occupation}`;
  const pageTitle = `Get ${occupation} for contruction, renovation, maintainance etc.
  in karnal,haryana`;

  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
        <meta
          name="description"
          content="Find construction related shops or hire Blue-Collar (& Covid-19 safe) professionals instantly near you for FREE."
        />
        <meta
          name="keywords"
          content="nearmistry, near mistry, mistry in karnal, welders in karnal, welder in karnal, carpenters in karnal, plumbers in karnal, Rajmistry in karnal"
        />
        <meta
          name="og:title"
          content="Nearmistry - Instantly hire Blue-Collar professionals near you."
        />
        <meta
          name="og:description"
          content="Get construction related shops or hire Blue-Collar (& Covid-19 safe) professionals instantly near you for FREE."
        />
      </Head>
      <Header />
      <main className="max-w-8xl mx-auto">
        <div className="pt-6">
          <div className="grid grid-cols-1 justify-center sm:grid-cols-1 sm:px-10  md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {data?.data.map((data, index) =>
              data.bAge ? (
                <BusinessCard
                  key={index}
                  bAge={data?.bAge}
                  bName={data?.bName}
                  phoneNumber={data?.phoneNumber}
                  ownerImg={data?.ownerImg}
                  areaName={data.areaName}
                  imgUrlArray={data.imgUrlArray}
                  address={data?.address}
                  tags={data?.tags}
                />
              ) : (
                <ItemCard
                  key={index}
                  fName={data?.fName}
                  lName={data?.lName}
                  occupation={data?.occupation}
                  age={data?.age}
                  gender={data?.gender}
                  phoneNumber={data?.phoneNumber}
                  selectedFile={data?.selectedFile}
                  imgUrlArray={data?.imgUrlArray}
                  fullImgUrl={data?.fullImgUrl}
                  //Business details
                  tags={data?.tags}
                />
              )
            )}
          </div>
        </div>
      </main>
      <Pagination
        noOfPages={data.numberOfPages}
        currentCategory={data.data[0].occupation}
      />
      <Footer />
    </div>
  );
}
export async function getStaticProps({ params }) {
  // const {occupation} = context.query
  const { data } = await axios.get(
    `${process.env.MAIN_DATA_GETTING_API}=${Number(
      params.searchItems[1]
    )}&occupation=${params.searchItems[0]}`
  );

  return {
    props: {
      data,
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  // /homePage/getInfo
  const { data } = await axios.get(`${process.env.GET_OCCUPATION_ARRAY_API}`);
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
  console.log(fetchedOccupations);
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
