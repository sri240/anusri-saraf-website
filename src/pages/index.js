import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

/*const scrollTo = ele => {
  ele.scrollIntoView({
    behavior: "smooth",
    block: "start",
  })
}

const getDimensions = ele => {
  const { height } = ele.getBoundingClientRect()
  const offsetTop = ele.offsetTop
  const offsetBottom = offsetTop + height

  return {
    height,
    offsetTop,
    offsetBottom,
  }
}

const [visibleSection, setVisibleSection] = useState()
const headerRef = useRef(null)

/*function useEffect(() => {
  const handleScroll = () => {
    const { height: headerHeight } = getDimensions(headerRef.current)
    const scrollPosition = window.scrollY + headerHeight

    const ele = ref.current
    if (ele) {
      const { offsetBottom, offsetTop } = getDimensions(ele)
      return scrollPosition > offsetTop && scrollPosition < offsetBottom
    }

    if (selected && selected.section !== visibleSection) {
      setVisibleSection(selected.section)
    }
  }

  window.addEventListener("scroll", handleScroll)
  return () => {
    window.removeEventListener("scroll", handleScroll)
  }
}, [visibleSection])
*/
if (typeof window !== `undefined`) {
  window.addEventListener("scroll", function() {
    //programming
    var element = document.getElementById("programming")
    if (typeof element != "undefined" && element != null) {
      var position = element.getBoundingClientRect()

      // checking whether fully visible
      if (position.top >= 0 && position.bottom <= window.innerHeight) {
        element.className = "mmm"
      } else {
        element.className = "programming"
      }
    }
    //cybersecurity
    element = document.getElementById("cybersecurity")
    if (typeof element != "undefined" && element != null) {
      position = element.getBoundingClientRect()

      if (position.top >= 0 && position.bottom <= window.innerHeight) {
        element.className = "mmm"
      } else {
        element.className = "cybersecurity"
      }
    }
    //robotics
    element = document.getElementById("robotics")
    if (typeof element != "undefined" && element != null) {
      position = element.getBoundingClientRect()

      if (position.top >= 0 && position.bottom <= window.innerHeight) {
        element.className = "mmm"
      } else {
        element.className = "robotics"
      }
    }
    //music
    element = document.getElementById("music")
    if (typeof element != "undefined" && element != null) {
      position = element.getBoundingClientRect()

      if (position.top >= 0 && position.bottom <= window.innerHeight) {
        element.className = "hhh"
      } else {
        element.className = "music"
      }
    }
    //poetry
    element = document.getElementById("poetry")
    if (typeof element != "undefined" && element != null) {
      position = element.getBoundingClientRect()

      if (position.top >= 0 && position.bottom <= window.innerHeight) {
        element.className = "hhh"
      } else {
        element.className = "poetry"
      }
    }
    //writing
    element = document.getElementById("writing")
    if (typeof element != "undefined" && element != null) {
      position = element.getBoundingClientRect()

      if (position.top >= 0 && position.bottom <= window.innerHeight) {
        element.className = "hhh"
      } else {
        element.className = "writing"
      }
    }
    //lead
    element = document.getElementById("lead")
    if (typeof element != "undefined" && element != null) {
      position = element.getBoundingClientRect()

      if (position.top >= 0 && position.bottom <= window.innerHeight) {
        element.className = "fff"
      } else {
        element.className = "lead"
      }
    }
    //public
    element = document.getElementById("public")
    if (typeof element != "undefined" && element != null) {
      position = element.getBoundingClientRect()

      if (position.top >= 0 && position.bottom <= window.innerHeight) {
        element.className = "fff"
      } else {
        element.className = "public"
      }
    }
    //mentor
    element = document.getElementById("mentor")
    if (typeof element != "undefined" && element != null) {
      position = element.getBoundingClientRect()

      if (position.top >= 0 && position.bottom <= window.innerHeight) {
        element.className = "fff"
      } else {
        element.className = "mentor"
      }
    }
  })
}

/*if (
  history != "undefined" &&
  history.scrollRestoration != "undefined" &&
  history.scrollRestoration != "null"
) {
  history.scrollRestoration = "auto"
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%"
}
window.openNav = function() {
  document.getElementById("myNav").style.width = "100%"
  //document.getElementById("theLinks").style.visibility = "hidden"
}

function uuu() {
  document.getElementById("intro").style.backgroundColor = "orange"
}*/

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="home" />
    {/*<meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    ></meta>*/}
    {/* <h1 style={{
           color: 'rgb(250, 173, 143)',
           fontFamily: "Courier New",
           fontWeight: 'lighter'
           }}><center>
             greetings.
             </center>
             </h1> */}
    {/*<p style = {{
      fontSize: '20px',
      marginBottom: '0.4em',
      color: 'rgb(157, 229, 231)',
      textAlign: "center",
      }}>• where to find me •</p>*/}
    <style>
      @import
      url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@200&family=Tangerine:wght@700&display=swap');
    </style>
    <div id="myNav" class="overlay">
      <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">
        &times;
      </a>
      <div class="overlay-content">
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>
    </div>

    <span class="intro" id="intro">
      <span class="description">
        <p
          style={{
            fontSize: "20px",
            marginBottom: "0.1em",
            marginTop: "0.4em",
          }}
        >
          • who i am •
        </p>
        <p class="theDesc">
          <i>full-stack developer ~ engineer ~ musician ~ writer ~ leader</i>{" "}
          <br />
          fifteen year old student from the bay with a passion for exploration,
          the pursuit of knowledge, and practically everything else as well
          <br />
          my goal is to discover and take advantage of all of the ways i can
          contribute to the world while doing what i love and living in
          contentment.
        </p>
      </span>
      <span class="mylogo">
        <img src="https://i.imgur.com/jqMdYKY.png"></img>
      </span>
    </span>

    <div class="activities">
      <p
        style={{
          fontSize: "20px",
          marginBottom: "0.1em",
          marginTop: "20px",
        }}
      ></p>

      <span class="techh">
        <p
          style={{
            color: "#f5b6ae",
          }}
        >
          ~ &nbsp;
        </p>
        <p>technology</p>
      </span>

      <div class="technology">
        <div id="programming" class="programming">
          <p>
            <i>programming</i> • i am proficient in numerous programming
            languages, including but not limited to: python, java, javascript,
            and html/css. i have been coding for years and i believe that it is
            the future. i have experience in web design, backend development,
            natural language processing, and much more. programming is special
            for me because it boils down to problem solving in an efficient
            manner, making its principles easily applied to our daily lives.
            <br />
            <a
              class="arrows1"
              href="https://github.com/sri240"
              rel="noopener noreferrer"
              target="_blank"
            >
              go to my github →
            </a>
          </p>
        </div>

        <div class="programs">
          <a
            href="https://github.com/sri240/processing-projects/tree/master/conways-game-of-life"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="conway">
              <p>processing-projects / conways-game-of-life</p>
            </div>
          </a>
          <a
            href="https://github.com/sri240/processing-projects/tree/master/ball-physics"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="ball">
              <p>processing-projects / ball-physics</p>
            </div>
          </a>
          <a
            href="https://github.com/sri240/python-projects/blob/master/rose-curves.py"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="roses">
              <p>python-projects / rose-curves</p>
            </div>
          </a>
          <a
            href="https://github.com/sri240/igl-tech/tree/master/chatbot"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="igl-tech">
              <p>igl-tech / chatbot</p>
            </div>
          </a>
          <a
            href="https://github.com/sri240/defeating-covid-19"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="covid">
              <p>defeating-covid-19</p>
            </div>
          </a>
        </div>
        <div id="cybersecurity" class="cybersecurity">
          <img
            src="https://i.imgur.com/BMQxhnp.png?1"
            alt="moons"
            id="moons"
          ></img>
          <p id="cybersecurity">
            <i>cybersecurity</i> • i compete in online ctfs under the psuedonym
            art3m1s as part of the 6-member all-female team known as code red.
            through competing in these competitions, i have been able to develop
            various skills necessary for a career in the field, including
            forensics, reverse engineering, cryptography, password cracking, web
            access exploitation, log analysis, and many more. i have become
            familiar with tools such as ghidra, wireshark, gdb, gimp, and
            hashcat, and have been given opportunities to participate in
            competitions where my team and i act as a cybersecurity firm
            interacting with clients. additionally, i am one of the challenge
            developers and head of educational outreach for the riceteacatpanda
            ctf.
            <br />
          </p>
        </div>

        <div id="robotics" class="robotics">
          <p>
            <i>robotics</i> • being quite the geek when it comes to robotics, i
            have become skilled in robotics design and build practices,
            including autocad, fritzing, breadboarding, soldering, and
            woodworking. i complete projects with groups of girls from girl
            scouts for recreation and competition, and i teach robotics.
          </p>
          {/*<div style={{paddingTop:"-50px",marginTop:"-80px",marginLeft:"-40px",width:"490px", float:"right"}}>*/}
          <img
            src="https://i.imgur.com/9OAGYdC.png?1"
            alt="bubbles"
            id="bubbles"
          ></img>
        </div>

        {/*data science: show algorithms and link kaggle projects*/}
      </div>

      <span class="arth">
        <p
          style={{
            float: "right",
            color: "#f7f2b2",
          }}
        >
          ~
        </p>
        <p>arts &nbsp;</p>
      </span>
      <div class="arts">
        <div class="programs">
          <a
            href="https://open.spotify.com/playlist/2mxY7W64euhLEX1xY50O7g?si=uI2Ou2UMRqmZ_YQUx2B-wg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="honest">
              <p>keep me honest</p>
            </div>
          </a>
          <a
            href="https://open.spotify.com/playlist/2JlVrEWB7hllU1fsr3VpEx?si=x74E-R-UQTiZeOcOmPeQPg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="gnossienne">
              <p>gnossienne</p>
            </div>
          </a>
          <a
            href="https://open.spotify.com/playlist/20WhnWluSqbRCB8zdLVTuZ?si=RSRR_dhrT7-SW6Esrlhm1A"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="incoherent">
              <p>incoherent</p>
            </div>
          </a>
          <a
            href="https://open.spotify.com/playlist/7mODIcZypC1hDTedPRAjkd?si=Aeyq_izJSJS7QJL0AslP0g"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="alexithymia">
              <p>alexithymia</p>
            </div>
          </a>
          <a
            href="https://open.spotify.com/playlist/36gzG71jNOi9kZbqWyap3q?si=isZSNxaiSja9WkKcGviM4g"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="ukiyo">
              <p>ukiyo</p>
            </div>
          </a>
        </div>
        <div class="music" id="music">
          <p
            style={{
              float: "right",
            }}
          >
            <i>music</i> • my instruments of choice include voice, violin,
            piano, guitar, and ukulele. i compose, analyze, perform, and produce
            music. it is, as many of my arts are, a form of relaxation for me
            while serving to put my creative mind to work. in my free time, i
            also enjoy curating playlists for different moods. i view music as
            something that can bring people together, and it can help us
            understand one another in ways that pure words simply cannot convey.
            <br />
            <a
              class="arrows2"
              href="https://open.spotify.com/user/koboiwarsri24.z?si=fk6nMS54SL-Vj-dL1j5wQQ"
              rel="noopener noreferrer"
              target="_blank"
            >
              go to my spotify →
            </a>
          </p>
        </div>

        <div class="poetry" id="poetry">
          <p style={{ float: "left" }}>
            <i>poetry</i> • poetry is what i turn to when inspiration strikes me
            in the form of a snippet of a story. oftentimes i will find a way to
            describe something that follows rhyme and structure, and i will rush
            to write it down. it is in this way, and by reading the poetry of
            others, that i have developed my own poetry that expresses these
            thoughts and feelings concisely and with beauty.
            <br />
            {/*<a class="arrows2" href="/anthology">
              go to my book of poetry →
          </a>*/}
          </p>
          <img src="https://i.imgur.com/S39cL6g.png?1" id="banners"></img>
        </div>
        <div class="programs2">
          <p style={{ height: "10px", margin: "0px" }}></p>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div class="oppaa" style={{ paddingBottom: "1px" }} key={node.id}>
              <a href={node.fields.slug} class="tablecontent">
                <h3 class="storyTitle">{node.frontmatter.title}</h3>
                <p class="excerpt">{node.excerpt}</p>
              </a>
            </div>
          ))}
          <br></br>
        </div>
        <div class="writing" id="writing">
          <p style={{ float: "right" }}>
            <i>writing</i> • i have enjoyed writing for as long as i can
            remember. an avid reader as a young girl, and i cultivated a love
            for reading that persists even now. this love for reading became my
            passion and seed for writing. late nights and early mornings are
            when i love to write, because that is when i am isolated with my
            thoughts. i often write short stories about topics that are
            meaningful to me but are difficult to talk about in day-to-day
            conversation. i seek to use imagery that reflects the thoughts and
            inner feelings of the characters, and to write stories that leave a
            lasting impact on the reader.
            <br />
            <a class="arrows2" href="/anthology">
              go to my anthology →
            </a>
          </p>
        </div>
      </div>

      <span class="peopleh">
        <p
          style={{
            color: "#f5b6ae",
            float: "left",
          }}
        >
          ~ &nbsp;
        </p>
        <p
          style={{
            width: "95.83%",
          }}
        >
          people
        </p>
      </span>
      <div class="people">
        <div class="lead" id="lead">
          <p>
            <i>leadership & teamwork</i> • teamwork is necessary for humans to
            make progress. i practice teamwork in cybersecurity, school,
            robotics, music, and in toastmasters. at school, i served as
            president of the freshman c/o 2022. during my time in the
            toastmasters program with a grandiose gaveliers, i have served as
            president and vice president of education and have earned my
            competent leadership award. being a leader in these activities has
            allowed me to develop my emotional intelligence, determination, and
            innovation.
            <br />
            <a
              class="arrows3"
              href="https://grandiosegaveliers.now.sh/"
              rel="noopener noreferrer"
              target="_blank"
            >
              go to the grandiose gaveliers →
            </a>
          </p>
        </div>
        {/*<img src="https://i.imgur.com/2tOw7sg.png?1" id="sparkles"></img>*/}
        <img src="https://i.imgur.com/W7fsGnr.png?1" id="chrisflower"></img>
        {/*<a
            href="https://grandiosegaveliers.now.sh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://i.imgur.com/A9biIgT.png?1"
              alt="grandiose gaveliers"
              id="gavel"
            ></img>
          </a>*/}
        <img src="https://i.imgur.com/gSzLH0h.png?1" id="stripes"></img>
        <div class="public" id="public">
          <p style={{ float: "right" }}>
            <i>public speaking</i> • the toastmasters program also allows me to
            practice public speaking, yet another necessary skill, along with
            leadership, to become successful. i have earned my competent
            communicator award: my journey to this award was one that required a
            lot of growth. i became more comfortable on a stage, and learned how
            to reduce tension between a speaker and the audience while conveying
            a significant message.
          </p>
        </div>

        <div class="mentor" id="mentor">
          <p style={{ marginBottom: "20px" }}>
            <i>mentorship</i> • mentoring others is one of the most convenient
            ways i have found to contribute to the community. i mentor younger
            girl scouts, and i tutor students who need help with schoolwork and
            those who want to get ahead. throughout my life, i have had many
            valuable mentors who have helped me reach where i am today, and
            mentoring others is my way of giving back.
          </p>
        </div>
        <img src="https://i.imgur.com/RsE6SoR.png?1" id="rects"></img>
      </div>
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [fields___readingTime___words], order: DESC }
      limit: 3
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
          }
          fields {
            readingTime {
              text
              words
            }
            slug
          }
          excerpt(pruneLength: 115)
        }
      }
    }
  }
`
