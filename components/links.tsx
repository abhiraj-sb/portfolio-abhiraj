import { Button } from "@/components/ui/button";
import { FileText, Briefcase, Linkedin } from "lucide-react";
import Link from "next/link";

export function Links() {
  return (
    <section className="mb-12" id="links">
      <h2 className="text-2xl font-bold mb-4">Links</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <Link
          href="/Abhiraj-Sakargaye.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <Button variant="outline" className="w-full h-0 pb-[100%] relative">
            <span className="absolute inset-0 flex flex-col items-center justify-center">
              <FileText className="h-8 w-8 mb-2" />
              <span>Download Resume</span>
            </span>
          </Button>
        </Link>
        <Link
          href="https://flint-humor-1da.notion.site/Product-Portfolio-3b86961b1b624b7eb55eab6359554a87"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <Button variant="outline" className="w-full h-0 pb-[100%] relative">
            <span className="absolute inset-0 flex flex-col items-center justify-center">
              <Briefcase className="h-8 w-8 mb-2" />
              <span>View Portfolio</span>
            </span>
          </Button>
        </Link>
        <Link
          href="https://www.linkedin.com/in/abhiraj-"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <Button variant="outline" className="w-full h-0 pb-[100%] relative">
            <span className="absolute inset-0 flex flex-col items-center justify-center">
              <Linkedin className="h-8 w-8 mb-2" />
              <span>Connect on LinkedIn</span>
            </span>
          </Button>
        </Link>
      </div>
    </section>
  );
}
