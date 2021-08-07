import React from 'react'
import CargaItem from '../components/CargaItem'
import TablaItem from '../components/TablaItem'
import CargaItemMaterial from '../components/CargaItemMaterial'
import TablaItemMaterial from '../components/TablaItemMaterial'


class AdminItems extends React.Component{


    render(){
        return(
            <div>
                <CargaItemMaterial></CargaItemMaterial>
                <TablaItemMaterial></TablaItemMaterial>
            </div>
        )
    }

}

export default AdminItems