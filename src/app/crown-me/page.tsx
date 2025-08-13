"use client";

import CrownMeContent from "@/components/CrownMeContent";
import { Suspense } from "react";


export default function CrownMePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CrownMeContent />
    </Suspense>
  );
}
