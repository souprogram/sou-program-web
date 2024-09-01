export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center size-6">
      <div className="animate-spin rounded-full size-full border-[3px] border-t-black border-transparent"></div>
    </div>
  );
}