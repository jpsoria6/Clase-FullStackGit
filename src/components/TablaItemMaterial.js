import React from 'react'
import { DataGrid } from '@material-ui/data-grid';

class TablaItemMaterial extends React.Component{



    render(){
        const columns = [
            {field: 'id', headerName:'Id', width:100},
            {field: 'name', headerName:'Nombre', width:200},
            {field: 'descripcion', headerName:'Descripcion', width:450},
            {field: 'count', headerName:'Disponibilidad', width:200},
        ]
        const rows = [
            {id: 1, name:'Tomate', descripcion:'Tomate fresco natural', count:3}
        ]
        return(
            <div style={{ height: 400, width: '100%' , marginTop:"25px"}}>
                <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
            </div>
        )
    }
}

export default TablaItemMaterial