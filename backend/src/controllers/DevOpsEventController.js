const env = require('../environment');
const db = require('../database');

const DevOpsEventController = {
  list: async (req, res) => {
    try {
      const { data, error } = await db
        .from(env.supabaseDevOpsEventTableName)
        .select('*');

      if (error) throw error;

      res.status(200).json({
        data,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: 'Something went wrong.',
        error,
      });
    }
  },
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
