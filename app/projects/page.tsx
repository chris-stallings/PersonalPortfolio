import Image from "next/image";

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
      <button className="btn btn-xs sm:tn-sm md:btn-md lg:btn-lg xl:btn-xl"><a href="https://github.com/chris-stallings/ToDo-List">View Project on GitHub</a></button>
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
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">
        This is where I place my next project.
      </p>
      <button className="btn btn-xs sm:tn-sm md:btn-md lg:btn-lg xl:btn-xl"><a href="https://github.com/chris-stallings">View project on GitHub</a></button>
    </div>
  </div>
</div>
</div>
  );
}
