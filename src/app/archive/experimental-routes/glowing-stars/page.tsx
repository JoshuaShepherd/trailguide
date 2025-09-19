import GlowingStarsBackgroundCardPreview from "@/components/aceternity/glowing-stars-demo";

export default function GlowingStarsPage() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl font-bold text-center mb-8 px-4 text-white">Glowing Stars Background Demo</h1>
        <GlowingStarsBackgroundCardPreview />
      </div>
    </div>
  );
}
