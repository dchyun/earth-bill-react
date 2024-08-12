import Link from "next/link";
import Button from "./_components/button/button.component";
import TopNav from "./_components/top-nav/top-nav.component";
import Footer from "./_components/footer/footer.component";
import Section from "./_components/section/section.component";
import Row from "./_components/row/row.component";
import Column from "./_components/column/column.component";
import LinkCard from "./_components/link-card/link-card.component";
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
              <Button type="light" href="https://docs.google.com/forms/d/e/1FAIpQLScH6iofOSTf6n9GJXjhhz-PJ9kwkeLvNPO6yuPV7UtDvYy2ZA/viewform" target="_blank">Endorse The Earth Bill</Button>
            </div>
          </Column>
        </Row>
        <Row paddingTop="sm">
          <Column>
            <div className="iframe-video-wrapper">
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/qlwOrQ4mcPA?si=xBevsAnWaqMpGGxb" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
          </Column>
        </Row>
        <Row paddingTop="md" paddingBottom="md">
          <Column baseWidth={12} tabletWidth={10}>
            <p className="h4 mb-5">These solutions can save our planet. <br/> Help get them passed by Congress immediately.</p>
            <p>The Earth Bill, officially called The Earth Act to Stop Climate Pollution by 2030, was <Link href={"https://www.congress.gov/bill/118th-congress/house-bill/598"} className="link-light" target="_blank">introduced in the 118th Congress<span className="sr-only">opens in new window</span></Link> by Representative Espaillat (NY-13), with original cosponsors Rep. Velazquez (NY-07), Rep. Lee (CA-12), Rep. Nadler (NY-12), & Rep. Grijalva (AZ-07). It is a visionary, science-based law to mandate an end to climate pollution at the source - at the industry level - on the timeline required to save ourselves and the future.</p>
            <p>By simply fixing how our electricity, cars and food are made - we can reduce 40% more of our pollution - on top of 25% in motion - for a total of 65% by 2030! This would meet and exceed the USA Paris Committments.</p>
            <p>The Earth Bill works by requiring utility companies and publicly-traded agriculture corporations to change to clean and healthy inputs in making our electricity (with solar, wind, geothermal, tidal, and wave) and food (with farming practices like no-till, cover crops, and no chemical fertilizers or pesticides).</p>
            <p>Then car manufacturers make electric cars for all, and we're on our way to stopping our pollution in time! It's that simple really.</p>
            <p>Think of it as the PEOPLE telling the GOVERNMENT to tell the ELECTRIC COMPANIES to GO 100% RENEWABLES. That order starts with the People - with us - because time has run out.</p>
            <p>We have to start fast and succeed by 2030 because <Link href={"https://www.youtube.com/watch?v=8Sl28fkrozE"} className="link-light" target="_blank">our additional pollution this decade will take the planet beyond the 1.5°C into tipping point scenarios that will destabilize the entire planet<span className="sr-only">opens in new window</span></Link>.</p>
            <p>These three elements - <Link href={"https://climatecrisispolicy.org/topics/1/#subtopic-1"} className="link-light" target="_blank">electricity<span className="sr-only">opens in new window</span></Link>, <Link href={"https://climatecrisispolicy.org/topics/8/#subtopic-76"} className="link-light" target="_blank">cars<span className="sr-only">opens in new window</span></Link>, and <Link href={"https://climatecrisispolicy.org/topics/3/#subtopic-26"} className="link-light" target="_blank">food<span className="sr-only">opens in new window</span></Link> - are core consensus solutions with broad support.</p>
            <p>The call for this bill is coming from elders, experts and the public, including over 850 Climate Activists and 150 organizations nationwide listed below. <Link href={"https://docs.google.com/forms/d/e/1FAIpQLScH6iofOSTf6n9GJXjhhz-PJ9kwkeLvNPO6yuPV7UtDvYy2ZA/viewform"} className="link-light" target="_blank">Add your name today!<span className="sr-only">opens in new window</span></Link></p>
            <p>All great movements have major legislation as a rallying cry to build public power and galvanize action. Now the Climate Crisis does too!</p>
            <p>Welcome all to <Link href={"/network"} className="link-light">The Earth Bill Network</Link>, as we organize locally by Congressional District to secure passage of this historic proposal.</p>
            <p>If we rise up now we can make history together, turn despair into hope, and change the global warming trajectory to save countless lives! It is very late, so we must push harder, faster and now!</p>
            <p>Sign up below to join the mission to save the future! Welcome Earth Protectors!</p>
          </Column>
        </Row>
      </Section>
      <Section backgroundColor="black" textColor="white">
        <Row paddingTop="sm" paddingBottom="sm">
          <Column>
            <Row className="bg-white text-base justify-content-center">
              <Column baseWidth={12} tabletWidth={10} className="p-5 text-center d-flex flex-column align-items-center">
                <h2 className="text-uppercase mb-4">The Earth Bill Pledge</h2>
                <p className="h4 mb-5">I support The Earth Bill standards being put into law - with enforcement provisions - and pledge to press for their inclusion in legislation voted on in the 118th Congress.</p>
                <p className="mb-4">Click to take the pledge</p>
                <div className="d-flex flex-column">
                  <Button className="mb-3" type="primary" href="https://docs.google.com/forms/d/e/1FAIpQLScH6iofOSTf6n9GJXjhhz-PJ9kwkeLvNPO6yuPV7UtDvYy2ZA/viewform" target="_blank">I am a citizen</Button>
                  <Button className="mb-3" type="primary" href="https://docs.google.com/forms/d/e/1FAIpQLSe34kdF7lZIkrKqDS8vGWGdBEWW19YbT2p9tgZ9vjhxQYZBww/viewform" target="_blank">I am an organization</Button>
                  <Button className="mb-3" type="primary" href="https://docs.google.com/forms/d/e/1FAIpQLSca_dMJhbkzx8ogfPfMBll0UNR2ZbXuS7WeVp9kDbXUxksKFg/viewform?usp=sf_link" target="_blank">I am a faith leader</Button>
                  <Button type="primary" href="https://forms.gle/eZwr62ka8NSzcaan9" target="_blank">I am a candidate for U.S. House/Senate</Button>
                </div>
              </Column>
            </Row>
          </Column>
        </Row>
      </Section>
      <Section>
        <Row paddingTop="sm" paddingBottom="sm">
          <Column>
            <h2 className="h3 mb-5 text-uppercase">Materials:</h2>
            <Row className="gx-3">
              <Column className="d-flex flex-lg-row flex-column align-items-stretch">
                <LinkCard className="mr-lg-5 mb-5" height="100" href="https://drive.google.com/file/d/1FBKBpJDJ4h1gl5cadNPZEV5d-TWwIGrO/view" target="_blank">Reasons for The Earth Bill (PDF)</LinkCard>
                <LinkCard className="mr-lg-5 mb-5" height="100" href="https://youtu.be/3sADVOz2Lsg" target="_blank">The Earth Bill: A 2030 Moonshot for Earth (Video)</LinkCard>
                <LinkCard height="100" href="https://docs.google.com/document/d/1_jr2vrNvI_IV9kTICoRNExAEiVq8RsryPUkQdmz4i00/edit" target="_blank">Final Bill Language (Very Important)</LinkCard>
              </Column>
            </Row>
          </Column>
        </Row>
      </Section>
      <Section>
        <Row paddingTop="sm" paddingBottom="sm">
          <Column>
            <h2 className="h3 mb-3 text-uppercase">Pledge Groups & Citizens:</h2>
            <h4 className="mb-3">
              <Link className="link-primary" href="https://docs.google.com/document/d/1XEAeKQsKWqrzpYTeKLHOniJoi32s1mwuBWxp6mDNSZY/edit?usp=sharing" target="_blank">See al of our Groups & Earth Activists<span className="sr-only">opens in a new window</span></Link>
            </h4>
            <p className="text-lg mb-5">Thank you! Your leadership drives us all.</p>
            <h3 className="h4 mb-4 text-uppercase">Name of Organization</h3>
          </Column>
        </Row>
      </Section>
      <Footer></Footer>
    </main>
  );
}
