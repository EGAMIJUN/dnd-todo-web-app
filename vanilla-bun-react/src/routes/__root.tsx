import Navigation from "@/components/page-components/root/navigation";
import { DataContextWrapper } from "@/context";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

const RootLayout = () => (
  <div className="px-20">
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
