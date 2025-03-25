import { useEffect, useState } from "react"

export type CepViewProps  = {

        cep: string,
        logradouro: string,
        complemento: string,
        unidade: string,
        bairro: string,
        localidade: string,
        uf: string,
        estado: string,
        regiao: string,
        ibge: string,
        gia: string,
        ddd: string,
        siafi: string
      }


export default function CepView({...props}: CepViewProps){

    useEffect(() => {
        setData({...props})
    }, []
return(
    <div style={{display: 'flex', flexDirection:"column"}}> 
    
    </div>
)
) 




}