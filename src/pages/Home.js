import axios from "axios";
import { useState, useEffect } from "react";
import Header from '../components/Header/Header'
import './Home.css';

export const Home = () => {
    const [listPokemon, setListPokemon] = useState()

    useEffect(() => {
        axios
            .get(
                `https://pokeapi.co/api/v2/pokemon?limit=150&offset=0`,
            )
            .then((preview) => {
                setListPokemon(preview.data.results)
            });
    }, []);

    console.log(listPokemon, 'LISTA DE POKEMONS')

    return (
        <div>
            <Header />
            <div className="container">
                {listPokemon.map((pokemon, index) => {
                    return (
                        <div className="contentName">
                            {pokemon.name}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}