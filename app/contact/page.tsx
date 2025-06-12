import Image from "next/image";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Link from "next/link";


export default function Contact() {
  return (
    <div className="text-center">
      <p>Want to get in touch? I am always open working on new projects or looking for new opportunities that advance my career.</p>
      <p>Check out my</p> 
      <div className="flex justify-center"><a target="_blank" href="https://www.linkedin.com/in/chriscms"><FaLinkedin size="50"/></a></div>
      <p>Check out my</p> 
      <div className="flex justify-center"><a  target="_blank" href="https://github.com/chris-stallings"><FaGithub size="50"/></a></div>
    </div>
  );
}
