'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface NavigationLinkProp {
  href: string;
  children: ReactNode;
  className?: string;
}

export default function NavigationLink({ href, children, className }: NavigationLinkProp) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <motion.div
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        href={href}
        className={cn(
          'inline-block px-2 py-3 transition-colors',
          isActive ? 'text-fuchsia-500' : 'text-gray-500 hover:text-black',
          className
        )}
        aria-current={isActive ? 'page' : undefined}
      >
        {children}
      </Link>
    </motion.div>
  );
}
