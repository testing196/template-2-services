import { AdminDashboard } from "@/components/admin-dashboard"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AdminDashboard />
        </div>
      </main>
      <Footer />
    </div>
  )
}
