import BackgroundLinesDemo from "@/components/aceternity/background-lines-demo";
import { BackgroundLinesVariations } from "@/components/aceternity/background-lines-variations";

export default function BackgroundLinesPage() {
  return (
    <div className="min-h-screen">
      <section className="mb-8">
        <h1 className="text-3xl font-bold text-center mb-8 px-4">Background Lines Demo</h1>
        <BackgroundLinesDemo />
      </section>
      
      <section>
        <h2 className="text-2xl font-bold text-center mb-8 px-4">Background Lines Variations</h2>
        <BackgroundLinesVariations />
      </section>
    </div>
  );
}
