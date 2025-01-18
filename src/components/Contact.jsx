import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  useEffect(() => {
    // Initialiser EmailJS avec votre clé publique
    emailjs.init('8xcA0vMoDhZkp2ukV');
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.send(
      'service_zdpi5bt', // ID de service
      'template_d64rueo', // ID de modèle
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message
      }
    )
    .then((response) => {
      setStatus('Votre message a été envoyé avec succès !');
      setFormData({ name: '', email: '', message: '' });
    }, (error) => {
      setStatus('Erreur lors de l\'envoi du message. Veuillez réessayer.');
    });
  };

  return (
    <section id="contact" className="py-16 px-4 bg-gray-50">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <p className="text-gray-600 mb-6">
          Avez-vous des questions ou des commentaires ? Nous serions ravis de vous entendre.
        </p>
        {status && (
          <div className={`mb-4 p-3 rounded ${status.includes('succès') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {status}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Votre nom"
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Votre email"
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Votre message"
            rows="4"
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
            required
          ></textarea>
          <button 
            type="submit" 
            className="w-full bg-black text-white px-8 py-3 rounded hover:bg-gray-800 transition"
          >
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
