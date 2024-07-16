import React, { useState, useEffect } from "react";
import Banner from "components/Banner";
import Titulo from "components/Titulo";
import Card from "components/Card";
import styles from "./index.module.css";
import FrontEndContainer from "components/FrontEndContainer/FrontEndContainer";
import BannerPrincipal from "components/BannerPrincipal/BannerPrincipal";
import VideoBox from "components/VideoBox/VideoBox";
import VideoComponente from "components/VideoComponente/VideoComponente";

function Inicio() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/guillermotopp/AluraFlix-by-Guillermo-Topp/videos")
      .then((response) => response.json())
      .then((data) => {
        setVideos(data);
        setLoading(false); // Marca la carga como completa una vez que se obtienen los videos
      })
      .catch(error => {
        console.error('Error fetching videos:', error);
        setLoading(false); // También marca la carga como completa en caso de error
      });
  }, []);

  return (
    <>
      <Banner img="home" color="#154580" />
      <Titulo>
        <FrontEndContainer />
        {loading ? (
          <p>Cargando videos...</p>
        ) : (
          <VideoBox video={videos[0]} />
        )}
        <BannerPrincipal />
        <VideoComponente />
      </Titulo>

        


      <section className={styles.container}>
        {videos.map((video) => (
          <Card {...video} key={video.id} />
        ))}
      </section>

      /******************************************** */
      <div>
      <h1>Videos de Naturaleza</h1>
      <VideoComponente categoria="Naturaleza" backgroundColor="#d1f7c4" />

      <h1>Videos de Tucumán</h1>
      <VideoComponente categoria="Tucumán" backgroundColor="#c4d7f7" />

      <h1>Videos de Fotografía</h1>
      <VideoComponente categoria="Fotografía" backgroundColor="#f7d4c4" />
    </div>
    </>
  );
}

export default Inicio;
