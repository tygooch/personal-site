import React, { Component } from 'react'
import axios from 'axios'
import { ServerStyleSheet } from 'styled-components'

export default {
  siteRoot: './',
  stagingSiteRoot: './',
  getSiteData: () => ({
    title: 'Ty Gooch',
  }),
  getRoutes: () => {
    return [
      {
        path: '/',
        component: 'src/containers/Home/Home',
      },
      {
        path: '/about',
        component: 'src/containers/About/About',
      },
      {
        path: '/portfolio',
        component: 'src/containers/Portfolio/Portfolio',
      },
      {
        path: '/resume',
        component: 'src/containers/Resume/Resume',
      },
      {
        path: '/contact',
        component: 'src/containers/Contact/Contact',
      },
      {
        is404: true,
        component: 'src/containers/404/404',
      },
    ]
  },
  renderToHtml: (render, Comp, meta) => {
    const sheet = new ServerStyleSheet()
    const html = render(sheet.collectStyles(<Comp />))
    meta.styleTags = sheet.getStyleElement()
    return html
  },
  Document: class CustomHtml extends Component {
    render () {
      const {
        Html, Head, Body, children, renderMeta,
      } = this.props

      return (
        <Html>
          <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.9/css/all.css" integrity="sha384-5SOiIsAziJl6AWe0HWRKTXlfcSHKmYV4RBF18PPJ173Kzn7jzMyFuTtk8JA7QQG1" crossOrigin="anonymous"/>
            {renderMeta.styleTags}
          </Head>
          <Body>{children}</Body>
        </Html>
      )
    }
  },
}
