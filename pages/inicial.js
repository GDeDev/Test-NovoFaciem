import React from 'react'
import Layout from '../components/Layout';
import SplitWithImage from '../components/SplitWithImage';
import Centered2x2Grid from '../components/Centered2x2Grid';
import SimpleCentered1 from '../components/SimpleCentered1';
import ActionsWithSharedBorders from '../components/ActionsWithSharedBorders';

const Inicial = () => {
    return (
       <Layout title="Novo Faciem | Inicial" description="Nivel Inicial">
           <SplitWithImage/>
           <Centered2x2Grid/>
            <SimpleCentered1/>
            <ActionsWithSharedBorders/>
       </Layout>
    )
}

export default Inicial;
