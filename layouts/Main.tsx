import Link from 'next/link';
import type { ReactNode } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

type IMainProps = {
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <>
    <main className="bg-slate-900 min-h-screen">
      <div className="container lg:px-56 px-4">
        <Header blogName={'Blog NextJS'} />
        <>{props.children}</>
        <Footer />
      </div>
    </main>
  </>
);

export { Main };
