// backend/controllers/contactController.cjs
import nodemailer from 'nodemailer';

export const contactController = async (req, res) => {
  const { name, email, telephone, message } = req.body;

  if (!name || !email || !telephone || !message) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
  }

  try {
    // Configurar o nodemailer
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Configurar o conteúdo do e-mail
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'destino@example.com',
      subject: 'Nova mensagem de contato',
      text: `Nome: ${name}\nE-mail: ${email}\nTelefone: ${telephone}\nMensagem: ${message}`,
    };

    // Enviar o e-mail
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Contato enviado com sucesso!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao enviar contato. Tente novamente.' });
  }
};
