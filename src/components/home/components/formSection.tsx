"use client";

import { services, API_URL } from "@/src/lib/constants";
import Image from "next/image";
import { FormEvent, useState } from "react";

type FormValues = {
  name: string;
  email: string;
  mobile: string;
  description: string;
};

type FormErrors = Partial<FormValues>;

const initialForm: FormValues = {
  name: "",
  email: "",
  mobile: "",
  description: "",
};

export default function FormSection() {
  const [form, setForm] = useState<FormValues>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [apiError, setApiError] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateField = (key: keyof FormValues, value: string) => {
    const trimmed = value.trim();

    if (key === "name") {
      if (!trimmed) return "Name is required";
      if (trimmed.length < 2) return "Name must be at least 2 characters";
      return "";
    }

    if (key === "email") {
      if (!trimmed) return "Email is required";
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(trimmed)) return "Enter a valid email address";
      return "";
    }

    if (key === "mobile") {
      if (!trimmed) return "Phone number is required";
      const normalized = trimmed.replace(/\s+/g, "");
      const phoneRegex = /^(\+?\d{10,15})$/;
      if (!phoneRegex.test(normalized)) return "Enter a valid phone number";
      return "";
    }

    if (key === "description") {
      if (!trimmed) return "Description is required";
      if (trimmed.length < 10) return "Please enter at least 10 characters";
      return "";
    }

    return "";
  };

  const validateForm = () => {
    const nextErrors: FormErrors = {
      name: validateField("name", form.name),
      email: validateField("email", form.email),
      mobile: validateField("mobile", form.mobile),
      description: validateField("description", form.description),
    };

    const cleanedErrors = Object.fromEntries(
      Object.entries(nextErrors).filter(([, value]) => value),
    ) as FormErrors;

    setErrors(cleanedErrors);
    return Object.keys(cleanedErrors).length === 0;
  };

  const handleChange = (key: keyof FormValues, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));

    if (errors[key]) {
      setErrors((prev) => ({
        ...prev,
        [key]: validateField(key, value) || undefined,
      }));
    }

    if (apiError) setApiError("");
    if (submitted) setSubmitted(false);
  };

  const handleBlur = (key: keyof FormValues) => {
    const error = validateField(key, form[key]);
    setErrors((prev) => ({
      ...prev,
      [key]: error || undefined,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (loading) return;

    setApiError("");

    const isValid = validateForm();
    if (!isValid) return;

    try {
      setLoading(true);

      const res = await fetch(API_URL + "/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          mobile: form.mobile.trim(),
          description: form.description.trim(),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setApiError(data?.message || "Something went wrong. Please try again.");
        return;
      }

      setSubmitted(true);
      setErrors({});
      setApiError("");
      setForm(initialForm);
    } catch {
      setApiError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (hasError: boolean) =>
    `w-full border rounded-md px-4 py-3 outline-none transition ${
      hasError
        ? "border-red-500 focus:border-red-500"
        : "border-gray-300 focus:border-black"
    }`;

  return (
    <section id="contact" className="w-full max-w-7xl mx-auto px-6 py-16">
      <div className="grid lg:grid-cols-2 gap-10 items-stretch">
        <div className="grid grid-cols-7">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative ${service.color} flex flex-col justify-between hover:scale-[1.03] hover:shadow-2xl perspective-distant hover:z-10 hover:rounded-md overflow-hidden`}
            >
              <div className="flex-1 flex items-center justify-center min-h-[275px]">
                <p className="text-white text-lg lg:text-xl font-medium -rotate-90 whitespace-nowrap">
                  {service.title}
                </p>
              </div>

              <div className="relative w-full h-44">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-fill"
                />
              </div>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-3">
            Let’s level up your <br /> brand, together
          </h2>

          <p className="text-gray-500 mb-8">
            You can reach us anytime via yourmail
          </p>

          <form className="space-y-5" onSubmit={handleSubmit} noValidate>
            <div>
              <label className="text-sm text-gray-600 mb-1 block">Name</label>
              <input
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
                onBlur={() => handleBlur("name")}
                className={inputClass(Boolean(errors.name))}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="text-sm text-gray-600 mb-1 block">Email</label>
              <input
                type="email"
                placeholder="you@company.com"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                onBlur={() => handleBlur("email")}
                className={inputClass(Boolean(errors.email))}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="text-sm text-gray-600 mb-1 block">
                Phone number
              </label>
              <input
                type="tel"
                placeholder="IN  +91 9087654321"
                value={form.mobile}
                onChange={(e) => handleChange("mobile", e.target.value)}
                onBlur={() => handleBlur("mobile")}
                className={inputClass(Boolean(errors.mobile))}
              />
              {errors.mobile && (
                <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
              )}
            </div>

            <div>
              <label className="text-sm text-gray-600 mb-1 block">
                How can we help?
              </label>
              <textarea
                placeholder="Tell us a little about the project..."
                rows={4}
                value={form.description}
                onChange={(e) => handleChange("description", e.target.value)}
                onBlur={() => handleBlur("description")}
                className={
                  inputClass(Boolean(errors.description)) + " resize-none"
                }
              />
              {errors.description && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.description}
                </p>
              )}
            </div>

            {apiError && (
              <div className="rounded-md border border-red-200 bg-red-50 px-4 py-3">
                <p className="text-sm text-red-600">{apiError}</p>
              </div>
            )}

            {submitted && (
              <div className="rounded-md border border-green-200 bg-green-50 px-4 py-3">
                <p className="text-sm font-medium text-green-700">
                  Submitted successfully
                </p>
                <p className="text-sm text-green-600 mt-1">
                  Thanks for reaching out. Our team will contact you soon.
                </p>
              </div>
            )}

            {!submitted &&  (
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#ff4b2e] hover:bg-[#e84328] text-white font-medium py-4 rounded-md transition disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? "Submitting..." : "Get started"}
              </button>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
