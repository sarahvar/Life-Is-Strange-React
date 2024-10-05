// controllers/sauces.js
const Sauce = require('../models/Sauce'); // Assurez-vous que le modèle Sauce est bien importé

// Récupérer toutes les sauces
exports.getSauces = async (req, res) => {
  try {
    const sauces = await Sauce.find(); // Ajustez ceci selon votre ORM (Mongoose par exemple)
    res.status(200).json(sauces);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des sauces' });
  }
};

// Créer une nouvelle sauce
exports.createSauce = async (req, res) => {
  const sauce = new Sauce({
    ...req.body,
    imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}` // Ajustez selon votre stockage d'images
  });

  try {
    await sauce.save();
    res.status(201).json(sauce);
  } catch (error) {
    res.status(400).json({ message: 'Erreur lors de la création de la sauce' });
  }
};

// Récupérer une sauce par ID
exports.getSauceById = async (req, res) => {
  try {
    const sauce = await Sauce.findById(req.params.id);
    if (!sauce) {
      return res.status(404).json({ message: 'Sauce non trouvée' });
    }
    res.status(200).json(sauce);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération de la sauce' });
  }
};

// Autres fonctions comme deleteSauceById, modifySauce, evaluateSauce...
