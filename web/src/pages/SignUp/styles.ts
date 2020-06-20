import styled from 'styled-components';
import { shade } from 'polished';

import signUpBackgroundImg from '../../assets/sign-up-background.png';

export const Container = styled.div`
  height: 100vh; /* O container ocupará todo o Viewport Height, toda a altura da janela em que a aplicação está aberta */

  display: flex; /* Os items ficarão um ao lado do outro */
  align-items: stretch; /* Os elementos dentro do container ocuparão todo o viewport também */
`;

export const Content = styled.div`
  display: flex; /* Os items ficarão um ao lado do outro */
  flex-direction: column; /* Muda a direção do flex, agora, eles ficarão um abaixo do outro */

  /* As duas propriedades abaixo variam de acordo com o flex-direction */
  align-items: center; /* Centralizando no eixo X */
  justify-content: center; /* Centralizando no eixo Y */

  width: 100%; /* A div ocupará 100% da tela */
  max-width: 700px; /* Com largura máxima de 700px */

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  /* Com o sinal >, dizemos que queremos estilizar os elementos a que estejam DIRETAMENTE dentro do Content */
  > a {
    color: #f4ede8;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#f4ede8')};
    }

    svg {
      margin-right: 16px;
    }
  }
`;

export const Background = styled.div`
  flex: 1; /* A div do background ocupará todo o espaço disponível, se adaptando a div que está do lado */

  background: url(${signUpBackgroundImg}) no-repeat center;
  background-size: cover; /* O background cobrirá todo o espaço da div */
`;
