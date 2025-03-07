import { useState } from 'react' 
import './App.css'
import {Button} from "@repo/ui/button"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>Hello World</div>
    <Button appName='Hii'>
      Click me
    </Button>
    </>
  )
}

export default App
