import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function Skills() {
  return (
    <section className="mb-12" id="skills">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Product Strategy</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Developing product roadmaps, conducting market research, and
              defining product vision.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Project Management</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Efficiently plan, execute, and deliver projects on time and within
              scope.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Agile Methodologies</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Experience with Scrum and Kanban, familiar with tools like Notion,
              JIRA and Trello.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Wireframing & Prototyping</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Proficient in creating wireframes and prototypes using Figma and
              Adobe XD.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Product Research</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Gaining insights from user research to improve product features
              and user experience.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Stakeholder Management</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Strong communication skills, adept at presenting to and
              collaborating with cross-functional teams.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>No/Low Code Development</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Crafting interactive prototypes with no/low-code development using
              Framer, v0, Shopify, etc. for rapid MVP launches and product
              experimentation.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>UI/UX Designing</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Crafting user-centric interfaces and user journeys to align with
              product&apos;s goals.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Product Marketing</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Crafting marketing strategies to drive product growth, engagement,
              and brand visibility.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
