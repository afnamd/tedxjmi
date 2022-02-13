import Layout from "../components/layout";
import Context from "./homepage/context";
import Footer from "../components/footer";
import Landingpage from "./homepage/landingpage";
import Navbar from "../components/navbar";
import Partners from "./homepage/partners";
import Tickets from "./homepage/tickets";

import auth from "../api/auth";
export default function Home() {
  
  return (
      <Layout>
        <Landingpage />
        <Context />
        <Tickets />
        <Partners />
      </Layout>
  )
}
