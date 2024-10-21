import React from "react";
import "./Rachel.css"; // Importez le fichier CSS

const RachelPage = () => {
  return (
    <div>
      <main>
        {/* Exemple de h1 avec une classe spécifique */}
        <h1 className="rachel-heading">Rachel Dawn Amber</h1>

        {/* Conteneur d'images */}
        <div className="image-container">
          <div className="rachelcenter"></div> {/* Image de Rachel */}
          <div className="conteneur"></div> {/* Image de masque de théâtre */}
        </div>

        {/* Biographie */}
        <section>
          <h2>Biographie de Rachel Amber</h2>
          <p>
            <strong>Nom :</strong> Amber
          </p>
          <p>
            <strong>Prénom :</strong> Rachel
          </p>
          <p>
            <strong>Date de naissance :</strong> 22 Juillet 1994
          </p>
          <p>
            <strong>Lieu de naissance :</strong> Long Beach (Californie)
          </p>

          <h3>Personnalité :</h3>
          <p>
            Rachel est une fille assez mystérieuse, populaire, agréable et
            rebelle. Fêtarde, elle prend de la drogue et a un penchant pour le
            punk-rock, tout comme Chloe, l'exprimant autant par ses goûts
            musicaux que par son style vestimentaire. Elle est intelligente et a
            un œil pour la photographie et l'art, tout comme Max. En considérant
            ses résultats scolaires et les efforts qu'elle a fait pour devenir
            un modèle, cela fait d'elle une personne très ambitieuse.
          </p>

          <h3>Caractéristiques physiques :</h3>
          <ul>
            <li>Cheveux Châtains</li>
            <li>Taille moyenne (1M65)</li>
            <li>Yeux Verts</li>
          </ul>

          <h3>Sa disparition</h3>
          <p>
            Elle a disparu le lundi 22 avril 2013. Sa disparition est accentuée
            par les nombreux avis de recherche déposés par Chloe.
          </p>

          <div className="imgrachel"></div> {/* Image de l'avis de recherche */}

          <h3>Son rôle dans l'histoire:</h3>
          <ul>
            <li>Elle guide Max</li>
          </ul>

          <div className="rachel-guide"></div> {/* Image de Rachel guidant Max */}

          <div className="centertext">
            <h2>Les personnages liés à Rachel:</h2>
          </div>

          <table className="tableau-style">
            <thead>
              <tr>
                <th>Nom du personnage</th>
                <th>Lien avec Rachel</th>
                <th>Relation avec Rachel</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <b>Chloe, Elizabeth Price</b>
                  <div className="chloe-image"></div> {/* Image de Chloe */}
                </td>
                <td>Elle est sa meilleure amie et amoureuse probablement</td>
                <td>
                  Elles sont très proches, Chloe dit même : "qu'elles s'aimaient"
                </td>
              </tr>
              <tr>
                <td>
                  <b>Joyce Madsen</b>
                  <div className="joyce-image"></div> {/* Image de Joyce */}
                </td>
                <td>Elle est la mère de Chloé, sa meilleure amie</td>
                <td>
                  Leurs relations sont cordiales, Joyce a de l'affection pour
                  Rachel.
                </td>
              </tr>
              <tr>
                <td>
                  <b>Victoria Chase</b>
                  <div className="victoria-image"></div> {/* Image de Victoria */}
                </td>
                <td>Elles sont "amies"</td>
                <td>
                  Victoria est jalouse de la notoriété et de la popularité de
                  Rachel
                </td>
              </tr>
              <tr>
                <td>
                  <b>Nathan, Joshua Prescott</b>
                  <div className="nathan-image"></div> {/* Image de Nathan */}
                </td>
                <td>Rachel et lui traînent ensemble</td>
                <td>Nathan est intéressé par Rachel</td>
              </tr>
              <tr>
                <td>
                  <b>Mr Jefferson</b>
                  <div className="jefferson-image"></div> {/* Image de Mr Jefferson */}
                </td>
                <td>Il est professeur de photographie où Rachel étudie</td>
                <td>Des rumeurs disent qu'ils ont eu une relation</td>
              </tr>
              <tr>
                <td>
                  <b>Frank Bowers</b>
                  <div className="frank-image"></div> {/* Image de Frank */}
                </td>
                <td>Le dealer</td>
                <td>
                  Il est supposé qu'elle se sert de Frank pour faciliter son
                  accès à la drogue et satisfaire sa dépendance à cette dernière
                </td>
              </tr>
            </tbody>
          </table>

          <h3>
            <strong>Surnoms de Rachel</strong>
          </h3>
          <ul>
            <li>Miss Sunshine (par Chloe)</li>
          </ul>

          <h3>
            <strong>Son tatouage et sa signification</strong>
          </h3>
          <p>
            Rachel a un tatouage de dragon sur son mollet droit. Le symbole du
            dragon est lié à la renommée, la réputation et la carrière ainsi que
            la force et la puissance, qui sont tous applicables à la
            personnalité et à l'histoire de Rachel.
          </p>

          <div className="tattoo-image"></div> {/* Image du tatouage de Rachel */}

          <h3>Mon opinion :</h3>
          <p>
            <strong>JE NE SUIS PAS FAN</strong>, Je pense que Rachel est une
            fille manipulatrice pour avoir ce qu'elle veut. Elle a une réelle
            amitié et un réel amour pour Chloe mais se sert d'elle pour partir
            d'Arcadia Bay. Elle aime aussi Frank mais se sert de lui pour la
            drogue. J'ai un peu de mal à la "cerner". C'est une fille complexe.
          </p>
        </section>
      </main>
    </div>
  );
};

export default RachelPage;
