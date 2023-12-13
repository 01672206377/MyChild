// app/middleware/checkModelExists.js
const { Doctor, Consultant } = require('../models/admin/indexModels');

const checkModelExists = (modelType) => {
  return async (req, res, next) => {
    try {
      let Model;

      switch (modelType) {
        case 'Doctor':
          Model = Doctor;
          break;
        case 'Consultant':
          Model = Consultant;
          break;
        default:
          return res.status(404).json({ message: 'Invalid modelType' });
      }

      const { actorId } = req.params;
      const actor = await Model.findById(actorId);
      if (!actor) {
        return res.status(404).json({ message: 'Actor not found' });
      }

      req.actor = actor;
      next();
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  };
};

module.exports = { checkModelExists };
