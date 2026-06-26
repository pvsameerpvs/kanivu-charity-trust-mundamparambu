import { NextRequest, NextResponse } from "next/server";

const RAZORPAY_API = "https://api.razorpay.com/v1";

function getAuth() {
  const keyId = process.env.RAZORPAY_KEY_ID!;
  const keySecret = process.env.RAZORPAY_KEY_SECRET!;
  return Buffer.from(`${keyId}:${keySecret}`).toString("base64");
}

async function fetchRazorpay(path: string) {
  const auth = getAuth();
  const res = await fetch(`${RAZORPAY_API}${path}`, {
    headers: { Authorization: `Basic ${auth}` },
  });
  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(`Razorpay ${res.status}: ${JSON.stringify(errorData)}`);
  }
  return res.json();
}

export async function GET(request: NextRequest) {
  try {
    const orderId = request.nextUrl.searchParams.get("order_id");
    if (!orderId) {
      return NextResponse.json(
        { error: "Missing order_id parameter" },
        { status: 400 }
      );
    }

    const order = await fetchRazorpay(`/orders/${orderId}`);

    if (order.status === "paid") {
      const payments = await fetchRazorpay(`/orders/${orderId}/payments`);
      const payment = payments?.items?.[0];
      return NextResponse.json({
        paid: true,
        order_id: orderId,
        payment_id: payment?.id || null,
        amount: order.amount,
      });
    }

    return NextResponse.json({
      paid: false,
      order_id: orderId,
      status: order.status,
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
    console.error("Check payment status error:", message, error);
    return NextResponse.json(
      { error: `Failed to check payment status: ${message}` },
      { status: 500 }
    );
  }
}
