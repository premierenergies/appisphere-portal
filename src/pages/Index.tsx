
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ApplicationCard } from "@/components/ApplicationCard";

// Example applications data - replace with your actual applications
const applications = [
  {
    title: "HR Portal",
    description: "Employee management and HR processes dashboard",
    link: "https://hr.example.com",
    thumbnail: "https://picsum.photos/seed/hr/800/400"
  },
  {
    title: "Sales Dashboard",
    description: "Real-time sales tracking and analytics platform",
    link: "https://sales.example.com",
    thumbnail: "https://picsum.photos/seed/sales/800/400"
  },
  {
    title: "Customer Support",
    description: "Ticket management and customer service portal",
    link: "https://support.example.com",
    thumbnail: "https://picsum.photos/seed/support/800/400"
  }
];

const Index = () => {
  return (
    <ThemeProvider defaultTheme="system">
      <div className="min-h-screen bg-background p-8 transition-colors duration-300">
        <ThemeToggle />
        <div className="mx-auto max-w-7xl animate-fade-in">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold tracking-tight">Company Applications</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Access all your business applications in one place
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
