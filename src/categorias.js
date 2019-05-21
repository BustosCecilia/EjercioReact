
import React from 'react'

const Categorias = ({categorias}) => {
    return (
        <div>
            <center><h1>Lista de Cateogrias</h1></center>
            {categorias.map((categoria) => (
                <div class="card"key={categoria.id}>
                    <div class="card-body" >
                        <h5 class="card-title" >{categoria.id} </h5>
                        <h6 class="card-subtitle mb-2 text-muted">{categoria.name}</h6>

                    </div>
                </div>
            ))}
        </div>
    )
};

export default Categorias