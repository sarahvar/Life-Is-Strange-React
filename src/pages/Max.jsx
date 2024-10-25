import React, { useState } from "react";
import "./Max.css"; // Importation du fichier CSS où les styles sont gérés

const Max = () => {
  // État pour contrôler l'affichage du spoil
  const [showSpoil, setShowSpoil] = useState(false);

  // Fonction pour basculer l'état
  const toggleSpoil = () => {
    setShowSpoil((prevShowSpoil) => !prevShowSpoil);
  };

  return (

    
    <div>
      <h1 className="bleu text-center">Maxine Caulfield</h1>
      <div className="maxbiche text-center">
        {/* Image depuis public/assets */}
        <img src="/assets/Max-Biche.webp" alt="Max Biche" />
      </div>

      <h2 className="text-center">Biographie de Max :</h2>
      <div className="selfiemax text-center">
        <img src="/assets/Max-Selfies.webp" height="300" alt="Selfie de Max" />
      </div>
      <p className="text-center">
        Max est une jeune femme née le 21 septembre 1995 à Arcadia Bay, l'Oregon
        aux Etats-Unis. Elle est la fille de Vanessa et Ryan Caulfield. À 13
        ans, en 2008, elle déménage à Seattle avec ses parents suite à la
        mutation de son père. Elle revient seule 5 ans plus tard à Arcadia Bay
        pour étudier la photographie à l'académie de Blackwell. Pendant
        l'histoire du jeu, elle a 18 ans. Elle est passionnée de photographie et
        l'univers de la science-fiction.
      </p>

      <h3 className="text-center">Personnalité :</h3>
      <p className="text-center">
        Max est une jeune femme timide, geek, assez introvertie et légèrement
        gênée. Elle est d'un naturel bienveillant et à l'écoute des gens, elle a
        le sens des responsabilités. Avec le temps et l'aide de Chloe, Max prend
        de l'assurance et a plus confiance en elle. On voit sa persévérance et
        son courage.
      </p>

      <h3 className="text-center">Caractéristiques physiques :</h3>
      <ul className="text-center">
        <li>Cheveux bruns</li>
        <li>Taille moyenne (1,65 m)</li>
        <li>Yeux bleus</li>
      </ul>

      <div className="maxguitare text-center">
        <img
          src="/assets/Max-Guitare.jpg"
          height="200"
          alt="Max avec guitare"
        />
      </div>

      <h3 className="text-center">Son rôle dans l'histoire :</h3>
      <h4 className="text-center">Protagoniste de Life Is Strange :</h4>
      <ul className="text-center">
        <li>Elle a un pouvoir</li>
        <li>Elle aide Chloe à enquêter</li>
        <li>
          {/* Ajouter un bouton pour afficher le spoil */}
          <button onClick={toggleSpoil} className="btn-spoil">
            Spoil
          </button>
          {showSpoil && <span>Elle sauve Arcadia Bay ou Chloe</span>}
        </li>
      </ul>

      <div className="centertext text-center">
        <h2>Les personnages liés à Max :</h2>
      </div>

      <div className="table-container">
        <table className="tableau-style">
          <thead>
            <tr>
              <th>Nom du personnage</th>
              <th>Lien avec Max</th>
              <th>Relation avec Max</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <b>Chloe, Elizabeth Price</b>
                <br />
                <img
                  src="/assets/Chloe-Price.jpg"
                  height="100"
                  alt="Chloe Price"
                />
              </td>
              <td>
                Elle est sa meilleure amie avant son départ à Seattle, elles se
                connaissent depuis leur enfance.
              </td>
              <td>
                Max est très attachée à Chloe, on voit que Max s'est sentie
                coupable de son départ. Max est attachée à Chloe ; en fonction
                des choix du jeu, Max peut ressentir plus que de l'amitié pour
                Chloe.
              </td>
            </tr>
            <tr>
              <td>
                <b>Ryan Caulfield</b>
                <br />
                <img
                  src="/assets/Rayan-Caufield.png"
                  height="200"
                  alt="Ryan Caulfield"
                />
              </td>
              <td>Il est le père de Max</td>
              <td>
                Max et son père sont très proches, il est très affectueux.
              </td>
            </tr>
            <tr>
              <td>
                <b>Vanessa Caulfield</b>
                <br />
                <img
                  src="/assets/Vanessa-Caulfield.webp"
                  height="200"
                  alt="Vanessa Caulfield"
                />
              </td>
              <td>Elle est la mère de Max</td>
              <td>
                Elle tient beaucoup à Max qui lui manque. Elle soutient Max pour
                son départ à Blackwell mais est préoccupée.
              </td>
            </tr>
            <tr>
              <td>
                <b>Rachel, Dawn Amber</b>
                <br />
                <img
                  src="/assets/Rachel-Amber.webp"
                  height="150"
                  alt="Rachel Amber"
                />
              </td>
              <td>Le lien entre Max et Rachel est Chloe</td>
              <td>Aucune relation</td>
            </tr>
            <tr>
              <td>
                <b>Warren Graham</b>
                <br />
                <img
                  src="/assets/Warren-Graham.webp"
                  height="175"
                  alt="Warren Graham"
                />
              </td>
              <td>
                Il est ami avec Max depuis le 4 septembre 2013 (depuis 1 mois)
              </td>
              <td>
                Warren est amoureux de Max et, en fonction des choix faits dans
                le jeu, cela peut être réciproque.
              </td>
            </tr>
            <tr>
              <td>
                <b>Joyce Madsen</b>
                <br />
                <img src="/assets/Joyce-Madsen.jpg" alt="Joyce Madsen" />
              </td>
              <td>Elle est la mère de Chloe, sa meilleure amie</td>
              <td>
                Leur relation est cordiale, Max admire Joyce et voudrait bien
                être comme elle.
              </td>
            </tr>
            <tr>
              <td>
                <b>Victoria Chase</b>
                <br />
                <img
                  src="/assets/Victoria-Chase.webp"
                  height="125"
                  alt="Victoria Chase"
                />
              </td>
              <td>Elles sont camarades de classe</td>
              <td>Victoria prend de haut Max, elle en est jalouse.</td>
            </tr>
            <tr>
              <td>
                <b>Nathan, Joshua Prescott</b>
                <br />
                <img
                  src="/assets/Nathan-Prescott.png"
                  height="125"
                  alt="Nathan Prescott"
                />
              </td>
              <td>Max et lui sont dans la même classe</td>
              <td>Nathan est agressif avec Max.</td>
            </tr>
            <tr>
              <td>
                <b>Kate Marsh</b>
                <br />
                <img
                  src="/assets/Kate-Marsh.jpg"
                  height="120"
                  alt="Kate Marsh"
                />
              </td>
              <td>Elles sont camarades et amies</td>
              <td>Max apprécie Kate, elles s'apprécient beaucoup.</td>
            </tr>
            <tr>
              <td>
                <b>Mr Jefferson</b>
                <br />
                <img
                  src="/assets/Mark_jefferson.webp"
                  height="125"
                  alt="Mr Jefferson"
                />
              </td>
              <td>Il est le professeur de photographie de Max</td>
              <td>
                Max a de l'admiration pour le travail artistique de Mr
                Jefferson.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-center">Le pouvoir de Max (Spoil)</h3>
      <p className="text-center">
        <strong>Rembobinage temporel</strong>
        <br />
      </p>
      <div className="imgmax text-center">
        <img
          src="/assets/Max-Rembobinage.jpg"
          height="300"
          alt="Rembobinage temporel"
        />
      </div>

      <h3 className="text-center">
        <strong>Conséquences</strong>
      </h3>
      <p className="text-center">
        Distorsion de l'espace-temps
        <br />
        Effet Papillon
        <br />
        Fatigue corporelle et saignement du nez
      </p>

      <h3 className="text-center">
        <strong>Surnoms de Max :</strong>
      </h3>
      <ul className="text-center">
        <li>Super Max (par Chloe)</li>
        <li>The Amazing SpiderMax (par Chloe)</li>
        <li>Dyke, Feminazi ; Max Amber (par Nathan)</li>
        <li>MaxGyver (Chloe)</li>
        <li>Mad Max (Chloe)</li>
        <li>Hippie (Victoria et Chloe), Selfie Whore (Victoria)</li>
      </ul>

      <h3 className="text-center">
        <strong>Le journal de Max</strong>
      </h3>
      <p className="text-center">
        Max écrit sur son journal ; on peut voir ce qu'elle vit, ce qu'elle
        ressent par rapport aux événements ou aux personnes qui l'entourent avec
        la chronologie. Nos actes ont une influence directe sur ce qui est écrit
        dans son journal.
      </p>
      <div className="journalmax text-center media-container">
        <div className="media-item">
          <img
            src="/assets/Max-Journal.webp"
            height="200"
            alt="Journal de Max"
          />
        </div>
        <div className="media-item">
          <iframe
            width="375"
            height="200"
            src="https://www.youtube.com/embed/mpRhaXfvG_0?si=v-Z283yh6oeKi8B0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <h3 className="text-center">Mon opinion :</h3>
      <p className="text-center">
        <strong>JE L'AIME BIEN</strong>
        <br />
      </p>
    </div>
  );
};

export default Max;
