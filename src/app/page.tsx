import Link from "next/link";
import Button from "./_components/button/button.component";
import TopNav from "./_components/top-nav/top-nav.component";
import Footer from "./_components/footer/footer.component";
import Section from "./_components/section/section.component";
import Row from "./_components/row/row.component";
import Column from "./_components/column/column.component";
import { TopNavMenuItem } from "./_components/top-nav/top-nav.component";

export default function Page() {
  return (
    <main>
      <TopNav>
        <TopNavMenuItem href='/' active>Home</TopNavMenuItem>
        <TopNavMenuItem href='/learn'>Get Informed</TopNavMenuItem>
        <TopNavMenuItem href='/network'>Join the Network</TopNavMenuItem>
        <TopNavMenuItem href='/resources'>Resources</TopNavMenuItem>
        <TopNavMenuItem href='/events'>Actions</TopNavMenuItem>
      </TopNav>
      <Section backgroundColor="black" textColor="white">
        <Row paddingTop='sm' paddingBottom='sm'>
          <Column baseWidth={12} desktopWidth={6} className="pb-4 pb-md-0 d-flex align-items-centered justify-content-center">
            <img style={{maxHeight: '400px', maxWidth: '100%'}} src={'/earth.jpg'} alt=''/>
          </Column>
          <Column baseWidth={12} desktopWidth={6}>
            <h1 className="text-uppercase">The Earth Bill</h1>
            <h2 className="h3 text-uppercase mb-5">A 2030 Moonshot for Earth</h2>
            <h4 className="h3 mb-4">100% by 2030</h4>
            <ol className="h3 mb-4">
              <li className="mb-4">Renewable Energy</li>
              <li className="mb-4">Zero-Emission Vehicles</li>
              <li>Regenerative Agriculture</li>
            </ol>
            <span className="h4 mb-5 d-block">Enforcement tied to Ordinary Business Deductions.</span>
            <div className="d-flex d-lg-inline-block align-items-center justify-content-center">
              <a className="btn btn-pill-light" href="https://docs.google.com/forms/d/e/1FAIpQLScH6iofOSTf6n9GJXjhhz-PJ9kwkeLvNPO6yuPV7UtDvYy2ZA/viewform">Endorse The Earth Bill</a>
            </div>
          </Column>
        </Row>
      </Section>
      <Footer></Footer>
    </main>
  );
}
