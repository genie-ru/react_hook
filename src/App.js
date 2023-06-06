import React,{ useState } from 'react'


const App = ({initialCount}) => {
    let [state, setState] = useState({
        count: initialCount,
        user: "Francis",
        });


    let [posts,setPosts] = useState([
        {
            name:"Super awesome hooks", 
            body: "Everying you need for your hooks"
        }
    ]);

    const restOne = () => {
        setState( prevState => { 
            return { ...prevState, count: prevState.count - 1 }
        })
    }

    const addOnePost = () => {
        let newPost = {
            name:"Sugard is bad",
            body:"Coffee is good"
        }

        setPosts([
            ...posts,
            newPost
        ]);
    }
    // const addOne = () => {
    //     setCount(count + 1)
    // }

    return(
        <>
            <h1>{state.user}</h1>
            <h3>Count:{state.count}</h3>
            <button onClick={ () => setState( {...state, count: state.count + 1} )}>Add one +1</button>
            <button onClick={ restOne }>Rest one -1</button>
            <button onClick={ () => setState(
                {...state, count: initialCount }
            ) }>RESET</button>

            <hr/>
            <button onClick={addOnePost}>Add post</button>
            { posts.map((item,i)=>(
                    <div key={i}>
                    <div>Name:{item.name}</div>
                    <div>Body:{item.body}</div>
                    <hr/>
                </div>
            ))}
            {/* <button onClick={addOnePost}>Add post</button> */}

        </>
    )
}

export default App;