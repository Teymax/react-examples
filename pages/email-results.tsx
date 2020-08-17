import React from 'react'
import Head from 'next/head'
import { PageContentWrapper, DefaultThemeLayout } from '@components/shared'
import {
  FollowSection,
  EmailTemplateSection,
  EmailTemplateHeader,
} from '@components/Email'

const EmailTemplateResultsBody = () => (
  <div className='email-template__body email-template-results__body'>
    <div className='email-template__full-logo' />

    <div className='email-template__text'>
      <h2 className='email-template__title'>Your results are in.</h2>

      <div className='email-template__handicap'>
        Your entry for the <a className='link'>Weekend Horse Racing Trifecta</a> has
        been resulted. Visit the game lobby for free-to-play sports games with live
        odds and great prizes.
      </div>
    </div>

    <div className='email-template__action'>
      <button className='btn btn--primary'>View your results</button>
    </div>
  </div>
)

function EmailResultsPage() {
  return (
    <>
      <Head>
        <title>ChalkLine | Email Results</title>
      </Head>

      <DefaultThemeLayout>
        <PageContentWrapper>
          <EmailTemplateSection>
            <EmailTemplateHeader />

            <EmailTemplateResultsBody />
          </EmailTemplateSection>

          <FollowSection />
        </PageContentWrapper>
      </DefaultThemeLayout>
    </>
  )
}

export default EmailResultsPage
