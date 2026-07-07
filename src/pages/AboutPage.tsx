import { navigate } from '../router';
import { useMeta } from '../seo';
import { EditFab } from '../components/EditFab';

export function AboutPage() {
  useMeta({ title: 'About', description: 'About Beta Black Lotus and its author.' });

  return (
    <>
      <div className="max-w-prose mx-auto px-4 sm:px-6 pt-8 sm:pt-10 pb-20">
        <header className="border-b rule pb-6 mb-8">
          <h1 className="text-2xl sm:text-3xl font-semibold mb-2">About</h1>
        </header>

        <div className="prose-mono">
          <p>
            <strong>Beta Black Lotus</strong> is a personal weblog kept by its author. It is a
            notebook in public — a place to write down things I want to remember and share.
          </p>

          <h2>What I write about</h2>
          <ul>
            <li>Small software projects and the lessons learned from them</li>
            <li>Books, mostly old ones</li>
            <li>Field recordings and the places I made them</li>
            <li>The occasional opinion about tools, held loosely</li>
          </ul>

          <h2>How this site is built</h2>
          <p>
            This site is built to be lightweight and portable. It uses plain HTML, CSS, and
            a small amount of JavaScript. There is no tracking, no analytics, no cookie banner,
            and no newsletter popup. The font is IBM Plex Mono. The design is deliberately spare.
          </p>

          <p>
            The source is a set of static files that can be hosted on almost any web server,
            including inexpensive shared hosting. See the <a href="/contact" onClick={(e) => { e.preventDefault(); navigate('/contact'); }}>contact page</a> if
            you want to reach me.
          </p>

          <h2>Subscribe</h2>
          <p>
            If you use an RSS reader, you can subscribe to the <a href="/feed.xml">RSS feed</a>.
            That is the best way to keep up.
          </p>

          <hr />

          <p className="text-sm">
            <em>This page is editable. Open the source file at <code>src/pages/AboutPage.tsx</code> to change this text.</em>
          </p>
        </div>
      </div>
      <EditFab />
    </>
  );
}
