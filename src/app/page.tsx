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
          <Column baseWidth={12} desktopWidth={4} className="pb-4 pb-md-0 d-flex align-items-centered justify-content-center">
            <img style={{maxHeight: '400px', maxWidth: '100%'}} src={'/earth.jpg'} alt=''/>
          </Column>
        </Row>
      </Section>
      <Footer></Footer>
    </main>
  );
}
