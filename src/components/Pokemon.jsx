import React, { useState, useEffect } from 'react';

const Pokemon = (props) => {
    const [pokemon, setPokemon] = useState([]);




    const findPokemon = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
        .then((response) => response.json() )
            .then((jsonResponse) => {
                console.log(jsonResponse);
                setPokemon(jsonResponse.results);
        })
            .catch((jsonErrorResponse) => console.log(jsonErrorResponse))
        .catch((errorResponseParam) => console.log(errorResponseParam));
    };

    return (
        <div className="container w-25">
            <div className="row">
                <div className="col">
                    <button
                        className="btn btn-primary mt-3"
                        onClick={findPokemon}
                        >Fetch Pokemon
                    </button>
                    <ul className="mt-5">
                        { 
                            pokemon.map((poke, index) => (
                                <li key={index}>{poke.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Pokemon;