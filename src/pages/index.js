import {
  Artists,
  Banner,
  Header,
  StyleGuide,
  Services,
  Associates,
  About,
  Navbar,
  Footer,
} from "../components";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* <Header /> */}
      <Banner />
      <Artists />
      <Associates />
      <Services />
      <About />
      <Footer />
    </>
  );
}
