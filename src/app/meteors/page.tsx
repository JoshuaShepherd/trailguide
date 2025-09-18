import MeteorsDemo from "@/components/aceternity/meteors-demo";

export default function MeteorsPage() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-8">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl font-bold text-center mb-8 px-4 text-white">Meteors Effect Demo</h1>
        <div className="flex justify-center">
          <MeteorsDemo />
        </div>
      </div>
    </div>
  );
}
