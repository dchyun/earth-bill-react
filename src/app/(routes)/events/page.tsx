import type { Metadata } from "next";
import Link from "next/link";
import Button from "../../_components/shared/button/button.component";

export const metadata: Metadata = {
  title: 'Events',
};

export default function Page() {
  return (
    <main>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h1>Hello World</h1>
            <Button type='primary' href="#">Example component</Button>
            <Link href='/'>Home</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
