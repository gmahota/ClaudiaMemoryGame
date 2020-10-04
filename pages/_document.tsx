import { ServerStyleSheets } from "@material-ui/styles"
import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document"
import React from "react"
import flush from "styled-jsx/server"
import { AppContext } from "../components/AppContext"
import { MuiTheme } from "../components/MuiTheme"

type Props = {
    pageProps: any
}

/**
 * @see https://github.com/mui-org/material-ui/blob/master/examples/nextjs-with-typescript/pages/_document.tsx
 */
class MyDocument extends Document<Props> {
    static getInitialProps = async (ctx: DocumentContext): Promise<any> => {
        // Render app and page and get the context of the page with collected side effects.
        const sheets = new ServerStyleSheets()

        const originalRenderPage = ctx.renderPage

        ctx.renderPage = () =>
            originalRenderPage({
                enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
                // useful for wrapping in a per-page basis
                enhanceComponent: (Component) => Component,
            })

        const initialProps = await Document.getInitialProps(ctx)

        //const pageProps = ctx.store.getState()
        return {
            ...initialProps,
            //pageProps,
            // Styles fragment is rendered after the app and page rendering finish.
            styles: (
                <>
                    {initialProps.styles}
                    {sheets.getStyleElement()}

                </>
            ),
        }
    }

    render() {
        //const { pageProps } = this.props
        //const page = pageProps.page.selectedPage

        return (
            <Html lang="en">
                <Head>
                    <link 
                        rel="stylesheet" 
                        href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" 
                        crossOrigin="anonymous" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
