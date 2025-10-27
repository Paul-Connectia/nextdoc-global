import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setIsVisible(false);
  };

  const handleManage = () => {
    window.location.href = '/cookies';
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-24 md:bottom-8 right-6 z-[100] max-w-md animate-fade-in">
      <Card className="shadow-elevated border-2 backdrop-blur-sm bg-card/95">
        <CardContent className="p-6 space-y-4">
          <div className="space-y-2">
            <h3 className="font-semibold text-base text-foreground">Cookie Preferences</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We use cookies to enhance your experience and analyse site usage. Your privacy matters to us.
            </p>
          </div>
          <div className="flex gap-2 flex-wrap">
            <Button
              variant="default"
              size="default"
              onClick={handleAccept}
              className="flex-1 min-w-[100px]"
            >
              Accept All
            </Button>
            <Button
              variant="outline"
              size="default"
              onClick={handleReject}
              className="flex-1 min-w-[100px]"
            >
              Reject
            </Button>
            {/* <Button 
              variant="ghost" 
              size="default" 
              onClick={handleManage}
              className="w-full"
            >
              Manage Preferences
            </Button> */}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CookieConsent;