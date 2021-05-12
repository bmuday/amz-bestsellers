import React, { Fragment } from "react";
import Cd from "./Cd";
import Dvd from "./Dvd";
import Livre from "./Livre";

const Produits = () => {
  const produits = {
    cds: [
      {
        id: 1,
        img:
          "https://images-eu.ssl-images-amazon.com/images/I/711xa-P9GJS._AC_UL320_SR320,320_.jpg",
        titre: "Rêver",
        auteur: "Keen'V",
        classement: 1,
        nbEtoiles: 5,
        nbCommentaires: 5,
      },
      {
        id: 2,
        img:
          "https://images-eu.ssl-images-amazon.com/images/I/81T0NUQTyfL._AC_UL320_SR320,320_.jpg",
        titre: "Fortitude",
        auteur: "Gojira",
        classement: 2,
        nbEtoiles: 4.5,
        nbCommentaires: 138,
      },
      {
        id: 3,
        img:
          "https://images-eu.ssl-images-amazon.com/images/I/91j5JdJDkXL._AC_UL320_SR320,320_.jpg",
        titre: "N'attendons pas",
        auteur: "Vianney",
        classement: 3,
        nbEtoiles: 5,
        nbCommentaires: 1904,
      },
    ],
    dvds: [
      {
        id: 1,
        img:
          "https://images-eu.ssl-images-amazon.com/images/I/71axKR0mi3L._AC_UL480_SR336,480_.jpg",
        titre:
          "Harry Potter - l'Intégrale des 8 Films - Le monde des Sorciers de J.K. Rowling - Coffret DVD",
        auteur: "Daniel Radcliffe",
        classement: 1,
        nbEtoiles: 4.5,
        nbCommentaires: 9347,
      },
      {
        id: 2,
        img:
          "https://images-eu.ssl-images-amazon.com/images/I/811te5KtPgL._AC_UL320_SR240,320_.jpg",
        titre: "Soul",
        auteur: "Pete Docter",
        classement: 2,
        nbEtoiles: 4.5,
        nbCommentaires: 109,
      },
      {
        id: 3,
        img:
          "https://images-eu.ssl-images-amazon.com/images/I/91dBWg9ZifL._AC_UL320_SR232,320_.jpg",
        titre: "Wonder Woman 1984 [Blu-Ray]",
        auteur: "Gal Gadot",
        classement: 3,
        nbEtoiles: 4,
        nbCommentaires: 605,
      },
    ],
    livres: [
      {
        id: 1,
        img:
          "https://images-eu.ssl-images-amazon.com/images/I/61E4nKTu%2BfL._AC_UL320_SR226,320_.jpg",
        titre:
          "Fait Maison - numéro 4 par Cyril Lignac - 45 recettes du quotidien rapides & faciles (04)",
        auteur: "Cyril Lignac",
        classement: 1,
        nbEtoiles: 5,
        nbCommentaires: 2,
      },
      {
        id: 2,
        img:
          "https://images-eu.ssl-images-amazon.com/images/I/71Gw08YkhES._AC_UL480_SR300,480_.jpg",
        titre: "Tout le monde savait",
        auteur: "Valérie Bacot",
        classement: 2,
        nbEtoiles: null,
        nbCommentaires: null,
      },
      {
        id: 3,
        img:
          "https://images-eu.ssl-images-amazon.com/images/I/61OekEp8GjL._AC_UL480_SR318,480_.jpg",
        titre: "Burn after writing - L'édition française officielle",
        auteur: "Sharon Jones",
        classement: 3,
        nbEtoiles: 4.5,
        nbCommentaires: 1036,
      },
    ],
  };

  return (
    <Fragment>
      {
        // Category
        //Category Link
      }
      <section
        className="produits"
        style={{
          width: "90vw",
          maxWidth: "1170px",
          margin: "5rem auto",
          display: "grid",
          gap: "2rem",
        }}
      >
        {produits.cds.map((cd) => {
          const { id } = cd;
          return <Cd key={id} cd={cd} />;
        })}
        {produits.dvds.map((dvd) => {
          const { id } = dvd;
          return <Dvd key={id} dvd={dvd} />;
        })}
        {produits.livres.map((livre) => {
          const { id } = livre;
          return <Livre key={id} livre={livre} />;
        })}
      </section>
    </Fragment>
  );
};

export default Produits;
