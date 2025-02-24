import { useEffect, useState } from "react";
// import axios from "axios";
// import "./App.css";

// function useTodos() {
//   const [todos, setTodos] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
//       setTodos(res.data);
//       setLoading(false);
//     });
//   }, []);

//   return {todos, loading};
// }

// function App() {
//   const {todos, loading} = useTodos();

//   if(loading){
//     return <div>Loading...</div>
//   }

//   return (
//     <div>
//       {todos.map((todo) => (
//         <Track key={todo.id} todo={todo} />
//       ))}
//     </div>
//   );
// }

// function Track({ todo }) {
//   return (
//     <div>
//       {todo.title}
//       <br />
//       {todo.body}
//     </div>
//   );
// }

// export default App;

// /////////////////////////////////////////////////////////////////////////////////////////////

// function useInterval(fn, timeout) {
//   useEffect(() => {
//     setInterval(() => {
//       fn();
//     }, timeout);
//   }, []);
// }

// function App() {
//   const [count, setCount] = useState(0);

//   useInterval(() => {
//     setCount((c) => c + 1);
//   }, 1000);

//   return <div>{count}</div>;
// }

// export default App;

/////////////////////////////////////////////////////////////////////////////////////////////////////

function useDebounce(num, timeout) {
  const [debouncedValue, setdebouncedValue] = useState(num);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setdebouncedValue(num);
    }, timeout);

    return () => clearTimeout(timerId);
  }, [num, timeout]);

  return debouncedValue;
}

function App() {
  const [inputValue, setInputValue] = useState("");
  const debounce = useDebounce(inputValue, 500);

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search..."
      />
      {debounce}
    </div>
  );
}

export default App;
