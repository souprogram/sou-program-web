import axios from 'axios';

type MailOptions = {
  from?: string;
  to: string;
  subject: string;
  body: string;
};

export const sendMail = async (options: MailOptions) => {
  try {
    await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/mail`, {
      from: options.from,
      to: options.to,
      subject: options.subject,
      html: options.body,
    });
  } catch (error) {
    console.error('Error sending email');
  }
};
