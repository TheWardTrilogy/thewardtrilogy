// File: src/app/page.js
import PageClient from './page-client';

export const metadata = {
  title: 'W.H. Clark',
  description: 'Explore the gripping mystery thriller trilogy by W.H. Clark.',
};

export default function Page() {
  return <PageClient />;
}