import React from 'react';
import { ListaItem } from './ListaItem';

export const ListaSimpson = ({titulo, subtitulo = "Subtitulo por defecto", dataList, deleteSimpson}) => {
    return (
        <div>
            <h2>{titulo}</h2>
            <small>{subtitulo}</small>
            <ul>
                {dataList.map((e,i) => (
                    <ListaItem 
                        key={e.name} 
                        index={i}
                        onDelete={(idx) => deleteSimpson(idx)}
                    >{e.name}</ListaItem>
                ))}
            </ul>
        </div>
    )
}

