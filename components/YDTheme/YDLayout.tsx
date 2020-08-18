import React from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
// import '@styles/YDTheme/index.scss';

export default class YDLayout extends React.Component {
  static displayName = YDLayout.name;

  render() {
    return (
      <div className='use-bootstrap'>
        <div className='body-content'>
          <NavMenu />
          <Container className='main-container'>{this.props.children}</Container>
        </div>
        <footer className='footer'>
          <span className='text-muted'></span>
        </footer>
      </div>
    );
  }
}
