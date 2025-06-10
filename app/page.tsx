import Image from "next/image";

export default function Home() {
  return (
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src="/profile.JPG"
      className="max-w-sm rounded-lg shadow-2xl" width="240"
    />
    <div>
      <h1 className="text-5xl font-bold">Chris Stallings</h1>
      <p className="py-6">
        Hello my name is Chris Stallings. I am a software engineer and here is some of the work I have done.
      </p>
      <button className="btn btn-primary">Contact me</button>
    </div>
  </div>
</div>
  );
}
