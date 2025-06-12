import Image from "next/image";
import Link from "next/link";
import { FaDownload } from 'react-icons/fa';

export default function Resume() {
  return (
<div>
  <div className="text-center">
    Click the download button below to view my resume.
  </div>
  <div className="flex justify-center"><Link href="resume.pdf"><FaDownload size="50"/></Link></div>
</div>
  );
}
