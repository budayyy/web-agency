import {
  TbBrandFacebookFilled,
  TbBrandInstagram,
  TbBrandLinkedin,
  TbBrandTwitter,
} from "react-icons/tb";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="w-full pt-6 lg:pt-32 pb-6 px-4 lg:px-0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-4 py-10">
        <div className="w-full space-y-4 mb-4 lg:mb-0">
          <h4 className="text-center lg:text-left text-2xl font-bold text-sky-500">
            AGENCY
          </h4>
          <p className="text-center lg:text-left text-sm lg:text-base font-normal text-gray-800 px-4 lg:px-0">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className="text-lg font-semibold text-gray-800 text-center lg:text-left">
            @agency
          </p>
        </div>
        <div className="w-full space-y-6 mb-4 lg:mb-0 text-center lg:text-left">
          <h4 className="text-2xl font-bold text-gray-800">About Us</h4>
          <div className="space-y-2">
            <Link to="#" className="block text-base text-gray-800 font-normal">
              Lorem
            </Link>
            <Link to="#" className="block text-base text-gray-800 font-normal">
              Portfolio
            </Link>
            <Link to="#" className="block text-base text-gray-800 font-normal">
              Careers
            </Link>
            <Link to="#" className="block text-base text-gray-800 font-normal">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="w-full space-y-4 mb-4 lg:mb-0 text-center lg:text-left">
          <h4 className="text-2xl font-bold text-gray-800">Contact Us</h4>
          <p className="text-base font-normal text-gray-800">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className="text-lg font-semibold text-gray-800">
            +62878 2989 0388
          </p>
        </div>
        <div className="w-full flex gap-4 items-end justify-center">
          <Link className="shadow p-2 rounded-full">
            <TbBrandFacebookFilled className="text-lg lg:text-3xl" />
          </Link>
          <Link className="shadow p-2 rounded-full">
            <TbBrandInstagram className="text-lg lg:text-3xl" />
          </Link>
          <Link className="shadow p-2 rounded-full">
            <TbBrandTwitter className="text-lg lg:text-3xl" />
          </Link>
          <Link className="shadow p-2 rounded-full">
            <TbBrandLinkedin className="text-lg lg:text-3xl" />
          </Link>
        </div>
      </div>
      <hr />
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center pt-6 text-sm font-normal text-gray-700">
          Copyright &copy; All Right Reserved
        </p>
      </div>
    </div>
  );
}
