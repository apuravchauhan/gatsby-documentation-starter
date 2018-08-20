/*
 * @Author: Apurav Chauhan 
 * @Date: 2018-08-20 16:48:32 
 * @Last Modified by:   Apurav Chauhan 
 * @Last Modified time: 2018-08-20 16:48:32 
 */

import React from 'react'
import { FormattedMessage } from 'react-intl';

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <FormattedMessage
      id="welcome"
      defaultMessage="Welcome to this page"
    />
  </Layout>
)

export default IndexPage
