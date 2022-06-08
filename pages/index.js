import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Head from "next/head";

function Home() {
  return (
    <>
      <Head><title>Cookie Stand</title></Head>
      <div className="h-screen w-screen ">
      <Header/>
      <Main />
      <Footer/>
      </div>
    </>
  );
}

export default Home;
