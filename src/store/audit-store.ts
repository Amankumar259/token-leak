import { create } from "zustand";

import { AuditResult } from "@/types/results";

interface AuditStore {
  result: AuditResult | null;
  setResult: (result: AuditResult) => void;
}

export const useAuditStore = create<AuditStore>((set) => ({
  result: null,

  setResult: (result) => set({ result }),
}));
