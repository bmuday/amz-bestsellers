import React, { Fragment } from "react";

const Dvd = ({ dvd, children }) => {
  return (
    <Fragment>
      <article
        className="produit"
        style={{
          background: "#fff",
          borderRadius: "1rem",
          padding: "1rem 2rem",
        }}
      >
        {
          // Classement
          // ImgProduit
          // Titre
          // Vendeur
          // NbEtoiles
          // NbCommentaires
        }
        <h3 style={{ fontSize: "1.5rem" }}>{dvd.classement}</h3>
        <img
          alt="produit"
          src={dvd.img}
          style={{ width: "200px", height: "auto", marginTop: "0.5rem" }}
        ></img>
        <div className="detailsProduit" style={{ marginTop: "0.5rem" }}>
          <h4 style={{ fontSize: "1.2rem" }}>{dvd.titre}</h4>
          <h4
            style={{
              color: "#617d98",
              fontSize: "0.75rem",
              letterSpacing: "0.2rem",
            }}
          >
            {dvd.auteur}
          </h4>
          <div style={{ marginTop: "0.5rem", display: "flex" }}>
            <h4 style={{ paddingRight: "1rem" }}>{dvd.nbEtoiles}</h4>
            <h4>{dvd.nbCommentaires}</h4>
          </div>
          {children}
        </div>
      </article>
    </Fragment>
  );
};

export default Dvd;
