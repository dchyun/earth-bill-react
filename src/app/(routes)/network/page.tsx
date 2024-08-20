import Link from "next/link";
import TopNav from "../../_components/shared/top-nav/top-nav.component";
import Footer from "../../_components/shared/footer/footer.component";
import Section from "../../_components/shared/section/section.component";
import Row from "../../_components/shared/row/row.component";
import Column from "../../_components/shared/column/column.component";
import { TopNavMenuItem } from "../../_components/shared/top-nav/top-nav.component";

export default function Page() {
  return (
    <main>
      <TopNav>
        <TopNavMenuItem href='/'>Home</TopNavMenuItem>
        <TopNavMenuItem href='/learn'>Get Informed</TopNavMenuItem>
        <TopNavMenuItem href='/network' active>Join the Network</TopNavMenuItem>
        <TopNavMenuItem href='/resources'>Resources</TopNavMenuItem>
        <TopNavMenuItem href='/events'>Actions</TopNavMenuItem>
      </TopNav>
      <Section>
        <Row paddingTop='md' paddingBottom='sm'>
          <Column className='text-center'>
          <h1 className="text-uppercase mb-0">Join the Network</h1>
          </Column>
        </Row>
        <Row paddingBottom='sm'>
          <Column baseWidth={12} desktopWidth={10} className='offset-lg-1 offset-0 text-editor'>
            <h2 className="h3 mb-5">Mission: To forge unity among civil society and activists, and work together to pass national climate legislation.</h2>
            <p>The Earth Bill Network is an open association of activists, organizations and coalitions weaving our power together for results on stopping our GHG pollution.</p>
            <p>To join the network please review the Principles & Action Agreements below and take The Earth Bill Pledge. Welcome all!</p>
            <p>We organize inclusively and transparently facilitated by seasoned volunteer professionals leading various fronts: Administration, Adopt-A-District, Legislative, Faith, Youth AAD, Websites, Social Media and more.</p>
            <p>Our Team leaders come from dozens of groups, including Climate Crisis Policy (lead facilitator), Fridays for Future, Unitarian Universalists, Metro NYC Climate Catholic Movement, and more.</p>
            <p>We're active in several coalitions including 100% Clean Energy Group, Climate Action Campaign, Ad Hoc Environmental Lobbying group, Build Back Fossil Free Coalition, The Fossil Fuel Non-Proliferation Treaty Initiative, and Break Free From Plastics coalition. Core to our mission, we provide a flow of high-level information from major groups to the grassroots network through our open meetings.</p>
            <p className="mb-5">The goal is to weave us all into a united movement working together for real political power. Welcome to the campaign to stop our pollution and save the planet! We're here to work against the clock!</p>
          </Column>
        </Row>
      </Section>
      <Section>
        <Row paddingBottom="md">
          <Column baseWidth={12} desktopWidth={10} className='offset-lg-1 offset-0 text-editor'>
            <h2 className="h3 mb-5">Welcome to our teams, meetings, and ground game!</h2>
            <h3 className="h4 mb-3 text-uppercase">The Earth Team</h3>
            <p>Welcome activists eager to make The Earth Bill a household name and movement demand!</p>
            <p>This Network is informally operated with volunteers taking up various roles, organized by Climate Crisis Policy. Here's the <Link target="_blank" href="https://docs.google.com/spreadsheets/d/18Fd5M8MKhTAWbUNec9kd1LYheKD3BHt34nzOjkdRJ1I/edit?usp=sharing">Core Team<span className="sr-only">opens in a new window</span></Link></p>
            <p>We serve as a campaign coordinator, convene regular meetings, participate in coalitions, and provide actionable information to our network of groups and activists who work their own magic in their districts, working independently, hosting Congressional meetings and actions.  We find a common legislative agenda via research, discussion, and consensus-oriented practice with inclusive and transparent meetings.</p>
            <p>The Earth Bill's focus on electricity, cars, and food, emerged as a shared vision from environmental experts, elected officials and advocates based on widely-supported policies reported in The <Link target="_blank" href="https://www.climatecrisispolicy.org/">Climate Crisis Policy Digest<span className="sr-only">opens in a new window</span></Link>, which our earlier team developed, summerizing over 170 expert reports, bills and laws (see <Link target="_blank" href="https://climatecrisispolicy.org/topics/1/#subtopic-1">electricity<span className="sr-only">opens in a new window</span></Link>, <Link target="_blank" href="https://climatecrisispolicy.org/topics/8/">vehicles<span className="sr-only">opens in a new window</span></Link>, <Link target="_blank" href="https://climatecrisispolicy.org/topics/3/#subtopic-26">regenerative architecture<span className="sr-only">opens in a new window</span></Link>.)</p>
            <p>WIth The Earth Bill's introduction, we will now look to build more infrastructure to support outreach efforts. To open, we're starting with the focus and teams on the ACTION page. If you'd like to help lead, please jump in soon and reach out. Welcome all.</p>
            <p className="mb-5">Contact: TheEarthBill@gmail.com.</p>
            <h4 className="text-uppercase mb-5">Meetings</h4>
            <h6>Monday Nights - Action Team Meetings</h6>
            <p className="mb-5">Monday Nights. Every two weeks. 7pm EST.  March 6, 20, April 3, 17, May 1, 15, etc. These are for activists nationwide actively working on The Earth Bill.<br/>Lead: Todd Fernandez, <Link href="mailto:theearthbill@gmail.com">theearthbill@gmail.com</Link><br/><Link target="_blank" href="https://climatecrisispolicy.us18.list-manage.com/track/click?u=613712fe6a343247f30883249&id=aceabf3fda&e=7652bef491">Register<span className="sr-only">opens in a new window</span></Link></p>
            <h6>3rd Wednesday - Miracles In Action - Faith & Spirit Team Meetings</h6>
            <p className="mb-5">3rd Wednesday. Monthly. Noon-1:15 ET. March 15, April 19, May 17, June 21, July 19, etc. For organizers from faith and spirit traditions.<br/>Lead: Peter Sergienko, <Link href="mailto:petersergienko@gmail.com">petersergienko@gmail.com</Link><br/><Link target="_blank" href="https://climatecrisispolicy.us18.list-manage.com/track/click?u=613712fe6a343247f30883249&id=5f12762b2f&e=7652bef491">Register<span className="sr-only">opens in a new window</span></Link></p>
            <h5 className="mb-5">State Meetings</h5>
            <h6>Illinois State Meeting</h6>
            <p className="mb-5">Wednesdays, every two weeks. 2 pm EST. March 1, 15, 29. April 12, 26. May 10, 24, etc.<br/>Lead: Mary Shesgreen, <Link href="mailto:marysedrop@att.net">marysedrop@att.net</Link><br/><Link target="_blank" href="https://climatecrisispolicy.us18.list-manage.com/track/click?u=613712fe6a343247f30883249&id=657560a35b&e=7652bef491">Attend<span className="sr-only">opens in a new window</span></Link></p>
            <h6>New York State Meeting</h6>
            <p className="mb-5">Meets with Monday night above.<br/>Lead: Jose Mena, <Link href="mailto:josemena0114@gmail.com">josemena0114@gmail.com</Link></p>
            <h6>Oregon State Meeting</h6>
            <p className="mb-5">Times TBA.<br/>Lead: Peter Sergienko, <Link href="mailto:petersergienko@gmail.com">petersergienko@gmail.com</Link></p>
            <h6>Your State Meeting</h6>
            <p className="mb-5">If you're interested in helping to organize in your state, please reach out: <Link href="mailto:theearthbill@gmail.com">theearthbill@gmail.com</Link></p>
            <h6>Your Congressional District</h6>
            <p className="mb-5">If you are actively working on your Congressional District, please let us know.<br/>Email: Eric Arnum, <Link href="mailto:climatesolutionsdigest@gmail.com">climatesolutionsdigest@gmail.com</Link></p>
            <h4 className="text-uppercase mb-5">Ground Game: Congressional District Teams</h4>
            <p>The vision of the ground game is to organze by Congressional District, with lead groups and individuals in all 435 Districts, which we call “Adopt-District”. We have started this effort as a prototype, and many have stepped up with strong teams in New York, D.C., IL, OR and activity in over 100 Congressional Districts in 28 states. These are local activists from groups like 350 Montana, Save our Soil Illinois, Climate Reality, Yale University, Fridays for Future, Interfaith Moral Action on Climate, and many more, who have adopted their Congressional District for deeper organizing. The ideal is to have a lead group or team for each District, building a local coalition to secure their Representative as a cosponsor.</p>
            <p className="mb-5">
              <Link target="_blank" href="https://climatecrisispolicy.org/home_nodes/adopt_a_district/">Read more about Adopt-a-District<span className="sr-only">opens in a new window</span></Link>
              <br/>
              <Link target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSeQykc3KBCA99TGQLb89gKnxgiTUtFgHL8xUHnPnObNpVj-fg/viewform">Adopt or join your district today<span className="sr-only">opens in a new window</span></Link>
            </p>
            <h4 className="text-uppercase mb-5">Standing Legislative Agenda</h4>
            <p className="text-lg">Our focus is on federal legislation and movement organizing. Prior to The Earth Bill, we identified and reviewed a set of bills to support as a package.</p>
            <h5 className="mb-4"><Link target="_blank" href="https://climatecrisispolicy.org/home_nodes/bills_count/">2021-2022 Climate Bill Package (will be updated in 2023)<span className="sr-only">opens in a new window</span></Link></h5>
            <p>These are key bills we support on several other topics filed by leading organizations and coalitions on environmental justice, plastics, fracking, agriculture, fossil fuel subsidies, CAFOs, and more to come.  These topics cover much of what's needed, and The Earth Bill fits with them, filling a gap in the collection, for a direct, mandated industry transformation in these three areas.</p>
            <p className="mb-5">The District Teams are set up around the Climate Bill Package in order to unite activists across topics for greater collective impact. Alone we are not winning, together we will!</p>
            <h5 className="mb-4">Additional Fronts</h5>
            <ol className="mb-5">
              <li><strong>International.</strong> We support the proposal for a Fossil Fuel Non-Proliferation Treaty, and call on the U.S. Department of State to publicly support and work for a new international, binding and enforceable ban on GHG pollution.</li>
              <li><strong>EPA Rules.</strong>  We work with Climate Action Campaign & 100% Clean Energy Network on pushing EPA to get rules done and implemented.</li>
              <li><strong>Plastics.</strong>  We follow and support the new UN Treaty process for a binding and enforceable global treaty on plastics pollution.</li>
              <li><strong>Farm Bill.</strong> There's interest in organizing on this effort and the scope of this is being determined, bringing The Earth Bill agriculture provisions to the debate.</li>
              <li><strong>Additional Legislation.</strong> Additional legislation is also needed in other areas, such as renewable permitting reform; grid and transmission building; affirming EPA's power to ban GHGs; solutions for industry, buildings, and other areas of transportation; and centralized top-level governmental leadership of the transition process.</li>
            </ol>
            <h5 className="mb-4">Past Work, Action Partners, & Strategic Unity</h5>
            <h6>Federal Climate Legislation</h6>
            <p className="mb-3">In precursors to the Network, in 2017-18, we led a grassroots coalition organizing for The OFF Fossil Fuels Act, garnering close to 50 cosponsors, and helping to spur the GND discussion.  We also compiled the <Link target="_blank" href="https://www.climatecrisispolicy.org/">Climate Crisis Policy Digest<span className="sr-only">opens in a new window</span></Link>, a key source for the 1st House Climate Crisis Report.  In 2021-22, we engaged actively with the Inflation Reduction Act, the push for 100% Clean Energy law, a Presidential Climate Emergency Declaration, opposition to the Permitting Reform Bill, and The Break-Free From Plastics Bill in coordination with several other movement coalitions.</p>
            <h6>Direct Action Partners!</h6>
            <p className="mb-3">We've partnered with many action groups to protest and rally!  In D.C. at the People v. Fossil Fuel week of Marches.  With XR NYC organizing the NY Times Action. With 350BK organing the Chase Bank Investor Day Action. Striking with Fridays for Future. The People's Climate March.  With Food & Water Watch all the time! The Climate Action Campaign and the Environmental Defense Fund & 100% Clean Energy Coalition - with Chesapeake Climate Action Network & Evergreen - always in action!</p>
            <h6>Unity is the Strategic Imperative</h6>
            <p className="mb-5">To change what's politically possible will require 1000s of groups and millions of concerned citizens to unite in one demand. We need a through-line for every action, meeting, and event, and a collective intention. We must reach everyone and speak with one powerful voice. This is the challenge we face to prevail for Earth, coming together despite differences, embracing what science requires despite the politics, adding a common goal to our already full internal plans. Unity requires a plan. The Earth BIll offers a tool.</p>
            <h3 className="mb-5">Network Principles</h3>
            <ol className="mb-5">
              <li>Transparent: All our meetings are open.</li>
              <li>Inclusive: Everyone's welcome.</li>
              <li>Community: We're in this together.</li>
              <li>Autonomy: Do it your own way.</li>
              <li>Both/And: Say yes to more action.</li>
            </ol>
            <h3 className="mb-5">Action Agreements - Pick a few :)</h3>
            <ol>
              <li>Prioritize (Make the EB a top priority)</li>
              <li>Empower (Run with the idea as you feel called)</li>
              <li>Connect (Lead or join a team)</li>
              <li>Prepare (Align internal team for legislative push)</li>
              <li>Louder (Link communication teams to amplify our voice)</li>
              <li>Respect (Mutual appreciation and compassion)</li>
              <li>Learn (<Link target="_blank" href="https://climatecrisispolicy.org/home_nodes/bills_count/">Support the 2021 Climate Bill Package<span className="sr-only">opens in a new window</span></Link>)</li>
              <li>Engage (<Link target="_blank" href="https://climatecrisispolicy.org/home_nodes/adopt_a_district/">Organize Your Congressional District<span className="sr-only">opens in a new window</span></Link>)</li>
              <li>Imagine (We will stop our pollution)</li>
            </ol>
          </Column>
        </Row>
      </Section>
      <Footer></Footer>
    </main>
  );
}
