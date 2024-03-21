import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function Layout() {
  //Array fra forrige obligs skript
  const resources = [
    {
      category: 'HTML',
      text: 'HTML står for HyperText Markup Language, og er et strukturspråk som brukes for å lage strukturer til nettside- og applikasjonsgrensesnitt.',
      sources: [
        {
          title: 'W3Schools',
          url: 'https://www.w3schools.com/html/',
        },
        {
          title: 'HTML Living standard',
          url: 'https://html.spec.whatwg.org/multipage/',
        },
        {
          title: 'HTML.com Tutorials',
          url: 'https://html.com/',
        },
      ],
    },
    {
      category: 'CSS',
      text: 'CSS står for Cascading StyleSheets, og brukes for å sette stilregler på HTML-elementer.',
      sources: [
        {
          title: 'W3Schools',
          url: 'https://www.w3schools.com/css/',
        },
        {
          title: 'W3C HTML & CSS Standards',
          url: 'https://www.w3.org/standards/webdesign/htmlcss.html',
        },
        {
          title: 'W3C CSS Validator',
          url: 'https://jigsaw.w3.org/css-validator/',
        },
        {
          title: 'CSS Tricks',
          url: 'https://css-tricks.com/',
        },
      ],
    },
    {
      category: 'JavaScript',
      text: 'JavaScript er et scriptspråk basert på EcmaScript. JavaScript kjører direkte i nettleseren, og brukes ofte til å manipulere HTML og CSS i webgrensnesnitt.',
      sources: [
        {
          title: 'W3Schools',
          url: 'https://www.w3schools.com/js/',
        },
        {
          title: 'MDN Web Docs',
          url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        },
        {
          title: 'How to read JavaScript Documentation',
          url: 'https://www.youtube.com/watch?v=O3iR-CIufKM',
        },
      ],
    },
    {
      category: 'React',
      text: 'React er et rammeverk bygget i JavaScript. React bruker komponenter og states for å lage en levende frontend.',
      sources: [
        {
          title: 'React documentation',
          url: 'https://reactjs.org/docs/getting-started.html',
        },
        {
          title: 'W3Schools',
          url: 'https://www.w3schools.com/REACT/DEFAULT.ASP',
        },
        {
          title: 'How to read JavaScript Documentation',
          url: 'https://www.youtube.com/watch?v=O3iR-CIufKM',
        },
      ],
    },
    {
      category: 'Sanity and headless CMS',
      text: 'Sanity er et headless CMS som står for innholdsadministrasjon. Innhold hentes inn i applikasjoner via GROQ-spørringer.',
      sources: [
        {
          title: 'Sanity documentation',
          url: 'https://www.sanity.io/docs',
        },
        {
          title: 'OnCrawl: a beginners guide to headless CMS',
          url: 'https://www.oncrawl.com/technical-seo/beginners-guide-headless-cms/',
        },
        {
          title: 'Section.io: Getting started with Sanity CMS',
          url: 'https://www.section.io/engineering-education/getting-started-with-sanity-cms/',
        },
      ],
    },
  ]
  const [content, setContent] = useState(resources[0])
  const navigate = useNavigate()
  const {category} = useParams()

  //funksjon foronclick
  const handleClick = (element) => {
    setContent(element)
    navigate(`/${element.category}`)
  }

  return (
    <>
    <body>
      
        <nav id="menu">
          {resources.map((element, index) => (
            <button onClick={() => handleClick(element)} key={index} className={content.category === element.category ? 'active' : ''}>
              {element.category}
            </button>
          ))}
        </nav>
        <main id="article-box">
          <article id="content">
            <h2>{content.category}</h2>
            <p>{content.text}</p>
          </article>
          <div id="links">
            <ul>
            {content.sources.map((link, index) => (
              <li>
                <a href={link.url}>  const { category } = useParams();{link.title}</a>
              </li>
            ))}
            </ul>
          </div>
        </main>
            </body>
    </>
  )
}
