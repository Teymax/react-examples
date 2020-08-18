import React from 'react';

import {
  Container,
  Form,
  FormGroup,
  Row,
  Col,
  Label,
  Input,
  Spinner,
} from 'reactstrap';
// import { usersService } from '../services/UsersService'
// import ErrorMessage from './ErrorMessage'
import YDLayout from '@components/YDTheme/YDLayout';

export class Login extends React.Component {
  static displayName = Login.name;
  static contextType = null;

  state = { email: '', password: '', errorMessage: '', loading: false };

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.authenticateSuccess = this.authenticateSuccess.bind(this);
    this.authenticateError = this.authenticateError.bind(this);
  }

  componentDidMount() {}

  handleSubmit(event) {
    this.setState({ loading: true }, () => {
      // usersService.authenticate(
      //   this.state.email,
      //   this.state.password,
      //   this.authenticateSuccess,
      //   this.authenticateError
      // )
    });

    event.preventDefault();
  }

  authenticateSuccess(response) {
    this.context.login(response.data.token, response.data.sessionExpirationDate);
    // this.props.history.push('/')
    this.setState({ loading: false });
  }

  authenticateError(error) {
    this.setState({ errorMessage: error.response.data.errors[0].message });
    this.setState({ loading: false });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  renderContent() {
    return (
      <div>
        <Container className='payment-container'>
          {/* <ErrorMessage errorMessage={this.state.errorMessage} /> */}

          <Form onSubmit={this.handleSubmit}>
            <Row>
              <Col xs={12} lg={6}>
                <FormGroup>
                  <Label for='email' className='text-dark'>
                    Email:
                  </Label>
                  <Input
                    type='email'
                    name='email'
                    id='email'
                    value={this.state.email}
                    placeholder='Email Address'
                    onChange={this.handleChange}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label for='examplePassword' className='text-dark'>
                    Password:
                  </Label>
                  <Input
                    type='password'
                    name='password'
                    id='password'
                    value={this.state.password}
                    placeholder='Password'
                    onChange={this.handleChange}
                    required
                  />
                </FormGroup>
              </Col>
            </Row>

            <div>
              <button className='btn btn-primary' type='submit'>
                Sign In
              </button>
            </div>
          </Form>
        </Container>
      </div>
    );
  }

  render() {
    let contents = this.state.loading ? (
      <div>
        <Container className='spinner-container'>
          <Spinner className='spinner black' />
        </Container>
      </div>
    ) : (
      this.renderContent()
    );

    return (
      <div className='container'>
        <div className='section-header-2 text-left'>
          <h2 className='white'>Sign-In</h2>
        </div>
        {contents}
      </div>
    );
  }
}

function YDLogin() {
  return (
    <YDLayout>
      <Login />
    </YDLayout>
  );
}

export default YDLogin;
