import React,{useState} from 'react';

const Header = () => {

    let [type, setString] = useState("")

    function typing(e) {
        setString(type + e.target.value)
    }
    return (
        <div>
            <input type="text" onChange={typing} />
        </div>
    )
}

export default Header;