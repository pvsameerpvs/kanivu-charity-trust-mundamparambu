import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    hasKeyId: !!process.env.RAZORPAY_KEY_ID,
    hasKeySecret: !!process.env.RAZORPAY_KEY_SECRET,
    hasPublicKeyId: !!process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
    hasAppUrl: !!process.env.NEXT_PUBLIC_APP_URL,
    keyIdLength: process.env.RAZORPAY_KEY_ID?.length,
    keySecretLength: process.env.RAZORPAY_KEY_SECRET?.length,
    keyIdPrefix: process.env.RAZORPAY_KEY_ID?.substring(0, 9),
    keySecretPrefix: process.env.RAZORPAY_KEY_SECRET?.substring(0, 5),
    nodeEnv: process.env.NODE_ENV,
    vercelEnv: process.env.VERCEL_ENV,
  });
}
