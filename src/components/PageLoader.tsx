/**
 * Page Loader Component
 * 
 * Displays a loading spinner with NextDoc Global branding
 * while page components are being lazy-loaded.
 */

const PageLoader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6 animate-fade-in">
        {/* Medical cross pulse animation */}
        <div className="relative w-20 h-20 mx-auto">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-2 bg-medical-blue rounded-full animate-pulse"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2 h-16 bg-medical-teal rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
          </div>
        </div>
        
        {/* Loading text */}
        <div className="space-y-2">
          <p className="text-lg font-semibold text-foreground">Loading</p>
          <div className="flex gap-1 justify-center">
            <span className="w-2 h-2 bg-medical-blue rounded-full animate-bounce"></span>
            <span className="w-2 h-2 bg-medical-blue rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></span>
            <span className="w-2 h-2 bg-medical-blue rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
