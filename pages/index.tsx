import Head from 'next/head'
import { GameList } from '@components/Home'

export default function Home() {
  return (
    <>
      <Head>
        <title>ChalkLine</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <GameList />
    </>
  )
}
