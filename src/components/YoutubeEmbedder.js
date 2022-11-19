import React from "react";

const YoutubeEmbedder = ({ embedID }) => {
  return (
    <iframe
      className="m-auto"
      src={`https://www.youtube.com/embed/${embedID}`}
      title="✅Rain and thunder sounds of beautiful woods, healing soothing thunderstorm sounds asmr, nature music"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  );
};

export default YoutubeEmbedder;
