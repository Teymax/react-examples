import Head from 'next/head'

const SportCard = ({ sportType }: { sportType: { name: string } }) => (
  <div className='sport-card'>
    <div className='sport-card__icon'>
      <img
        src={`/img/sport_types/${sportType.name}.png`}
        alt={sportType.name}
      />
    </div>
    <div className='sport-card__info title title_body2'>{sportType.name}</div>
  </div>
)

const sportTypes = [
  { name: 'basketball' },
  { name: 'hockey' },
  { name: 'soccer' },
  { name: 'football' },
  { name: 'tennis' },
  { name: 'basketball' },
]

const SportCards = () => (
  <div className='sport-cards'>
    {sportTypes.map((item, index) => (
      <SportCard sportType={item} key={index} />
    ))}
  </div>
)

const RegisterForm = () => (
  <div className='form'>
    <div className='form__header'>
      <div className='form__title title title_display'>
        What are you favorite sports?
      </div>
      <div className='form__subtitle title title_body2'>
        We’ll use your slections to create a one of a king gaming experience
      </div>
    </div>

    <div className='form__body'>
      <SportCards />
    </div>
  </div>
)

export default function Home() {
  return (
    <>
      <Head>
        <title>ChalkLine</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* <PromoCardsCarousel />

      <GameList /> */}

      <div className='modal'>
        <div className='modal__container'>
          <RegisterForm />
        </div>

        <div className='backdrop' />
      </div>
    </>
  )
}
