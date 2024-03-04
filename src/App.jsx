import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { SeccionTreking } from "./components/SeccionTreking";

function App() {

  return (
    <main className="w-full h-full overflow-hidden min-w-[300px]">
      <Hero />
      <SeccionTreking />
      <Footer />
    </main>
  )
}

export default App
