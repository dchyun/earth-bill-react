import Link from "next/link";
import Button from "../../_components/button/button.component";

export default function Page() {
  return (
    <main>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h1>Hello World</h1>
            <Button>Example component</Button>
            <Link href='/'>Home</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
