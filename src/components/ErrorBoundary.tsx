import React, { Component, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

/**
 * Error Boundary Component
 * 
 * Catches JavaScript errors anywhere in the component tree,
 * logs them, and displays a fallback UI instead of crashing the app.
 * 
 * @see https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary
 */

interface ErrorBoundaryProps {
  children: ReactNode;
  /** Custom fallback UI (optional) */
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    // Update state so the next render shows fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error to console in development
    if (process.env.NODE_ENV === "development") {
      console.error("ErrorBoundary caught an error:", error, errorInfo);
    }

    // In production, send to error tracking service
    // Example: logErrorToService(error, errorInfo);
    
    this.setState({ errorInfo });
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default fallback UI
      return (
        <div className="min-h-screen flex items-center justify-center bg-background p-6">
          <div className="max-w-2xl w-full text-center space-y-8">
            {/* Error icon */}
            <div className="flex justify-center">
              <div className="w-24 h-24 rounded-full bg-destructive/10 flex items-center justify-center">
                <AlertTriangle className="w-12 h-12 text-destructive" />
              </div>
            </div>

            {/* Error message */}
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-foreground">
                Something Went Wrong
              </h1>
              <p className="text-xl text-muted-foreground">
                We're sorry, but an unexpected error occurred.
              </p>
            </div>

            {/* Error details (development only) */}
            {process.env.NODE_ENV === "development" && this.state.error && (
              <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-6 text-left">
                <p className="font-mono text-sm text-destructive font-semibold mb-2">
                  {this.state.error.name}: {this.state.error.message}
                </p>
                {this.state.errorInfo && (
                  <pre className="text-xs text-muted-foreground overflow-auto max-h-40">
                    {this.state.errorInfo.componentStack}
                  </pre>
                )}
              </div>
            )}

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={this.handleReset}
                variant="default"
                size="lg"
                className="min-w-[200px]"
              >
                Try Again
              </Button>
              <Button
                onClick={() => (window.location.href = "/")}
                variant="outline"
                size="lg"
                className="min-w-[200px]"
              >
                Return Home
              </Button>
            </div>

            {/* Support message */}
            <p className="text-sm text-muted-foreground">
              If this problem persists, please contact{" "}
              <a
                href="mailto:info@nextdocglobal.com"
                className="text-primary hover:text-primary-glow underline"
              >
                info@nextdocglobal.com
              </a>
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
