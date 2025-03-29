import './App.css'
import HomePage from './pages/HomePage.jsx'
import ContactPage from './pages/ContactPage.jsx';
import AboutUsPage from './pages/AboutUsPage.jsx';
import HelpPage from './pages/HelpPage.jsx';
import RentLocationPage from './pages/RentLocationPage.jsx';
import JoinAsPartnerPage from './pages/JoinAsPartnerPage.jsx';
import PartnersPage from './pages/PartnersPage.jsx';

function App() {

    const currentPageName = window.location.pathname

    const pages = {
        '/': HomePage,
        '/home': HomePage,
        '/about': AboutUsPage,
        '/help': HelpPage,
        '/contact': ContactPage,
        '/rent': RentLocationPage,
        '/join': JoinAsPartnerPage,
        '/partners': PartnersPage,
    }

    let currentPage = HomePage

    if (Object.hasOwn(pages, currentPageName)) {
        currentPage = pages[currentPageName]
    }

    return currentPage()
}

export default App
