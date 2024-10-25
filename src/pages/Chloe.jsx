import React from 'react';
import './Chloe.css'; // Assurez-vous que ce fichier CSS est correctement importé

const Chloe = () => {
  return (
    <div>
       <h1 className="text-center">Chloe Elizabeth Price</h1>
      <div className="imgcendrier text-center" />
      <div className="imganarchie text-center" />

      <h2 className="text-center">Biographie de Chloe :</h2>

      <div className="videocenter text-center">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/e7qabVbrdUs"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <p className="text-center">
        Chloe est une jeune femme née le 11 mars 1994 à Arcadia Bay. Elle est la fille de Joyce Madsen et William Price. Chloe a perdu son père à cause d'un accident de voiture le 28 septembre 2008, Chloé avait 14 ans, sa mort l'a beaucoup affectée. Elle a étudié à l'académie de Blackwell, où elle a été exclue en mai 2011 à 17 ans. Elle a 19 ans pendant le jeu en octobre 2013. Elle est la meilleure amie de Max, qu'elle connaît depuis son enfance.
      </p>

      <h3 className="text-center">Personnalité :</h3>
      <p className="text-center">
        Quand on découvre Chloe, on la voit immature, rebelle, n'ayant pas sa langue dans sa poche, elle est dans le conflit permanent et pense que tout le monde l'a abandonnée. Ce sentiment d'abandon se justifie par la mort de son père, le départ de Max, sa mère qui a refait sa vie et Rachel. Elle est persévérante et n'a peur de rien, ce qui lui est utile dans sa recherche de Rachel. En avançant dans l'histoire, on découvre une Chloe sensible, gentille et drôle.
      </p>

      <h3 className="text-center">Caractéristiques physiques :</h3>
      <ul className="text-center no-bullets">
        <li>Cheveux bleus</li>
        <li>Grande (1m75)</li>
        <li>Yeux bleus</li>
      </ul>

      <div className="conteneur text-center" />

      <h3 className="text-center">Son rôle dans l'histoire :</h3>
      <h4 className="text-center">Deutéragoniste de Life Is Strange :</h4>
      <ul className="text-center no-bullets">
        <li>Elle est le lien entre Max et Rachel</li>
        <li>Elle "enclenche" le pouvoir de Max</li>
        <li>Elle soutient et aide Max</li>
      </ul>

      <h2 className="text-center">Les personnages liés à Chloé :</h2>
      <table className="tableau-style">
        <thead>
          <tr>
            <th>Nom du personnage</th>
            <th>Lien avec Chloé</th>
            <th>Relation avec Chloé</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><b>Max(ine) Caulfield</b><br />
              <div className="img-max" />
            </td>
            <td>Elle est sa meilleure amie avant qu'elle parte à Seattle. Elles se connaissent depuis leur enfance.</td>
            <td>Chloe est très attachée à Max. Malgré le départ de Max et son silence, Chloe lui pardonne rapidement à son retour. Chloe est intéressée par Max, leur relation est ambiguë, entre amitié et amour.</td>
          </tr>
          <tr>
            <td><b>Rachel, Dawn Amber</b><br />
              <div className="img-rachel" />
            </td>
            <td>Rachel est l'ange gardien de Chloe. Elle a été là pour Chloe quand elle était seule après la mort de son père et le départ de Max. Elle lui a "sauvé la vie".</td>
            <td>Elles sont en "couple libre", elles s'aiment.</td>
          </tr>
          <tr>
            <td><b>William Price</b><br />
              <div className="img-william" />
            </td>
            <td>Il est le père de Chloe.</td>
            <td>Chloe et lui sont très proches. Il est un père très sympa, et ils s'aiment beaucoup.</td>
          </tr>
          <tr>
            <td><b>Joyce Madsen</b><br />
              <div className="img-joyce" />
            </td>
            <td>Elle est la mère de Chloe.</td>
            <td>Leurs relations sont tendues. Elles se disputent souvent, mais elles s'aiment.</td>
          </tr>
          <tr>
            <td><b>David Madsen</b><br />
              <div className="img-david" />
            </td>
            <td>Le beau-père.</td>
            <td>Il est un ancien soldat très autoritaire avec Chloe. Ils sont en conflit permanent. Il l'aime mais ne sait pas communiquer avec elle.</td>
          </tr>
          <tr>
            <td><b>Frank Bowers</b><br />
              <div className="img-frank" />
            </td>
            <td>Le dealer.</td>
            <td>Frank est le dealer de Chloe et lui fournit de la drogue.</td>
          </tr>
        </tbody>
      </table>

      <div className="text-center">
        <div className="img-illuminatis" />
      </div>

      <h3 className="text-center"><strong>Surnoms de Chloe</strong></h3>
      <ul className="text-center no-bullets">
        <li>Bulldog (par Frank Bowers)</li>
        <li>Professeur Price (par Maxine Caulfield)</li>
        <li>Miss I Hate Math (par Maxine Caulfield)</li>
        <li>The Keymaster (par Maxine Caulfield)</li>
        <li>Capitaine Chloe (par Maxine Caulfield)</li>
        <li>Captain Bluebeard (par Maxine Caulfield)</li>
        <li>Price (par Rachel Amber)</li>
      </ul>

      <h3 className="text-center">Mon opinion :</h3>
      <p className="text-center">
        <strong>JE L'ADORE</strong>, Chloe est une jeune femme très attachante. Elle est provocante, mais on peut voir que c'est une carapace pour une femme sensible, gentille et drôle.
      </p>

      <div className="imgbladerunner">
        <div className="img-bladerunner" />
        <div className="img-pisshead" />
      </div>
    </div>
  );
};

export default Chloe;
