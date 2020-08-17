import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '@styles/YDTheme/index.scss'

import { Container } from 'reactstrap'
import { NavMenu } from './NavMenu'

export default class YDLayout extends React.Component {
  static displayName = YDLayout.name

  render() {
    return (
      <div>
        <div className='body-content'>
          <NavMenu />
          <Container className='main-container'>{this.props.children}</Container>
        </div>
        <footer className='footer'>
          <span className='text-muted'></span>
        </footer>
      </div>
    )
  }
}
