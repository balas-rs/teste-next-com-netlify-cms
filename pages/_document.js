import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
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
