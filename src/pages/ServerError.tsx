import { Button } from "@/components/ui/button";
import { ServerCrash } from "lucide-react";
import { useNavigate } from "react-router-dom";

/**
 * 500 Server Error Page
 * 
 * Displayed when a server-side error occurs.
 * Generic error page for any backend failures.
 */

const ServerError = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-6">
      <div className="max-w-2xl w-full text-center space-y-8 animate-fade-in">
        {/* Error icon */}
        <div className="flex justify-center">
          <div className="w-24 h-24 rounded-full bg-destructive/10 flex items-center justify-center">
            <ServerCrash className="w-12 h-12 text-destructive" />
          </div>
        </div>

        {/* Error message */}
        <div className="space-y-4">
          <h1 className="text-6xl font-bold text-foreground">500</h1>
          <h2 className="text-3xl font-semibold text-foreground">
            Server Error
          </h2>
          <p className="text-xl text-muted-foreground max-w-md mx-auto">
            Our servers are experiencing issues. Please try again in a few moments.
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button
            onClick={() => window.location.reload()}
            variant="default"
            size="lg"
            className="min-w-[200px]"
          >
            Refresh Page
          </Button>
          <Button
            onClick={() => navigate("/")}
            variant="outline"
            size="lg"
            className="min-w-[200px]"
          >
            Return Home
          </Button>
        </div>

        {/* Support message */}
        <div className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            If this problem persists, please contact our support team:
          </p>
          <a
            href="mailto:info@nextdocglobal.com"
            className="text-primary hover:text-primary-glow underline text-sm font-medium inline-block mt-2"
          >
            info@nextdocglobal.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServerError;
