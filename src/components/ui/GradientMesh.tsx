"use client";

export function GradientMesh() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Blob 1 - Sky blue */}
      <div
        className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full opacity-15 blur-[100px] dark:opacity-8 md:h-[600px] md:w-[600px]"
        style={{
          background: "radial-gradient(circle, #0ea5e9 0%, transparent 70%)",
          animation: "blob-1 20s ease-in-out infinite",
        }}
      />
      {/* Blob 2 - Cyan */}
      <div
        className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full opacity-12 blur-[100px] dark:opacity-6 md:h-[550px] md:w-[550px]"
        style={{
          background: "radial-gradient(circle, #06b6d4 0%, transparent 70%)",
          animation: "blob-2 25s ease-in-out infinite",
        }}
      />
      {/* Blob 3 - Indigo */}
      <div
        className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 blur-[100px] dark:opacity-5 md:h-[500px] md:w-[500px]"
        style={{
          background: "radial-gradient(circle, #6366f1 0%, transparent 70%)",
          animation: "blob-3 30s ease-in-out infinite",
        }}
      />
    </div>
  );
}
