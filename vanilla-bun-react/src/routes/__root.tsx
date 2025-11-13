import Navigation from "@/components/page-components/root/navigation";
import { DataContextWrapper } from "@/context";
import { cn } from "@/lib/utils";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { ArrowRightToLine } from "lucide-react";

const RootLayout = () => (
  <div className="px-20 relative">
    {/* <div */}
    {/*   className={cn( */}
    {/*     `absolute -left-[calc(48px)] top-[calc(50vh-160px)]`, */}
    {/*     `h-80 w-24 border border-primary rounded-r-lg`, */}
    {/*     `flex justify-end pr-4 items-center`, */}
    {/*     `bg-primary/50 shadow-lg`, */}
    {/*     `hover:cursor-pointer hover:left-0 hover:pr-10`, */}
    {/*     `text-primary`, */}
    {/*     `transition-all duration-300`, */}
    {/*   )} */}
    {/* > */}
    {/*   <ArrowRightToLine strokeWidth={3} /> */}
    {/* </div> */}
    <Navigation />
    <div className="p-4">
      <DataContextWrapper>
        <Outlet />
      </DataContextWrapper>
    </div>
    <TanStackRouterDevtools />
  </div>
);

export const Route = createRootRoute({ component: RootLayout });
