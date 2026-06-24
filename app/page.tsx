export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-blue-400 font-medium mb-4">
          Senior QA Engineer 🚀
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Štěpán Stehlík
        </h1>

        <p className="text-xl text-gray-400 max-w-2xl mb-8">
          Pomáhám firmám zvyšovat kvalitu software pomocí automatizace,
          API testování a QA konzultací.
        </p>

        <div className="flex gap-4">
          <button className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-lg font-medium">
            Kontaktovat
          </button>

          <button className="border border-gray-700 px-6 py-3 rounded-lg font-medium">
            Moje projekty
          </button>
        </div>
      </div>
    </main>
  );
}