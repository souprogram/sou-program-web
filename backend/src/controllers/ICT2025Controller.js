const env = require('../environment');
const db = require('../database');

const ICT2025Controller = {
  signUp: async (req, res) => {
    try {
      const body = req.body;

      const { data, error: insertError } = await db
        .from(env.supabaseICT2025TableName)
        .insert({
          name: body.name,
          surname: body.surname,
          username: body.username,
          email: body.email,
        })
        .select()
        .single();

      if (insertError) throw insertError;

      res.status(201).json({
        message: 'Registration completed and email sent successfully.',
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

  update: async (req, res) => {
    try {
      const body = req.body;
      const { id } = req.params;

      const { data, error } = await db
        .from(env.supabaseICT2025TableName)
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;

      const { error: updateError } = await db
        .from(env.supabaseICT2025TableName)
        .update({
          elapsed_time_seconds: body.elapsed_time_seconds,
        })
        .eq('id', id);

      if (updateError) throw updateError;

      res.status(200).json({
        message: 'Update completed successfully.',
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: 'Something went wrong.',
        error,
      });
    }
  },

  getUser: async (req, res) => {
    try {
      const { id } = req.params;

      const { data, error } = await db
        .from(env.supabaseICT2025TableName)
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;

      res.status(200).json({ data });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Something went wrong.', error });
    }
  },

  getUsers: async (req, res) => {
    try {
      const { data, error } = await db
        .from(env.supabaseICT2025TableName)
        .select('username, elapsed_time_seconds')
        .order('elapsed_time_seconds', { ascending: true });

      if (error) throw error;

      res.status(200).json({ data });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: 'Something went wrong.',
        error,
      });
    }
  },
};

module.exports = ICT2025Controller;
