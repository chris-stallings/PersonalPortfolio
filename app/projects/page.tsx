import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
<div>    
<div className="hero">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src="todo.png"
      className="max-w-sm rounded-lg shadow-2xl" width="240"
    />
    <div>
      <h1 className="text-5xl font-bold">ToDo List</h1>
      <p className="py-6">This is a simple ToDo list that I built using Javascript while taking the CourseCareers software development course.
      </p>
      <Link href="https://github.com/chris-stallings/ToDo-List" className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">View Project on GitHub</ Link>
    </div>
  </div>
</div>
<div className="hero">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold">My Next Project</h1>
      <p className="py-6">
        This is where I place my next project.
      </p>
      <Link className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl" href="https://github.com/chris-stallings">View the project on Github</Link>
    </div>
  </div>
</div>
</div>
  );
}
