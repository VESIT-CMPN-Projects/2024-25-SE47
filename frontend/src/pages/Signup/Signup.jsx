import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const signupSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  street: z.string().min(1, { message: "Street address is required" }),
  city: z.string().min(1, { message: "City is required" }),
  state: z.string().min(1, { message: "State is required" }),
  zipCode: z.string().min(1, { message: "Zip code is required" }),
  country: z.string().min(1, { message: "Country is required" }),
})

const Signup = () => {
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
      street: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
    },
  })

  const onSubmit = (data) => {
    setIsLoading(true)
    // This would normally call an API endpoint
    console.log("Form submitted with:", data)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      alert("Signup successful! (Frontend demo only)")
    }, 1000)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-white p-4">
      <div className="w-full max-w-4xl rounded-xl bg-white p-6 md:p-8">
        <h1 className="mb-6 text-center text-3xl font-bold text-[#093b85] md:text-4xl mt-8">Create an Account</h1>
        <p className="mb-8 text-center text-gray-600">Join us today and enjoy a seamless shopping experience</p>

        <form onSubmit={handleSubmit(onSubmit)} className="!m-auto !w-[40vw]">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Name Field */}
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="John Doe"
                className={`w-full rounded-md border ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } px-3 py-2 focus:border-[#093b85] focus:outline-none focus:ring-1 focus:ring-[#093b85]`}
                {...register("name")}
              />
              {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
            </div>

            {/* Email Field */}
            <div className="space-y-2">
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
            <div className="space-y-2">
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

            {/* Phone Field */}
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium">
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="+1 (555) 123-4567"
                className={`w-full rounded-md border ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                } px-3 py-2 focus:border-[#093b85] focus:outline-none focus:ring-1 focus:ring-[#093b85]`}
                {...register("phone")}
              />
              {errors.phone && <p className="text-xs text-red-500">{errors.phone.message}</p>}
            </div>
          </div>

          {/* Address Section */}
          <div className="rounded-lg border border-gray-200 p-4 !mt-4">
            <h3 className="mb-4 text-lg font-medium text-[#093b85]">Address Information</h3>
            <div className="grid gap-4 md:grid-cols-2">
              {/* Street Address */}
              <div className="space-y-2">
                <label htmlFor="street" className="text-sm font-medium">
                  Street Address
                </label>
                <input
                  id="street"
                  type="text"
                  placeholder="123 Main St"
                  className={`w-full rounded-md border ${
                    errors.street ? "border-red-500" : "border-gray-300"
                  } px-3 py-2 focus:border-[#093b85] focus:outline-none focus:ring-1 focus:ring-[#093b85]`}
                  {...register("street")}
                />
                {errors.street && <p className="text-xs text-red-500">{errors.street.message}</p>}
              </div>

              {/* City */}
              <div className="space-y-2">
                <label htmlFor="city" className="text-sm font-medium">
                  City
                </label>
                <input
                  id="city"
                  type="text"
                  placeholder="New York"
                  className={`w-full rounded-md border ${
                    errors.city ? "border-red-500" : "border-gray-300"
                  } px-3 py-2 focus:border-[#093b85] focus:outline-none focus:ring-1 focus:ring-[#093b85]`}
                  {...register("city")}
                />
                {errors.city && <p className="text-xs text-red-500">{errors.city.message}</p>}
              </div>

              {/* State */}
              <div className="space-y-2">
                <label htmlFor="state" className="text-sm font-medium">
                  State
                </label>
                <input
                  id="state"
                  type="text"
                  placeholder="NY"
                  className={`w-full rounded-md border ${
                    errors.state ? "border-red-500" : "border-gray-300"
                  } px-3 py-2 focus:border-[#093b85] focus:outline-none focus:ring-1 focus:ring-[#093b85]`}
                  {...register("state")}
                />
                {errors.state && <p className="text-xs text-red-500">{errors.state.message}</p>}
              </div>

              {/* Zip Code */}
              <div className="space-y-2">
                <label htmlFor="zipCode" className="text-sm font-medium">
                  Zip Code
                </label>
                <input
                  id="zipCode"
                  type="text"
                  placeholder="10001"
                  className={`w-full rounded-md border ${
                    errors.zipCode ? "border-red-500" : "border-gray-300"
                  } px-3 py-2 focus:border-[#093b85] focus:outline-none focus:ring-1 focus:ring-[#093b85]`}
                  {...register("zipCode")}
                />
                {errors.zipCode && <p className="text-xs text-red-500">{errors.zipCode.message}</p>}
              </div>

              {/* Country */}
              <div className="md:col-span-2 space-y-2">
                <label htmlFor="country" className="text-sm font-medium">
                  Country
                </label>
                <input
                  id="country"
                  type="text"
                  placeholder="United States"
                  className={`w-full rounded-md border ${
                    errors.country ? "border-red-500" : "border-gray-300"
                  } px-3 py-2 focus:border-[#093b85] focus:outline-none focus:ring-1 focus:ring-[#093b85]`}
                  {...register("country")}
                />
                {errors.country && <p className="text-xs text-red-500">{errors.country.message}</p>}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <button
              type="submit"
              className="w-full !mt-4 rounded-md bg-[#093b85] py-3 text-white transition-colors hover:bg-[#072a60] focus:outline-none focus:ring-2 focus:ring-[#093b85] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              disabled={isLoading}
            >
              {isLoading ? "Creating Account..." : "Create Account"}
            </button>
            <p className="text-center text-sm text-gray-600">
              Already have an account?{" "}
              <a href="/login" className="font-medium text-[#093b85] hover:underline">
                Sign in
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup

