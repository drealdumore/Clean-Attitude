import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href="/" className="font-semibold tracking-tight">
      Clean <span className="text-primary">Attitude</span>
    </Link>
  );
}
