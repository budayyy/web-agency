import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

import {
  TbClock24,
  TbDeviceMobileCode,
  TbMoodSmile,
  TbPhotoCode,
  TbSeo,
} from "react-icons/tb";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

export default function Homepage() {
  return (
    <div className="w-full">
      <Navbar />
      <div className="w-full bg-gradient-to-br from-blue-100 via-white to-sky-100 px-4 lg:px-0">
        <div className="max-w-7xl lg:h-screen py-32 lg:py-20 mx-auto flex flex-col lg:flex-row items-center">
          <div className="max-w-2xl space-y-8">
            <h3 className="text-3xl lg:text-4xl font-bold leading-snug text-center lg:text-start">
              Experienced <span className="text-sky-500">mobile and web </span>
              applications and website builders measuring.
            </h3>
            <p className="text-base lg:text-lg font-normal leading-relaxed text-gray-900 text-center lg:text-start">
              KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
              applications and website builders measuring dozens of completed
              projects. We build and develop mobile applications for several top
              platforms, including Android & IOS.
            </p>
            <div className="space-x-4">
              <Link
                to="/contact"
                className="py-3 px-12 bg-sky-500 rounded-md text-white text-sm font-normal"
              >
                Contact Us
              </Link>
              <Link
                to="#"
                className="py-3 px-12  bg-white border border-sky-500 text-sky-500 rounded-md font-normal text-sm"
              >
                View more
              </Link>
            </div>
          </div>
          <div>
            <img
              src="./img/main-homepage.png"
              alt="Main Foto"
              className="bg-contain bg-center"
            />
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-10 lg:py-20 px-4 lg:px-0">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="w-full flex gap-4 items-center">
            <div className="p-4 bg-purple-500/10 rounded-md">
              <TbPhotoCode className="text-4xl text-purple-500" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 leading-normal">
                Web Application
              </h3>
              <p className="text-base font-medium text-gray-500">
                lorem ipsum symply
              </p>
            </div>
          </div>
          <div className="w-full flex gap-4 items-center">
            <div className="p-4 bg-green-500/10 rounded-md">
              <TbSeo className="text-4xl text-green-500" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 leading-normal">
                SEO
              </h3>
              <p className="text-base font-medium text-gray-500">
                lorem ipsum symply
              </p>
            </div>
          </div>
          <div className="w-full flex gap-4 items-center">
            <div className="p-4 bg-blue-500/10 rounded-md">
              <TbClock24 className="text-4xl text-blue-500" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 leading-normal">
                AR / VR Solutions
              </h3>
              <p className="text-base font-medium text-gray-500">
                lorem ipsum symply
              </p>
            </div>
          </div>
          <div className="w-full flex gap-4 items-center">
            <div className="p-4 bg-orange-500/10 rounded-md">
              <TbDeviceMobileCode className="text-4xl text-orange-500" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 leading-normal">
                Mobile Application
              </h3>
              <p className="text-base font-medium text-gray-500">
                lorem ipsum symply
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-gradient-to-tr from-sky-100 via-purple-100/20 to-blue-100 py-10 lg:py-20 px-4 lg:px-0">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-center text-2xl lg:text-3xl font-semibold text-gray-900 leading-relaxed mb-4">
            Lorem Ipsum is simply dummy text of the printing.
          </h3>
          <p className="text-sm font-normal text-gray-700 text-center max-w-md mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry
          </p>
          <div className="w-full my-20 flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 space-y-4 lg:space-y-8">
              <div className="flex items-center justify-start gap-4">
                <div className="p-3 bg-cyan-500/20 flex justify-center items-center rounded-full">
                  <TbMoodSmile className="text-lg lg:text-2xl text-cyan-500" />
                </div>
                <div>
                  <p className="text-sm lg:text-base font-semibold text-gray-900">
                    Lorem Ipsum is simply dummy text
                  </p>
                  <p className="text-xs lg:text-sm font-medium text-gray-500">
                    Lorem Ipsum is simply dummy text
                  </p>
                </div>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 max-w-md leading-relaxed">
                <span className="text-sky-500">Lorem Ipsum</span> is simply
                dummy text of the printing.
              </h3>
              <p className="text-sm lg:text-base max-w-md font-normal text-gray-800 leading-relaxed text-justify lg:text-start">
                KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and
                web applications and website builders measuring dozens of
                completed projects. We build and develop mobile applications for
                several top platforms, including Android & IOS.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <img src="./img/fitur-1.png" alt="fitur-1" />
            </div>
          </div>
          <div className="w-full my-20 flex lg:flex-row-reverse flex-col items-center">
            <div className="w-full lg:w-1/2 space-y-4 lg:space-y-8">
              <div className="flex items-center justify-start gap-4">
                <div className="p-3 bg-blue-500/20 flex justify-center items-center rounded-full">
                  <TbMoodSmile className="text-lg lg:text-2xl text-blue-500" />
                </div>
                <div>
                  <p className="text-sm lg:text-base font-semibold text-gray-900">
                    Lorem Ipsum is simply dummy text
                  </p>
                  <p className="text-xs lg:text-sm font-medium text-gray-500">
                    Lorem Ipsum is simply dummy text
                  </p>
                </div>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 max-w-md leading-relaxed">
                <span className="text-sky-500">Lorem Ipsum</span> is simply
                dummy text of the printing.
              </h3>
              <p className="text-sm lg:text-base max-w-md font-normal text-gray-800 leading-relaxed text-justify lg:text-start">
                KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and
                web applications and website builders measuring dozens of
                completed projects. We build and develop mobile applications for
                several top platforms, including Android & IOS.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <img src="./img/fitur-2.png" alt="fitur-2" />
            </div>
          </div>
          <div className="w-full my-20 flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 space-y-4 lg:space-y-8">
              <div className="flex items-center justify-start gap-4">
                <div className="p-3 bg-purple-500/20 flex justify-center items-center rounded-full">
                  <TbMoodSmile className="text lg lg:text-2xl text-purple-500" />
                </div>
                <div>
                  <p className="text-sm lg:text-base font-semibold text-gray-900">
                    Lorem Ipsum is simply dummy text
                  </p>
                  <p className="text-xs lg:text-sm font-medium text-gray-500">
                    Lorem Ipsum is simply dummy text
                  </p>
                </div>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 max-w-md leading-relaxed">
                <span className="text-sky-500">Lorem Ipsum</span> is simply
                dummy text of the printing.
              </h3>
              <p className="text-sm lg:text-base max-w-md font-normal text-gray-800 leading-relaxed text-justify lg:text-start">
                KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and
                web applications and website builders measuring dozens of
                completed projects. We build and develop mobile applications for
                several top platforms, including Android & IOS.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <img src="./img/fitur-3.png" alt="fitur-3" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-10 lg:py-20 px-4 lg:px-0">
        <div className="max-w-7xl flex flex-col gap-4 lg:flex-row lg:justify-around items-center mx-auto">
          <div className="bg-gray-100 rounded-lg p-12 space-y-8 max-w-lg">
            <div className="w-60 mx-auto">
              <h3 className="text-xl text-center font-semibold leading-loose">
                Lorem Ipsum is simply dummy text.
              </h3>
            </div>
            <div className="max-w-2xl">
              <p className="text-xs font-normal text-gray-800 leading-loose text-center">
                KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and
                web applications and website builders measuring dozens of
                completed projects. We build and develop mobile applications for
                several top platforms, including Android & IOS.
              </p>
            </div>
            <div className="text-center">
              <a
                href="#"
                className="py-2 px-6 text-xs bg-sky-500 rounded-md text-white"
              >
                View more
              </a>
            </div>
          </div>
          <div className="bg-sky-500 rounded-lg p-12 space-y-8 max-w-lg">
            <div className="w-60 mx-auto">
              <h3 className="text-xl text-center font-semibold leading-loose text-white">
                Lorem Ipsum is simply dummy text.
              </h3>
            </div>
            <div className="max-w-2xl">
              <p className="text-xs font-normal text-white leading-loose text-center">
                KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and
                web applications and website builders measuring dozens of
                completed projects. We build and develop mobile applications for
                several top platforms, including Android & IOS.
              </p>
            </div>
            <div className="text-center">
              <a
                href="#"
                className="py-2 px-6 text-xs bg-white rounded-md text-sky-500"
              >
                View more
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white py-10 lg:py-20 px-4 lg:px-0">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-xl lg:text-2xl text-center font-semibold mb-8">
            You Will be in good Company
          </h3>
          <div className="w-full flex flex-col lg:flex-row justify-between items-center flex-wrap">
            <img src="./img/beneoshop.png" alt="beneoshop" />
            <img src="./img/caspio.png" alt="caspio" />
            <img src="./img/HyperGrid.png" alt="hypergrid" />
            <img src="./img/leotrippi.png" alt="leotrippi" />
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}
