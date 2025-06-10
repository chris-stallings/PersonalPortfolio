import Image from "next/image";
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';


export default function Contact() {
  return (
    <div>
      <p>Want to get in touch? I am always open working on new projects or looking for new opportunities that advance my career.</p>
      <p>Check out my <a href="https://www.linkedin.com/in/chriscms"><FaLinkedin /></a></p>
      <p>Check out my <a href="https://github.com/chris-stallings"><FaGithub /></a></p>
    </div>
  );
}
