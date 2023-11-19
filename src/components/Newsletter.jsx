export default function Newsletter() {
  return (
    <div className="w-full bg-sky-300/25 py-20 lg:py-40 px-4 lg:px-0">
      <div className="max-w-7xl mx-auto space-y-8 lg:space-y-20">
        <h3 className="text-xl lg:text-3xl font-bold text-gray-900 max-w-xl text-center mx-auto">
          Lorem Ipsum is simply dummy text of the printing.
        </h3>
        <form
          action=""
          className="max-w-2xl text-center gap-2 lg:gap-4 flex items-center mx-auto"
        >
          <input
            type="text"
            placeholder="Enter your email"
            className="py-3 px-4 lg:p-4 rounded lg:rounded-md w-full text-xs lg:text-sm focus:outline-sky-500 cursor"
          />
          <button className="py-2 lg:py-4 px-4 lg:px-8 rounded lg:rounded-md bg-gray-800 text-white font-medium text-sm leading-relaxed hover:bg-gray-700 ">
            SUBSCRIBE
          </button>
        </form>
      </div>
    </div>
  );
}
