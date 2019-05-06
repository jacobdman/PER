import Home from '../components/Home/Home';
import Contact from '../components/Contact/Contact';
import Events from '../components/Events/Events';
import About from '../components/About/About';
import PDFView from '../components/PDFView/PDFView';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/contact',
    component: Contact,
    exact: true,
  },
  {
    path: '/events',
    component: Events,
    exact: true,
  },
  {
    path: '/about',
    component: About,
    exact: true,
  },
  {
    path: '/pdf/:pdf',
    component: PDFView,
    exact: true,
  },
];

export default routes;
