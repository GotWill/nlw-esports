import './styles/main.css'
import logoImg from "./assets/Logo.svg"
import { GameBanner } from './components/CreateBanner'
import { CreateAdBanner } from './components/CreateAdBanner'
import { useEffect, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { CreateAdModal } from './components/CreateAdModal'
import axios  from 'axios'


const App = () => {
   type Games = {
      id: string;
      banneUrl: string;
      title: string;
      _count: {
         ads: number;
      }
   }

   useEffect(() => {
      loadingGames()
   }, [])

   const loadingGames = () => {
      axios('http://localhost:3333/games')
         .then(response => {
            setGames(response.data)
         })
   }

   const [games, setGames] = useState<Games[]>([])

   return (
      <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
         <img src={logoImg} alt="" />
         <h1 className='text-6xl text-white font-black mt-20'>
            Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span>  está aqui.
         </h1>
         <div className="grid grid-cols-6 gap-6 mt-9">
            {games.map(game => {
               return (
                  <GameBanner key={game.id}
                     banneUrl={game.banneUrl}
                     title={game.title}
                     adsCount={game._count.ads} />
               )
            })}
         </div>
         <Dialog.Root>
            <CreateAdBanner />
            <CreateAdModal/>
         </Dialog.Root>

      </div>
   )
}

export default App
