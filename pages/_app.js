import React, { useEffect } from 'react'
import 'tailwindcss/tailwind.css'
import '../styles/style.css'

import { RecoilRoot } from 'recoil'

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    var customViewportCorrectionVariable = 'vh';


    function setViewportProperty(doc) {
      var prevClientHeight;
      var customVar = '--' + (customViewportCorrectionVariable || 'vh');
      function handleResize() {
        var clientHeight = doc.clientHeight;
        if (clientHeight === prevClientHeight) return;
        requestAnimationFrame(function updateViewportHeight() {
          doc.style.setProperty(customVar, (clientHeight * 0.01) + 'px');
          prevClientHeight = clientHeight;
        });
      }
      handleResize();
      return handleResize;
    }
    window.addEventListener('resize', setViewportProperty(document.documentElement));

    return (() => {
      window.removeEventListener('resize', setViewportProperty(document.documentElement));
    })
  }, [])

  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  )
}

export default MyApp
