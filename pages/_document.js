import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head >
            <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></Script>
        </Head>
        <body>
          <Main />
          <NextScript />
          <script>
            if (window.netlifyIdentity) {
                window.netlifyIdentity.on("init", user => {
                if (!user) {
                    window.netlifyIdentity.on("login", () => {
                    document.location.href = "/admin/"
                    })
                }
                })
            }
          </script>
        </body>
      </Html>
    )
  }
}

export default MyDocument
