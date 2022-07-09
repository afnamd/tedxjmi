import Layout from "../components/layout";
import Context from "./homepage/context";
import Footer from "../components/footer";
import Landingpage from "./homepage/landingpage";
import Navbar from "../components/navbar";
import Partners from "./homepage/partners";
import Tickets from "./homepage/tickets";
import {
  RecoilRoot,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
export default function Home() {
  return (
    <RecoilRoot>
      <Layout>
        <Landingpage />
        <Context />
        <Tickets />
        <Partners />
      </Layout>
    </RecoilRoot>
  )
}
