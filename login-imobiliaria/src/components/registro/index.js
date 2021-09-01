import {
    ButtonLogin,
    Campo,
    ContainerLogin,
    Link
} from './style'

const Registro = () => {
    return (
      <ContainerLogin>
        <h2>Formulário de Registro</h2>
        <Campo
            placeholder="User"
        /> 
        <Campo
            placeholder="E-mail"
        />
        <Campo
            placeholder="Password"
        />      
        <ButtonLogin type="submit">Logar</ButtonLogin>

        <Link>Voltar ao Login</Link>
      </ContainerLogin>
    );
  }
  
  export default Registro;