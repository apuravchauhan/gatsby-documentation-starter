import React, { Component } from 'react'
import { Link } from 'gatsby'
import {LangUtils} from '../data/langs';

export default class Lang extends Component {
  constructor(props) {
    super(props);
    this.setMsgContext = this.setMsgContext.bind(this);
  }
  setMsgContext() {
    const {code} = this.props;
    LangUtils.currentLocale = code;
  }
  getLocaleSpecificURL(){
    let newURL = LangUtils.newURL(this.props.details.root);
    console.log(newURL);
    return newURL;
  }
  render() {
    const { details } = this.props;
    return <Link className='link'
        to={this.getLocaleSpecificURL()}
        style={{
          color: 'white',
          textDecoration: 'none',
        }}
      >
        <span onClick={this.setMsgContext}>{details.desc}</span>
      </Link>
  }
}