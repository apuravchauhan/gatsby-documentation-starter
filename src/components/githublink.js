import React from "react";
import { StaticQuery,graphql } from 'gatsby'

export default ({ meta }) => {

    if (!meta) {
        return null;
    }
    return <StaticQuery
        query={graphql`
      query SiteTitleQuery2{
        site {
          siteMetadata {
            githubProject
          }
        }
      }
    `}
        render={data => (
            <a style={{float:'right', border: '2px solid #00b9f5',padding: 6,textDecoration: 'none',color:'black'}} href={`${data.site.siteMetadata.githubProject}${meta.path}`}>
                Edit on Github
            </a>
        )}
    />
};
