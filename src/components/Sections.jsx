import React, { Fragment } from "react";

const Sections = () => {
  return (
    <Fragment>
      <ul className="sections">
        <li>Les meilleures ventes</li>
        <li>Dernières nouveautés</li>
        <li>Baromètre des ventes</li>
        <li>Les plus demandés</li>
        <li>Les plus offerts</li>
      </ul>
      <h1>Les meilleures ventes</h1>
      <h2>
        Nos produits les plus populaires selon les ventes. Mises à jour chaque
        heure.
      </h2>
    </Fragment>
  );
};

export default Sections;
