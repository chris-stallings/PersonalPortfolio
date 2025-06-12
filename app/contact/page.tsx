import Image from "next/image";
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';


export default function Contact() {
  return (
    <div className="text-center">
      <p>Want to get in touch? I am always open working on new projects or looking for new opportunities that advance my career.</p>
      <p>Check out my</p> 
      <div className="flex justify-center"><a href="https://www.linkedin.com/in/chriscms"><FaLinkedin size="50"/></a></div>
      <p>Check out my</p> 
      <div className="flex justify-center"><a href="https://github.com/chris-stallings"><FaGithub size="50"/></a></div>
    </div>
  );
}
