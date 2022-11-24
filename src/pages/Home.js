import axios from "axios";
import { useState, useEffect } from "react";
import Header from '../components/Header/Header'
import * as S from './styles'

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
        <S.Container>
            <Header />
            <S.ListPokemons>
                {listPokemon && listPokemon.map((pokemon, index) => {
                    return (
                        <S.Button>
                            <S.ImgPokebola src='./pokebola.png'/>
                            <S.Paragraph>{pokemon.name}</S.Paragraph>
                        </S.Button>
                    )
                })}
            </S.ListPokemons>
        </S.Container>
    )
}