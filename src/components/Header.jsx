/* eslint-disable react/prop-types */
export default function Header({ author }) {
    return (
      <div className="">
        <div className="flex justify-center mx-auto border py-4 w-72 rounded-md mt-8 bg-blue-500 text-white hover:bg-blue-700">
          <h1>Belajar React bareng {author ? author : 'WPU'} 🚀</h1>;
        </div>
      </div>
    )
  }
  