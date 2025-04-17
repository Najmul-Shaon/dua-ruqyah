"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import Menu from "./app/components/Menu";
import Navbar from "./app/components/Navbar";
import Categories from "./app/Categories";
import Contents from "./app/components/Contents";
import Settings from "./app/components/Settings";

export default function ClientLayout({ children }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex items-start gap-7 h-screen overflow-hidden pt-4 inter-font">
        <div className="sticky top-0 h-screen">
          <Menu />
        </div>

        <div className="w-full h-screen flex flex-col">
          <div className="sticky top-0 z-10">
            <Navbar />
          </div>

          <div className="grid grid-cols-12 gap-8 flex-1 overflow-hidden">
            <div className="col-span-3 sticky top-16 h-[calc(100vh-64px)] overflow-auto no-scrollbar">
              <Categories />
            </div>

            <div className="col-span-7 overflow-y-auto h-[calc(100vh-64px)] pr-2 no-scrollbar">
              <Contents />
              {children}
            </div>

            <div className="col-span-2 sticky top-16 h-[calc(100vh-64px)] overflow-auto">
              <Settings />
            </div>
          </div>
        </div>
      </div>
    </QueryClientProvider>
  );
}
