import React from 'react';
import styles from './styles';

const Comentario = () => (
  <div style={styles.Spacing.Main}>
    <div style={styles.Spacing.Picture}>
      Foto
    </div>
    <div style={styles.Spacing.Title}>
      <span style={styles.Fonts.TitleBold}>
        Joana Soares
        {' '}
      </span>
      <span style={styles.Fonts.Title}>
        comentou na planta
        {' '}
      </span>
      <span style={styles.Fonts.Title}>
        Bananeira
      </span>
    </div>
    <div style={{ ...styles.Spacing.DateTime, ...styles.Fonts.Text }}>
      15/02/2018 às 15:05 hs
    </div>
    <div style={{ ...styles.Spacing.Text, ...styles.Fonts.Text }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Vivamus accumsan aliquet diam, cursus accumsan odio aliquet at.
      Aenean lacus tortor, ullamcorper et massa eu, egestas sagittis elit.
      Fusce vestibulum tempor velit sagittis.
    </div>
  </div>
);

export default Comentario;
