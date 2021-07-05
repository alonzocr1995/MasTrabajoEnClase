import React, { useState, useEffect, useRef, useReducer } from "react";

const initialState = { count: 0 };

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "up":
      return { count: state.count + 1 };
    case "down":
      return { count: state.count - 1 };

    default:
      throw new Error("err");
  }
};

const Home: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [clicked, setClicked] = useState<boolean>(false);
  const [toDo, setToDo] = useState<any>([{ toDo: "one" }]);
  const refDiv = useRef<HTMLDivElement | null>(null);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    console.log("component did mount correctly");
  }, []);

  useEffect(() => {
    if (clicked) {
      console.log("clicked cambio de stado");
    }
    // este solo se ejecuta cuando la dependencia se actualiza
  }, [clicked]);

  useEffect(() => {
    console.log("use effect");
    // este se llama al inicio y cada vez que se actualize el estado
  });

  useEffect(() => {
    if (refDiv.current !== undefined) {
      console.log("elemt exist", refDiv.current);
    }
  });

  const handleClik = () => {
    setCount((prev) => prev + 1);
    setClicked(true);
  };

  return (
    <div>
      Welcome Home Page
      <div>
        <p>You clicked: {count} times the button</p>
      </div>
      <button onClick={handleClik}>Click It</button>
      <div ref={refDiv}>
        <p>Hello</p>
      </div>
      <div>
        <h3>To-Do List</h3>
        <ul>
          {toDo.map((item: any, i: any) => (
            <li key={i}>{item.toDo}</li>
          ))}
        </ul>
        <button
          onClick={() =>
            setToDo((prev: any) => {
              return [...prev, { toDo: "two" }];
            })
          }
        >
          Add one
        </button>
        <div>
          <h3>count state: {state.count}</h3>
          <button onClick={() => dispatch({ type: "up" })}>+++</button>
          <button onClick={() => dispatch({ type: "down" })}>---</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
// import React, {useState, useEffect} from 'react';

// export const Home:React.FC = () =>{

// 	const [count, setCount] = useState<number>(0);
// 	const [todo, setTodo] = useState<any>([{todo:'one'}]);

// 	const [clicked, setClicked] = useState<boolean>(false);

// 	useEffect(() => {
// 		const loadAPI  = () => [''];
// 		loadAPI();
//  		console.log('Component did mount correctly');
// 	},[])

// 	useEffect(() => {
// 		if(clicked){
// 			console.log('Click cambio de estado')
// 		}
// 	},[clicked])

// 	useEffect(() =>{
// 		console.log('useEffect');
// 	})

// 	const handleTodo = () => {
// 		setTodo((prevState:any) => {
// 			return[...prevState, {todo:'other'}]
// 		})
// 	}

// 	const handleClick = () => {
// 		setCount(count+1);
// 		setClicked(true);
// 	}

// 	return<>
// 	<h1>HOME PAGE</h1>
// 		<div>
// 			<p>You clicked: {count} times the button</p>
// 			<button onClick={handleClick}>Add up</button>
// 		</div>

// 		<div>
// 			<h3>TODO list:</h3>
// 			<ul>
// 			{todo.map((item:any)=> <li key={item.todo}>{item.todo}</li>)}
// 			</ul>
// 			<button onClick={handleTodo}>Add one</button>
// 		</div>
// 	</>
// };
