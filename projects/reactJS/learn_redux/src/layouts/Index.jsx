import React from "react";

export default function Index() {
  return (
    <div className="container mx-auto p-8 text-center h-[90%] flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4">Bienvenue dans l'application de gestion de produits</h1>
      <p className="text-lg mb-8">
        Bienvenue dans notre application de gestion de produits. Vous pouvez facilement naviguer en utilisant la barre de navigation en haut pour
        accéder aux différentes fonctionnalités, comme la gestion des produits, les ventes et les informations sur les clients.
      </p>
      <p className="text-md text-gray-600">
        Utilisez les liens dans la barre de navigation pour explorer l'application et découvrir ses fonctionnalités.
      </p>
    </div>
  );
}
