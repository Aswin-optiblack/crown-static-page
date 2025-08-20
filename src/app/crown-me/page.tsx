"use client";

import LoadingSpinner from "@/components/LoadingSpinner";
import { Suspense, lazy } from "react";

const CrownMeContent = lazy(() => import("@/components/CrownMeContent"));

export default function CrownMePage() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <CrownMeContent />
    </Suspense>
  );
}
