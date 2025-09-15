import { LoginForm } from "@/components/login-form"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto">
            <LoginForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
