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
        <div className="flex gap-4 justify-center">
          <Link to="/login">
            <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
              Login
            </Button>
          </Link>
          <Link to="/signup">
            <Button variant="outline" className="border-primary/20 hover:bg-primary/5">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
