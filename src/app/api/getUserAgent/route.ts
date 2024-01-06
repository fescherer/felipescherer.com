import { NextRequest, NextResponse, userAgent } from 'next/server'

export async function GET(request: NextRequest) {
  const { device } = userAgent(request)

  return new NextResponse(JSON.stringify(device.type), { status: 500 })
}
