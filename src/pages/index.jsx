import { domAnimation, LazyMotion } from "framer-motion";
import Head from "next/head";
import {
  About,
  Artists,
  Associates,
  Banner,
  Footer,
  Navbar,
  Services,
} from "../components";

export default function Home() {
  return (
    <LazyMotion features={domAnimation}>
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
    </LazyMotion>
  );
}
