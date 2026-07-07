import { useState } from 'react';
import { getAllPosts, pinPost, unpinPost, deletePost, updatePost, resetPosts, createPost, getPost } from '../postStore';
import { changePassword } from '../adminAuth';
import { checkPasswordStrength, getBlockedIPs, getRecentFailedAttempts } from '../security';
import { useMeta } from '../seo';
import { navigate } from '../router';
import { formatDate } from '../postStore';
import { downloadRssFeed } from '../rss';
import type { Post } from '../types';

interface AdminPanelProps {
  onLogout: () => void;
}

export function AdminPanel({ onLogout }: AdminPanelProps) {
  useMeta({ title: 'Admin Panel', description: 'Manage posts.' });

  const [posts, setPosts] = useState<Post[]>(getAllPosts());

  // Support ?edit=slug deep-link from the EditFab on live pages
  const [editing, setEditing] = useState<Post | null>(() => {
    const params = new URLSearchParams(window.location.search);
    const slug = params.get('edit');
    if (slug) {
      // Strip the query param from the URL so the browser history stays clean
      history.replaceState(null, '', window.location.pathname);
      const found = getPost(slug);
      if (found) return { ...found };
    }
    return null;
  });
  const [isNew, setIsNew] = useState(false);
  const [showSecurity, setShowSecurity] = useState(false);
  const [message, setMessage] = useState('');

  const refresh = () => setPosts(getAllPosts());

  const handlePin = (slug: string, pin: boolean) => {
    if (pin) pinPost(slug); else unpinPost(slug);
    refresh();
  };

  const handleDelete = (slug: string) => {
    if (confirm('Delete this post? This cannot be undone.')) {
      deletePost(slug);
      refresh();
    }
  };

  const handleSave = (post: Post) => {
    if (isNew) {
      if (!createPost(post)) {
        alert(`A post with slug "${post.slug}" already exists. Change the slug and try again.`);
        return;
      }
    } else if (post.pinned) {
      pinPost(post.slug);
      updatePost(post.slug, { ...post, pinned: true });
    } else {
      unpinPost(post.slug);
      updatePost(post.slug, post);
    }
    refresh();
    setEditing(null);
    setIsNew(false);
    setMessage(isNew ? 'Post created.' : 'Post saved.');
    setTimeout(() => setMessage(''), 3000);
  };

  const handleSaveAndView = (post: Post) => {
    if (isNew) {
      if (!createPost(post)) {
        alert(`A post with slug "${post.slug}" already exists. Change the slug and try again.`);
        return;
      }
    } else if (post.pinned) {
      pinPost(post.slug);
      updatePost(post.slug, { ...post, pinned: true });
    } else {
      unpinPost(post.slug);
      updatePost(post.slug, post);
    }
    refresh();
    setEditing(null);
    setIsNew(false);
    window.open(`/${post.slug}`, '_blank', 'noopener');
  };

  const handleNew = () => {
    const today = new Date().toISOString().slice(0, 10);
    setIsNew(true);
    setEditing({
      slug: '',
      title: '',
      date: today,
      excerpt: '',
      content: '',
    });
  };

  const handleReset = () => {
    if (confirm('Reset all posts to the original samples? This will discard your changes.')) {
      resetPosts();
      refresh();
      setMessage('Posts reset to defaults.');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  if (editing) {
    return <PostEditor post={editing} isNew={isNew} onSave={handleSave} onSaveAndView={handleSaveAndView} onCancel={() => { setEditing(null); setIsNew(false); }} />;
  }

  const blockedIPs = getBlockedIPs();
  const failedAttempts = getRecentFailedAttempts();

  return (
    <div className="max-w-page mx-auto px-4 sm:px-6 pt-8 sm:pt-10 pb-20">
      <header className="border-b rule pb-6 mb-6 flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-2xl font-semibold mb-1">Admin Panel</h1>
          <p className="text-sm text-muted">{posts.length} posts.</p>
        </div>
        <div className="flex gap-2 flex-wrap">
          <button onClick={handleNew} className="btn btn-primary">+ New Post</button>
          <button onClick={() => setShowSecurity(!showSecurity)} className="btn">
            {showSecurity ? 'Hide security' : 'Security'}
          </button>
          <button onClick={downloadRssFeed} className="btn">Download RSS</button>
          <button onClick={handleReset} className="btn">Reset posts</button>
          <button onClick={onLogout} className="btn">Log out</button>
        </div>
      </header>

      {message && (
        <div className="border border-success p-3 mb-4 text-sm" style={{ background: '#e8f0e8' }}>
          {message}
        </div>
      )}

      {showSecurity && (
        <SecuritySection blockedIPs={blockedIPs} failedAttempts={failedAttempts} />
      )}

      <div className="overflow-x-auto">
        <table className="w-full text-sm" style={{ minWidth: 600 }}>
          <thead>
            <tr className="border-b rule">
              <th className="text-left py-2 px-2">Title</th>
              <th className="text-left py-2 px-2 hidden sm:table-cell">Date</th>
              <th className="text-left py-2 px-2">Pin this post</th>
              <th className="text-left py-2 px-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.slug} className="border-b rule">
                <td className="py-2 px-2">
                  <a
                    href={`/${post.slug}`}
                    onClick={(e) => { e.preventDefault(); navigate(`/${post.slug}`); }}
                    style={{ textDecoration: 'none', color: '#1a1a1a' }}
                    className="hover:underline"
                  >
                    {post.title}
                  </a>
                </td>
                <td className="py-2 px-2 text-muted hidden sm:table-cell">{formatDate(post.date)}</td>
                <td className="py-2 px-2">
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={!!post.pinned}
                      onChange={(e) => handlePin(post.slug, e.target.checked)}
                      className="cursor-pointer"
                    />
                    <span className="text-xs text-muted sr-only">Pinned</span>
                  </label>
                </td>
                <td className="py-2 px-2">
                  <div className="flex gap-1 flex-wrap">
                    <button onClick={() => setEditing({ ...post })} className="btn" style={{ padding: '4px 10px', fontSize: 12 }}>
                      Edit
                    </button>
                    <button onClick={() => handleDelete(post.slug)} className="btn" style={{ padding: '4px 10px', fontSize: 12 }}>
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function SecuritySection({ blockedIPs, failedAttempts }: { blockedIPs: ReturnType<typeof getBlockedIPs>; failedAttempts: ReturnType<typeof getRecentFailedAttempts> }) {
  const [current, setCurrent] = useState('');
  const [next, setNext] = useState('');
  const [confirmPw, setConfirmPw] = useState('');
  const [msg, setMsg] = useState('');

  const handleChange = async (e: React.FormEvent) => {
    e.preventDefault();
    if (next !== confirmPw) {
      setMsg('New passwords do not match.');
      return;
    }
    const strength = checkPasswordStrength(next);
    if (!strength.strong) {
      setMsg(strength.message);
      return;
    }
    const result = await changePassword(current, next);
    setMsg(result.message);
    if (result.success) {
      setCurrent(''); setNext(''); setConfirmPw('');
    }
  };

  return (
    <div className="mb-8 border rule p-4 bg-panel">
      <h2 className="text-lg font-semibold mb-4">Security</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Change password */}
        <div>
          <h3 className="text-sm font-semibold mb-3">Change password</h3>
          <form onSubmit={handleChange} className="flex flex-col gap-3">
            <input type="password" placeholder="Current password" value={current} onChange={(e) => setCurrent(e.target.value)} className="field" required />
            <input type="password" placeholder="New password" value={next} onChange={(e) => setNext(e.target.value)} className="field" required />
            <input type="password" placeholder="Confirm new password" value={confirmPw} onChange={(e) => setConfirmPw(e.target.value)} className="field" required />
            {msg && <p className="text-xs text-error">{msg}</p>}
            <button type="submit" className="btn btn-primary self-start">Change password</button>
          </form>
          <p className="text-xs text-muted mt-3">
            Password must be 12+ chars with upper, lower, number, and symbol.
          </p>
        </div>

        {/* Logs */}
        <div>
          <h3 className="text-sm font-semibold mb-3">Recent failed attempts ({failedAttempts.length})</h3>
          <div className="max-h-40 overflow-y-auto border rule bg-white">
            {failedAttempts.length === 0 ? (
              <p className="p-3 text-xs text-muted">No recent failed attempts.</p>
            ) : (
              <ul className="text-xs">
                {failedAttempts.slice(-10).map((a, i) => (
                  <li key={i} className="px-3 py-1.5 border-b rule last:border-b-0">
                    {new Date(a.timestamp).toLocaleString()} — {a.ip}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <h3 className="text-sm font-semibold mt-4 mb-3">Blocked IPs ({blockedIPs.length})</h3>
          <div className="max-h-40 overflow-y-auto border rule bg-white">
            {blockedIPs.length === 0 ? (
              <p className="p-3 text-xs text-muted">No blocked IPs.</p>
            ) : (
              <ul className="text-xs">
                {blockedIPs.map((b) => (
                  <li key={b.ip} className="px-3 py-1.5 border-b rule last:border-b-0">
                    {b.ip} — until {new Date(b.blockedUntil).toLocaleString()} ({b.attempts} attempts)
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Post editor
function PostEditor({ post, isNew, onSave, onSaveAndView, onCancel }: { post: Post; isNew: boolean; onSave: (p: Post) => void; onSaveAndView: (p: Post) => void; onCancel: () => void }) {
  const [draft, setDraft] = useState<Post>({ ...post });
  const [tab, setTab] = useState<'content' | 'social' | 'media'>('content');

  const update = (field: keyof Post, value: unknown) => {
    setDraft({ ...draft, [field]: value });
  };

  return (
    <div className="max-w-page mx-auto px-4 sm:px-6 pt-8 sm:pt-10 pb-20">
      <header className="border-b rule pb-4 mb-6 flex items-center justify-between flex-wrap gap-4">
        <h1 className="text-xl font-semibold">{isNew ? 'New Post' : `Edit: ${post.title}`}</h1>
        <div className="flex gap-2">
          <button onClick={onCancel} className="btn">Cancel</button>
          <button onClick={() => onSave(draft)} className="btn btn-primary">{isNew ? 'Create' : 'Save'}</button>
          <button onClick={() => onSaveAndView(draft)} className="btn btn-primary">{isNew ? 'Create & View' : 'Save & View'}</button>
        </div>
      </header>

      {/* Tabs */}
      <div className="flex gap-1 mb-6 border-b rule">
        {(['content', 'social', 'media'] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-2 text-sm capitalize ${tab === t ? 'border-b-2 border-ink font-semibold' : 'text-muted'}`}
            style={{ borderBottomWidth: tab === t ? 2 : 0 }}
          >
            {t}
          </button>
        ))}
      </div>

      {tab === 'content' && (
        <div className="flex flex-col gap-4">
          <div>
            <label className="text-sm block mb-1">Title</label>
            <input type="text" value={draft.title} onChange={(e) => update('title', e.target.value)} className="field" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm block mb-1">Slug</label>
              <input type="text" value={draft.slug} onChange={(e) => update('slug', e.target.value)} className="field" />
            </div>
            <div>
              <label className="text-sm block mb-1">Date</label>
              <input type="date" value={draft.date} onChange={(e) => update('date', e.target.value)} className="field" />
            </div>
          </div>
          <div>
            <label className="text-sm block mb-1">Excerpt</label>
            <textarea value={draft.excerpt} onChange={(e) => update('excerpt', e.target.value)} className="field" rows={2} />
          </div>
          <div>
            <label className="text-sm block mb-1">Tags (comma-separated)</label>
            <input
              type="text"
              value={(draft.tags || []).join(', ')}
              onChange={(e) => update('tags', e.target.value.split(',').map((t) => t.trim()).filter(Boolean))}
              className="field"
            />
          </div>
          <div>
            <label className="text-sm block mb-1">Content (Markdown)</label>
            <textarea value={draft.content} onChange={(e) => update('content', e.target.value)} className="field font-mono" rows={18} style={{ fontSize: 13, lineHeight: 1.6 }} />
          </div>
          <div>
            <label className="text-sm block mb-1 flex items-center gap-2">
              <input type="checkbox" checked={!!draft.pinned} onChange={(e) => update('pinned', e.target.checked)} />
              Pinned (appears at top of feed)
            </label>
          </div>
        </div>
      )}

      {tab === 'social' && (
        <div className="flex flex-col gap-4 max-w-prose">
          <p className="text-sm text-muted">
            These fields control how the post appears when shared on social media and in messaging apps.
            If left blank, the post title and excerpt are used.
          </p>
          <div>
            <label className="text-sm block mb-1">Social title</label>
            <input type="text" value={draft.socialTitle || ''} onChange={(e) => update('socialTitle', e.target.value)} className="field" placeholder={draft.title} />
          </div>
          <div>
            <label className="text-sm block mb-1">Social description</label>
            <textarea value={draft.socialDescription || ''} onChange={(e) => update('socialDescription', e.target.value)} className="field" rows={3} placeholder={draft.excerpt} />
          </div>
          <div>
            <label className="text-sm block mb-1">Social image URL</label>
            <input type="url" value={draft.socialImage || ''} onChange={(e) => update('socialImage', e.target.value)} className="field" placeholder={draft.featuredImage || 'https://…'} />
            <p className="text-xs text-muted mt-1">Recommended: 1200×630px. Used for Open Graph and Twitter Card images.</p>
          </div>
        </div>
      )}

      {tab === 'media' && (
        <div className="flex flex-col gap-6 max-w-prose">

          {/* ── Bandcamp ── */}
          <div className="border rule p-4 flex flex-col gap-4">
            <h3 className="text-sm font-semibold">Bandcamp embed</h3>
            <p className="text-xs text-muted -mt-2">
              Enter either a Track ID or Album ID to embed the Bandcamp player at the top of the post.
              Leave both blank and use <code>:::bandcamp-track ID</code> or <code>:::bandcamp-album ID</code> in the content instead.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm block mb-1">Track ID</label>
                <input
                  type="text"
                  value={draft.bandcampTrackId || ''}
                  onChange={(e) => update('bandcampTrackId', e.target.value || undefined)}
                  className="field"
                  placeholder="e.g. 1234567890"
                />
                <p className="text-xs text-muted mt-1">Numeric ID from the Bandcamp track URL.</p>
              </div>
              <div>
                <label className="text-sm block mb-1">Album ID</label>
                <input
                  type="text"
                  value={draft.bandcampAlbumId || ''}
                  onChange={(e) => update('bandcampAlbumId', e.target.value || undefined)}
                  className="field"
                  placeholder="e.g. 9876543210"
                />
                <p className="text-xs text-muted mt-1">Numeric ID from the Bandcamp album URL.</p>
              </div>
            </div>

            {(draft.bandcampTrackId || draft.bandcampAlbumId) && (
              <div>
                <p className="text-xs text-muted mb-2">Preview:</p>
                <div className="bandcamp-embed">
                  <iframe
                    key={`${draft.bandcampTrackId}|${draft.bandcampAlbumId}`}
                    src={
                      draft.bandcampTrackId
                        ? `https://bandcamp.com/EmbeddedPlayer/track=${draft.bandcampTrackId}/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/`
                        : `https://bandcamp.com/EmbeddedPlayer/album=${draft.bandcampAlbumId}/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/`
                    }
                    title="Bandcamp preview"
                    seamless
                    loading="lazy"
                  />
                </div>
              </div>
            )}
          </div>

          {/* ── Cover image ── */}
          <div>
            <label className="text-sm block mb-1">Cover image URL</label>
            <input type="url" value={draft.featuredImage || ''} onChange={(e) => update('featuredImage', e.target.value)} className="field" placeholder="https://…" />
            <p className="text-xs text-muted mt-1">
              Appears full-width beneath the title and as the thumbnail on listing pages.
              Ignored if a Bandcamp or Bunny video embed is set (those take priority as the cover).
            </p>
          </div>

          {/* ── Bunny Stream ── */}
          <div className="border rule p-4 flex flex-col gap-4">
            <h3 className="text-sm font-semibold">Bunny Stream</h3>
            <div>
              <label className="text-sm block mb-1">Library ID</label>
              <input type="text" value={draft.bunnyLibraryId || ''} onChange={(e) => update('bunnyLibraryId', e.target.value)} className="field" placeholder="e.g. 12345" />
            </div>
            <div>
              <label className="text-sm block mb-1">Video ID</label>
              <input type="text" value={draft.bunnyVideoId || ''} onChange={(e) => update('bunnyVideoId', e.target.value)} className="field" placeholder="e.g. abc-123" />
              <p className="text-xs text-muted mt-1">Or use <code>:::bunny-video {`{libraryId} {videoId}`}</code> in the content.</p>
            </div>
            <div>
              <label className="text-sm block mb-1">Audio ID</label>
              <input type="text" value={draft.bunnyAudioId || ''} onChange={(e) => update('bunnyAudioId', e.target.value)} className="field" placeholder="e.g. abc-456" />
              <p className="text-xs text-muted mt-1">Or use <code>:::bunny-audio {`{libraryId} {audioId}`}</code> in the content.</p>
            </div>
            <div className="text-xs text-muted border-t rule pt-3 space-y-1">
              <p className="font-semibold text-ink">Bunny Stream protection notes</p>
              <p>Enable token authentication in your Bunny Stream library settings.</p>
              <p>Set domain restrictions to your site's domain only.</p>
            </div>
          </div>

        </div>
      )}
    </div>
  );
}
