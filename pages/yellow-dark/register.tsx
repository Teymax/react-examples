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
import FormCheck from 'react-bootstrap/FormCheck';
import InputGroup from 'react-bootstrap/InputGroup';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import YDLayout from '@components/YDTheme/YDLayout';
import { LockIcon } from '@components/YDTheme/Icons';

const renderTooltip = (props) => (
  <Tooltip id='button-tooltip' {...props}>
    Your password must contain a minimum of 8 characters included with at least 1
    upper case letter, 1 lower case letter, 1 number and 1 special character.
  </Tooltip>
);

class Register extends React.Component {
  static displayName = Register.name;
  static contextType = null;

  state = {
    email: '',
    mobileNumber: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    surname: '',
    dateOfBirth: '1980-01-31',
    identificationNumber: '',
    confirmMarketing: false,
    confirmAge: false,
    confirmTerms: false,
    errorMessage: '',
    loading: false,
  };

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.registerSuccess = this.registerSuccess.bind(this);
    this.registerError = this.registerError.bind(this);
  }

  componentDidMount() {}

  handleSubmit(event) {
    this.setState({ loading: true }, () => {
      const { password, confirmPassword } = this.state;

      let isValid = true;

      // perform all neccassary validations
      if (password !== confirmPassword) {
        this.setState({ errorMessage: "Passwords don't match" });
        this.setState({ loading: false });
        isValid = false;
      }

      if (isValid) {
        // usersService.register(
        //   this.state.email,
        //   this.state.mobileNumber,
        //   this.state.password,
        //   this.state.firstName,
        //   this.state.surname,
        //   this.state.dateOfBirth,
        //   this.state.identificationNumber,
        //   this.state.confirmMarketing,
        //   this.state.confirmAge,
        //   this.state.confirmTerms,
        //   this.registerSuccess,
        //   this.registerError
        // )
      }
    });

    event.preventDefault();
  }

  registerSuccess(response) {
    // this.props.history.push('/registration-confirmation')
    this.setState({ loading: false });
  }

  registerError(error) {
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
              </Col>
              <Col xs={12} lg={6}>
                <FormGroup>
                  <Label for='mobileNumber' className='text-dark'>
                    Cell:
                  </Label>
                  <Input
                    type='text'
                    name='mobileNumber'
                    id='mobileNumber'
                    value={this.state.mobileNumber}
                    placeholder='Cell Number'
                    onChange={this.handleChange}
                    required
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xs={12} lg={6}>
                <FormGroup>
                  <Label for='password' className='text-dark'>
                    Password:
                  </Label>
                  <InputGroup className='mb-3'>
                    <Input
                      type='password'
                      name='password'
                      id='password'
                      value={this.state.password}
                      placeholder='Password'
                      onChange={this.handleChange}
                      required
                    />

                    <OverlayTrigger
                      placement='top'
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <InputGroup.Append>
                        <InputGroup.Text id='basic-addon2'>
                          <LockIcon />
                        </InputGroup.Text>
                      </InputGroup.Append>
                    </OverlayTrigger>
                  </InputGroup>
                </FormGroup>
              </Col>
              <Col xs={12} lg={6}>
                <FormGroup>
                  <Label for='confirmPassword' className='text-dark'>
                    Confirm Password:
                  </Label>
                  <Input
                    type='password'
                    name='confirmPassword'
                    id='confirmPassword'
                    value={this.state.confirmPassword}
                    placeholder='Confirm Password'
                    onChange={this.handleChange}
                    required
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col xs={12} lg={6}>
                <FormGroup>
                  <Label for='firstName' className='text-dark'>
                    Name:
                  </Label>
                  <Input
                    type='text'
                    name='firstName'
                    id='firstName'
                    value={this.state.firstName}
                    placeholder='First Name'
                    onChange={this.handleChange}
                    required
                  />
                </FormGroup>
              </Col>
              <Col xs={12} lg={6}>
                <FormGroup>
                  <Label for='surname' className='text-dark'>
                    Surname:
                  </Label>
                  <Input
                    type='text'
                    name='surname'
                    id='surname'
                    value={this.state.surname}
                    placeholder='Surname'
                    onChange={this.handleChange}
                    required
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col xs={12} lg={6}>
                <FormGroup>
                  <Label for='dateOfBirth' className='text-dark'>
                    Date Of Birth:
                  </Label>
                  <Input
                    type='date'
                    data-date-format='YYYY-MM/-DD'
                    name='dateOfBirth'
                    id='dateOfBirth'
                    value={this.state.dateOfBirth}
                    onChange={this.handleChange}
                    required
                  />
                </FormGroup>
              </Col>
              <Col xs={12} lg={6}>
                <FormGroup>
                  <Label for='identificationNumber' className='text-dark'>
                    ID / Passport Number:
                  </Label>
                  <Input
                    type='number'
                    name='identificationNumber'
                    id='identificationNumber'
                    value={this.state.identificationNumber}
                    placeholder='ID / Passport Number'
                    onChange={this.handleChange}
                    required
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col xs={12} lg={12}>
                <FormGroup>
                  <FormCheck type='checkbox'>
                    <FormCheck.Input
                      type='checkbox'
                      id='confirmMarketing'
                      name='confirmMarketing'
                      required
                    />
                    <FormCheck.Label htmlFor='confirmMarketing'>
                      I consent to receive marketing emails and messages
                    </FormCheck.Label>
                  </FormCheck>
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col xs={12} lg={12}>
                <FormGroup>
                  <FormCheck type='checkbox'>
                    <FormCheck.Input
                      type='checkbox'
                      id='confirmAge'
                      name='confirmAge'
                      required
                    />
                    <FormCheck.Label htmlFor='confirmAge'>
                      I am over 18 years of age
                    </FormCheck.Label>
                  </FormCheck>
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col xs={12} lg={12}>
                <FormGroup>
                  <FormCheck type='checkbox'>
                    <FormCheck.Input
                      type='checkbox'
                      id='confirmTerms'
                      name='confirmTerms'
                      required
                    />
                    <FormCheck.Label htmlFor='confirmTerms'>
                      I agree to the Terms and Conditions
                    </FormCheck.Label>
                  </FormCheck>
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col xs={12} lg={12}>
                <hr />
              </Col>
            </Row>

            <div>
              <button className='btn btn-primary' type='submit'>
                Register
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
          <h2 className='white'>Register</h2>
        </div>
        {contents}
      </div>
    );
  }
}

function YDRegisterPage() {
  return (
    <YDLayout>
      <Register />
    </YDLayout>
  );
}

export default YDRegisterPage;
