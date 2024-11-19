// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        {/* Sección Izquierda */}
        <div className="mb-8 md:mb-0">
          <h1 className="text-2xl font-bold">E-commerce</h1>
          <nav className="mt-4 flex flex-col space-y-2">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Productos
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Nosotros
            </a>
          </nav>
        </div>

        

        {/* Redes Sociales */}
        <div className="mt-8 md:mt-0">
          <h2 className="text-xl font-semibold mb-4">Síguenos</h2>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Formulario de Contacto */}
        <div className="max-w-[400px] flex-1 md:px-8">
          <h2 className="text-xl font-semibold mb-4">Contáctanos</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-400">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                placeholder="Tu nombre"
                className="w-full bg-gray-800 text-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-400">
                Correo o Empresa
              </label>
              <input
                type="email"
                id="email"
                placeholder="Tu correo o empresa"
                className="w-full bg-gray-800 text-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-400">
                Mensaje
              </label>
              <textarea
                id="message"
                placeholder="Tu mensaje"
                rows="4"
                className="w-full bg-gray-800 text-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gray-100 text-gray-900 font-semibold rounded-md py-2 hover:bg-gray-300 transition"
            >
              Enviar
            </button>
          </form>
        </div>


      </div>

      {/* Línea divisoria */}
      <div className="border-t border-gray-900 mt-8"></div>

      {/* Copyright */}
      <div className="text-center text-gray-500 mt-4 text-sm">
        © {new Date().getFullYear()} Bootcamp3. Todos los derechos reservados.
      </div>
    </footer>
  );
}
