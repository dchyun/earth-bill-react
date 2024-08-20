import Link from "next/link";
import TopNav from "../../_components/shared/top-nav/top-nav.component";
import Footer from "../../_components/shared/footer/footer.component";
import Section from "../../_components/shared/section/section.component";
import Row from "../../_components/shared/row/row.component";
import Column from "../../_components/shared/column/column.component";
import { TopNavMenuItem } from "../../_components/shared/top-nav/top-nav.component";
import Collapse from "../../_components/shared/collapse/collapse.component";

export default function Page() {
  return (
    <main>
      <TopNav>
        <TopNavMenuItem href='/'>Home</TopNavMenuItem>
        <TopNavMenuItem href='/learn' active>Get Informed</TopNavMenuItem>
        <TopNavMenuItem href='/network'>Join the Network</TopNavMenuItem>
        <TopNavMenuItem href='/resources'>Resources</TopNavMenuItem>
        <TopNavMenuItem href='/events'>Actions</TopNavMenuItem>
      </TopNav>
      <Section>
        <Row paddingTop='md' paddingBottom='sm'>
          <Column className='text-center'>
            <h1 className="text-uppercase mb-0">What is the Earth Bill</h1>
          </Column>
        </Row>
        <Row paddingBottom='sm'>
          <Column baseWidth={12} desktopWidth={10} className='offset-lg-1 offset-0 text-editor'>
            <h2 className="mb-4 h3">The Earth Bill, in a nutshell, will:</h2>
            <ol className="mb-5">
              <li>Ensure our electric companies buy 100% renewable energy, our cars run on clean electricity, and our food is grown to protect our farmland - all with non-polluting ways that are better for our family's health, create local jobs and offer a bright future.</li>
              <li>Reduce our climate pollution emissions an additional 50% by 2050, 40% by 2030.  This combines with other trends to eliminate 75% of U.S. emission by 2050.</li>
              <li>Enable the U.S. to meet and exceed our Paris Commitments, while testing how fast - and whether - we can actually make the shift before it's too late.</li>
              <li>Create a guaranteed market demand from utility companies for renewable energy and clear timelines to ignite massive private sector building, secure project funding, and speed infrastructure transitions.</li>
              <li>Serve as a rallying cry to build the unity we need among all the climate organizations, activists across causes, and the public, for these widely shared goals, to finally build enough people-driven political power to win in Congress.</li>
              <li>Transform our electricity into clean, cheaper, reliable, and abundant sources.</li>
              <li>Speed up the transition to electric vehicles, already underway, which are far cheaper to operate with no gasoline bills, about 18 moving parts (not much to repair!), and unlimited mileage!</li>
              <li>Require publicly-traded agriculture corporations to manage 1.19 billion acres of land with healthy regenerative practices utilizing natural methods of farming to protect the soil and water, like cover crops, less tilling of soil, animal grazing, and natural fertilizers and pesticide control methods, minimizing synthetic chemicals.</li>
              <li>Reform industrial farming to reduce GHG pollution, repair our farmland soil, protect food supplies forever, protect our water, helping to prevent floods, resist drought, ensure clean drinking water, and help absorb pollution via natural sequestration with healty biodiverse soils.</li>
              <li>Prevent the collapse of worldwide food production due to soil destruction from current - but historically recent - industrial practices that have left the world with 60 more harvests before soils are too dead to grow food.</li>
              <li>Prevent the death of 7 million people a year from pollution. Stop the Asthma epidemic in cities from car exhausts, and illnesses in communities from water pollution from fossil fuel extraction and factories.</li>
              <li>Protect the animals we raise, ensuring humane treatment and transparency at all phases, providing for natural behavior and weaning of offspring, preventing new animal-to-human diseases and antibiotic resistance, and reducing animal GHG emissions.</li>
              <li>Ground us in science, not politics, with clear, obligatory greenhouse gas reductions by the corporations with the power to stop the pollution at the source and on the emergency timeline required.</li>
              <li>Speed up what's already happening with faster timeframes and mandates to have certainty in the GHG redutions, while supporting the urgent shift with double tax deductions and grants for transition costs.</li>
              <li>Be a ton of fun to organize around and a passionate demand for activists and people everywhere to help save the future for all life on Earth!</li>
            </ol>
            <h3 className="mb-4 h4">Key Earth Bill Materials</h3>
            <ul className="mb-5">
              <li>
                <Link href='https://drive.google.com/file/d/1Why-53srE5GKhDTLnOTYrTXh-MtaybMC/view'>The Earth Bill Final <span className="sr-only">opens in a new window</span></Link> - 118th Congress
              </li>
              <li>
                <Link href='https://docs.google.com/document/d/13iOTRKvOlOb6LwpS74NoMZGpU1tfp_T_abbioB-ztZU/edit?usp=sharing'>Strategic Overview: Why This Bill? <span className="sr-only">opens in a new window</span></Link>
              </li>
              <li>
                <Link href='ttps://urldefense.com/v3/__https:/drive.google.com/file/d/1BCMInkGAKiAg9NQphvtq-juOIq3OauOI/view__;!!Fr0YZsIsFWxTZsBm-qTAg68!xuANAc-3pxy_ATAupzQnsd9cpAZBUKPIbJTGZ81GHWHE8jxmkCR7McXDkWICUIF8DBXr21yB$'>Section-by-Section: The Bill's Breakdown <span className="sr-only">opens in a new window</span></Link>
              </li>
              <li>
                <Link href='https://vimeo.com/771132947/e3b4eed6e1'>GHG Reductions Video <span className="sr-only">opens in a new window</span></Link>
              </li>
            </ul>
            <h2 className="mb-5 h3">Wonderful News: Huge Pollution Reductions from The Earth Bill</h2>
            <p className="text-lg"><strong>The Earth Bill will meet the USA Paris Commitments, reducing U.S. GHG emissions by an additional 40% by 2030, and 50% by 2050!</strong></p>
            <img className="img-fluid py-4 col-12" src={"/chart.png"}/>
            <p><strong>Experts from RegenIntel, previously with Project Drawdown, produced a report on GHG Reductions from the Earth Bill - with tremendous results!</strong></p>
            <p className="mb-5">
              <Link href="https://regenintel.earth/earthbill/" target="_blank">See Full Report<span className="sr-only">opens in a new window</span></Link>
              <br/>
              <Link href="https://vimeo.com/771132947/e3b4eed6e1" target="_blank">Vide Presentation<span className="sr-only">opens in a new window</span></Link>
            </p>
            <h3 id="reduction-caption" className="h4 mb-3">Earth Bill - 2050 Reductions from 2005 Levels</h3>
            <p><strong>Here are the highlights:</strong></p>
            <table className="mb-5" aria-describedby="reduction-caption">
              <thead>
                <tr className="text-left">
                  <th>Category</th>
                  <th>Percentage Reduction</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="pr-3">Additional Reductions Core Provisions</td>
                  <td>40%</td>
                </tr>
                <tr>
                  <td>Nature-based Sequestration from Reg. Ag.</td>
                  <td>11%</td>
                </tr>
                <tr className="border-black border-bottom">
                  <td><strong>Subtotal</strong></td>
                  <td><strong>51%</strong></td>
                </tr>
                <tr>
                  <td>Historic Reductions</td>
                  <td>17% since 2005</td>
                </tr>
                <tr>
                  <td>Projected Reductions</td>
                  <td>6%</td>
                </tr>
                <tr className="border-black border-bottom">
                  <td><strong>Subtotal</strong></td>
                  <td><strong>23%</strong></td>
                </tr>
                <tr>
                  <td><strong>Total Emissions Reductions</strong></td>
                  <td><strong>74% by 2050 (62% by 2030)</strong></td>
                </tr>
              </tbody>
            </table>
            <h3 className="h4 mb-3">Hard Numbers</h3>
            <p className="mb-4">US Emissions:  5,668 MMT CO2eq. (2022), reduced to 2,494 MMT CO2eq (2030), and 1,735 MMT CO2eq (2050).</p>
            <p className="mb-5"><strong>The USA Paris goal is to reduce annual emissions to 3.3 Gt CO2-eq by 2030. The Earth Bill would reduce emission to 2.49 Gt CO2-eq by 2030 (and 1.73 GT CO2-eq by 2050).</strong></p>
          </Column>
        </Row>
      </Section>
      <Section containerType="fluid" backgroundColor="black" textColor="white">
        <Row>
          <Column baseWidth={12} desktopWidth={6} className="p-5 text-editor-dark">
            <h2 className="h3 text-uppercase mb-4">2030? Why so fast?</h2>
            <p>As of APRIL 2022, WE HAVE 7 YEARS, 3 MONTHS until our pollution levels lock in 1.5 degrees warming. We've known for 40 years but haven't acted. 2030 is the emergency timeline.</p>
            <p>Between 1.5 and 2 degrees, disaster events called <a href="https://www.youtube.com/watch?v=8Sl28fkrozE" target="_blank">TIPPING POINTS</a> ensue like ocean currents that stop flowing and the ice sheets that melt entirely. Tipping points then unleash irreversible domino effects that will "fundamentally disrupt the global climate system" - the foundation of human life.</p>
            <p>We also don't know how long it'll take to transition.</p>
            <p>To build 100% wind, solar, geothermal, tidal and wave. To upgrade transmission lines and put solar on millions of homes. To have electric car charging stations everywhere. To switch millions of farmland acres to healthy soil practices.</p>
            <p>We don't know how fast we can stop our pollution.</p>
            <p>So we need to get started with a deadline that matches the clock. And see how we do. If we miss the 2030 goal, we will know then. If we aim for later and miss that, it'll be too little too late. That's a timing gamble we can't afford. Not on this. We're already very late.</p>
            <p>Time has run out. We must stop our pollution now. Every nation in the world must take this action. The future will not have these options, and will not be able to undo our damage due to our failure to act when we knew and had time to prevent the worst. Now is that time.</p>
            <p>(Check out <a href="https://climatetrace.org/our-story" target="_blank">Climate TRACE</a> for specific sources of GHG emissions).</p>
          </Column>
          <Column baseWidth={12} desktopWidth={6} className="p-5 d-flex justify-content-center">
            <iframe className="mb-3" style={{width: "100%", height: "100%", minHeight: "300px"}} src="https://www.mcc-berlin.net/fileadmin/data/clock/carbon_clock.htm?i=3267263"></iframe>
          </Column>
        </Row>
        <Row>
          <Column baseWidth={12} desktopWidth={6} className="p-0">
            <img className="img-cover" src={'/earth.jpg'}/>
          </Column>
          <Column baseWidth={12} desktopWidth={6} className="p-5 text-editor-dark">
            <h2 className="h3 text-uppercase mb-4">Can we do this? Experts say yes. It's already happening - just not fast enough!</h2>
            <ol type="A">
              <li>
                <p>RENEWABLE ELECTRICITY is cheaper already and is a foundational solution for other sectors, but we must get to 100% faster!</p>
                <Collapse label="See Sources" theme="dark" className="mb-4">
                  <ol>
                      <li>
                        <Link target="_blank" href="https://environmentamerica.org/center/resources/we-have-the-power/">We Have the Power<span className="sr-only">opens in a new window</span></Link>
                      </li>
                      <li>
                        The path to a national 100% clean electricity standard. <Link target="_blank" href="https://www.youtube.com/watch?v=jbV5UUKHq_U">Short<span className="sr-only">opens in a new window</span></Link> and <Link target="_blank" href="https://www.youtube.com/watch?v=WdeL1c8fEck">long<span className="sr-only">opens in a new window</span></Link> version
                      </li>
                      <li>
                        <Link target="_blank" href="https://www.youtube.com/watch?v=2b3ttqYDwF0">Clean Disruption: Energy & Transformation<span className="sr-only">opens in a new window</span></Link>
                      </li>
                      <li>
                        <Link target="_blank" href="https://www.ucsusa.org/about/news/more-1000-scientists-sign-letter-urging-pres-biden-cut-emissions-half-2030-0?fbclid=IwAR1ggm9g3lLOwnchNImpfXPHE9ZAlkMyZw0D7BwV4qis2Zvvm9tP6h5KlsE">1000 Scientists for 50% GHG Emissions Deductions by 2030<span className="sr-only">opens in a new window</span></Link>
                      </li>
                      <li>
                        Examining supply-side options to achieve <Link target="_blank" href="https://www.energy.gov/eere/articles/nrel-study-identifies-opportunities-and-challenges-achieving-us-transformational-goal">100% clean electricity by 2035<span className="sr-only">opens in a new window</span></Link>
                      </li>
                      <li>
                        States are pushing ahead. <Link target="_blank" href="https://www.ncsl.org/research/energy/renewable-portfolio-standards.aspx">State Renuable Portfolio Standards and Goals<span className="sr-only">opens in a new window</span></Link>
                      </li>
                    </ol>
                </Collapse>
              </li>
              <li>
                <p>ZERO-EMISSION VEHICLES are here, and are cheaper to operate and last longer! It's already happening, and The Earth Bill provides the deadlines, tax incentives and grants to speed it up!</p>
                <Collapse label="See Sources" theme="dark" className="mb-4">
                  <ol>
                    <li>
                      <Link target="_blank" href="https://www.zeta2030.org/">A Plan for 100% Electric Vehicles by 2030<span className="sr-only">opens in a new window</span></Link>
                    </li>
                    <li>
                      <Link target="_blank" href="https://www.youtube.com/watch?v=E7Jg1IJ68_g">The Electric Vehicle Disruption<span className="sr-only">opens in a new window</span></Link> - End of oil by 2030
                    </li>
                    <li>
                      <Link target="_blank" href="https://www.cnbc.com/2022/08/25/california-bans-the-sale-of-new-gas-powered-cars-by-2035.html">California bans the sale of new gas-powered cars by 2035<span className="sr-only">opens in a new window</span></Link>
                    </li>
                    <li>
                      Major automakers, <Link target="_blank" href="https://www.convenience.org/Media/Daily/2021/Nov/11/1-Major-Automakers-30-Countries-Pledge-Zero_Fuels">30 countries pledge zero-emission vehicle sales<span className="sr-only">opens in a new window</span></Link> by 2040 (2035 or earlier in Leading Markets)
                    </li>
                  </ol>
                </Collapse>
              </li>
              <li>
                <p>REGENERATIVE AGRICULTURE uses nature's processes, protects our soil, water & food, helps farmers with lower costs, treats animals humanely, and reduces GHG emissions. The Earth Bill covers about 1.19 billion areas of land managed by publicly-traded companies!</p>
                <Collapse label="See Sources" theme="dark">
                  <ol>
                    <li>
                      Physicians Committee: <Link target="_blank" href="https://www.youtube.com/watch?v=dxzSfiFz3fo">Plant-Based Climate Summit<span className="sr-only">opens in a new window</span></Link>
                    </li>
                    <li>
                      Regenerative Agriculture Movie: Kiss the Ground. <Link target="_blank" href="https://vimeo.com/524492653">Educational version<span className="sr-only">opens in a new window</span></Link> (45 min, password: schools) <Link target="_blank" href="https://kissthegroundmovie.com/">Full length<span className="sr-only">opens in a new window</span></Link>
                    </li>
                    <li>
                      Rodale Institute: <Link target="_blank" href="https://rodaleinstitute.org/wp-content/uploads/Rodale-Soil-Carbon-White-Paper_v8.pdf">Regenerative Solutions and the Soil Carbon Solution<span className="sr-only">opens in a new window</span></Link>
                    </li>
                    <li>
                      <Link target="_blank" href="https://www.ciel.org/reports/fossil-fertilizers/">Fossils, Fertilizers, and False Solutions<span className="sr-only">opens in a new window</span></Link>: How Laundering Fossil Fuels in Agrochemicals Puts the Climate and the Planet at Risk (October 2022)
                    </li>
                    <li>
                      <Link target="_blank" href="https://www.nytimes.com/2022/02/01/opinion/climate-sustainability-agriculture-lobby.html?campaign_id=39&emc=edit_ty_20220201&instance_id=51837&nl=opinion-today&regi_id=10817691&segment_id=81300&te=1&user_id=6f6894b20760bdc9224a062f7a4311b2">Meet the People Getting Paid to Kill Our Planet<span className="sr-only">opens in a new window</span></Link> (NY Times video commentary)
                    </li>
                    <li>
                      <Link target="_blank" href="https://www.etcgroup.org/sites/www.etcgroup.org/files/files/food-barons-2022-summaries-final_16_sept_.pdf">Mapping Corporate Power in Big Food<span className="sr-only">opens in a new window</span></Link>
                    </li>
                  </ol>
                </Collapse>
              </li>
            </ol>
          </Column>
        </Row>
      </Section>
      <Section>
        <Row paddingTop="sm" paddingBottom="md">
          <Column baseWidth={12} desktopWidth={10} className="offset-lg-1 offset-0 text-editor">
            <h2 className="h3 text-uppercase mb-5">The Health Benefits are Major</h2>
            <ul className="mb-5">
              <li>Meeting the Paris Agreement targets is estimated to reduce deaths alone from pollution in the US by 36,000 per year by 2040.</li>
              <li>There's an estimated $1.13 trillion in health savings due to cleaner air between now and 2050.</li>
              <li>In terms of mental suffering, in addition to physical injury, extreme weather events cause 40 times more incidents of mental health injury such as PTSD.</li>
              <li>People are suffering tremendous anxiety over this situation already. Imagine how the future will suffer if we don't do more, faster. (See <Link target="_blank" href='https://docs.google.com/document/d/1j0QdsfpmcVo8CNtkrICiMxQGnI9Alw3onkQgMUOsp6A/edit?usp=sharing'>Health Impact Sheet<span className="sr-only">opens in a new window</span></Link>)</li>
            </ul>
            <h2 className="h3 text-uppercase mb-5">Why Do We Need to do this? Mandates & Deadlines Ensure Results</h2>
            <p>The recent climate actions by Congress provide vital seed funding for materials and supply chains, clean infrastructure (like EV charging stations), corporate tax cuts for building clean energy, and consumer incentives for electric cars and appliances - which will all inspire great voluntary action. But they don't stop pollution directly or require a transition by the corporations at the production level - at the source - on a timeline.</p>
            <p>Moreover, the projected GHG reductions (<Link target="_blank" href="https://rhg.com/research/climate-clean-energy-inflation-reduction-act/">7-10% for the Inflation Reduction Act<span className="sr-only">opens in a new window</span></Link>) depend on variables like the economy and uptake by consumers and companies, at their discretion. Regarding the Bipartisan Infrastructure Bill, with various <Link target="_blank" href="https://www.wri.org/insights/clean-transportation-us-bipartisan-infrastructure-law">clean infrastructure benefits<span className="sr-only">opens in a new window</span></Link>, there are no emission projections of the GHG impacts from building roads and bridges, using concrete and steel, although there are clean-procurement requirements via Executive Orders in play too.</p>
            <p className="mb-5">This is all very important progress (see <Link target="_blank" href="https://www.whitehouse.gov/cleanenergy/?utm_source=www.cleanenergy.gov">White House Clean Energy<span className="sr-only">opens in a new window</span></Link> and <Link target="_blank" href="https://www.whitehouse.gov/wp-content/uploads/2022/12/Inflation-Reduction-Act-Guidebook.pdf">IRA Guidebook<span className="sr-only">opens in a new window</span></Link>). But it is not a direct plan for a certain transition away from fossil fuels, and it is not enforceable in any way. We need clear and certain laws that require industries to stop polluting. We've run out of time to kick this further down the road for political reasons. We need pollution reduction requirements on a definite timeline, or we're flying blind. It's time for a real plan - in law - so we can honestly tell our children we are fighting to save their future. For the activists fighting today - the Earth BIll is for you to know that we are trying in earnest to win real solutions. Pollution prevention is the best solution. You are our best hope. Please give some of your time for Earth.</p>
            <h2 className="h3 text-uppercase mb-5">The United Nations is urging faster emissions cuts</h2>
            <p>U.N. Secretary General, COP27 (<Link target="_blank" href="https://www.un.org/sg/en/content/sg/speeches/2022-11-07/secretary-generals-remarks-high-level-opening-of-cop27#:~:text=of%20light%20remains.-,The%20global%20climate%20fight%20will%20be%20won%20or%20lost%20in,and%20for%20generations%20to%20come.">Nov. 2022<span className="sr-only">opens in a new window</span></Link>)</p>
            <blockquote className="mb-3" cite="https://www.un.org/sg/en/content/sg/speeches/2022-11-07/secretary-generals-remarks-high-level-opening-of-cop27#:~:text=of%20light%20remains.-,The%20global%20climate%20fight%20will%20be%20won%20or%20lost%20in,and%20for%20generations%20to%20come.">This UN Climate Conference is a reminder that the answer is in our hands. And the clock is ticking. We are in the fight of our lives. And we are losing. Greenhouse gas emissions keep growing. Global temperatures keep rising.  And our planet is fast approaching tipping points that will make climate chaos irreversible. We are on a highway to climate hell with our foot still on the accelerator.</blockquote>
            <ul>
              <li>We're way behind schedule: COP27 <Link target="_blank" href="https://www.unep.org/events/publication-launch/emissions-gap-report-2022">"13th Emissions Gap Report"<span className="sr-only">opens in a new window</span></Link></li>
              <li>There's a global call for a new <Link target="_blank" href="https://fossilfueltreaty.org/">Fossil Fuel Non-Proliferation Treaty<span className="sr-only">opens in a new window</span></Link>.</li>
              <li>The Earth Bill will serve as a model for country policy demands worldwide!</li>
            </ul>
          </Column>
        </Row>
      </Section>
      <Footer></Footer>
    </main>
  );
}
