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
    <div>
      <ul className="mb-3">
        {navMenu.map(({ href, label, submenu }, index) => (
          <li key={index}>
            {submenu ? (
              <Collapsible>
                <CollapsibleTrigger asChild>
                  <Button variant='ghost' className='w-full justify-between'>
                    {label}
                    <ChevronsUpDown />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className='ps-2'>
                  <ul className="border-l border-gray-200 border-opacity-15">
                    {submenu.map(({ href, label }, index) => (
                      <li key={index}>
                        <Button asChild variant='ghost' className='w-full justify-start text-muted-foreground hover:bg-transparent'>
                          <a href={href} className="">{label}</a>
                        </Button>
                      </li>
                    ))}
                  </ul>
                </CollapsibleContent>
              </Collapsible>
            ) : (
              <Button asChild variant='ghost' className='w-full justify-start'>
                <a href={href} className="">{label}</a>
              </Button>
            )}
          </li>
        ))}
      </ul>

      <Separator className='bg-muted-foreground/20' />

      <div className="flex items-center gap-2 mt-4">
        
        <Button  className='w-full'><Link to="/iletisim" className="block w-full h-full text-center">İletişim</Link>
        </Button>
      </div>
    </div>
  );
}

export default MobileMenu;
