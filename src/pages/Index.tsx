import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-bg">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Welcome to Your App
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Start building your amazing project here!
        </p>
        <Link to="/login">
          <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
            Go to Login Page
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;
