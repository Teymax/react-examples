import React, { Component } from 'react'
import {
  Collapse,
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'
import Link from 'next/link'

export class NavMenu extends Component {
  static displayName = NavMenu.name
  static contextType = null

  constructor(props) {
    super(props)

    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.logout = this.logout.bind(this)
  }

  state = {
    collapsed: true,
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  logout() {
    this.toggleNavbar()

    this.context.logout()
  }

  render() {
    const isLoggedIn = false
    // this.context.isLoggedIn()

    return (
      <header>
        <Navbar
          className='navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3'
          light
        >
          <Container>
            <NavbarBrand tag={'a'} to='/'></NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className='mr-2' />
            <Collapse
              className='d-sm-inline-flex flex-sm-row-reverse'
              isOpen={!this.state.collapsed}
              navbar
            >
              <ul className='navbar-nav flex-grow'>
                <NavItem>
                  <Link href='/'>
                    <NavLink
                      tag={'a'}
                      className='text-dark'
                      onClick={this.toggleNavbar}
                      to='/'
                    >
                      Home
                    </NavLink>
                  </Link>
                </NavItem>
                {!isLoggedIn && (
                  <NavItem>
                    <NavLink
                      tag={'a'}
                      className='text-dark'
                      onClick={this.toggleNavbar}
                      to='/sign-in'
                    >
                      Sign In
                    </NavLink>
                  </NavItem>
                )}
                {!isLoggedIn && (
                  <NavItem>
                    <NavLink
                      tag={'a'}
                      className='text-dark'
                      onClick={this.toggleNavbar}
                      to='/register'
                    >
                      Register
                    </NavLink>
                  </NavItem>
                )}
                {isLoggedIn && (
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle className='text-dark' nav caret>
                      My Account
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                        <NavItem>
                          <NavLink
                            tag={'a'}
                            className='dropdown-nav-item'
                            onClick={this.toggleNavbar}
                            to='/transactions'
                          >
                            My Transactions
                          </NavLink>
                        </NavItem>
                      </DropdownItem>
                      <DropdownItem>
                        <NavItem>
                          <NavLink
                            tag={'a'}
                            className='dropdown-nav-item'
                            onClick={this.toggleNavbar}
                            to='/bets'
                          >
                            My Bets
                          </NavLink>
                        </NavItem>
                      </DropdownItem>
                      <DropdownItem>
                        <NavItem>
                          <NavLink
                            tag={'a'}
                            className='dropdown-nav-item'
                            onClick={this.toggleNavbar}
                            to='/profile'
                          >
                            My Profile
                          </NavLink>
                        </NavItem>
                      </DropdownItem>
                      <DropdownItem>
                        <NavItem>
                          <NavLink
                            tag={'a'}
                            className='dropdown-nav-item'
                            onClick={this.toggleNavbar}
                            to='/password'
                          >
                            Manage Password
                          </NavLink>
                        </NavItem>
                      </DropdownItem>
                      <DropdownItem>
                        <NavItem>
                          <NavLink
                            tag={'a'}
                            className='dropdown-nav-item'
                            onClick={this.toggleNavbar}
                            to='/payment-deposit'
                          >
                            Deposit Funds
                          </NavLink>
                        </NavItem>
                      </DropdownItem>
                      <DropdownItem>
                        <NavItem>
                          <NavLink
                            tag={'a'}
                            className='dropdown-nav-item'
                            onClick={this.toggleNavbar}
                            to='/payment-withdraw'
                          >
                            Withdraw Funds
                          </NavLink>
                        </NavItem>
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>
                        <NavItem>
                          <NavLink
                            tag={'a'}
                            className='dropdown-nav-item'
                            onClick={this.logout}
                            to='/#'
                          >
                            Sign Out
                          </NavLink>
                        </NavItem>
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                )}
                {isLoggedIn && (
                  <NavItem>
                    <NavLink tag={'a'} className='text-dark' to='/#'>
                      Cash: R {this.context.balance}
                    </NavLink>
                  </NavItem>
                )}
              </ul>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    )
  }
}
