import './App.css'
import HomePage from './pages/HomePage.jsx'
import ContactPage from './pages/ContactPage.jsx';
import AboutUsPage from './pages/AboutUsPage.jsx';
import HelpPage from './pages/HelpPage.jsx';

function App() {

    const currentPageName = window.location.pathname

    const pages = {
        '/': HomePage,
        '/home': HomePage,
        '/about': AboutUsPage,
        '/help': HelpPage,
        '/contact': ContactPage,
    }

    let currentPage = HomePage

    if (Object.hasOwn(pages, currentPageName)) {
        currentPage = pages[currentPageName]
    }

    return currentPage()
}

export default App
