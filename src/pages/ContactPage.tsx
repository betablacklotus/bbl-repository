import { useMeta } from '../seo';

// Split into parts so no literal address appears in the HTML source
const EM_USER = 'you';
const EM_HOST = 'example';
const EM_TLD  = 'com';

function ObfuscatedEmail() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.href = `mailto:${EM_USER}@${EM_HOST}.${EM_TLD}`;
  };

  return (
    <a href="#contact" onClick={handleClick}>
      {EM_USER}
      <span aria-hidden="true">&#64;</span>
      {EM_HOST}.{EM_TLD}
    </a>
  );
}

export function ContactPage() {
  useMeta({ title: 'Contact', description: 'How to reach the author of Beta Black Lotus.' });

  return (
    <div className="max-w-prose mx-auto px-4 sm:px-6 pt-8 sm:pt-10 pb-20">
      <header className="border-b rule pb-6 mb-8">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-2">Contact</h1>
      </header>

      <div className="prose-mono">
        <p>
          The best way to reach me is by email. I read everything, though I cannot always reply.
        </p>
        <p>
          Write to me at <ObfuscatedEmail />.
        </p>
      </div>
    </div>
  );
}
