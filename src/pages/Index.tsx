
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ApplicationCard } from "@/components/ApplicationCard";
import scm from "@/assets/scm.png";
import leaf from "@/assets/leaf.png";
import spot from "@/assets/spot.png";
import leafi from "@/assets/leafi.png";
import stamp from "@/assets/stamp.png";

// Example applications data - replace with your actual applications
const applications = [
  {
    title: "SCM: Supply Chain Management",
    description: "Manage your supply chain and inventory",
    link: "https://scm.premierenergiesphotovoltaic.com/",
    thumbnail: scm
  },
  {
    title: "MES: Manufacturing Execution System",
    description: "Track and manage your manufacturing processes",
    link: "https://mes.premierenergiesphotovoltaic.com/",
    thumbnail: "https://picsum.photos/seed/sales/800/400"
  },
  {
    title: "LEAF: Logistics Enquiry and Finalization",
    description: "Track and manage your logistics operations",
    link: "https://leaf.premierenergiesphotovoltaic.com/",
    thumbnail: leaf
  },
  {
    title: "SPOT: Smart Processing Of Tickets",
    description: "Manage your issues with speed and transparency via our smart assignment system",
    link: "https://spot.premierenergies.com/",
    thumbnail: spot
  },
  {
    title: "LEAFI: Logistics Enquiry and Finalization for Inbound Logistics",
    description: "Track and manage your logistics operations for inbound logistics",
    link: "https://leafi.premierenergiesphotovoltaic.com/",
    thumbnail: leafi
  },
  {
    title: "QMAP: Quality Map",
    description: "Real Time Feeed of Module Quality",
    link: "https://qmap.premierenergies.com/",
    thumbnail: leaf
  },
  {
    title: "STAMP: Seamless Task Approval & Management Platform",
    description: "Manage your tasks and approvals seamlessly",
    link: "https://stamp.premierenergies.com/",
    thumbnail: stamp
  },
];

const Index = () => {
  return (
    <ThemeProvider defaultTheme="system">
      <div className="min-h-screen bg-background p-8 transition-colors duration-300">
        <ThemeToggle />
        <div className="mx-auto max-w-7xl animate-fade-in">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold tracking-tight">Premier Energies Digital Portal</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Access all Premier Energies' business applications in one place
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {applications.map((app, index) => (
              <ApplicationCard
                key={index}
                title={app.title}
                description={app.description}
                link={app.link}
                thumbnail={app.thumbnail}
              />
            ))}
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Index;
