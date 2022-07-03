import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Pokemon = (props) => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
            .then(res => setData(res.data.results))
            .catch(err => console.log(err))
    }, []);  
    return(
        <div>
            {data.map((pocket, i) =>
              <div className='App' key={i}>
                {pocket.name}
              </div>
            )}
        </div>
    );
}

export default Pokemon;
