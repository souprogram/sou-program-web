export default function SplashScreen() {
  return (
    <div
      className={`fixed inset-0 z-50 flex min-h-screen items-center justify-center bg-black text-white`}
    >
      <img className="w-[20%] animate-rotate" src="/sou-program-icon.svg" />
    </div>
  );
}
