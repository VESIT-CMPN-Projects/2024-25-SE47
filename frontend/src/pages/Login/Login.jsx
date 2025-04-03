import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email" }),
  password: z.string().min(1, { message: "Password is required" }),
})


const Login = () => {
  const [isLoading, setIsLoading] = useState(false)

  // Check if there's a registered=true in the URL (for demo purposes)
  const isNewlyRegistered =
    typeof window !== "undefined" && new URLSearchParams(window.location.search).get("registered") === "true"

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit = (data) => {
    setIsLoading(true)
    // This would normally call an API endpoint
    console.log("Login form submitted with:", data)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      alert("Login successful! (Frontend demo only)")
    }, 1000)
  }

  return (
    <div className="flex min-h-screen items-center shadow-lg justify-center bg-white p-4">
      <div className="w-full rounded-xl bg-white p-6 md:p-8">
        <h1 className="mb-6 text-center text-3xl font-bold text-[#093b85] md:text-4xl">Welcome Back</h1>
        <p className="mb-8 text-center text-gray-600">Sign in to your account to continue</p>

        <form onSubmit={handleSubmit(onSubmit)} className="!mx-auto !my-4 !w-[30vw]">
          {isNewlyRegistered && (
            <div className="rounded-md bg-green-50 p-3 text-sm text-green-600">
              Account created successfully! Please log in with your credentials.
            </div>
          )}

          {/* Email Field */}
          <div className="space-y-2 !my-4">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="john@example.com"
              className={`w-full rounded-md border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } px-3 py-2 focus:border-[#093b85] focus:outline-none focus:ring-1 focus:ring-[#093b85]`}
              {...register("email")}
            />
            {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
          </div>

          {/* Password Field */}
          <div className="space-y-2 !my-4">
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="******"
              className={`w-full rounded-md border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } px-3 py-2 focus:border-[#093b85] focus:outline-none focus:ring-1 focus:ring-[#093b85]`}
              {...register("password")}
            />
            {errors.password && <p className="text-xs text-red-500">{errors.password.message}</p>}
          </div>

          <div className="flex justify-end">
            <a href="#" className="text-sm text-[#093b85] hover:underline">
              Forgot password?
            </a>
          </div>

          <div className="flex flex-col gap-4 !my-4">
            <button
              type="submit"
              className="w-full rounded-md bg-[#093b85] py-3 text-white transition-colors hover:bg-[#072a60] focus:outline-none focus:ring-2 focus:ring-[#093b85] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              disabled={isLoading}
            >
              {isLoading ? "Signing In..." : "Sign In"}
            </button>
            <p className="text-center text-sm text-gray-600">
              Don&apos;t have an account?{" "}
              <a href="/signup" className="font-medium text-[#093b85] hover:underline">
                Sign up
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login

