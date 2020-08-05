import React from 'react'
import { GamePageLayout, GameHeader } from '@components/Game'
import { Divider } from '@components/shared'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { IGame } from '@store/types/game.types'
import { gameService } from '@services'
import { GameGround } from '@components/Game'

function GamePage() {
  const router = useRouter()

  const [activeGame, setActiveGame] = React.useState<IGame>(null!)

  React.useEffect(() => {
    ;(async () => {
      const res = await gameService.fetchOneGame(router.query.id as string)

      const game = res.data

      setActiveGame(game)
    })()
  }, [])

  return (
    <>
      <Head>
        <title>ChalkLine | Game №{router.query.id}</title>
      </Head>

      <GamePageLayout>
        <GameHeader game={activeGame} />

        <Divider />

        <GameGround />
      </GamePageLayout>
    </>
  )
}

export default GamePage
