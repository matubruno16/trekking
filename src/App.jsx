import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { SeccionTreking } from "./components/SeccionTreking";

function App() {

  return (
    <main className="w-full h-full overflow-hidden min-w-[300px]">
      <h1 className="hidden">Los mejores trekking de Argentina. Explora la naturaleza por los mejor senderos</h1>
      <Hero />
      <SeccionTreking />
      <Footer />
    </main>

  )
}

export default App
