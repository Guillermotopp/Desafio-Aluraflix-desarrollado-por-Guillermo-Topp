import React, { useState, useEffect } from 'react';
import { useFavoritosContext } from 'context/Favoritos';
import styles from './Card.module.css';
import iconFavorito from './iconFavorito.png';
import iconNoFavorito from './iconNoFavorito.png';
import { Link } from 'react-router-dom';

function Card({ id, videoId, titulo }) {
  const { favorito, agregarFavorito } = useFavoritosContext();
  const [videoLink, setVideoLink] = useState('');
  const isFavorito = favorito.some((fav) => fav.id === id);
  const icon = isFavorito ? iconFavorito : iconNoFavorito;

  useEffect(() => {
    const fetchVideoLink = async () => {
      try {
        const videoLink = await obtenerLinkDeLaBaseDeDatos(videoId);
        setVideoLink(videoLink); // Actualiza el estado con el link del video
      } catch (error) {
        console.error('Error al obtener el link del video:', error);
        // Aquí podrías manejar el error de manera adecuada, por ejemplo, mostrando una imagen alternativa o un mensaje de error en caso de falla
      }
    };

    fetchVideoLink();
  }, [videoId]);

  return (
    <div className={styles.container}>
      <Link className={styles.link} to={`/${id}`}>
        {/* Aquí asegúrate de que videoLink sea una URL válida */}
        {videoLink ? (
          <img src={videoLink} alt={titulo} className={styles.capa} />
        ) : (
          <p>Video no disponible</p> // Mensaje alternativo en caso de que videoLink no esté disponible
        )}
        <h2>{titulo}</h2>
      </Link>
      <img
        src={icon}
        alt="Icono favorito"
        className={styles.favorito}
        onClick={() => agregarFavorito({ id, titulo, capa: videoLink })}
      />
    </div>
  );
}

export default Card;

async function obtenerLinkDeLaBaseDeDatos(videoId) {
  const response = await fetch(`https://tu-api.com/videos/${videoId}`);
  if (!response.ok) {
    throw new Error(`No se pudo obtener el link del video para el videoId ${videoId}`);
  }
  const data = await response.json();
  return data.videoLink; // Asegúrate de que data.videoLink sea la URL correcta del video que quieres mostrar como imagen
}
