import "../styles/globals.css"
import type { AppProps } from "next/app"
import { ToastContainer } from "react-toastify"
import { NextSeo } from "next-seo"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
        title="Data Analytics Services | Datascope Analytics"
        description="We identify trends & patterns to convert raw business data into acitonable insights."
        canonical="https://verdant-tartufo-823b35.netlify.app/"
        openGraph={{
          url: "https://res.cloudinary.com/dw9t4raq4/image/upload/v1664472615/datascope/2_uhwg9o.png",
          title: "Data Analytics",
          description:
            "We identify trends & patterns to convert raw business data into acitonable insights.",
          images: [
            {
              url: "https://res.cloudinary.com/dw9t4raq4/image/upload/v1664472615/datascope/2_uhwg9o.png",
              width: 800,
              height: 600,
              alt: "Data Analytics pattern",
              type: "image/png"
            },
            {
              url: "https://res.cloudinary.com/dw9t4raq4/image/upload/v1664472615/datascope/2_uhwg9o.png",
              width: 900,
              height: 800,
              alt: "Data Analytics pattern",
              type: "image/jpeg"
            }
          ],
          site_name: "Data Analytics"
        }}
        twitter={{
          handle: "@momito8_",
          site: "@momit8_",
          cardType: "summary_large_image"
        }}
        robotsProps={{
          nosnippet: true,
          notranslate: false,
          noimageindex: true,
          noarchive: true,
          maxSnippet: -1,
          maxImagePreview: "none",
          maxVideoPreview: -1
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content: "data analtyics, data exploration, machine learning & ai"
          }
        ]}
      />
      <Component {...pageProps} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  )
}

export default MyApp
