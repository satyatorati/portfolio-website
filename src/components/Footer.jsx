import { FiGithub, FiLinkedin, FiTwitter, FiHeart } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="bg-primary/50 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-textSecondary hover:text-secondary transition-colors">
              <FiGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/satya-torati-51a19428b" target="_blank" rel="noopener noreferrer" className="text-textSecondary hover:text-secondary transition-colors">
              <FiLinkedin size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-textSecondary hover:text-secondary transition-colors">
              <FiTwitter size={20} />
            </a>
          </div>
          
          <p className="text-textSecondary text-center flex items-center">
            Designed & Built with <FiHeart className="text-secondary mx-1" /> by Satya Torati
          </p>
          
          <p className="text-textSecondary text-sm mt-2">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer