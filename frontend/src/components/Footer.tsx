import DiscordLogo from './icons/DiscordLogo';
import FacebookLogo from './icons/FacebookLogo';
import GitHubLogo from './icons/GitHubLogo';
import InstagramLogo from './icons/InstagramLogo';
import LinkedInLogo from './icons/LinkedInLogo';
import YouTubeLogo from './icons/YouTubeLogo';

const socials = [
  {
    href: 'https://github.com/souprogram',
    icon: <GitHubLogo height={24} width={24} />,
    label: 'GitHub',
  },
  {
    href: 'https://discord.gg/JKzMW43hTA',
    icon: <DiscordLogo height={24} width={24} />,
    label: 'Discord',
  },
  {
    href: 'https://facebook.com/souprogram.hr',
    icon: <FacebookLogo height={24} width={24} />,
    label: 'Facebook',
  },
  {
    href: 'https://www.instagram.com/souprogram.hr/',
    icon: <InstagramLogo height={24} width={24} />,
    label: 'Instagram',
  },
  {
    href: 'https://www.linkedin.com/company/sou-program/',
    icon: <LinkedInLogo height={24} width={24} />,
    label: 'LinkedIn',
  },
  {
    href: 'https://youtube.com/@SouProgramYTkanal',
    icon: <YouTubeLogo height={24} width={24} />,
    label: 'YouTube',
  },
];

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="hidden md:order-2 md:flex md:justify-center md:gap-6">
          {socials.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-all duration-300 hover:text-primary-500"
            >
              <span className="sr-only">{label}</span>
              {label}
            </a>
          ))}
        </div>
        <div className="order-2 flex justify-center gap-6 md:hidden">
          {socials.map(({ href, label, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-all duration-300 hover:text-primary-500"
            >
              <span className="sr-only">{label}</span>
              {icon}
            </a>
          ))}
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
