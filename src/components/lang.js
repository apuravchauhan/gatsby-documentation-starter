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
  render() {
    const { details } = this.props;

    return <Link className='link'
        to={details.root}
        style={{
          color: 'white',
          textDecoration: 'none',
        }}
      >
        <span onClick={this.setMsgContext}>{details.desc}</span>
      </Link>
  }
}