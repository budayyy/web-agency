import { TbSearch } from "react-icons/tb";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

export default function Blog() {
  return (
    <div className="w-full">
      <Navbar />
      <div className="w-full bg-white py-32 lg:py-40 px-4 lg:px-0">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-lg mx-auto">
            <h3 className="text-4xl lg:text-6xl font-extrabold text-black text-center mb-4 lg:mb-8">
              Latest News
            </h3>
            <h3 className="text-4xl lg:text-6xl font-extrabold text-sky-500 text-center mb-4 lg:mb-8">
              Updates
            </h3>
            <p className="text-center text-lg lg:text-xl font-semibold text-gray-600 mb-8 max-w-xs mx-auto">
              Lorem Ipsum is simply dummy text of the printing.
            </p>
            <label htmlFor="" className="relative block mb-8">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4">
                <TbSearch className="h-4 w-4" />
              </span>
              <input
                type="text"
                placeholder="Search"
                className="py-4 pl-10 pr-4 block bg-gray-100 rounded-md placeholder:text-sm focus:outline-sky-500 focus:outline-none w-full"
              />
            </label>
          </div>
          <div className=" flex flex-col lg:flex-row gap-8 py-8 lg:space-x-4 text-center items-center justify-center">
            <a
              href=""
              className="py-4 px-12 bg-sky-500/10 text-sky-500 rounded-full text-sm font-medium min-w-max "
            >
              Lorem ipsum
            </a>
            <a
              href=""
              className="py-4 px-12 bg-sky-500/10 text-sky-500 rounded-full text-sm font-medium min-w-max"
            >
              Lorem ipsum
            </a>
            <a
              href=""
              className="py-4 px-12 bg-sky-500/10 text-sky-500 rounded-full text-sm font-medium min-w-max"
            >
              Lorem ipsum
            </a>
            <a
              href=""
              className="py-4 px-12 bg-sky-500/10 text-sky-500 rounded-full text-sm font-medium min-w-max"
            >
              Lorem ipsum
            </a>
            <a
              href=""
              className="py-4 px-12 bg-sky-500 text-white rounded-full text-sm font-medium min-w-max"
            >
              Lorem ipsum
            </a>
          </div>
          <div className="w-full my-24 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <img
                src="https://source.unsplash.com/1200x800?computer"
                alt="computer"
                className="rounded-md"
              />
            </div>
            <div className="space-y-8 p-6">
              <h3 className="text-2xl font-semibold text-black leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing.
              </h3>
              <p className="text-base font-normal text-gray-600 max-w-md leading-loose">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the .
              </p>
              <div className="w-full flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <img
                    src="https://source.unsplash.com/100x100?person"
                    alt="person"
                    className="h-12 w-12 rounded-full"
                  />
                  <div>
                    <p className="text-base font-semibold text-black">
                      Name here
                    </p>
                    <p className="text-sm font-semibold text-gray-500">
                      20.12.2020
                    </p>
                  </div>
                </div>
                <a href="" className="text-sm font-semibold text-sky-500 pr-24">
                  Read more
                </a>
              </div>
            </div>
          </div>
          <div className="w-full py-10 lg:py-24 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[...Array(10)].map((i) => (
              <div key={i} className="space-y-6 mb-8 lg:mb-0">
                <img
                  src={`https://source.unsplash.com/500x500?technology`}
                  alt="technology"
                  className="rounded-3xl"
                />
                <h3 className="text-xl font-bold text-black leading-relaxed">
                  Lorem Ipsum is simply dummy text of the printing.
                </h3>
                <p className="text-base font-normal text-gray-600 leading-loose">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry
                  standard dummy text ever since the .
                </p>

                <div className="flex items-center gap-4">
                  <img
                    src="https://source.unsplash.com/100x100?person"
                    alt="person"
                    className="h-12 w-12 rounded-full"
                  />
                  <div className="space-y-2">
                    <p className="text-base font-semibold text-black">
                      Name here
                    </p>
                    <p className="text-sm font-semibold text-gray-500">
                      20.12.2020
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}
