import { Tldraw } from '@tldraw/tldraw'
import '@tldraw/tldraw/tldraw.css'
import './App.css'

function App() {

  return (
    <>
      <div style={{ position: 'fixed', inset: 0 }} persistenceKey="my-persistence-key">
      <Tldraw persistenceKey="my-persistence-key" />
      </div>
    </>
  )
}

export default App
