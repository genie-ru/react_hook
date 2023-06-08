import React from 'react';
import User from './components/user';
import { MyProvider }  from './context';
const App = () => {

    // const users = [
    //     {id:1, name: 'Francis'},
    //     {id:2, name: 'Steve'},
    //     {id:3, name: 'Mark'}
    // ]
    return (
        <>
            <MyProvider>
                <User />
            </MyProvider>
        </>
    )
}

export default App;