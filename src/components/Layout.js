import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"
import { ThemeProvider } from 'styled-components';
import { theme } from '../global-styles/globalTheme'
import { SiteWrapper } from '../global-styles/globalComponents'
import Footer from './Footer'
import Header from './Header'

const Layout = ({ isHomePage, children, menuData }) => {
  const {
    wp: {
      generalSettings: { title },
    },
  } = useStaticQuery(graphql`
    query LayoutQuery {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `)

  return (
    <>
      <ThemeProvider theme={theme}>
        <SiteWrapper>

          <Header menuData={menuData} />

          <main>{children}</main>

        </SiteWrapper>
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default Layout
