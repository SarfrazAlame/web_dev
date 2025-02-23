// function App() {
//   return (
//     <div>
//       <CardWrapper innerComponent={<TextComponent />} />
//       <CardWrapper innerComponent={<TextComponent />} />
//     </div>
//   );
// }

import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";

// function CardWrapper({ innerComponent }) {
//   return <div>{innerComponent}</div>;
// }

// function TextComponent() {
//   return <div>hii there</div>;
// }

// export default App;

////////////////////////////////////////////////children///////////////////////////////////////

// function App() {
//   return <CardWrapper>
//     hi there
//     this is sarfraz
//   </CardWrapper>;
// }

// function CardWrapper({children}) {
//   return <div>
//     {children}
//   </div>;
// }

// export default App

///////////////////////////////////////////////////////////////////////////////useMemo//////////////////////////////////////////////////////////////////////

// function App() {
//   const [counter, setCounter] = useState(0);
//   const [num, setNum] = useState(1);

//   let count = useMemo(() => {
//     let x = 0;
//     for (let i = 1; i <= num; i++) {
//       x = x + i;
//     }
//     return x;
//   }, [num]);

//   // you can do something like as well

//   // useEffect(() => {
//   //   let x = 0;
//   //   for (let i = 1; i <= num; i++) {
//   //     x = x + i;
//   //   }
//   //   return x;
//   // }, [num]);

//   return (
//     <div>
//       <input type="number" onChange={(e) => setNum(e.target.value)} />
//       <p>Sum is {count}</p>
//       <button onClick={() => setCounter(counter + 1)}>
//         Counter ({counter}){" "}
//       </button>
//     </div>
//   );
// }

// export default App;

///////////////////////////////////////////////////////////////////////////////useCallback//////////////////////////////////////////////////////////////////////

// function App() {
//   const [counter, setCounter] = useState(0);
//   const [num, setNum] = useState(100);

//   const data = useCallback(() => {
//     const name = "Sarrfraxz";
//     return data;
//   }, []);


//   return (
//     <div>
//       <button onClick={() => setCounter(counter + 1)}>Click</button>
//       <p>{counter}</p>

//       <p>{num}</p>
//       <Card />
//     </div>
//   );
// }

// const Card = memo(() => {
//   return <div>Hii there</div>;
// });

// export default App;


///////////////////////////////////////////////////////////////////////////////useRef//////////////////////////////////////////////////////////////////////

function App(){
  const divRef = useRef()

  useEffect(()=>{
    setTimeout(() => {
       divRef.current.innerHTML="10"
    },5000);
  },[])

  const incomeTax = 20000;

  return (
    <div>
      hi there, your income tax is returns are <div ref={divRef}>{incomeTax}</div>
    </div>
  )
}

export default App