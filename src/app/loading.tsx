export default function Loading() {
  return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background">
        <div className="relative h-1 w-64 overflow-hidden rounded-full bg-secondary">
          <div className="absolute inset-y-0 left-0 w-full origin-left animate-loading bg-primary"></div>
        </div>
      </div>
  );
}
