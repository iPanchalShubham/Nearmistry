import React from "react";
import Header from "../Components/Static_components/Header.js";
import ItemCard from "../Components/ItemCard.js";
import axios from "axios";
import Footer from "../Components/Static_components/Footer.jsx";
import Pagination from "../Components/Pagination";
import Head from "next/head";
import { useRouter } from "next/router";

export default function ResultItems({ data }) {
  const router = useRouter()
  if (router.isFallback) {
    return <div>
    <Header />
    <div className="absolute top-0 left-0 right-0 bottom-0 m-auto text-center w-[300spx] h-[100px]">
      <div className="text-4xl font-thin lg:text-5xl">Thanks for your interest. </div>
      <div className="text-3xl font-thin lg:text-4xl">We&apos;re working on it.</div>
      <br />
      <button
        className="text-[#3f51b5] font-bold uppercase text-sm px-6 py-3 mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={()=> router.back()}
      >
        &#8592;Back❤️
      </button>
    </div>
  </div>
 }
  return (
    <div>
      
      <Head>
        <title>
          Get Workers for contruction, renovation, maintainance etc. in
          karnal,haryana
        </title>
        <meta
          name="title"
          content="Get instant, Police verified workers like Painters, Rajmistry, Labours and many more... for contruction, maintainance, renovation like works in karnal,haryana."
        />
        <meta
          name="description"
          content="Get instant, Police verified workers like Painters, Rajmistry, Labours and many more... for contruction, maintainance, renovation like works in karnal,haryana."
        />
      </Head>
      <Header />
      <main className="max-w-8xl mx-auto">
        <div className="pt-6">
          <div className="grid grid-cols-1 justify-center sm:grid-cols-1 sm:px-10  md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {data?.data.map((data, index) => (
              <ItemCard
                key={index}
                fName={data?.fName}
                lName={data?.lName}
                occupation={data?.occupation}
                age={data?.age}
                gender={data?.gender}
                phoneNumber={data?.phoneNumber}
                selectedFile={data?.selectedFile}
                imgUrl={data?.imgUrl}
                fullImgUrl={data?.fullImgUrl}
              />
            ))}
          </div>
        </div>
      </main>
      <Pagination
        noOfPages={data?.numberOfPages}
        currentCategory={data?.data[0].occupation}
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
    fallback: true,
  };
}
