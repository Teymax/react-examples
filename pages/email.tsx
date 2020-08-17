import React from 'react'
import Head from 'next/head'
import { PageContentWrapper, DefaultThemeLayout } from '@components/shared'
import {
  FollowSection,
  EmailTemplateSection,
  EmailTemplateHeader,
} from '@components/Email'

const EmailTemplateBody = () => (
  <div className='email-template__body'>
    <div className='email-template__logo' />

    <div className='email-template__img' />

    <div className='email-template__text'>
      <h2 className='email-template__title'>
        Play the Free Weekend Trifecta for $50
      </h2>

      <div className='email-template__handicap'>
        <p className='email-template__handicap-top'>
          The Apple Blossom Handicap will run on Saturday afternoon (
          <a>it's on NBCSN, if you happen to be home</a>) (that's a joke, we know
          you'll be home) and if you can pick the top three finishers in orders we'll
          give you fifty bucks in cash.
        </p>
        <p className='email-template__handicap-bottom'>
          And, as you are well aware, Belarussian soccer never sleeps. Get your picks
          in for <a>our $50 Global Soccer Challenge before kickoff late tonight.</a>
        </p>
      </div>
    </div>

    <div className='email-template__action'>
      <button className='btn btn--primary'>Play now</button>
    </div>
  </div>
)

function EmailPage() {
  return (
    <>
      <Head>
        <title>ChalkLine | Email</title>
      </Head>

      <DefaultThemeLayout>
        <PageContentWrapper>
          <EmailTemplateSection>
            <EmailTemplateHeader />

            <EmailTemplateBody />
          </EmailTemplateSection>

          <FollowSection />
        </PageContentWrapper>
      </DefaultThemeLayout>
    </>
  )
}

export default EmailPage
