import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";

function getRazorpay() {
  return new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID!,
    key_secret: process.env.RAZORPAY_KEY_SECRET!,
  });
}

export async function GET(request: NextRequest) {
  try {
    const razorpay = getRazorpay();
    const orderId = request.nextUrl.searchParams.get("order_id");
    if (!orderId) {
      return NextResponse.json(
        { error: "Missing order_id parameter" },
        { status: 400 }
      );
    }

    const order = await razorpay.orders.fetch(orderId);

    if (order.status === "paid") {
      const payments = await razorpay.orders.fetchPayments(orderId);
      const payment = payments.items?.[0];
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
  } catch (error) {
    console.error("Check payment status error:", error);
    return NextResponse.json(
      { error: "Failed to check payment status" },
      { status: 500 }
    );
  }
}
