import React from 'react';
import '../Footer/footer.css'

const Footer = () => {
  return (
    <footer id='footer' className="w-100 text-dark p-4">
      <div className="text-center">
        <h4>&copy; {new Date().getFullYear()} - Haunted House</h4>
      </div>
    </footer>
  );
};

export default Footer;