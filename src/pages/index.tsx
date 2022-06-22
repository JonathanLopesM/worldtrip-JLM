import { Flex, Heading } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import {Banner} from '../components/Banner/index'
import Caracteristicas from '../components/caracteristicas'
import { Header } from '../components/Header'
import Separador from '../components/Separador'
import Slider from '../components/Slider'

const Home: NextPage = () => {
  return (
    <Flex direction={"column"}>
      <Head>
        <title>Home | WorldTrip</title>
        <meta name="description" content="Decida o seu próximo destino" />
      </Head>
      <Header/>
      <Banner/>
      <Caracteristicas/>
      <Separador/>
      <Heading
        textAlign="center"
        fontWeight="500"
        mb={["5", "14"]}
        fontSize={["lg", "3xl", "4xl"]}
      >
        Vamos nessa?<br />Então escolha se continente
      </Heading>
      
      <Slider/>

    </Flex>
  )
}

export default Home
