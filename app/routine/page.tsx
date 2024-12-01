"use client";

import React from "react";
import PageContent from "@/components/PageContent";
import { RoutineProvider } from "@/context";

const Routine = () => {
  return (
    <RoutineProvider>
      <PageContent />
    </RoutineProvider>
  );
};

export default Routine;
