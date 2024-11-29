import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export function Projects() {
  return (
    <section className="mb-12" id="projects">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>ROI Calculator</CardTitle>
            <CardDescription>
              Outlined the steps and considerations involved in developing a
              Return on Investment calculator and formulate a Go-To-Market
              strategy for promoting and launching the calculator.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link
              href="https://flint-humor-1da.notion.site/Qoruz-ROI-Calculator-Product-1f969ae584d44dba845c8e7681cdb304"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="w-full">
                <ExternalLink className="mr-2 h-4 w-4" /> View on Notion
              </Button>
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Online Lead-Finder Tool</CardTitle>
            <CardDescription>
              Created a highly intuitive and easy-to-use Lead Finder tool and
              help the existing and future user base in curating and customizing
              leads based on their requirements.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link
              href="https://flint-humor-1da.notion.site/Lead-Finder-Tool-ReachInbox-4c3c283fd587431195ba029689179be3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="w-full">
                <ExternalLink className="mr-2 h-4 w-4" /> View on Notion
              </Button>
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Wizdom App Improvement</CardTitle>
            <CardDescription>
              Identified three new features and select one to implement in the
              Wizdom App. Write Product Requirement Document for the selected
              feature and outlined the metrics and tools used to measure this
              effectivess of this feature.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link
              href="https://flint-humor-1da.notion.site/Wizdom-App-Internship-Assignment-214863a7440640dcaa3ead08025946d8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="w-full">
                <ExternalLink className="mr-2 h-4 w-4" /> View on Notion
              </Button>
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Marketplace for Designers</CardTitle>
            <CardDescription>
              Plan for creating a product document and user story for a
              marketplace for designers. This document encapsulates the planning
              required by Ctruh to create a marketplace product that will
              empower designers to market and showcase their design work.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link
              href="https://flint-humor-1da.notion.site/Ctruh-6a7c56052944446bafa6cf88b24a3905"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="w-full">
                <ExternalLink className="mr-2 h-4 w-4" /> View on Notion
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
