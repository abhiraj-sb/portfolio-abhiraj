import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function About() {
  return (
    <section className="mb-12" id="about">
      <Card>
        <CardHeader>
          <CardTitle>About Me</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            I am passionate about products which shape our lives directly or
            indirectly. I have worked with three startups as a product intern
            with a keen interest in user-centric design and data-driven decision
            making. I believe in continuous learning and collaboration. I enjoy
            working with cross-functional teams, navigating the complexities of
            product development, and iterating toward perfection. My experiences
            span across diverse industries, including SaaS, e-commerce, and
            digital services, giving me a well-rounded perspective on delivering
            market-ready solutions. I&apos;m eager to apply my skills and learn
            from experienced professionals in the field.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
