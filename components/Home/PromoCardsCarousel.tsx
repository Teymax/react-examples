import React from 'react'
import { Carousel } from 'react-responsive-carousel'

const PromoCard = () => (
  <div className='promo-card' style={{ backgroundImage: 'url("/img/card-bg.jpg")' }}>
    {/* <img className='promo-card__poster' src= alt='card' /> */}
    <div className='promo-card__content'>
      <h1 className='promo-card__title title title_big-display'>
        <span className='promo-card__price'>$50 PRIZE</span> Bellator FIght Night
      </h1>
      <small className='promo-card__info'>
        12 Days : 13 HRS : 32 MINS : 21 Secs
      </small>
    </div>
  </div>
)

const PromoCardsCarousel = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0)

  return (
    <div className='promo-cards section'>
      <h3 className='promo-cards__title title title_headline container'>
        Featured Games
      </h3>

      <div className='promo-cards__carousel-container'>
        <Carousel
          selectedItem={currentSlide}
          showStatus={false}
          showThumbs={false}
          className='promo-cards__carousel'
          infiniteLoop
          onChange={(item: any) => setCurrentSlide(item)}
          showArrows={false}
          showIndicators={false}
        >
          <PromoCard />
          <PromoCard />
          <PromoCard />
        </Carousel>

        <div className='promo-cards__carousel-dots'>
          {Array(3)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`dot ${index === currentSlide ? 'selected' : ''}`}
              />
            ))}
        </div>
      </div>
    </div>
  )
}

export default PromoCardsCarousel
