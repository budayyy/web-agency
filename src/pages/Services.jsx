import {
  TbClock24,
  TbDeviceMobileCode,
  TbPhotoCode,
  TbSeo,
} from "react-icons/tb";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

export default function Services() {
  return (
    <div className="w-full">
      <Navbar />
      <div className="w-full h-screen py-40 bg-gradient-to-br from-sky-200 via-purple-100/50 to-blue-200 px-4 lg:px-0">
        <div className="max-w-7xl mx-auto pb-20">
          <div className="max-w-lg mx-auto">
            <div className="flex w-full justify-center items-center mb-8">
              <img
                src="./img/services-speaker.png"
                alt="speaker"
                className="p-6 rounded-full bg-white"
              />
            </div>
            <h3 className="text-4xl lg:text-6xl font-bold text-gray-900 text-center mb-8">
              Our
              <span className="text-sky-500"> Services</span>
            </h3>
            <p className="text-center text-lg font-normal text-gray-600 mb-8 max-w-sm mx-auto">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry
            </p>
          </div>
        </div>
      </div>
      <div className="w-full lg:-mt-40 2xl:-mt-80 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="w-full lg:rounded-md lg:shadow-md bg-white p-4 lg:p-20 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-16">
            <div className="w-full flex gap-4 lg:gap-12 items-center">
              <div className="p-4 bg-purple-500/10 rounded-md">
                <TbPhotoCode className="text-4xl lg:text-7xl text-purple-500" />
              </div>
              <div>
                <h3 className="text-xl lg:text-3xl font-semibold text-gray-900 leading-normal">
                  Web Application
                </h3>
                <p className="text-base lg:text-lg font-medium text-gray-500">
                  lorem ipsum symply
                </p>
              </div>
            </div>
            <div className="w-full flex gap-4 lg:gap-12 items-center">
              <div className="p-4 bg-green-500/10 rounded-md">
                <TbSeo className="text-4xl lg:text-7xl text-green-500" />
              </div>
              <div>
                <h3 className="text-xl lg:text-3xl font-semibold text-gray-900 leading-normal">
                  SEO
                </h3>
                <p className="text-base lg:text-lg font-medium text-gray-500">
                  lorem ipsum symply
                </p>
              </div>
            </div>
            <div className="w-full flex gap-4 lg:gap-12 items-center">
              <div className="p-4 bg-blue-500/10 rounded-md">
                <TbClock24 className="text-4xl lg:text-7xl text-blue-500" />
              </div>
              <div>
                <h3 className="text-xl lg:text-3xl font-semibold text-gray-900 leading-normal">
                  AR / VR Solutions
                </h3>
                <p className="text-base lg:text-lg font-medium text-gray-500">
                  lorem ipsum symply
                </p>
              </div>
            </div>
            <div className="w-full flex gap-4 lg:gap-12 items-center">
              <div className="p-4 bg-orange-500/10 rounded-md">
                <TbDeviceMobileCode className="text-4xl lg:text-7xl text-orange-500" />
              </div>
              <div>
                <h3 className="text-xl lg:text-3xl font-semibold text-gray-900 leading-normal">
                  Mobile Application
                </h3>
                <p className="text-base lg:text-lg font-medium text-gray-500">
                  lorem ipsum symply
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white px-4 lg:px-0">
        <div className="max-w-7xl mx-auto">
          <div className="w-full my-20 flex flex-col-reverse lg:flex-row items-center gap-4">
            <div className="w-full lg:w-1/2 space-y-8">
              <h3 className="text-3xl font-bold text-gray-900 max-w-md leading-relaxed">
                <span className="text-sky-500">Lorem Ipsum</span> is simply
                dummy text of the printing.
              </h3>
              <p className="text-base max-w-md font-normal text-gray-800 leading-relaxed text-justify lg:text-start">
                KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and
                web applications and website builders measuring dozens of
                completed projects. We build and develop mobile applications for
                several top platforms, including Android & IOS.
              </p>
              <p className="text-base max-w-md font-normal text-gray-800 leading-relaxed text-justify lg:text-start">
                KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and
                web applications and website builders measuring dozens
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
            <div className="w-full lg:w-1/2">
              <img src="./img/services-img.png" alt="service-img" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-sky-500 py-10 lg:py-48 px-4 lg:px-0">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-around gap-8 lg:gap-0">
          <div className="text-center lg:space-y-4">
            <h3 className="text-4xl lg:text-7xl font-bold lg:font-extrabold text-white">
              6
            </h3>
            <p className="text-white font-thin text-sm">Happy client</p>
          </div>
          <div className="text-center lg:space-y-4">
            <h3 className="text-4xl lg:text-7xl font-bold lg:font-extrabold text-white">
              11
            </h3>
            <p className="text-white font-thin text-sm">Complete Projects</p>
          </div>
          <div className="text-center lg:space-y-4">
            <h3 className="text-4xl lg:text-7xl font-bold lg:font-extrabold text-white">
              7M
            </h3>
            <p className="text-white font-thin text-sm">Transactions</p>
          </div>
          <div className="text-center lg:space-y-4">
            <h3 className="text-4xl lg:text-7xl font-bold lg:font-extrabold text-white">
              6000+
            </h3>
            <p className="text-white font-thin text-sm">Customers</p>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-10 lg:py-24 px-4 lg:px-0">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold text-black mb-4 lg:mb-16">
            Our Latest Projects
          </h3>
          <div className="flex gap-4 overflow-x-auto">
            {[...Array(10)].map((i) => (
              <div key={i} className="min-w-[20rem] p-4 space-y-4 ">
                <img
                  src={`https://source.unsplash.com/300x300?health`}
                  alt="health"
                  className="rounded-lg"
                />
                <h3 className="text-xl font-semibold text-black">
                  Lorem Ipsum is simply dummy text of the printing.
                </h3>
                <p className="text-sm font-normal text-gray-500">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsu
                </p>
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
