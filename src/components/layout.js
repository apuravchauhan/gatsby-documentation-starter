import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql, Link } from 'gatsby'
import { IntlProvider, addLocaleData } from 'react-intl';
import Header from './header'
import './layout.css'
import langMap, { LangUtils } from '../data/langs';

export default class Layout extends Component {
  constructor(props) {
    super(props);
    const currLocale = LangUtils.currentLocale;
    addLocaleData(langMap[currLocale].localeData);
    this.state = { msg: langMap[currLocale].data, locale: currLocale }

  }


  render() {
    const root = this.state.locale === 'en' ? '' : this.state.locale;
    const { children } = this.props;
    return <StaticQuery
      query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
      render={data => (
        <IntlProvider
          locale={this.state.locale}
          messages={this.state.msg}
        ><div>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: 'Sample' },
                { name: 'keywords', content: 'sample, something' },
              ]}
            >
              <html lang="en" />
            </Helmet>
            <Header siteTitle={data.site.siteMetadata.title} />
            <div style={{ background: '#00b9f5' }}>
              <div className="headersub">
                <Link to={`${root}/`} className='link' activeClassName='linkactive'>Home</Link>
                <Link to={`${root}/docs/android`} className='link' activeClassName='linkactive'>Docs</Link>
              </div>
            </div>
            <div
              style={{
                margin: '0 auto',
                maxWidth: 960,
                padding: '2.0875rem 1.0875rem 1.45rem',
              }}>

              {children}
              <hr style={{ margin: 10, height: 2, background: '#f0f0f0' }} />
              MIT License | <a href="https://twitter.com/apuravchauhan">@apuravchauhan</a>
            </div>
          </div>
        </IntlProvider>
      )}
    />

  }
}
