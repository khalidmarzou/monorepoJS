function ajouterProduitAction(newProduct) {
  return {
    type: "AJOUTER_PRODUIT",
    payload: newProduct,
  };
}

function modifierProduitAction(newProduct) {
  return {
    type: "MODIFIER_PRODUIT",
    payload: newProduct,
  };
}

function supprimerProduitAction(productID) {
  return {
    type: "SUPPRIMER_PRODUIT",
    payload: productID,
  };
}

function setProduitsAction(produits) {
  return {
    type: "SET_PRODUITS",
    payload: produits,
  };
}

function fetchProduitsAction() {
  return function (dispatch, getState) {
    fetch("http://196.127.103.9:3000/api/produits")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        dispatch(remplirProduitsAction(data));
      });
  };
}
function remplirProduitsAction(data) {
  return {
    type: "REMPLIR_PRODUIT",
    payload: data,
  };
}

export { setProduitsAction, ajouterProduitAction, modifierProduitAction, supprimerProduitAction, fetchProduitsAction };
