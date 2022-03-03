import Head from "next/head";
import { useEffect } from "react";
import auth from "../api/auth";
import Footer from "./footer";
import Navbar from "./navbar";
import NavbarMobile from "./navbarMobile";
import { userState as userState, paymentState } from "../components/atoms";
import { useRecoilState } from 'recoil'
const Layout = ({ children }) => {
  const [user, setUser] = useRecoilState(userState);
  const [payment, setPayment] = useRecoilState(paymentState);
  useEffect(async () => {
    if (window.isFetched)
      return
    else
      window.isFetched = true
    await auth.handshake()
    let res = await auth.status()
    const { name, email, picture, alreadyHaveATicket } = res.data
    if (res.data.status)
      setUser({
        name, email, picture, alreadyHaveATicket,
        isAuth: true,
      })
    else
      setUser({
        isAuth: false
      })
  }, [])
  return (
    <div className="Layout ">
      <Head>
        <title>TEDx JMI 2022 | Jamia Millia Islamia</title>
        <meta
          name="description"
          content="TEDxJMI, x = independently organised TED event. Different Lenses. This January, at Jamia Millia Islamia."
        />
        <meta
          name="keywords"
          content="tedxjmi, TEDx, JMI, Jamia Millia Islamia, New Delhi, event, talks"
        />
      </Head>
      <div className=" ml-auto mr-auto bg-black">
        <div className="hidden md:block">
          <Navbar />
        </div>
        <div className="block md:hidden">
          <NavbarMobile />
        </div>
        <div className="pt-20 bg-white md:pt-0">{children}</div>
        <Footer />
      </div>
    </div>
  );
};
export default Layout;
