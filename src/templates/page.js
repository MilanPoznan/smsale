import React from "react"
import { Link, graphql } from "gatsby"

//Components
import Layout from '../components/Layout'
import Video from '../components/Video'
import TextComponent from '../components/TextComponent'
import FullImage from '../components/FullImage'
import ServiceComponent from '../components/ServiceComponent'
import GalleryComponent from '../components/GalleryComponent'

export default function pageTemplate({ data }) {

  const { allWpPage: { nodes }, allWpMenu: { menus } } = data
  const { pageContent } = nodes[0]

  return (
    <Layout>
      <div className="container def-page">
        {pageContent.pageFlexibleContent.map((item, index) => {
          switch (item.fieldGroupName) {
            case 'page_Pagecontent_PageFlexibleContent_VideoComponent':
              return <Video data={item} />
            case 'page_Pagecontent_PageFlexibleContent_TextComponent':
              return <TextComponent data={item} />
            case 'page_Pagecontent_PageFlexibleContent_FullImage':
              return <FullImage data={item} />
            case 'page_Pagecontent_PageFlexibleContent_ServicesComponent':
              return <ServiceComponent data={item} />
            case 'page_Pagecontent_PageFlexibleContent_Gallery':
              return <GalleryComponent data={item} />
            default:
              break;
          }
        })}
      </div>
    </Layout>
  )
}


export const defPageQuery = graphql`
  query($id: String) {
    allWpMenu {
      ...getMenus
    }
    allWpPage(filter: {id: {eq: $id}}){
    nodes {
      pageContent {
        fieldGroupName
        pageFlexibleContent {
          ... on WpPage_Pagecontent_PageFlexibleContent_VideoComponent {
            fieldGroupName
            subtitle
            title
            video {
              localFile {
                absolutePath
                publicURL
                relativePath
                url
                uid
              }
            }
          }
          ... on WpPage_Pagecontent_PageFlexibleContent_TextComponent {
            fieldGroupName
            text
            title
          }
          ... on WpPage_Pagecontent_PageFlexibleContent_FullImage {
            fieldGroupName
            image {
              localFile {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
          ... on WpPage_Pagecontent_PageFlexibleContent_ServicesComponent {
            fieldGroupName
            title
            servicesRepeater {
              text
              title
            }
          }
          ... on WpPage_Pagecontent_PageFlexibleContent_Map {
            fieldGroupName
          }
          ... on WpPage_Pagecontent_PageFlexibleContent_Gallery {
            fieldGroupName
            galleryImages {
              altText
              localFile {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  }
`
