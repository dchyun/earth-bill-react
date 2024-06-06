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
            <Link href='/about'>About</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
