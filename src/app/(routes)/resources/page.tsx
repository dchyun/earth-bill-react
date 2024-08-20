import Link from "next/link";
import TopNav from "../../_components/shared/top-nav/top-nav.component";
import Footer from "../../_components/shared/footer/footer.component";
import Section from "../../_components/shared/section/section.component";
import Row from "../../_components/shared/row/row.component";
import Column from "../../_components/shared/column/column.component";
import { TopNavMenuItem } from "../../_components/shared/top-nav/top-nav.component";
import LinkCard from "../../_components/shared/link-card/link-card.component";
import ImageResource from "../../_components/shared/image-resource/image-resource.component";

export default function Page() {
  return (
    <main>
      <TopNav>
        <TopNavMenuItem href='/'>Home</TopNavMenuItem>
        <TopNavMenuItem href='/learn'>Get Informed</TopNavMenuItem>
        <TopNavMenuItem href='/network'>Join the Network</TopNavMenuItem>
        <TopNavMenuItem href='/resources' active>Resources</TopNavMenuItem>
        <TopNavMenuItem href='/events'>Actions</TopNavMenuItem>
      </TopNav>
      <Section>
        <Row paddingTop='md' paddingBottom='sm'>
          <Column className='text-center'>
            <h1 className="text-uppercase mb-0">Resources</h1>
          </Column>
        </Row>
        <Row paddingTop="sm" paddingBottom="sm">
          <Column baseWidth={12} desktopWidth={6}>
            <h2 className="mb-3">Tools</h2>
            <p className="h4 mb-5">Website and Action Network</p>
            <LinkCard target="_blank" href="https://docs.google.com/document/d/1BKapYhOfYlO8f_L4mqptFDnimb2V6chZLmgVOHjQ3Ho/edit?usp=sharing">Action Tools</LinkCard>
          </Column>
        </Row>
        <Row paddingBottom="md">
          <Column>
            <h2 className="mb-3">Images</h2>
            <p className="h4 mb-5">Save these images and share on social media!</p>
            <div className="image-grid">
              <ImageResource src={"/posters/earth-bill-poster-23.png"} alt="A list of sponsors for the earth bill HR598. The list has 8 sponsors for the 118th congress."></ImageResource>
              <ImageResource alt="A list of features of the earth bill highlighted by 100% renewable electricity, zero-emission vehichles, and regenerative agriculture by 2030." src={"/posters/earth-bill-poster-24.png"}></ImageResource>
              <ImageResource alt="An hourglass icon with the text time is up. The Earth Bill. HR 598." src={"/posters/earth-bill-poster-21.png"}></ImageResource>
              <ImageResource alt="The Earth Bill. Today is the day. Time to save the world. With that text over a meme of a mouse and a cat. www.theearthbill.org" src={"/posters/earth-bill-poster-22.png"}></ImageResource>
              <ImageResource alt="Earth Day 2023 we demanded an end to greenhouse gas pollution at the factory! The Earth Act to stop climate pollution by 2030. H.R. 598 mandates 100% GHG-free electricity, cars, and food. Look up www.earthbill.org IG @theearthbillofficial" src={"/posters/earth-bill-poster-20.png"}></ImageResource>
              <ImageResource alt="Heard about H.R. 598? The earth act to stop climate pollution by 2030. 100% GHG-free electricity, cars, and food. www.earthbill.org" src={"/posters/earth-bill-poster-19.png"}></ImageResource>
              <ImageResource alt="The Earth Bill will meet and exceed the USA Paris goals! Requred in law 100% by 2030 renewable electricity, zero-emission vehicles, regenerative agriculture. Over 50% reduction in GHG emissions by 2050, 40% by 2030! www.earthbill.org" src={"/posters/earth-bill-poster-16.png"}></ImageResource>
              <ImageResource alt="The Earth Bill. The consumer pollution solution. Pollution-free electricity, cars, and food by 2030! Demand it! Stop 50%+ of our climate pollution. www.earthbill.org" src={"/posters/earth-bill-poster-17.png"}></ImageResource>
              <ImageResource alt="Wonderful news! The Earth Bill was introduced in the United States Congress!! December 2022. Thank you U.S. representative Adriano Espaillat (NY-13) and your entire team for this historic achievement! www.earthbill.org" src={"/posters/earth-bill-poster-18.png"}></ImageResource>
              <ImageResource alt="The Earth Bill. Save the future. www.earthbill.org" src={"/posters/earth-bill-poster-15.png"}></ImageResource>
              <ImageResource alt="The Earth Bill. We can save the future of our planet. Join me at the Earth Bill. Melisa Garat, balet dancer, model, actress. @theearthbill www.earthbill.org @meligarat" src={"/posters/earth-bill-poster-12.jpg"}></ImageResource>
              <ImageResource alt="The Earth Bill. Our crisis solution! Change the forcast from disaster to hope! www.earthbill.org" src={"/posters/earth-bill-poster-13.jpg"}></ImageResource>
              <ImageResource alt="Mama is not happy! Cool it! The Earth Bill. www.earthbill.org" src={"/posters/earth-bill-poster-14.jpg"}></ImageResource>
              <ImageResource alt="Pledge to support the Earth Bill. Our Crisis Solution. 100% polution-free by 2030 in electricity, cars, and food. Our bills fund pollution. This bill stops it. Pledge at www.eathbill.org" src={"/posters/earth-bill-poster-10.png"}></ImageResource>
              <ImageResource alt="Pledge to support the Earth Bill. Our Crisis Solution. 100% polution-free by 2030 in electricity, cars, and food. Our bills fund pollution. This bill stops it. Pledge at www.eathbill.org" src={"/posters/earth-bill-poster-11.png"}></ImageResource>
              <ImageResource alt="The Earth Bill. 100% climate smart. Electricity, cars, and food! www.earthbil.org" src={"/posters/earth-bill-poster-code-1.png"}></ImageResource>
              <ImageResource alt="The Earth Bill. 100% polutaion free. Electricity, cars, and food! Save the future! www.earthbil.org" src={"/posters/earth-bill-poster-code-2.png"}></ImageResource>
              <ImageResource alt="The Earth Bill. 100% climate smart. Electricity, cars, and food! www.earthbil.org" src={"/posters/earth-bill-poster-dance.png"}></ImageResource>
              <ImageResource alt="The Earth Bill logo" src={"/posters/earth-bill-poster-logo-2.JPG"}></ImageResource>
            </div>
          </Column>
        </Row>
      </Section>
      <Footer></Footer>
    </main>
  );
}
