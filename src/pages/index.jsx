import Head from "next/head";
import {
  Navbar,
  Banner,
  Services,
  About,
  Footer,
  Artists,
  Associates,
} from "../components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Moon Society</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="hello" />
      </Head>
      <Navbar />
      <Banner />
      <Artists />
      <Associates />
      <Services />
      <About />
      <Footer />
    </>
  );
}
