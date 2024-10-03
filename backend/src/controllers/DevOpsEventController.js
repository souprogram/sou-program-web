const env = require('../environment');
const db = require('../database');

const DevOpsEventController = {
  post: async (req, res) => {
    try {
      const body = req.body;

      const { error: insertError } = await db
        .from(env.supabaseDevOpsEventTableName)
        .insert({
          full_name: body.fullName,
          email: body.email,
        });

      if (insertError) throw insertError;
      
      res.status(201).json({
        message: 'Registration completed successfully.',
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: 'Something went wrong.',
        error,
      });
    }
  },
};

module.exports = DevOpsEventController;
