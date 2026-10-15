"use client";

import { Printer } from "lucide-react";

export function PrintButton() {
  return <button className="button button-outline print-button" type="button" onClick={() => window.print()}><Printer size={15} /> Print this page</button>;
}