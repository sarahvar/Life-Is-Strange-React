import React from 'react';
import './CharacterTable.css'; // Importation des styles CSS

const personnages = [
  {
    nom: 'Chloe, Elizabeth Price',
    date_lieu: 'née le 11 mars 1994 à Arcadia Bay (Oregon), 19 ans',
    description: 'Chloe "la punk aux cheveux bleus" est rebelle, elle n\'aime pas l\'autorité et a une forte personnalité. Elle n\'est pas rancunière et sous ses airs de dure à cuire a un cœur tendre. Elle est quelqu\'un avec un franc-parler et qui sait faire des compliments.',
    imageClass: 'image-chloe'
  },
  {
    nom: 'Max(ine) Caufield',
    date_lieu: 'née le 21 septembre 1995 à Arcadia Bay, 18 ans',
    description: 'Max est timide, un peu réservée, discrète, en gros l\'opposée de Chloé. Max se soucie des autres et n\'aime pas les brutes. Elle est intelligente et très ou trop mature pour son âge. Elle est passionnée de photographie. Au fur et à mesure que l\'histoire avance, Max prend plus confiance en elle.',
    imageClass: 'image-max'
  },
  {
    nom: 'Rachel, Dawn Amber',
    date_lieu: 'née le 22 juillet 1994 à Long Beach (Californie), 19 ans',
    description: 'Élève talentueuse, Rachel rêve de devenir mannequin, elle est la fille la plus populaire du lycée et tout le monde l\'aime sauf Victoria qui est jalouse. Elle est très proche de Chloe, toutes les deux rêvent de quitter Arcadia Bay pour Los Angeles.',
    imageClass: 'image-rachel'
  },
  // ... (ajoute les autres personnages ici)
];

const CharacterTable = () => {
  return (
    <div className="character-table">
      <h1 className="header-title"><u>Bienvenue dans le monde de Life is Strange</u></h1>

      <p className="intro-text">
        Life is Strange est un jeu d’aventure interactif qui suit l’histoire de Max Caulfield, une jeune photographe qui découvre qu'elle peut remonter le temps. Cette capacité unique la plonge dans une quête pleine de mystères et de dilemmes moraux. À travers chaque décision, Max façonne l’histoire et influence le destin des personnages d’Arcadia Bay. Ce jeu explore des thèmes profonds tels que l’amitié, l'amour, le deuil, la responsabilité, le destin et les conséquences de chaque action. Découvrez l'univers unique et les personnages mémorables de Life is Strange.
      </p>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Nom du personnage</th>
              <th>Date, lieu de naissance et âge pendant l'histoire (Octobre 2013)</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {personnages.map((personnage, index) => (
              <tr key={index}>
                <td>
                  <b>{personnage.nom}</b>
                  <div className={personnage.imageClass}></div>
                </td>
                <td>{personnage.date_lieu}</td>
                <td>{personnage.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="conclusion-text">
        J'ai tellement de choses à dire sur ce jeu que je ne sais pas par où commencer...
      </p>
    </div>
  );
};

export default CharacterTable;
