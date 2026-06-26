import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";

function getRazorpay() {
  return new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID!,
    key_secret: process.env.RAZORPAY_KEY_SECRET!,
  });
}

export async function POST(request: NextRequest) {
  try {
    const razorpay = getRazorpay();
    const { amount, currency = "INR", receipt } = await request.json();

    if (!amount || amount < 100) {
      return NextResponse.json(
        { error: "Amount must be at least ₹10" },
        { status: 400 }
      );
    }

    const order = await razorpay.orders.create({
      amount,
      currency,
      receipt: receipt || `receipt_${Date.now()}`,
    });

    return NextResponse.json({
      order_id: order.id,
      amount: order.amount,
      currency: order.currency,
    });
  } catch (error: unknown) {
    let message = "Unknown error";
    let details = "";
    if (error instanceof Error) {
      message = error.message;
      details = error.stack || "";
    } else if (typeof error === "string") {
      message = error;
    } else if (error && typeof error === "object") {
      try { message = JSON.stringify(error); } catch { message = String(error); }
    }
    console.error("Razorpay order creation error:", message, details, error);
    return NextResponse.json(
      { error: `Failed to create order: ${message}` },
      { status: 500 }
    );
  }
}
