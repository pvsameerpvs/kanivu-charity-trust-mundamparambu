import { NextRequest, NextResponse } from "next/server";

const RAZORPAY_API = "https://api.razorpay.com/v1";

async function createRazorpayOrder(amount: number, currency: string, receipt: string) {
  const keyId = process.env.RAZORPAY_KEY_ID!;
  const keySecret = process.env.RAZORPAY_KEY_SECRET!;
  const auth = Buffer.from(`${keyId}:${keySecret}`).toString("base64");

  const res = await fetch(`${RAZORPAY_API}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${auth}`,
    },
    body: JSON.stringify({ amount, currency, receipt }),
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(`Razorpay ${res.status}: ${JSON.stringify(errorData)}`);
  }

  return res.json();
}

export async function POST(request: NextRequest) {
  try {
    const { amount, currency = "INR", receipt } = await request.json();

    if (!amount || amount < 100) {
      return NextResponse.json(
        { error: "Amount must be at least ₹10" },
        { status: 400 }
      );
    }

    const order = await createRazorpayOrder(
      amount,
      currency,
      receipt || `receipt_${Date.now()}`
    );

    return NextResponse.json({
      order_id: order.id,
      amount: order.amount,
      currency: order.currency,
    });
  } catch (error: unknown) {
    let message = "Unknown error";
    if (error instanceof Error) {
      message = error.message;
    } else if (typeof error === "string") {
      message = error;
    } else if (error && typeof error === "object") {
      try { message = JSON.stringify(error); } catch { message = String(error); }
    }
    console.error("Razorpay order creation error:", message, error);
    return NextResponse.json(
      { error: `Failed to create order: ${message}` },
      { status: 500 }
    );
  }
}
