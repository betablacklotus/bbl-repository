import { useRouter, navigate } from './router';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { PostPage } from './pages/PostPage';
import { VideosPage } from './pages/VideosPage';
import { MusicPage } from './pages/MusicPage';
import { AboutPage } from './pages/AboutPage';
import { ArchivePage } from './pages/ArchivePage';
import { ContactPage } from './pages/ContactPage';
import { TagPage } from './pages/TagPage';
import { AdminLoginPage } from './pages/AdminLoginPage';

function App() {
  const route = useRouter();

  let page;
  switch (route.path) {
    case '/':
      page = <HomePage />;
      break;
    case '/post':
      page = <PostPage slug={route.params.slug} />;
      break;
    case '/videos':
      page = <VideosPage />;
      break;
    case '/music':
      page = <MusicPage />;
      break;
    case '/EPK':
      page = <AboutPage />;
      break;
    case '/archive':
      page = <ArchivePage />;
      break;
    case '/contact':
      page = <ContactPage />;
      break;
    case '/tag':
      page = <TagPage tag={route.params.tag} />;
      break;
    case '/backstage-3k9mxf2p7qw4':
      page = <AdminLoginPage />;
      break;
    default:
      page = <HomePage />;
  }

  return (
    <div className="min-h-screen bg-paper">
      <Header />
      <main style={{ paddingTop: 64 }}>{page}</main>
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t rule mt-20">
      <div className="max-w-page mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
        <div>
          <strong style={{ color: '#1a1a1a' }}>Beta Black Lotus.</strong>
        </div>
        <div className="flex gap-4 flex-wrap justify-center">
          <a href="/" style={{ textDecoration: 'none' }} onClick={(e) => { e.preventDefault(); navigate('/'); }}>Home</a>
          <a href="/music" style={{ textDecoration: 'none' }} onClick={(e) => { e.preventDefault(); navigate('/music'); }}>Music</a>
          <a href="/videos" style={{ textDecoration: 'none' }} onClick={(e) => { e.preventDefault(); navigate('/videos'); }}>Videos</a>
          <a href="/EPK" style={{ textDecoration: 'none' }} onClick={(e) => { e.preventDefault(); navigate('/EPK'); }}>EPK</a>
          <a href="/contact" style={{ textDecoration: 'none' }} onClick={(e) => { e.preventDefault(); navigate('/contact'); }}>Contact</a>
          <a href="/feed.xml" style={{ textDecoration: 'none' }}>RSS</a>
        </div>
        <div>© {new Date().getFullYear()}</div>
      </div>
    </footer>
  );
}

export default App;
