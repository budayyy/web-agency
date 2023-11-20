import {
  TbBrandFacebookFilled,
  TbBrandInstagram,
  TbBrandLinkedin,
  TbBrandTwitter,
  TbMap,
  TbPhoneCall,
} from "react-icons/tb";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="w-full">
      <Navbar />
      <div className="w-full bg-white py-40 px-4 lg:px-0">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="text-center lg:text-start space-y-4 mb-8 lg:mb-0">
              <div className="p-3 bg-yellow-500/20 inline-block rounded-full">
                <img src="./img/contact-icon.png" alt="contact-icon" />
              </div>
              <h3 className="text-3xl lg:text-5xl font-semibold text-black leading-relaxed">
                Let’s Collaborate
              </h3>
              <p className="text-base font-normal text-gray-500">
                Lorem Ipsum is simply dummy text of the printing .
              </p>
            </div>
            <div>
              <img src="./img/contact-peta.png" alt="peta" />
            </div>
          </div>
          <div className="w-full bg-white grid grid-cols-1 lg:grid-cols-3 py-10 lg:py-20 gap-16 lg:gap-4 place-items-center place-content-between">
            <div className="text-start space-y-4 w-full lg:border-r">
              <h3 className="text-lg font-semibold text-black">Follow Us</h3>
              <div className="flex items-center justify-start gap-8">
                <Link className="shadow p-2 rounded-full">
                  <TbBrandFacebookFilled className="text-xl" />
                </Link>
                <Link className="shadow p-2 rounded-full">
                  <TbBrandInstagram className="text-xl" />
                </Link>
                <Link className="shadow p-2 rounded-full">
                  <TbBrandTwitter className="text-xl" />
                </Link>
                <Link className="shadow p-2 rounded-full">
                  <TbBrandLinkedin className="text-xl" />
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-start gap-4 text-xl w-full h-full lg:justify-center lg:border-r">
              <TbPhoneCall className="text-3xl" />
              <p className="text-base font-light">+62878 2989 0388</p>
            </div>
            <div className="flex gap-4 items-center justify-start lg:justify-center w-full h-full text-2xl ">
              <TbMap className="text-3xl" />
              <p className="text-sm font-light lg:w-60">
                but also the leap into electronic typesetting
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-10 lg:py-20 bg-gradient-to-br from-sky-100  to-blue-100 px-4 lg:px-0">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-center text-3xl font-medium mb-4">Say Hello</h3>
          <p className="text-center text-base font-normal text-gray-500 mb-8">
            Lorem Ipsum is simply dummy text of the printing .
          </p>

          <form action="" className="mb-4 max-w-3xl mx-auto">
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="mb-4 w-full">
                <label htmlFor="" className="block mb-2 text-sm font-medium">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full p-4 rounded-md focus:outline-sky-500"
                />
              </div>

              <div className="mb-4 w-full">
                <label htmlFor="" className="block mb-2 text-sm font-medium">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full p-4 rounded-md focus:outline-sky-500"
                />
              </div>
            </div>

            <div className="mb-4 w-full ">
              <label htmlFor="" className="block mb-2 text-sm font-medium">
                Email Address
              </label>
              <input
                type="text"
                className="w-full p-4 rounded-md focus:outline-sky-500"
              />
            </div>

            <div className="mb-4 w-full">
              <label htmlFor="" className="block mb-2 text-sm font-medium">
                Message
              </label>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                className="w-full p-4 rounded-md focus:outline-sky-500"
              ></textarea>
            </div>

            <div className="mb-4 text-end">
              <button
                type="submit"
                className="py-2 px-8 rounded-md bg-sky-500 text-white text-end"
              >
                Get in touch
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
