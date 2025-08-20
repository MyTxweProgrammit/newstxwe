import { createFileRoute } from '@tanstack/react-router'
import Header from '../components/Header'

export const Route = createFileRoute('/blog')({
  component: App,
})

function App() {
  return (
    <div className='w-screen h-screen'>
      <Header blog={true} />
    </div>
  )
}
