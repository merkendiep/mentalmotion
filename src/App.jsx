import './App.css'
import HomePage from './pages/HomePage.jsx'
import ContactPage from './pages/ContactPage.jsx';

function App() {

    const currentPageName = window.location.pathname

    const pages = {
        '/contact': ContactPage,
        '/': HomePage,
    }

    let currentPage = HomePage

    if (Object.hasOwn(pages, currentPageName)) {
        currentPage = pages[currentPageName]
    }

    return currentPage()
}

export default App
