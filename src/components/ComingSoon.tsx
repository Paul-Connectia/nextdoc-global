import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";

interface ComingSoonProps {
  brandName: string;
  brandColor: string;
  description: string;
  launchTimeline?: string;
}

const ComingSoon = ({ brandName, brandColor, description, launchTimeline = "2025" }: ComingSoonProps) => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-1 flex items-center justify-center px-6 py-24">
        <Card className="max-w-2xl w-full border-2 shadow-elevated">
          <CardContent className="p-12 text-center space-y-8">
            <div 
              className="w-20 h-20 mx-auto rounded-2xl flex items-center justify-center text-4xl shadow-lg"
              style={{ backgroundColor: brandColor }}
            >
              🚀
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                {brandName}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {description}
              </p>
            </div>

            <div className="py-6">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent/50 border border-border">
                <span className="text-sm font-semibold text-foreground">
                  Launching {launchTimeline}
                </span>
              </div>
            </div>

            <div className="pt-4">
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.location.href = '/'}
                className="gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default ComingSoon;
