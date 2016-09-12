import React, { Component } from 'react';
import { Link } from 'react-router';
import Radium from 'radium';
import style from '../../styles/top-menu';

@Radium
export default class Layout extends Component {
  render() {
    return (
      <div>
        <div className="top-menu" style={ style }>
          <ul>
            <li>
              <Link to="/customers">Customers</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/picture">Picture</Link>
            </li>
            <li>
              <Link to="/video">Video</Link>
            </li>
          </ul>
        </div>

        { this.props.children }
      </div>
    )
  }
}
