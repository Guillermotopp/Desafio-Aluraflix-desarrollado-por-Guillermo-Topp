import styles from './BannerPrincipal.module.css';
import React from 'react';

const BannerPrincipal = () => {
  return (
    <div className={styles.frontBox}>
      <h1>Challenge React</h1>
        <p>Este challenge es una forma de aprendizaje. 
          Es un mecanismo donde podrás comprometerte en la resolución de un problema para 
          poder aplicar todos los conocimientos adquiridos en la formación React.
        </p>
    </div>
  );
};

export default BannerPrincipal;
