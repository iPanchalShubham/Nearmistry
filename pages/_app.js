import '../styles/globals.css'
import { Router } from 'next/dist/client/router';
import ProgressBar from '@badrap/bar-of-progress';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
const progress = new ProgressBar({
  size:2.5,
  color:"white",
  className:"z-50",
  delay:150,
})
Router.events.on("routeChangeStart",progress.start)
Router.events.on("routeChangeComplete",progress.finish)
Router.events.on("routeChangeError",progress.finish)

export default MyApp
