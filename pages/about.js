import About from "../Components/Static_components/About.jsx";
import Head from "next/head";
export default function aboutPage(){
return <div>
   <Head>
        <title>
         About us|NearMistry.com
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
   <About/>
</div>
}