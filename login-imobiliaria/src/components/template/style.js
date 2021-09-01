import style from 'styled-components'

const Template = style.div`
    background-color: #2196f3;
    min-height: 100vh;
    width: 100%;
`;
const Content = style.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4rem 0;
`;
export{
    Content,
    Template
}