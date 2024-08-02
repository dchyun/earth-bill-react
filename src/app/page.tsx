import Link from "next/link";
import Button from "./_components/Button";

export default function Home() {
  return (
    <main>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h1>Hello World</h1>
            <Button>Example component</Button>
            <Link href='/events'>Events</Link>
            <Link href='/learn'>Learn</Link>
            <Link href='/network'>Network</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
