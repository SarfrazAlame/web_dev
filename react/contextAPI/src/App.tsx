import { useContext, useState } from "react"
import { CountContext } from "./context"


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <CountContext.Provider value={count}>
        <Count setCount={setCount} />
      </CountContext.Provider>
    </div>
  )
}


function Count({ setCount }: { setCount: React.Dispatch<React.SetStateAction<number>> }) {
  return (
    <div>
      <CountRenderer />
      <Buttons setCount={setCount} />
    </div>
  )
}

function CountRenderer() {
  const count = useContext(CountContext)
  return (
    <div>
      {count}
    </div>
  )
}

function Buttons({ setCount }: { setCount: React.Dispatch<React.SetStateAction<number>> }) {
  const count = useContext(CountContext)
  return <div>
    <button onClick={() => setCount(count + 1)}>incease</button>
  </div>
}

export default App
