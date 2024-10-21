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
          <div className="rachelcenter">
            <img src="/dist/assets/Rachel-Amber-BTS.webp" alt="Rachel Amber" />
          </div>

          <div className="conteneur">
            <img
              className="alignRight"
              src="/assets/Masque-Théâtre.jpg"
              height="200"
              alt="Rachel Amber Art"
            />
          </div>
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
            un modèle, cela fait d'elle une personne très ambitieuse. Elle
            semble avoir une personnalité bienveillante, puisqu'elle est
            appréciée par ses proches. Rachel est plus girly et idéaliste que
            Chloe, ceci se reflétant par son amour pour le maquillage et son
            ambition de devenir mannequin.
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

          <div className="imgrachel">
            <img
              src="/assets/Recherche-Rachel-Amber.png"
              height="400"
              alt="Avis de recherche de Rachel Amber"
            />
          </div>

          <h3>Son rôle dans l'histoire:</h3>
          <ul>
            <li>Elle guide Max</li>
          </ul>
          <img src="/assets/Biche.jpg" alt="Rachel guidant Max" />

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
                  <br />
                  <img
                    src="/assets/Chloe-Price.jpg"
                    height="100"
                    alt="Chloe Price"
                  />
                </td>
                <td>Elle est sa meilleure amie et amoureuse probablement</td>
                <td>
                  Elles sont très proches, Chloe dit même : "qu'elles s'aimaient"
                </td>
              </tr>
              <tr>
                <td>
                  <b>Joyce Madsen</b>
                  <br />
                  <img src="/assets/Joyce-Madsen.jpg" alt="Joyce Madsen" />
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
                  <br />
                  <img
                    src="/assets/Victoria-Chase.webp"
                    height="125"
                    alt="Victoria Chase"
                  />
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
                  <br />
                  <img
                    src="/assets/Nathan-Prescott.png"
                    height="125"
                    alt="Nathan Prescott"
                  />
                </td>
                <td>Rachel et lui traînent ensemble</td>
                <td>Nathan est intéressé par Rachel</td>
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
                <td>Il est professeur de photographie où Rachel étudie</td>
                <td>Des rumeurs disent qu'ils ont eu une relation</td>
              </tr>
              <tr>
                <td>
                  <b>Frank Bowers</b>
                  <br />
                  <img
                    src="/assets/Frank-Bowers.webp"
                    height="200"
                    alt="Frank Bowers"
                  />
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
            personnalité et à l'histoire de Rachel. Le symbole du dragon incarne
            aussi le désir et la passion sexuelle. En outre, les dragons en
            Orient sont associés à la sagesse, la longévité et la régénération,
            ce qui se réfère à ses performances académiques et intellectuelles,
            mais aussi à sa persistance dans les cœurs et les souvenirs de la
            plupart des gens à Arcadia Bay et son omniprésence sur la ville. Le
            dragon est également connu pour servir de puissant gardien et guide,
            ce qui fait référence au rôle que Rachel a joué dans la vie de
            Chloe, mais aussi aux conseils que Rachel fournit indirectement à
            Max tout au long du jeu. Les dragons sont des messagers de
            l'équilibre et de la magie, nous encourageant à voir le monde à
            travers les yeux du mystère et de l'émerveillement, et ils sont
            aussi l'incarnation du pouvoir primordial. En alchimie, le dragon
            représente le chaos-monde qui contient un certain potentiel de
            l'ordre; le dragon est alors symbole de l'énergie primordiale. Le
            mot dragon veut dire "voir clair"; "regard perçant".
          </p>

          <div className="center">
            <img
              src="/assets/Tatouage-de-Rachel.jpg"
              height="400"
              alt="Tatouage de Rachel"
            />
          </div>

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
