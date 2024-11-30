'use client'

import Link from 'next/link';
import { useState, useEffect } from 'react';

const MdxHeading = ({ h, id, ...rest }: {h: string, id: string}) => {
  // ensure the page has fully loaded before running
  const [hasMounted, setHasMounted] = useState(false);
  const VariableHeader = h;
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  // if our heading "H" tag has a class of "id"
  // if it has an ID return this correct heading with the class associated
  if (id) {
    return (
      <Link href={`#${id}`}>
        <VariableHeader {...rest} />
      </Link>
    );
  }
  // if not return a regular unlinked header
  return <h1 {...rest} />;
};

// cycle through and make H1 - H6 heading tags to use
export const MdxH1 = (props: any) => <MdxHeading h='h1' {...props} />;
export const MdxH2 = (props: any) => <MdxHeading h='h2' {...props} />;
export const MdxH3 = (props: any) => <MdxHeading h='h3' {...props} />;
export const MdxH4 = (props: any) => <MdxHeading h='h4' {...props} />;
export const MdxH5 = (props: any) => <MdxHeading h='h5' {...props} />;
export const MdxH6 = (props: any) => <MdxHeading h='h6' {...props} />;
