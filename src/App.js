import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import Feature from './Components/Feature';
import About from './Components/About';
//import Presentation from './Components/Presentation';
import aboutimage from './images/about.png';
import aboutimage1 from './images/about_1.png';
import Contact from './Components/Contact';
import Editor from './Components/Editor'
import useLocalStorage from './hooks/useLocalStorage'



function App() {

  const [html, setHtml] = useLocalStorage('html', '')
  const [css, setCss] = useLocalStorage('css', '')
  const [js, setJs] = useLocalStorage('js', '')
  const [srcDoc, setSrcDoc] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `)
    }, 250)

    return () => clearTimeout(timeout)
  }, [html, css, js])

  return (
    <div className='App'>
      <Header />
      <Feature />
      {/* <div style="width: 40%; float:left">
        <div>
          All Your Content One API Call Away
          Meet the industry’s most robust GraphQL APIs to boost developer productivity. All your content is hosted in the data center of your choice, and served from the world’s fastest Edge CDN.
        </div>
      </div>

      <div style="width: 60%; float:right">
        <div className="pane top-pane">

          <Editor
            language="xml"
            displayName="HTML"
            value={html}
            onChange={setHtml}
          />
        </div>
      </div> */}
      <div className='row-divide '>
        <div className='column-divide editor-color text-color' >
          <h2>
            All Your Content One API Call Away
          </h2>
          <p>
            Meet the industry’s most robust GraphQL
            APIs to boost developer productivity. All your
            content is hosted in the data center of your choice,
            and served from the world’s fastest Edge CDN.
          </p>
        </div>
        <div className='column-divide'>
          <div className="pane top-pane">
            <Editor
              language="xml"
              displayName="Queries"
              value={html}
              onChange={setHtml}
            />
          </div>
        </div>
      </div>
      <About image={aboutimage} title='Comes with everything required' button='Get the app' />
      <About image={aboutimage1} title='Download and get the app now' button='Download' />
      <Contact />
    </div>
  );
}

export default App;
