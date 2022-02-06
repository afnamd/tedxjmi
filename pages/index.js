import Layout from "../components/layout";
import Context from "./homepage/context";
import Footer from "../components/footer";
import Landingpage from "./homepage/landingpage";
import Navbar from "../components/navbar";
import Partners from "./homepage/partners";
import Venue from "./homepage/venue";

export default function Home() {
  return (
    <Layout>
      <Landingpage />
      <Context />
      <Venue />
      <Partners />
    </Layout>
  )
}
