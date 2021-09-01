import style from 'styled-components'
const ContainerLogin = style.form`
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 1px 3px 6px 0 #00000038;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 60vh;
    min-width: 80vw;
    text-align: center;
    @media(min-width: 700px){
        min-width: 30vw;
    }
`;

const Campo = style.input`
    border: none;
    border-bottom: 1px solid #333;
    margin: 15px 0;
    padding: 10px;
    width: 80%;

`;
const ButtonLogin = style.button`
    background-color: #8bc34a;
    border: 1px solid #8bc34a;
    border-radius: 8px;
    box-shadow: 1px 3px 6px 0 #00000038;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-size: 4vw;
    margin-top: 15px;
    padding: 14px 4rem;
    width: 86%;
    transition: 1s linear background-color;
    &:hover{
        background-color: #4caf50;
    }
    @media(min-width: 700px){
        font-size: 2vw;
    }
`;

const Link = style.a`
    color: #333;
    font-size: 4vw;
    margin-top: 20px;
    @media(min-width: 700px){
        font-size: 2vw;
    }
`

export{
    ButtonLogin,
    ContainerLogin,
    Campo,
    Link
}