import React from 'react';
import styles from './styles/styles';
import fonts from './styles/fonts.css';

console.log(fonts.Text);

const Comentario = () => (
  <div style={styles.Container}>
    <div style={styles.Picture}>
      Foto
    </div>
    <div style={styles.Title}>
      <span styleName="fonts.TitleBold">
        Joana Soares
        {' '}
      </span>
      <span styleName="fonts.Title">
        comentou na planta
        {' '}
      </span>
      <span styleName="fonts.Title">
        Bananeira
      </span>
    </div>
    <div style={styles.DateTime} styleName="fonts.Text">
      15/02/2018 às 15:05 hs
    </div>
    <div style={styles.Text} styleName="fonts.Text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Vivamus accumsan aliquet diam, cursus accumsan odio aliquet at.
      Aenean lacus tortor, ullamcorper et massa eu, egestas sagittis elit.
      Fusce vestibulum tempor velit sagittis.
    </div>
  </div>
);

export default Comentario;
