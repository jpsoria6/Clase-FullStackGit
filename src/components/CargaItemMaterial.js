import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Container, Row, Col} from 'react-grid-system'
class CargaItemMaterial extends React.Component{

   
    render(){
      
        const styles = {
            marginTop:"10px"
        }
    
      return( 
        <Container>
            <Col>
        <form noValidate autoComplete="off">
            <Row>
            <TextField id="standard-basic" label="Nombre" />
            </Row>
            <Row>
            <TextField id="standard-basic" label="Descripcion" />
            </Row>
            <Row>
            <TextField id="standard-basic" label="Disponibilidad" />
            </Row>
            <Row>
            <Button style={styles}  color="primary" variant="contained">Default</Button>
            </Row>
        </form>
            </Col>
        </Container>  
      )
    }

} 

export default CargaItemMaterial