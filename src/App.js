import NavBar from './container/NavBar'
import { links, social } from './data'

function App() {
  return (
    <>
      <NavBar links={links} social={social} />
    </>
  )
}

export default App
