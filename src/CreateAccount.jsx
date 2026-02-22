import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const CreateAccount = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account Created!");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl">
            Create Account
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">

            <div className="space-y-2">
              <Label >Name</Label>
              <Input id="name" placeholder="Enter your name" required />
            </div>


            <div className="space-y-2">
              <Label >Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>


            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                required
              />
            </div>


            <Button type="submit" className="w-full">
              Create Account
            </Button>
            
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateAccount;
