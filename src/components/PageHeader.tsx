import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface BreadcrumbItemType {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  breadcrumbItems?: BreadcrumbItemType[];
}

const PageHeader = ({ breadcrumbItems }: PageHeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-6">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
          aria-label="Navigate to home"
        >
          <Home className="h-5 w-5" />
          <span className="font-semibold hidden sm:inline-block">NextDoc Global</span>
        </Link>

        {breadcrumbItems && breadcrumbItems.length > 0 && (
          <nav aria-label="Breadcrumb" className="ml-6 hidden md:block">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                
                {breadcrumbItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-1.5">
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      {item.href ? (
                        <BreadcrumbLink asChild>
                          <Link to={item.href}>{item.label}</Link>
                        </BreadcrumbLink>
                      ) : (
                        <BreadcrumbPage>{item.label}</BreadcrumbPage>
                      )}
                    </BreadcrumbItem>
                  </div>
                ))}
              </BreadcrumbList>
            </Breadcrumb>
          </nav>
        )}
      </div>
    </header>
  );
};

export default PageHeader;
