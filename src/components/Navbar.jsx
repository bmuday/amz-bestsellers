import React, { Fragment } from "react";

const Navbar = () => {
  return (
    <Fragment>
      Logo
      <div className="adresse-client">
        <span>Livrer à</span>
        {
          //username
          //ville
        }
      </div>
      <div className="searchbar"></div>
      <div className="compte-client">
        <span>Bonjour</span>
        {
          //username
          "Compte et listes"
        }
        <div className="commandes"></div>
        <div className="panier"></div>
      </div>
    </Fragment>
  );
};

export default Navbar;
