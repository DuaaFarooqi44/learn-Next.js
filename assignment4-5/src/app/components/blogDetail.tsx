"use client";

type BlogData = {
  id: string;
  image: string;
  title: string;
  content: string;
  detail: string;
};

type BlogDetailProps = {
  blog: BlogData;
  onBack: () => void;
};

export default function BlogDetail({ blog, onBack }: BlogDetailProps) {
  return (
    <div className="w-full sm:w-[500px] mx-auto bg-gray-100 rounded-lg border-4 border-gray-800 shadow-gray-200 p-6 m-3">
      <div className="h-64 bg-gray-200">
        <img
          src={blog.image}
          alt="Blog post cover"
          className="w-full h-full object-cover p-2 bg-white"
        />
      </div>
      <h1 className="mt-4 text-3xl font-bold text-gray-800">{blog.title}</h1>
      <p className="text-gray-600 mt-4">{blog.content}</p>
      <p className="text-gray-600 mt-4">{blog.detail}</p>
      <button onClick={onBack} className="mt-4 w-full bg-gray-800 text-yellow-500 hover:text-white hover:bg-gray-500 px-4 py-2 rounded transition duration-300 shadow-gray-700 hover:shadow-2xl border-2 border-transparent">
        Go Back
      </button>
    </div>
  );
}
