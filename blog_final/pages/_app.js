import "@/styles/globals.css";
import Layout from "./components/layout";
import Footer from "./pages/footer";
export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Footer />
    </Layout>
  );
}
