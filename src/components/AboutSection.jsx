import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faLeaf,
  faLightbulb,
  faSmile,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo.jpeg";

const AboutSection = () => {
  return (
    <section className="py-16 px-4 bg-[#f8f8f8]" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-square bg-gray-200 relative overflow-hidden">
            <img
              src={logo}
              alt="Oasis de Palmiers du Tafilalt"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Notre Histoire</h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                Fondée en 2024, Noumie est spécialisée dans la distribution des
                dattes Medjool d'excellence provenant de la célèbre oasis du
                Tafilalt à Errachidia, Maroc. Nos dattes sont cultivées dans un
                climat désertique parfait et un sol fertile de cette région
                historique, leur conférant une saveur sucrée et caramélisée
                distinctive avec une texture fondante.
              </p>
              <p className="text-gray-600">
                Nous travaillons directement avec les producteurs locaux,
                préservant les méthodes de récolte traditionnelles tout en
                garantissant des pratiques durables. Chaque datte est
                soigneusement sélectionnée pendant la saison optimale de récolte
                entre septembre et octobre, garantissant une qualité
                exceptionnelle et une expérience gustative authentique.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-start">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-black w-6 h-6 mr-3"
                  />
                  <div>
                    <h3 className="text-lg font-medium mb-2">Qualité</h3>
                    <p className="text-gray-600 text-sm">
                      Sélection premium de dattes Medjool de la région du
                      Tafilalt
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FontAwesomeIcon
                    icon={faLeaf}
                    className="text-green-600 w-6 h-6 mr-3"
                  />
                  <div>
                    <h3 className="text-lg font-medium mb-2">Durabilité</h3>
                    <p className="text-gray-600 text-sm">
                      Soutien aux communautés locales et à l'agriculture
                      traditionnelle
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FontAwesomeIcon
                    icon={faLightbulb}
                    className="text-yellow-500 w-6 h-6 mr-3"
                  />
                  <div>
                    <h3 className="text-lg font-medium mb-2">Innovation</h3>
                    <p className="text-gray-600 text-sm">
                      Approche moderne des produits traditionnels
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FontAwesomeIcon
                    icon={faSmile}
                    className="text-blue-500 w-6 h-6 mr-3"
                  />
                  <div>
                    <h3 className="text-lg font-medium mb-2">Service</h3>
                    <p className="text-gray-600 text-sm">
                      Dévouement à la satisfaction client
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
