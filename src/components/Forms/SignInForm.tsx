import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

export function SignInForm() {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-md relative">
        <button className="absolute right-4 top-4 text-gray-500 hover:text-gray-700">
          <X size={20} />
        </button>
        <CardHeader className="text-center pt-8 pb-4">
          <h2 className="text-2xl font-bold">Sign In to BeMyCoach</h2>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button variant="outline" className="w-full py-6 flex items-center justify-center gap-2">
            Log In with Google
          </Button>

          <Button variant="outline" className="w-full py-6 flex items-center justify-center gap-2">
            Log In with Facebook
          </Button>

          <Button variant="outline" className="w-full py-6 flex items-center justify-center gap-2">
            Log In with Apple ID
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator className="w-full" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">or sign in with email</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Mike" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Username or Email</Label>
              <Input id="email" type="email" placeholder="mikeanderson@gmail.com" />
            </div>

            <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white py-6">See your coach</Button>

            <div className="text-center text-sm">
              Don't have an account?{" "}
              <a href="#" className="text-primary font-medium">
                Sign up
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

