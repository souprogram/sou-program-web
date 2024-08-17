export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <a
            href="https://github.com/0xHashstack"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">GitHub</span>
            GitHub
          </a>
          <a
            href="https://discord.gg/0xHashstack"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Discord</span>
            Discord
          </a>
          <a
            href="https://www.facebook.com/0xHashstack/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Facebook</span>
            Facebook
          </a>
          <a
            href="https://www.instagram.com/0xHashstack/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Instagram</span>
            Instagram
          </a>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-base text-gray-400">
            &copy; 2024 Šou program.
          </p>
        </div>
      </div>
    </footer>
  );
}
