import { About } from "@/components/about";
import { CtaTop } from "@/components/cta-top";
import { Projects } from "@/components/projects";
import { Links } from "@/components/links";
import { Contact } from "@/components/contact";
import { Skills } from "@/components/skills";
import { Tools } from "@/components/tools";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">
            Abhiraj Sakargaye
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Product Manager
          </p>
        </header>
        <About />
        <CtaTop />
        <Projects />
        <Links />
        <Contact />
        <Skills />
        <Tools />
      </main>
      <Footer />
    </div>
  );
}
