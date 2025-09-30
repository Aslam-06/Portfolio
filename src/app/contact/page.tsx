import Link from 'next/link';

export default function Contact() {
  return (
    <div className="contact-page">
      <h1>Contact Me</h1>
      <p>Feel free to reach out through any of the channels below!</p>

      <div className="contact-info">
        <div className="info-item">
          <span>📧 Email:</span>
          <Link href="mailto:aslamomonlabake@gmail.com"> aslamomonlabake@gmail.com</Link>
        </div>

        <div className="info-item">
          <span>📞 Phone:</span>
          <Link href="tel:+22912345678">+229 01 52 91 28 53 / +229 01 44 22 98 96</Link>
        </div>
      </div>

      <div className="social-links">
        <h2>Follow Me</h2>
        <div className="links">
          <Link href="https://www.linkedin.com/in/aslam-boura%C3%AFma-38ba6837b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
            🔗 LinkedIn
          </Link>
          <Link href="https://whatsapp.com/dl/" target="_blank" rel="noopener noreferrer">
            📱 WhatsApp
          </Link>
          <Link href="https://github.com/Aslam-06" target="_blank" rel="noopener noreferrer">
            🐱 GitHub
          </Link>
        </div>
      </div>
    </div>
  );
}