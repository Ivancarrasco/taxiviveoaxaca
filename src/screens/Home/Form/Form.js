import React, {Component} from 'react';


export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = ({
        nombre:'',
        tel:''
       
      })
    this.procesar = this.procesar.bind(this);
    this.cambioNombre = this.cambioNombre.bind(this);
    this.cambioTelef = this.cambioTelef.bind(this);    
   
  }

 
  render() {
    return (
      <div>
        <form onSubmit={this.procesar}>
          <p>Nombre:<input type="text" value={this.state.nombre} onChange={this.cambioNombre} /></p>
          <p>Apellido:<input type="text" /></p>
          <p>Telefono:<input type="number" value={this.state.tel} onChange={this.cambioTelef} /></p>         
          <p><input type="submit" /></p>
        </form>
        <hr />
        <h3>Datos Ingresados</h3>
        <p>Nombre:{this.state.nombre}</p>
        <p>Telefono:{this.state.tel}</p>
     
      </div>
    );
  }

  procesar(e) {
    e.preventDefault();
    alert('Dato cargado '+this.state.nombre + ' ' + 
                         +this.state.tel + ' ' 
                         );
            
  }

  cambioNombre(e) {
    this.setState( {
      nombre: e.target.value
    })
  }

  cambioTelef(e) {
    this.setState( {
      tel: e.target.value
    })
  }  

}
export default Form;



