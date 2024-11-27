import { Badge } from "@/components/ui/badge";

const tools = [
  "Jira",
  "Notion",
  "Slack",
  "Framer",
  "Figma",
  "Adobe XD",
  "Adobe Illustrator",
  "Blender",
];

export function Tools() {
  return (
    <section className="mb-12" id="tools">
      <h2 className="text-2xl font-bold mb-4">Tools</h2>
      <div className="flex flex-wrap gap-2">
        {tools.map((tool, index) => (
          <Badge key={index} variant="secondary" className="text-sm">
            {tool}
          </Badge>
        ))}
      </div>
    </section>
  );
}
