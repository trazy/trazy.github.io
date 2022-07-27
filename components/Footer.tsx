import React, { FunctionComponent } from 'react';

interface FooterProps {}

export const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <footer className="block text-center border-t-2 py-16">
      <p>© 2012~ trazy. All right reserved.</p>
    </footer>
  );
};
