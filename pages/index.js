import Head from "next/head";
import Footer from "components/Static_components/Footer";
import Header from "components/Static_components/Header";
import HomePage from "components/Home/main/HomePage";
import Banner from "components/Home/Banner";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const DynamicBanner = dynamic(() => import("../components/Home/Banner"), {
  suspense: true,
});
export default function Home() {
  return (
    <section>
      <Head>
        <title>
          Nearmistry - Instantly hire Blue-Collar professionals near you.
        </title>
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
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <section className="min-h-screen">
          <Suspense fallback={<div>Loading...</div>}>
            <DynamicBanner />
          </Suspense>
          {/* <Banner/> */}
          <HomePage />
        </section>

        <Footer />
      </main>
    </section>
  );
}
/*
########### FUN FACT ##############
Relational database doesn't mean one table has a relationship with another. The word relational comes from Codd's relational algebra. Since Mongo is not based on relational algebra, it's not a relational database.
*/
