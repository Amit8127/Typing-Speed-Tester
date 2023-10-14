import React from 'react';
import UserInput from './Components/UserInput';
import pairagraph from './Data/pairaData';
import ShowData from './Components/ShowData';

const App = () => {
    console.log(pairagraph);
    return (
        <div className='container'>
            <UserInput />
            
            <ShowData pairagrap={pairagraph} />
        </div>
    );
}

export default App;