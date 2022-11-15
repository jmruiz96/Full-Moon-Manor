import React from 'react';
import '../Footer/footer.css';
import { PlaySound } from '../PlaySound';

const Footer = () => {
  return (
    <footer id='footer' className="w-100 text-dark p-4">
      <PlaySound />
      <div className="text-center">
        <h4>&copy; {new Date().getFullYear()} - Full Moon Manor</h4>
      </div>
    </footer>
  );
};

export default Footer;