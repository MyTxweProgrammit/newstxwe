import { createFileRoute } from '@tanstack/react-router'
import Header from '../components/Header'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className='w-screen h-screen'>
      <Header  home={true}/>
      <div className='w-screen h-screen absolute top-0'>
        <aside className='h-screen w-[200px] border-test'>
          
        </aside>
      </div>
    </div>
  )
}
