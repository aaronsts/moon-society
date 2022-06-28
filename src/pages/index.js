import {
  Artists,
  Banner,
  Header,
  StyleGuide,
  Cursor,
  Services,
  Associates,
  About,
  Navbar,
  Footer,
} from "../components";

export default function Home() {
  return (
    <>
      {/* <Cursor /> */}
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
