import React, { useState, useEffect } from 'react';
import Post from './post';


const App = ({ initialCount }) => {
    const [state, setState] = useState({
        count: initialCount,
        user: "Francis"
    });
    const [posts, setPosts] = useState([
    {
        name: "Super awesome hooks",
        body: "Everything you need for your hooks"
    }
    ]);

    // useEffect(() => {
    //     console.log(state);
    // },[state]);

    // useEffect(() => {
    //     console.log(posts);
    // },[posts]);

    // const alertSomething = () => {
    //     alert('Something');
    // };
    // useEffect(() => {
    //     console.log('Mounted');
    // },[]);


    const restOne = () => {
        setState(prevState => {
        return { ...prevState, count: prevState.count - 1 };
        });
    };

    const addOnePost = () => {
        let newPost = {
        name: "Sugard is bad",
        body: "Coffee is good"
        };

        setPosts(prevPosts => [...prevPosts, newPost]);
    };

    const removePosts = () => {
        setPosts([]);
    }

    return (
        <>
        <h1>{state.user}</h1>
        <h3>Count: {state.count}</h3>
        <button onClick={() => setState(prevState => ({ ...prevState, count: prevState.count + 1 }))}>
            Add one +1
        </button>
        <button onClick={restOne}>Rest one -1</button>
        <button onClick={() => setState(
            {...state, count: initialCount }
        ) }>RESET</button>

        <hr/>
        
        <button onClick={addOnePost}>Add one more</button>
        <button onClick={removePosts}>Remove Post</button>
        {posts.map((item, i) => (
            <Post item={item} key={i} />
        ))}
        </>
    );
};

export default App;