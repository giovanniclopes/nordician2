import { Loading } from "../components/Loading";
import Navbar from "../components/Navbar";

export function LoadingDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-mjolnir mb-8">Loading Animations</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center">
              <h2 className="text-2xl font-mjolnir mb-8">Small</h2>
              <Loading size="small" text="Pequeno" />
            </div>
            <div className="flex flex-col items-center">
              <h2 className="text-2xl font-mjolnir mb-8">Medium</h2>
              <Loading size="medium" text="Médio" />
            </div>
            <div className="flex flex-col items-center">
              <h2 className="text-2xl font-mjolnir mb-8">Large</h2>
              <Loading size="large" text="Grande" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}