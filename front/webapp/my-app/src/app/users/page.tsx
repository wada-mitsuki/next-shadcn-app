import { Avatar } from '@/components/ui-parts/avatar';
import { Dashboard } from '@/components/ui-parts/dashboard';
import { Header } from '@/components/ui-parts/header';
import { TooltipProvider } from '@/components/shadcn-ui/ui/tooltip';

export default function Users() {
  return (
    <>
      <TooltipProvider>
        <Dashboard />
        <Avatar image="https://github.com/shadcn.png" />
      </TooltipProvider>
    </>
  );
}
