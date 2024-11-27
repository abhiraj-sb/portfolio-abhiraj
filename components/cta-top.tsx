import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Phone, Mail } from "lucide-react";
import Link from "next/link";

export function CtaTop() {
  return (
    <section className="mb-12">
      <Card>
        <CardHeader>
          <CardTitle>Hire Me</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-4">
          <Link href="tel:+917869556979">
            <Button className="flex items-center">
              <Phone className="mr-2 h-4 w-4" /> Give a Call
            </Button>
          </Link>
          <Link href="mailto:abhirajsakargaye@gmail.com">
            <Button className="flex items-center">
              <Mail className="mr-2 h-4 w-4" /> Send an Email
            </Button>
          </Link>
        </CardContent>
      </Card>
    </section>
  );
}
