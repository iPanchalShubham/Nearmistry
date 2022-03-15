import Head from "next/head";
import Footer from "../Components/Static_components/Footer";
import Header from "../Components/Static_components/Header";
import HomePage from "../Components/HomePage";

export default function Home() {
  return (
    <section>
      <Head>
        <title>NearMistry</title>
        <meta name="description" content="Get police verified painters, labours, masons etc in karnal" />
        <meta name="keywords" content="nearmistry, near mistry, mistry in karnal, welders in karnal, welder in karnal, carpenters in karnal, plumbers in karnal"/>
      </Head>
      <main>
        <Header/>
        <section  className="min-h-screen" >
          <HomePage />
        </section>
       
          <Footer/>
      </main>
    </section>
  );
}
/*
########### FUN FACT ##############
Relational database doesn't mean one table has a relationship with another. The word relational comes from Codd's relational algebra. Since Mongo is not based on relational algebra, it's not a relational database.
*/ 