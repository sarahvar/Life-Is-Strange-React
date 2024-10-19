import React from 'react';
import './CharacterTable.css'; // Importez les styles

const personnages = [
  {
    nom: 'Chloe, Elizabeth Price',
    date_lieu: 'née le 11 mars 1994 à Arcadia Bay (Oregon), 19 ans',
    description: 'Chloe "la punk aux cheveux bleus" est rebelle, elle n\'aime pas l\'autorité et a une forte personnalité. Elle n\'est pas rancunière et sous ses airs de dure à cuire a un cœur tendre. Elle est quelqu\'un avec un franc-parler et qui sait faire des compliments.',
    imageClass: 'image-chloe' // Utilise une classe pour l'image
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
    description: 'Elève talentueuse, Rachel rêve de devenir mannequin, elle est la fille la plus populaire du lycée et tout le monde l\'aime sauf Victoria qui est jalouse. Elle est très proche de Chloe, toutes les deux rêvent de quitter Arcadia Bay pour Los Angeles.',
    imageClass: 'image-rachel'
  },
  {
    nom: 'Victoria Chase',
    date_lieu: 'née le 14 août 1995 à Seattle (Washington), 18 ans',
    description: 'Riche et arrogante mais avec un côté vulnérable qu\'il faut souvent trouver, elle est passionnée de photographie et fan de Mark Jefferson.',
    imageClass: 'image-victoria'
  },
  {
    nom: 'Nathan, Joshua Prescott',
    date_lieu: 'né le 29 août 1995 à Fort Lauderdale (Floride), 18 ans',
    description: 'Nathan est un jeune homme riche, perturbé et agressif. Il a des relations tendues avec son père.',
    imageClass: 'image-nathan'
  },
  {
    nom: 'Mr Jefferson',
    date_lieu: 'né le 11 avril 1975 à Arcadia Bay, 38 ans',
    description: 'Célèbre photographe qui s\'est fait connaître dans les années 90, il est revenu dans sa ville natale pour être professeur de photo.',
    imageClass: 'image-jefferson'
  },
  {
    nom: 'Joyce Madsen',
    date_lieu: 'date de naissance inconnue, née à Arcadia Bay',
    description: 'Joyce travaille en tant que serveuse au Two Whales diner d\'Arcadia Bay, elle est la mère de la meilleure amie de Max et en conflit permanent avec sa fille qu\'elle aime beaucoup.',
    imageClass: 'image-joyce'
  },
  {
    nom: 'David Madsen',
    date_lieu: 'né le 18 Mai 1971 à Cullman (Alabama), 42 ans',
    description: 'Il a rencontré Joyce le 27 novembre 2008, il est gardien de la sécurité à l\'académie de Blackwell et aussi le beau-père de la meilleure amie de Max.',
    imageClass: 'image-david'
  },
  {
    nom: 'Warren Graham',
    date_lieu: 'né le 20 novembre 1996 à Arcadia Bay, 16 ans',
    description: 'C\'est le personnage geek du jeu, fan de vieux films sombres et de séries. Il est ami avec Max et amoureux d\'elle.',
    imageClass: 'image-warren'
  },
  {
    nom: 'Kate Marsh',
    date_lieu: 'née le 12 septembre 1995 à Arcadia Bay, 18 ans',
    description: 'Kate est une chrétienne très croyante. Elle est douce, timide et réservée, elle est amie avec Max.',
    imageClass: 'image-kate'
  }
];

const CharacterTable = () => {
  return (
    <div>
      <h1 style={{ marginTop: '40px' }}><u>Bienvenue dans le monde de Life is Strange</u></h1>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Nom du personnage</th>
              <th>Date, lieu de naissance et âge pdt l'histoire (Octobre 2013)</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {personnages.map((personnage, index) => (
              <tr key={index}>
                <td>
                  <b>{personnage.nom}</b><br />
                  {/* Remplacer l'image par une div avec une classe */}
                  <div className={personnage.imageClass}></div>
                </td>
                <td>{personnage.date_lieu}</td>
                <td>{personnage.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        J'ai tellement de choses à dire sur ce jeu que je ne sais pas par où commencer...
      </p>
      <div className="carte"></div> {/* Remplacer l'image par une div */}
    </div>
  );
};

export default CharacterTable;

