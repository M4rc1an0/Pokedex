import axios from "axios";
import { useState, useEffect } from "react";
import Card from "../components/Cards/Cards";
import Header from '../components/Header/Header'
import Modal from "../components/Modal/Modal";
import TableStats from "../components/TableStats/TableStats";
import * as S from './styles'

export const Home = () => {
    const [listPokemon, setListPokemon] = useState()
    const [namePokemon, setNamePokemon] = useState('')
    const [statsPokemon, setStatsPokemon] = useState()
    // const [img, setImg] = useState()
    // const [idValidate, setIdValidate] = useState()
    // const [check, setCheck] = useState(0)
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

    // const searchPokemon = (pokemon, id) => {
    //     console.log(id, 'ID')
    //     console.log(idValidate, 'VALIDAÇÃO')
    //     setIdValidate(id)
    //     if (check === 0) {
    //         setCheck(1)
    //         axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    //             .then((stats) => {
    //                 setImg(stats.data.sprites.back_default)
    //                 setIdValidate(id)
    //                 console.log(idValidate, 'DEPOIS DISPAARADO')
    //             }).catch(() => {
    //                 console.log('ERRO REQUISIÇÃO IMAGEM')
    //             })
    //     } 
    //     if (id === idValidate) {
    //         axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
    //             .then((stats) => {
    //                 setStatsPokemon(stats.data)
    //                 setIsOpen(true)
    //             }).catch(() => {
    //                 console.log('ERRO AQUI')
    //             })
    //             setCheck(0)
    //     }
    // }

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
                            <Card info={pokemon.name} image={'./pokebola.png'} action={() => {searchPokemon(pokemon.name, index)}}/>
                        )
                    })}
                </S.ListPokemons>
            </S.Container>
            {isOpen && statsPokemon &&
                <Modal>
                    <TableStats info={statsPokemon} close={() => setIsOpen(false)}/>
                </Modal>
            }
        </>
    )
}