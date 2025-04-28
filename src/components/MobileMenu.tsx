import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { MenuItem } from '@/types';
import { Separator } from '@/components/ui/separator';
import { ChevronsUpDown } from 'lucide-react';
import { Link } from 'react-router-dom';

type MobileMenuProps = {
  navMenu: MenuItem[];
};

const MobileMenu = ({ navMenu }: MobileMenuProps) => {
  return (
    <div className=" text-foreground p-3 rounded-2xl  w-full">
      <ul className="mb-4">
        {navMenu.map(({ href, label, submenu }, index) => (
          <li key={index}>
            {submenu ? (
              <Collapsible>
                <CollapsibleTrigger asChild>
                  <Button variant='ghost' className='w-full text-foreground justify-between'>
                    {label}
                    <ChevronsUpDown />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className='ps-2'>
                  <ul className="border-l border-gray-200 text-foreground space-y-1 mt-1">
                    {submenu.map(({ href, label }, subIndex) => (
                      <li key={subIndex}>
                        <Button asChild variant='ghost' className='w-full justify-start text-foreground hover:bg-muted'>
                          <a href={href} className="block w-full text-left">{label}</a>
                        </Button>
                      </li>
                    ))}
                  </ul>
                </CollapsibleContent>
              </Collapsible>
            ) : (
              <Button asChild variant='ghost' className='w-full text-foreground justify-start hover:bg-muted'>
                <a href={href} className="block w-full text-left">{label}</a>
              </Button>
            )}
          </li>
        ))}
      </ul>

      <Separator className='bg-muted-foreground/20 my-4' />

      <div className="flex items-center gap-2">
        <Button className='w-full'>
          <Link to="/iletisim" className="block w-full text-center">İletişim</Link>
        </Button>
      </div>
    </div>
  );
}

export default MobileMenu;
