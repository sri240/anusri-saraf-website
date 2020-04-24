import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="home" />

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

    <div class="description" style={{float:"left"}}>
      <p style = {{
        fontSize: '20px',
        marginBottom: '0.1em',
        marginTop: '0.4em',
        }}>• who i am •</p>
      <p style={{maxWidth: "670px",}}>
        <i>full-stack developer ~ engineer ~ musician ~ writer ~ leader</i> <br/>
        fifteen year old student from the bay with a passion for exploration, the pursuit of knowledge, and practically everything else as well<br />
        my goal is to discover and take advantage of all of the ways i can contribute to the world while doing what i love and living in contentment.
      </p>
    </div>
    <div class="mylogo" style={{
        alignItems: "left",
        }}>
      <Image />
    </div>
    {/*250, 173, 143 */}
    <div class="activities"  style={{clear:"both"}}>
      <p style = {{
        fontSize: '20px',
        marginBottom: '0.1em',
        color: 'rgb(180, 180, 240)',
        textAlign: "center",
        marginTop: '1.1em',
        }}></p>


      <div class="technology" style={{display:"inline-block"}}></div>
        <p style={{
          fontFamily: "SFMono-Regular,Consolas,Roboto Mono,Droid Sans Mono,Liberation Mono,Menlo,Courier,monospace",
          fontWeight: 'lighter',
          color: "#f5b6ae",
          float:"left"
        }}>~ &nbsp;</p>
        <p style={{
          fontFamily: "SFMono-Regular,Consolas,Roboto Mono,Droid Sans Mono,Liberation Mono,Menlo,Courier,monospace",
          fontWeight: 'lighter',
          color: "white",
          marginBottom: "20px",
        }}>technology</p>
        <p style = {{color: 'rgb(180, 180, 240)',
          marginBottom: "0px",
          clear: "both",
          width: "460px"}}><i>programming</i> • i am proficient in numerous programming languages, including
         but not limited to: python, java, javascript, and html/css. you can check out some of my projects on <a href="https://github.com/sri240" target="_blank">
         github</a>. i have been coding for years and i believe that it is the future. i have experience in web design, backend 
         development, natural language processing, and much more. programming is special for me because it boils down to problem 
         solving in an efficient manner, making its principles easily applied to our daily lives.<br/>
         </p>
         <p style = {{color: 'rgb(180, 180, 240)',
          marginBottom: "0px",
          clear: "both",
          width: "460px",
          float: "right"}}>
         <i>cybersecurity</i> • i compete in online ctfs under the psuedonym art3m1s as part of the 6-member all-female team known as
         code red. through competing in these competitions, i have been able to develop various skills necessary for a career in 
         the field, including forensics, reverse engineering, cryptography, password cracking, web access exploitation, log analysis, 
         and many more. i have become familiar with tools such as ghidra, wireshark, gdb, gimp, and hashcat, and have been given
         opportunities to participate in competitions where my team and i act as a cybersecurity firm interacting with clients. 
         additionally, i am one of the developers for the riceteacatpanda ctf.<br/>
         </p>
         <p style = {{color: 'rgb(180, 180, 240)',
          marginBottom: "20px",
          clear: "both",
          width: "460px"}}>
         <i>robotics</i> •  being quite the geek when it comes to robotics, i have become skilled in robotics design and build 
         practices, including autocad, fritzing, breadboarding, soldering, and woodworking. i complete projects with groups of 
         girls from girl scouts for recreation and competition. i teach robotics as well.</p>
        {/*data science: show algorithms and link kaggle projects*/}



      <div class="arts" style={{display:"inline-block"}}>
        <p style={{
          fontFamily: "SFMono-Regular,Consolas,Roboto Mono,Droid Sans Mono,Liberation Mono,Menlo,Courier,monospace",
          fontWeight: 'lighter',
          float:"right",
          color: "#f7f2b2",
          textAlign: "right",
        }}>~</p>
        <p style={{
          fontFamily: "SFMono-Regular,Consolas,Roboto Mono,Droid Sans Mono,Liberation Mono,Menlo,Courier,monospace",
          fontWeight: 'lighter',
          color: "white",
          marginBottom: "20px",
          textAlign: "right",
        }}>arts &nbsp;</p>
        <p style = {{color: '#f2aebe',
          marginBottom: "20px",
          clear: "both",
          width: "460px",
          float: "right"}}><i>music</i> • my instruments of choice include voice, violin, piano, guitar, and ukulele. i compose, 
          analyze, perform, and produce music. it is, as many of my arts are, a form of relaxation for me while serving to 
          put my creative mind to work. i view music as something that can bring people together, and it can help us understand 
          one another in ways that pure words simply cannot convey.
         <br/></p>
         <p style = {{color: '#f2aebe',
          marginBottom: "20px",
          clear: "both",
          width: "460px"}}>
         <i>poetry</i> • poetry is what i turn to when inspiration strikes me in the form of a snippet of a story. oftentimes i will find a way 
         to describe something that follows rhyme and structure, and i will rush to write it down. it is in this way, and by reading 
         the poetry of others, that i have developed my own poetry that expresses these thoughts and feelings concisely and with beauty.
         <br /></p>
         <div class="writing" style={{
           display:"inline"
         }}>
          <p style = {{color: '#f2aebe',
            marginBottom: "20px",
            clear: "both",
            width: "460px",
            float: "right"}}>
          <i>writing</i> •  i have enjoyed writing for as long as i can remember. i was an avid reader when i was young, and i love 
          to read even now. this love for reading became my passion and seed for writing.  late nights and early morning are when 
          i love to write, because that is when i am isolated with my thoughts. i often write short stories about topics that i 
          feel uncomfortable talking about normally or addressing in a poem. i seek to use imagery that reflects the thoughts 
          and inner feelings of the characters, and to write stories that have a strong impact on the reader.</p>
        {/*<p style={{float:"left"}}>epic</p>*/}
         </div>
      </div>



      <div class="people" style={{display:"inline-block"}}>
        <p style={{
          fontFamily: "SFMono-Regular,Consolas,Roboto Mono,Droid Sans Mono,Liberation Mono,Menlo,Courier,monospace",
          fontWeight: 'lighter',
          color: "#f5b6ae",
          float:"left",
        }}>~ &nbsp;</p>
        <p style={{
          fontFamily: "SFMono-Regular,Consolas,Roboto Mono,Droid Sans Mono,Liberation Mono,Menlo,Courier,monospace",
          fontWeight: 'lighter',
          color: "white",
          marginBottom: "20px",
          width:"900px"
        }}>people</p>
        <p style = {{color: '#9de5e7',
          marginBottom: "0px",
          clear: "both",
          width: "460px"}}>
            <i>leadership & teamwork</i> • teamwork is necessary for humans to make progress. i practice teamwork in cybersecurity, school
            robotics, music, and in toastmasters. at school, i served as president of the freshman c/o 2022. during my time in the toastmasters 
            program, i have served as president and vice president of education and have earned my competent leadership award. being a leader 
            in these activities requires emotional intelligence, determination, and innovation.
         <br/></p>
         <p style = {{color: '#9de5e7',
          marginBottom: "0px",
          clear: "both",
          width: "460px",
          float: "right"}}>
            <i>public speaking</i> • the toastmasters program also allows me to practice public speaking, yet another necessary
            skill, along with leadership, to become successful. i have earned my competent communicator award: my journey to this
            award was one that required a lot of growth. i became more comfortable on a stage, and learned how to reduce tension
            between a speaker and the audience while conveying a significant message.
         <br /></p>
         <p style = {{color: '#9de5e7',
          marginBottom: "0px",
          clear: "both",
          width: "460px",
          marginBottom: "20px"}}>
            <i>mentorship</i> • mentoring others is one of the most convenient  ways i have found to contribute to the community. i mentor younger girl 
            scouts, and i tutor students who need help with schoolwork and those who want to get ahead. throughout my life, i have had 
            many valuable mentors who have helped me reach where i am today, and mentoring others is my way of giving back.</p>
      </div>

    </div>
  </Layout>
)

export default IndexPage
