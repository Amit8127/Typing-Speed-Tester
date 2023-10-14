import React from 'react';
import UserInput from './Components/UserInput';
import pairagraph from './Data/pairaData';
import ShowData from './Components/ShowData';

const App = () => {
    return (
        <div>
            <UserInput />
            <ShowData pairagraph={pairagraph} />
        </div>
    );
}

export default App;