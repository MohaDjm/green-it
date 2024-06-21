import './footer.scss';
import logo from '../../assets/logo_footer.png';

export default function Footer() {
  return (
    <footer className="footer">
      <img
        src={logo}
        alt="AtypikHouse - agence de location d'appartements entre particuliers"
      />
      <p className="footer_copyright">© 2024 AtypikHouse. All rights reserved</p>
    </footer>
  );
}
