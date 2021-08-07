import React from 'react'
import { Container, Row, Col} from 'react-grid-system'

class CargarItem extends React.Component{

    render(){
        const inputText = {
            margin:"5px"
        }
        const buttonSubmit = {
            backgroundColor: "#2899F1",
            color: "#FFFFFF",
            fontSize: "16px",
            borderRadius: "0.5em",
            border: "0.5px solid gray"
        }
        const label = {
            fontSize: "14px",
            fontFamily: "Arial"
        }
        return(
            <div>
                <Container>
                    <form>
                        <Col>
                            <h2>Alta de productos</h2>
                            <Row>
                                <label style={label} forName="nombreArticulo">Nombre del Articulo</label>
                            </Row>
                        <Row>
                            <input type="text" style={inputText} name="nombreArticulo"></input>
                        </Row>
                            <Row>
                                <label style={label} forName="descripcion">Descripcion</label>
                            </Row>
                        <Row>  
                            <input type="text" style={inputText} name="descripcion"></input>
                        </Row>
                            <Row>
                                <label style={label} forName="disponibilidad">Disponibilidad</label>
                            </Row>
                        <Row>
                            <input type="number" style={inputText} name="disponibilidad"></input>
                        </Row>
                        <Row>
                            <button type="submit" style={buttonSubmit} >Cargar Archivo</button>
                        </Row>
                        </Col>
                    </form>
                </Container>
            </div>
        )
    }


}

export default CargarItem