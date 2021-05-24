import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import parse from "html-react-parser"
import { ThemeProvider } from 'styled-components';
import { theme } from '../global-styles/globalTheme'
import { SiteWrapper } from '../global-styles/globalComponents'

const Layout = ({ isHomePage, children }) => {
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

          <header className="global-header">
            {isHomePage ? (
              <h1 className="main-heading">
                <Link to="/">{parse(title)}</Link>
              </h1>
            ) : (
              <Link className="header-link-home" to="/">
                {title}
              </Link>
            )}
          </header>

          <main>{children}</main>

        </SiteWrapper>

      </ThemeProvider>
    </>
  )
}

export default Layout
