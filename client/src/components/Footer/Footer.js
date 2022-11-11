import React from 'react';
import '../Footer/footer.css'

const Footer = () => {
  return (
    <footer className="w-100 mt-auto text-dark p-4">
      <div className="container text-center mb-5">
        <h4 id='footer'>&copy; {new Date().getFullYear()} - Haunted House</h4>
      </div>
    </footer>
  );
};

export default Footer;