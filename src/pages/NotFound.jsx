export default function NotFound() {
  return (
    <div className="w-full h-screen bg-gradient-to-br from-sky-100 via-purple-100 to-blue-100 flex justify-center items-center">
      <div className="text-center space-y-4">
        <h3 className="text-xl font-semibold">Oooopps</h3>
        <h3 className="text-xl font-semibold">404 | Not Found</h3>
        <div>
          <a
            href="/"
            className="py-2 px-6 bg-sky-500/10 text-sky-500 rounded font-semibold hover:bg-sky-500/80 hover:text-sky-800"
          >
            kembali
          </a>
        </div>
      </div>
    </div>
  );
}
