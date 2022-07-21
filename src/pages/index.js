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
