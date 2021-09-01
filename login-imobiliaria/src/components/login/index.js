import {
    ButtonLogin,
    Campo,
    ContainerLogin,
    Link
} from './style'

const Login = () => {
    return (
      <ContainerLogin>
        <h2>Formulário de login</h2>
        <Campo
            placeholder="User"
        /> 
        <Campo
            placeholder="Password"
        />      
        <ButtonLogin type="submit">Logar</ButtonLogin>

        <Link>Cadastrar</Link>
      </ContainerLogin>
    );
  }
  
  export default Login;