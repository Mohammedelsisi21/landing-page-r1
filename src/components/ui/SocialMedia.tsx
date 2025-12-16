import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
const SocialMedia = () => {
  return (
    <div className="flex items-center space-x-4">
        <a href="https://www.instagram.com/" target="_blank">
          <FaInstagram size={20} className="cursor-pointer text-pink-600 hover:opacity-70" />
        </a>
        <a href="https://www.facebook.com/" target="_blank">
          <FaFacebookF size={20} className="cursor-pointer text-indigo-600 hover:opacity-70" />
        </a>
        <a href="https://x.com/" target="_blank">
          <FaTwitter size={20} className="cursor-pointer text-sky-600 hover:opacity-70" />
        </a>
    </div>
  )
}

export default SocialMedia