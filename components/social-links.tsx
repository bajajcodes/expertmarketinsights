// TODO: store and use icons from compoennts/icons.tsx
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { Button } from './ui/button';
import { siteConfig } from '@/config/site';
import Link from 'next/link';

export function SocialLinks() {
  return (
    <div className="flex items-center space-x-2">
      <Button variant="link" size="icon" className="text-black bg-white">
        <Link href={siteConfig.links.facebook} target="_blank">
          <span>
            <Facebook className="h-4 w-4" />
          </span>
        </Link>
      </Button>
      <Button variant="link" size="icon" className="text-black bg-white">
        <Link href={siteConfig.links.instagram} target="_blank">
          <span>
            <Instagram className="h-4 w-4" />
          </span>
        </Link>
      </Button>
      <Button variant="link" size="icon" className="text-black bg-white">
        <Link href={siteConfig.links.linkedin} target="_blank">
          <span>
            <Linkedin className="h-4 w-4" />
          </span>
        </Link>
      </Button>
    </div>
  );
}
