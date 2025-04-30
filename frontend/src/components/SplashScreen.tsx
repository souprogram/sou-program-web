export default function SplashScreen() {
  return (
    <div
      className={`fixed inset-0 z-50 flex min-h-screen items-center justify-center bg-neutral-900 text-white`}
    >
      <img className="animate-rotate w-[20%]" src="/sou-program-icon.svg" />
    </div>
  );
}
