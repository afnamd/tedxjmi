import Head from "next/head";
import Footer from "./footer";
import Navbar from "./navbar";
const Layout = ({ children }) => {
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
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};
export default Layout;
