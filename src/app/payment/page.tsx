
"use client";

import { Suspense } from "react"; // Import Suspense
import CheckoutForm from "@/components/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useSearchParams } from "next/navigation";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string);

// Wrap the component that uses useSearchParams() in Suspense
function PaymentPageContent() {
  const searchParams = useSearchParams();
  const amount = searchParams.get("amount");

  return (
    <Elements stripe={stripePromise} options={{ mode: "payment", currency: "usd", amount: Number(amount) }}>
      <CheckoutForm amount={Number(amount)} />
    </Elements>
  );
}

// Main PaymentPage component with Suspense boundary
export default function PaymentPage() {
  return (
    <Suspense fallback={<div>Loading payment details...</div>}>
      <PaymentPageContent />
    </Suspense>
  );
}