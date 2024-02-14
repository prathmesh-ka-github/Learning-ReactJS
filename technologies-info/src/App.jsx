import Card from "./Card.jsx"
import Title from "./Title.jsx"
import Navbar from "./Navbar.jsx"
import Footer from "./Footer.jsx"

function App() {

  return (
    <>
      <Title/>
      <Navbar/>
      <div className="main">
        <Card shadow="20bcff" logo="react.svg" title="ReactJS" desc="React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js."/>
        <Card shadow="e23237" logo="angular.svg" title="AngularJS" desc="Angular is a TypeScript-based, free and open-source single-page web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS." />
        <Card shadow="42b883" logo="vue.svg" title="VueJS" desc="Vue.js is an open-source model view viewmodel front end JavaScript library for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members." />
        <Card shadow="ff3e00" logo="svelte.svg" title="Svelte" desc="Svelte is a free and open-source front-end component framework and language created by Rich Harris and maintained by the Svelte core team members. Svelte is not a monolithic JavaScript library imported by applications: instead, Svelte compiles HTML templates to specialized code that manipulates the DOM directly." />
        <Card shadow="0071b5" logo="backbone.svg" title="Backbone" desc="Backbone.js is a JavaScript rich-client web app framework based on the model–view–controller design paradigm, intended to connect to an API over a RESTful JSON interface. Backbone has only hard dependency, which is on one JavaScript library, Underscore.js. jQuery can also be optionally used for the library." />
        <Card shadow="673ab8" logo="preact.svg" title="Preact" desc="Preact provides the thinnest possible Virtual DOM abstraction on top of the DOM. It builds on stable platform features, registers real event handlers and plays nicely with other libraries. Preact can be used directly in the browser without any transpilation steps." />
        <Card shadow="0868ac" logo="jquery.svg" title="JQuery" desc="The jQuery framework is one of the initial frameworks introduced in 2006. It stands apart in today’s tech ecosphere even today owing to the simplicity it offers, ease to use and the minimal need to write extensive JavaScript codes while using Vue.js. Another major benefit of jQuery is that it is still being continually developed into a better version each passing day."/>
        <Card shadow="e3ab5e" logo="ember.svg" title="Ember" desc="Ember resembles Angular in terms of component-based functionality and two-way data binding. It was developed in 2011 to handle the growing demands of modern-day technologies. Multifaceted web and mobile applications can be built using ember and its effective design will handle all the concerns. The developer community is trivial despite it being new and unexplored." />
        <Footer/>
      </div>

    </>
  )
}

export default App
