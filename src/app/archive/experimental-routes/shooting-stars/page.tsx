import ShootingStarsAndStarsBackgroundDemo from "@/components/aceternity/shooting-stars-and-stars-background-demo";

export default function ShootingStarsPage() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-8">
      <div className="w-full max-w-6xl">
        <h1 className="text-3xl font-bold text-center mb-8 px-4 text-white">Shooting Stars + Background Demo</h1>
        <ShootingStarsAndStarsBackgroundDemo />
      </div>
    </div>
  );
}
