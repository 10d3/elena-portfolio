import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["es", "ro"],

  // Used when no locale matches
  defaultLocale: "es",

});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(ro|es)/:path*"],
};
