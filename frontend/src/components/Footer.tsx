export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex flex-col justify-center gap-6 md:order-2 md:flex-row">
          <a
            href="https://github.com/souprogram"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition-all duration-300 hover:text-primary-500"
          >
            <span className="sr-only">GitHub</span>
            GitHub
          </a>
          <a
            href="https://discord.gg/JKzMW43hTA"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition-all duration-300 hover:text-primary-500"
          >
            <span className="sr-only">Discord</span>
            Discord
          </a>
          <a
            href="https://facebook.com/souprogram.hr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition-all duration-300 hover:text-primary-500"
          >
            <span className="sr-only">Facebook</span>
            Facebook
          </a>
          <a
            href="https://www.instagram.com/souprogram.hr/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition-all duration-300 hover:text-primary-500"
          >
            <span className="sr-only">Instagram</span>
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/company/sou-program/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition-all duration-300 hover:text-primary-500"
          >
            <span className="sr-only">LinkedIn</span>
            LinkedIn
          </a>
          <a
            href="https://youtube.com/@SouProgramYTkanal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition-all duration-300 hover:text-primary-500"
          >
            <span className="sr-only">YouTube</span>
            YouTube
          </a>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-base text-gray-400">
            &copy; 2024 <span className="font-brioni">Šou program</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
