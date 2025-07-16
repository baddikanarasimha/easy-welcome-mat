import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, ArrowLeft, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Basic validation
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    // Simulate password reset process
    setTimeout(() => {
      toast({
        title: "Success",
        description: "Password reset instructions sent to your email!",
      });
      
      setIsEmailSent(true);
      setIsLoading(false);
    }, 1500);
  };

  const handleResendEmail = () => {
    setIsLoading(true);
    setTimeout(() => {
      toast({
        title: "Email Resent",
        description: "Password reset instructions sent again!",
      });
      setIsLoading(false);
    }, 1000);
  };

  const resetForm = () => {
    setEmail('');
    setIsEmailSent(false);
  };

  if (isEmailSent) {
    return (
      <div className="min-h-screen bg-gradient-bg flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <Card className="shadow-elegant border-0 bg-card/50 backdrop-blur-sm">
            <CardHeader className="space-y-1 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Check Your Email
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                We've sent password reset instructions to
              </CardDescription>
              <p className="text-sm font-medium text-foreground">{email}</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center space-y-4">
                <p className="text-sm text-muted-foreground">
                  Didn't receive the email? Check your spam folder or
                </p>
                
                <Button
                  onClick={handleResendEmail}
                  variant="outline"
                  className="w-full border-primary/20 hover:bg-primary/5"
                  disabled={isLoading}
                >
                  {isLoading ? 'Resending...' : 'Resend Email'}
                </Button>

                <div className="flex items-center justify-center space-x-4 text-sm">
                  <button
                    onClick={resetForm}
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    Try different email
                  </button>
                  <span className="text-muted-foreground">•</span>
                  <Link
                    to="/login"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    Back to login
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-bg flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="shadow-elegant border-0 bg-card/50 backdrop-blur-sm">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Forgot Password?
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Enter your email address and we'll send you instructions to reset your password
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 border-border/50 focus:border-primary/50 focus:ring-primary/20"
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 text-primary-foreground"
                disabled={isLoading}
              >
                {isLoading ? 'Sending Instructions...' : 'Send Reset Instructions'}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <Link
                to="/login"
                className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to login
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ForgotPassword;