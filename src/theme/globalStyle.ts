import { createGlobalStyle } from 'styled-components'
import 'normalize.css'

const GlobalStyle = createGlobalStyle`
  * {
    font-family: Roboto;
    font-size: 24px;
    color: background: rgba(0, 0, 0, 0.87);;
  }

  body {
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #F2F2F2;
  }

  input {
    padding: 10px 20px;
    border: 1px solid #E3E3E3;
    border-radius: 4px;
  }

  button {
    cursor: pointer;
    padding: 10px 20px;
    background: #fff;
    border-radius: 4px;
    border: 1px solid #E3E3E3;
    &:hover {
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.12);
    }
  }

  .Button_primary {
    background: #259DCF;
    color: #fff;
    border: none;
  }

  .Alert_error {
    color: #E64C3C;
  }

  .Alert_success {
    color: #219653;
  }

`

export default GlobalStyle
