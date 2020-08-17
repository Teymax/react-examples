import React from 'react'

import Countdown from 'react-countdown'
import { Spinner, Container, Row, Col } from 'reactstrap'
import Link from 'next/link'
import { Carousel } from '@components/YDTheme'
import YDLayout from '@components/YDTheme/YDLayout'

export class Lobby extends React.Component {
  static displayName = Lobby.name
  static contextType = null

  state = { games: [], loading: true }
  constructor(props) {
    super(props)

    this.getGamesSuccess = this.getGamesSuccess.bind(this)
    this.getGamesError = this.getGamesError.bind(this)
  }

  componentDidMount() {
    // gamesService.getGames(this.getGamesSuccess, this.getGamesError)
  }

  getGamesSuccess(response) {
    this.setState({ games: response.data, loading: false })
  }

  getGamesError(error) {}

  render() {
    // Countdown completion
    const Completionist = () => <span>Ended</span>

    // Countdown Renderer callback with condition
    const countdownRenderer = ({
      days,
      hours,
      minutes,
      seconds,
      completed,
      total,
    }) => {
      if (completed) {
        // Render a completed state
        return <Completionist />
      } else {
        var className = 'lobby-game-countdown-green'

        // 1 day
        if (total < 86400000) {
          className = 'lobby-game-countdown-orange'
        }

        // 1 hour
        if (total < 3600000) {
          className = 'lobby-game-countdown-red'
        }

        return (
          <span className={className}>
            {days > 0 ? days + 'd ' : ' '}
            {hours > 0 ? hours + 'h ' : ' '}
            {minutes > 0 ? minutes + 'm ' : ' '}
            {seconds}s
          </span>
        )
      }
    }

    const isLoggedIn = false
    // this.context.isLoggedIn()

    return (
      <div>
        <Carousel />
        <p></p>

        <div>
          <div className='section-header'>Games</div>

          {this.state.loading && (
            <Container className='spinner-container'>
              <Spinner className='spinner black' />
            </Container>
          )}

          {!this.state.loading && (
            <Container className='background-white' style={{ paddingTop: 10 }}>
              {this.state.games.map((game) => (
                <div key={game.name}>
                  <div
                    className='flex-container'
                    style={{ paddingTop: 10, paddingBottom: 10 }}
                  >
                    <div className='lobby-game-left-column'>
                      <div
                        className={`lobby-game-sport-icon sport_icon ${game.sport.toLowerCase()}`}
                      ></div>
                    </div>
                    <div className='item-center lobby-game-middle-column'>
                      <Row>
                        <Col xs={12} lg={6} className='lobby-game-name'>
                          <div style={{ display: 'block' }}>
                            <div>{game.name}</div>
                            <div className='lobby-game-date'>
                              ENDS:{' '}
                              {new Intl.DateTimeFormat('en-GB', {
                                month: 'long',
                                day: '2-digit',
                                hour: 'numeric',
                                minute: 'numeric',
                                hour12: true,
                              }).format(new Date(game.startDate))}
                            </div>
                          </div>
                        </Col>
                        <Col xs={12} lg={3}>
                          <div className='lobby-game-countdown-container'>
                            <Countdown
                              date={game.startDate}
                              renderer={countdownRenderer}
                            />
                          </div>
                        </Col>

                        {game.prizeRule && (
                          <Col
                            xs={{ size: 12 }}
                            lg={{ size: 3 }}
                            className='mt-2 mt-sm-2 mt-md-2 mt-lg-0 mt-xl-0'
                          >
                            <div className='lobby-game-prize'>
                              {game.prizeRule.description}
                            </div>
                          </Col>
                        )}
                      </Row>
                    </div>
                    <div className='lobby-game-right-column right'>
                      {isLoggedIn && (
                        <Link
                          href={`/Game/${game.name}`}
                          className='btn btn-primary'
                        >
                          Play
                        </Link>
                      )}
                      {!isLoggedIn && (
                        <Link href='/sign-in' className='btn btn-primary'>
                          Play
                        </Link>
                      )}
                    </div>
                  </div>
                  <hr />
                </div>
              ))}
            </Container>
          )}
        </div>
      </div>
    )
  }
}

function YDHome() {
  return (
    <YDLayout>
      <Lobby />
    </YDLayout>
  )
}

export default YDHome
