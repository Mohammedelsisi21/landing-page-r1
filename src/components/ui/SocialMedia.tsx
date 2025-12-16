import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
const SocialMedia = () => {
  return (
    <div className="flex items-center space-x-4">
        <a href="https://www.instagram.com/" target="_blank" className="hover-icon" aria-label="instagram">
          <FaInstagram size={20} className="cursor-pointer text-pink-600 hover:opacity-90" />
        </a>
        <a href="https://www.facebook.com/" target="_blank" className="hover-icon">
          <FaFacebookF size={20} className="cursor-pointer text-indigo-600 hover:opacity-90" aria-label="facebook"/>
        </a>
        <a href="https://x.com/" target="_blank" className="hover-icon" aria-label="twitter">
          <FaTwitter size={20} className="cursor-pointer text-sky-600 hover:opacity-90" />
        </a>
    </div>
  )
}

export default SocialMedia