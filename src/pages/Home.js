import axios from "axios";
import { useState, useEffect } from "react";
import Header from '../components/Header/Header'
import Modal from "../components/Modal/Modal";
import TableStats from "../components/TableStats/TableStats";
import * as S from './styles'

export const Home = () => {
    const [listPokemon, setListPokemon] = useState()
    const [namePokemon, setNamePokemon] = useState('')
    const [statsPokemon, setStatsPokemon] = useState()
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        axios
            .get(
                `https://pokeapi.co/api/v2/pokemon?limit=150&offset=0`,
            )
            .then((preview) => {
                setListPokemon(preview.data.results)
            });
    }, []);

    const searchPokemon = (pokemon) => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
            .then((stats) => {
                setStatsPokemon(stats.data)
                setIsOpen(true)
            }).catch(() => {
                console.log('ERRO')
            })
    }

    return (
        <>
            <S.Container>
                <Header>
                    <S.Column>
                        <S.ImgLogo src='./pokemon.png' />
                    </S.Column>
                    <S.Column>
                        <S.Align>
                            <S.Input type="text" placeholder='Pokemon' onChange={(e) => setNamePokemon(e.target.value)} />
                            <S.ButtonS onClick={() => searchPokemon(namePokemon.toLowerCase())}>Pesquisar</S.ButtonS>
                        </S.Align>
                    </S.Column>
                </Header>
                <S.ListPokemons>
                    {listPokemon && listPokemon.map((pokemon, index) => {
                        return (
                            <S.Button key={index}>
                                <S.ImgPokebola src='./pokebola.png' />
                                <S.Paragraph>{pokemon.name}</S.Paragraph>
                            </S.Button>
                        )
                    })}
                </S.ListPokemons>
            </S.Container>
            {isOpen && statsPokemon &&
                <Modal action={() => setIsOpen(false)}>
                    <TableStats info={statsPokemon}/>
                </Modal>
            }
        </>
    )
}