import {
  TbClock24,
  TbDeviceMobileCode,
  TbPhotoCode,
  TbSeo,
} from "react-icons/tb";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

export default function About() {
  return (
    <div className="w-full">
      <Navbar />
      <div className="w-full bg-white py-32 lg:pt-40 lg:pb-20 px-4 lg:px-0">
        <div className="max-w-7xl mx-auto">
          <div className="w-full flex flex-col lg:flex-row-reverse items-center">
            <div className="w-full lg:w-1/2 space-y-8">
              <p className="text-xl text-sky-500">About Us</p>
              <h3 className="text-3xl font-bold text-gray-900 max-w-md leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing.
              </h3>
              <p className="text-base max-w-md font-normal text-gray-800 leading-relaxed">
                KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and
                web applications and website builders measuring dozens of
                completed projects.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <img src="./img/about-img.png" alt="about" />
            </div>
          </div>
          <div className="w-full my-10 lg:my-20 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 p-4 lg:p-8">
            <img
              src="https://source.unsplash.com/600x400?company"
              alt="company"
              className="rounded-2xl"
            />
            <img
              src="https://source.unsplash.com/600x400?company"
              alt="company"
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-10 lg:py-20 px-4 lg:px-0">
        <div className="max-w-7xl mx-auto space-y-8">
          <h3 className="text-2xl lg:text-5xl text-sky-500 font-extrabold leading-relaxed max-w-5xl">
            Lorem Ipsum is simply dummy text of the printing.
          </h3>
          <p className="text-sm lg:text-lg font-normal text-gray-700 leading-loose max-w-5xl text-justify lg:text-start">
            KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
            applications and website builders measuring dozens of completed
            projects. We build and develop mobile applications for several top
            platforms, including Android & IOS. We build and develop mobile
            applications for several top platforms, including Android & IOS.
          </p>
        </div>
      </div>
      <div className="w-full bg-gray-50 py-10 lg:py-20">
        <div className="w-full flex flex-col lg:flex-row justify-between items-center">
          <div className="w-full lg:max-w-4xl space-y-8 lg:pl-80 mb-8 lg:mb-0 px-4 lg:px-0">
            <h3 className="text-3xl font-bold text-gray-900 max-w-md leading-relaxed">
              <span className="text-sky-500">Lorem Ipsum</span> is simply dummy
              text of the printing.
            </h3>
            <p className="text-base max-w-md font-normal text-gray-800 leading-relaxed text-justify lg:text-start">
              KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
              applications and website builders measuring dozens of completed
              projects. We build and develop mobile applications for several top
              platforms, including Android & IOS.
            </p>
            <div>
              <a
                href=""
                className="py-2 px-6 bg-white rounded-md text-xs font-semibold text-sky-500 border border-sky-500 hover:bg-sky-500 hover:text-white"
              >
                Contact us
              </a>
            </div>
          </div>
          <div className="bg-white w-full lg:shadow-md lg:rounded-l-md lg:p-20 max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 p-4 ">
            <div className="w-full flex gap-4 lg:gap-12 items-center">
              <div className="p-4 bg-purple-500/10 rounded-xl">
                <TbPhotoCode className="text-4xl lg:text-7xl text-purple-500" />
              </div>
              <div>
                <h3 className="text-xl lg:text-3xl font-semibold text-gray-900 leading-normal">
                  Web Application
                </h3>
              </div>
            </div>
            <div className="w-full flex gap-4 lg:gap-12 items-center">
              <div className="p-4 bg-green-500/10 rounded-xl">
                <TbSeo className="text-4xl lg:text-7xl text-green-500" />
              </div>
              <div>
                <h3 className="text-xl lg:text-3xl font-semibold text-gray-900 leading-normal">
                  SEO
                </h3>
              </div>
            </div>
            <div className="w-full flex gap-4 lg:gap-12 items-center">
              <div className="p-4 bg-blue-500/10 rounded-xl">
                <TbClock24 className="text-4xl lg:text-7xl text-blue-500" />
              </div>
              <div>
                <h3 className="text-xl lg:text-3xl font-semibold text-gray-900 leading-normal">
                  AR / VR Solutions
                </h3>
              </div>
            </div>
            <div className="w-full flex gap-4 lg:gap-12 items-center">
              <div className="p-4 bg-orange-500/10 rounded-xl">
                <TbDeviceMobileCode className="text-4xl lg:text-7xl text-orange-500" />
              </div>
              <div>
                <h3 className="text-xl lg:text-3xl font-semibold text-gray-900 leading-normal">
                  Mobile Application
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-10 lg:py-20 px-4 lg:px-0">
        <div className="max-w-7xl mx-auto space-y-8">
          <h3 className="text-3xl font-semibold text-black">Our Team</h3>
          <div className="flex flex-row gap-x-4 overflow-x-auto">
            {[...Array(6)].map((i) => (
              <div key={i} className="min-w-[20rem] p-4 space-y-4 ">
                <img
                  src={`https://source.unsplash.com/300x300?person`}
                  alt="health"
                  className="rounded-lg"
                />
                <p className="text-md font-normal text-gray-500">CEO</p>
                <h3 className="text-lg font-semibold text-black">Name Here</h3>
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
