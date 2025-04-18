"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import Menu from "./app/components/Menu";
import Navbar from "./app/components/Navbar";
import CatContentLayout from "./app/CatContentLayout";
import Settings from "./app/components/Settings";

export default function ClientLayout({ children }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex items-start gap-7 pt-4 inter-font h-full min-h-screen">
        <div className="sticky top-0 h-screen">
          <Menu />
        </div>
        <div className="flex-1 overflow-auto">
          <Navbar />
          <div className="grid grid-cols-12 gap-8">
            <div className="lg:col-span-10 col-span-12">
              <CatContentLayout />
            </div>
            <div className="hidden lg:block col-span-2">
              <Settings />
            </div>
          </div>
        </div>
      </div>
    </QueryClientProvider>
  );
}
