import React from 'react'



class TablaItem extends React.Component{
    

    render(){
        const tabla = {
            margin: "20px",
            border: "2px solid black"
        }
        return(
            <div style={tabla}>
                <table>
                    <tr>
                        <th>
                            Id
                        </th>
                        <th>
                            Nombre
                        </th>
                        <th>
                            Descripcion
                        </th>
                        <th>
                            Disponibilidad
                        </th>
                        <th>
                            Acciones
                        </th>
                    </tr>
                    <tr>
                        <td>
                            1
                        </td>
                        <td>
                            Tomate
                        </td>
                        <td>
                            Tomate fresco
                        </td>
                        <td>
                            13
                        </td>
                        <td>
                            <button>Borrar</button>
                            <button>Editar</button>
                        </td>
                    </tr>

                </table>
            </div>
        )
    }


}

export default TablaItem