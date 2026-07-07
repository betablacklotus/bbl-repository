import type { Post } from './types';

// Sample posts. In a real deployment, these would live as individual .md files
// in a /content/posts directory and be loaded at build time. For this app they
// are defined here so the blog works out of the box and is easy to edit.
// To add a post: copy the shape below, give it a unique slug, and set the date.

export const SAMPLE_POSTS: Post[] = [
  {
    slug: 'bandcamp-post',
    title: 'Bandcamp Post',
    date: '2026-07-06',
    excerpt:
      'Bumble Bee is a slow-moving, hazy track from Beta Black Lotus — the kind of thing you put on when you want the room to feel like late afternoon in July.',
    tags: ['music', 'bandcamp'],
    content: `# Bandcamp Post

Been listening to this one on repeat for the past few days. *Bumble Bee* by **Beta Black Lotus** — it sits somewhere between drone and folk, unhurried and warm. Worth a listen if you have a few minutes and somewhere quiet to be.

:::bandcamp-track 2523726560

If Bandcamp is your thing, you can follow them there and pay what you want for the download. Good music deserves support.`,
  },

  {
    slug: 'welcome-to-the-terminal',
    title: 'Welcome to Beta Black Lotus',
    date: '2026-06-28',
    excerpt:
      'A short note on why I started this weblog, what I plan to write about, and a few ground rules for the kind of place I want this to be.',
    pinned: true,
    tags: ['meta', 'announcement'],
    featuredImage: 'https://images.pexels.com/photos/270557/pexels-photo-270557.jpeg?auto=compress&cs=tinysrgb&w=1200',
    socialTitle: 'Welcome to Beta Black Lotus — A Personal Weblog',
    socialDescription: 'Why I started this weblog and what to expect.',
    socialImage: 'https://images.pexels.com/photos/270557/pexels-photo-270557.jpeg?auto=compress&cs=tinysrgb&w=1200',
    content: `# Welcome to Beta Black Lotus

I have been thinking about starting a weblog for a long time. Not a newsletter, not a "content site," not a social profile — a *weblog*. A place where I write things down, in order, and anyone who wants to can read them.

This is that place.

## What this is

I plan to write about:

- Small software projects and the lessons learned from them
- Books, mostly old ones
- Field recordings and the places I made them
- The occasional opinion about tools, held loosely

## What this is not

This is not a place for hot takes, engagement bait, or "thought leadership." I am not building an audience. I am keeping a notebook in public, and you are welcome to read over my shoulder.

## A note on the design

You will notice the site looks like it was made in 1996. That is deliberate. I wanted something quiet, fast, and readable on any device — including the old phone in my pocket. The font is **IBM Plex Mono**. The background is off-white. There are no popups, no cookie banners, no tracking, and no infinite scroll that breaks the back button.

Well — there *is* infinite scroll. But there is also a Load More button, because I do not trust infinite scroll either.

---

Thanks for stopping by. If you want to reach me, there is a [contact page](/contact). If you want to subscribe, there is an [RSS feed](/feed.xml).`,
  },

  {
    slug: 'on-keeping-a-notebook-in-public',
    title: 'On Keeping a Notebook in Public',
    date: '2026-06-15',
    excerpt:
      'Joan Didion wrote that we keep a notebook to remember what it was like to be ourselves. I think keeping one in public is a slightly different exercise.',
    tags: ['writing', 'essays'],
    featuredImage: 'https://images.pexels.com/photos/633432/pexels-photo-633432.jpeg?auto=compress&cs=tinysrgb&w=1200',
    socialTitle: 'On Keeping a Notebook in Public',
    socialDescription: 'A short essay on writing in public, after Didion.',
    socialImage: 'https://images.pexels.com/photos/633432/pexels-photo-633432.jpeg?auto=compress&cs=tinysrgb&w=1200',
    content: `# On Keeping a Notebook in Public

Joan Didion, in her essay *On Keeping a Notebook*, wrote that the point of keeping one is not to record the facts but to remember "how it felt to be me." That is a private act. A weblog is something else.

## The difference

A notebook is for you. A weblog is for you *and* someone else — a reader you cannot see and cannot predict. That changes what you write, and how. You start to explain things you would not bother explaining to yourself. You leave out the things that are only interesting to you. Sometimes that is a loss.

## What I am trying to do

I am trying to write the way I would write a long letter to a friend I had not seen in a year. Not formal, but not careless. Detailed where it matters, brief where it does not. Honest about what I do not know.

> "I think we are well advised to keep on nodding terms with the people we used to be." — Didion

That is the project, I suppose. Keeping on nodding terms with the people I used to be, and letting you read the notes.`,
  },

  {
    slug: 'field-recording-the-creek-in-july',
    title: 'Field Recording: The Creek in July',
    date: '2026-06-03',
    excerpt:
      'A short field recording from the creek behind the old mill, with notes on the equipment used and the sound of low water over smooth stones.',
    tags: ['audio', 'field-recording', 'bunny'],
    featuredImage: 'https://images.pexels.com/photos/2406467/pexels-photo-2406467.jpeg?auto=compress&cs=tinysrgb&w=1200',
    socialTitle: 'Field Recording: The Creek in July',
    socialDescription: 'A Bunny Stream audio recording of a creek in summer.',
    socialImage: 'https://images.pexels.com/photos/2406467/pexels-photo-2406467.jpeg?auto=compress&cs=tinysrgb&w=1200',
    bunnyAudioId: 'example-audio-001',
    bunnyLibraryId: 'example-library',
    content: `# Field Recording: The Creek in July

I walked out to the creek behind the old mill at about six in the morning. The water was low — barely moving in places — but over the smooth stones near the bridge there was still a steady, glassy sound I wanted to capture.

## The recording

Below is an audio player powered by **Bunny Stream**. The file is token-protected and domain-restricted, so it should play here but not anywhere else.

:::bunny-audio example-library example-audio-001

## Notes on the setup

- Recorder: a small handheld field recorder, 48kHz / 24-bit
- Mics: a pair of cardioids in ORTF, about 17cm apart
- Windscreen: foam plus a fuzzy, because the breeze picked up around 6:40
- No processing, no compression, no EQ — just the raw stereo file

## What I hear

There are three layers: the water over the stones, a distant crow, and — if you listen — the faint hum of the mill's electrical service about forty meters away. I like that last one. It is the sound of the place being inhabited, even at six in the morning.`,
  },

  {
    slug: 'a-walk-through-the-old-quarter',
    title: 'A Walk Through the Old Quarter',
    date: '2026-05-20',
    excerpt:
      'A photo essay from a morning walk through the old quarter, with a short video clip of the square at the top of the hill.',
    tags: ['photo', 'video', 'bunny', 'travel'],
    featuredImage: 'https://images.pexels.com/photos/2078126/pexels-photo-2078126.jpeg?auto=compress&cs=tinysrgb&w=1200',
    socialTitle: 'A Walk Through the Old Quarter — Photo Essay',
    socialDescription: 'A morning walk through the old quarter, with photos and video.',
    socialImage: 'https://images.pexels.com/photos/2078126/pexels-photo-2078126.jpeg?auto=compress&cs=tinysrgb&w=1200',
    bunnyVideoId: 'example-video-001',
    bunnyLibraryId: 'example-library',
    content: `# A Walk Through the Old Quarter

I got up early and walked through the old quarter before the shops opened. The light was flat and grey, which is the best light for that part of the city — it makes the stone look like stone, not like a postcard.

## A few photographs

![Narrow street in the old quarter](https://images.pexels.com/photos/2078126/pexels-photo-2078126.jpeg?auto=compress&cs=tinysrgb&w=800)
![Doorway with iron hardware](https://images.pexels.com/photos/209271/pexels-photo-209271.jpeg?auto=compress&cs=tinysrgb&w=800)
![Café opening up at dawn](https://images.pexels.com/photos/2255238/pexels-photo-2255238.jpeg?auto=compress&cs=tinysrgb&w=800)
![Steps up the hill](https://images.pexels.com/photos/2425567/pexels-photo-2425567.jpeg?auto=compress&cs=tinysrgb&w=800)

## The square at the top of the hill

There is a small square at the top of the hill with a fountain in the middle. I took a short video clip of it. The clip is hosted on **Bunny Stream** with token authentication, so it plays here but should not be downloadable.

:::bunny-video example-library example-video-001

## What I learned

I have walked through that quarter a hundred times and never noticed the iron hardware on the doors. It is worth looking up.

## More from the walk

![Window boxes on a second floor](https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=800)
![A cat on a warm sill](https://images.pexels.com/photos/6134085/pexels-photo-6134085.jpeg?auto=compress&cs=tinysrgb&w=800)
![Cobbled lane in shadow](https://images.pexels.com/photos/2425567/pexels-photo-2425567.jpeg?auto=compress&cs=tinysrgb&w=800)
![Old church facade](https://images.pexels.com/photos/1462330/pexels-photo-1462330.jpeg?auto=compress&cs=tinysrgb&w=800)`,
  },

  {
    slug: 'seventeen-frames-from-the-coast',
    title: 'Seventeen Frames from the Coast',
    date: '2026-07-04',
    excerpt:
      'A day shooting on the coast — sea light, fishing boats, peeling paint, and the particular grey of a sky that cannot make up its mind.',
    tags: ['photo', 'travel', 'coast'],
    featuredImage: 'https://images.pexels.com/photos/1533720/pexels-photo-1533720.jpeg?auto=compress&cs=tinysrgb&w=1200',
    socialTitle: 'Seventeen Frames from the Coast',
    socialDescription: 'A photo essay from a day shooting on the coast.',
    socialImage: 'https://images.pexels.com/photos/1533720/pexels-photo-1533720.jpeg?auto=compress&cs=tinysrgb&w=1200',
    content: `# Seventeen Frames from the Coast

I took a day and drove to the coast with no particular plan. Low tide was at half past seven in the morning, which meant good light on the wet sand and nobody else around. I shot until the fog burned off, then walked back to the car and drove home. These are the frames I kept.

---

![Wet sand at low tide, early morning](https://images.pexels.com/photos/1533720/pexels-photo-1533720.jpeg?auto=compress&cs=tinysrgb&w=900)

The tide had been out for about an hour when I arrived. The sand was still dark and the surface caught the overcast light like a mirror.

![Fishing boats moored in harbour](https://images.pexels.com/photos/163236/pexels-photo-163236.jpeg?auto=compress&cs=tinysrgb&w=900)

The harbour had three working boats and a fourth that had not moved in a while, judging by the barnacles on the hull.

![Coiled rope on a wooden dock](https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=900)

I like the weight that rope has when it is dry and old. It holds its shape without being told to.

![Peeling blue paint on a boat hull](https://images.pexels.com/photos/273886/pexels-photo-273886.jpeg?auto=compress&cs=tinysrgb&w=900)

Three layers of paint at least, maybe four. White under blue under something that might have been red once.

![Fog sitting low over the water](https://images.pexels.com/photos/1547813/pexels-photo-1547813.jpeg?auto=compress&cs=tinysrgb&w=900)

The fog did not move for a long time. It just sat there at the mouth of the harbour, thinking about something.

![Seabirds on a groyne at low water](https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?auto=compress&cs=tinysrgb&w=900)

Seven birds, all facing the same direction for reasons they kept to themselves.

![Weathered wooden bollard](https://images.pexels.com/photos/2249959/pexels-photo-2249959.jpeg?auto=compress&cs=tinysrgb&w=900)

The wood on these bollards is so old it has gone silver. No finish left, just grain and salt.

![Breakwater extending into a grey sea](https://images.pexels.com/photos/1533720/pexels-photo-1533720.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop)

Walking the breakwater at low tide gives you about forty minutes before the water comes back. I had thirty-five.

---

By this point the light had changed. The fog was thinning and things started to have shadows.

---

![Rock pools exposed at low tide](https://images.pexels.com/photos/2480078/pexels-photo-2480078.jpeg?auto=compress&cs=tinysrgb&w=900)

The rock pools were full of things minding their own business.

![Kelp draped over dark rocks](https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop)

Kelp dries quickly when the tide is out. By the time I got back the smell had changed.

![Old stone sea wall, close texture](https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=900)

The mortar in this wall is original. You can tell because it is softer than the stone around it — lime, not cement.

![Iron ladder descending to the water](https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg?auto=compress&cs=tinysrgb&w=900)

I did not go down. The bottom rung was green.

![Horizon line with a distant vessel](https://images.pexels.com/photos/1295138/pexels-photo-1295138.jpeg?auto=compress&cs=tinysrgb&w=900)

There was a ship on the horizon for the entire morning. It never seemed to move, but it was in a different place each time I looked.

![Pebble beach, long exposure blur](https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=900)

Slow shutter, not long exposure. There is a difference. The motion of the surf was there but not theatrical.

![Wooden beach hut, faded yellow](https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=900)

Closed for the season, or maybe just closed. The padlock looked recent.

![Footprints in wet sand leading away](https://images.pexels.com/photos/1005014/pexels-photo-1005014.jpeg?auto=compress&cs=tinysrgb&w=900)

Someone else had been here earlier. By the time I reached the end of the beach the tide had erased half of these.

![The sea, simply](https://images.pexels.com/photos/1295138/pexels-photo-1295138.jpeg?auto=compress&cs=tinysrgb&w=900&h=500&fit=crop)

The last frame. The fog was gone, the tide was turning, and the light had gone ordinary. Time to go.

---

All seventeen frames were shot on the same morning with the same lens. No filters, no edits beyond a slight exposure correction on a few. The coast does most of the work.`,
  },

  {
    slug: 'on-using-old-tools',
    title: 'On Using Old Tools',
    date: '2026-05-02',
    excerpt:
      'A short defense of using software that is older than you are. Not out of nostalgia, but because the constraints are often the point.',
    tags: ['software', 'essays'],
    featuredImage: 'https://images.pexels.com/photos/261880/pexels-photo-261880.jpeg?auto=compress&cs=tinysrgb&w=1200',
    socialTitle: 'On Using Old Tools',
    socialDescription: 'A defense of old software, and why the constraints are the point.',
    socialImage: 'https://images.pexels.com/photos/261880/pexels-photo-261880.jpeg?auto=compress&cs=tinysrgb&w=1200',
    content: `# On Using Old Tools

I write most of my prose in a plain text editor. I keep my notes in a single directory of markdown files. I use a mail client that was first released in 2003. People sometimes ask me why.

## The constraints are the feature

Old tools are *opinionated*. They were built before the idea that a program should try to do everything for everyone. They do a small number of things, they do them in a particular way, and they do not apologize for it.

That sounds like a limitation. It is actually a relief. When the tool will not let you do a thing, you stop trying to do that thing, and you get on with the work.

## Plain text

Plain text is the clearest example. A plain text file:

1. Will open on any machine, in any editor, now and in thirty years
2. Can be searched, diffed, and version-controlled without any special software
3. Has no formatting to fight with, so you write instead of designing

## The objection

The objection is always the same: "but you could do that in the new tool too." Yes. You can do almost anything in the new tool. That is exactly the problem. The new tool will let you spend an afternoon choosing a font for your notes. The old tool does not have fonts. You write instead.

---

Use whatever lets you do the work. But do not assume newer is better. Sometimes the tool that gets out of your way is the one that was never in your way to begin with.`,
  },

  // ── Placeholder posts for infinite-scroll testing ───────────────────────────
  {
    slug: 'test-post-08',
    title: 'Lorem Ipsum Post Eight',
    date: '2026-05-14',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    tags: ['test'],
    featuredImage: 'https://placehold.co/1200x600/e8e8e0/999999?text=Post+8',
    content: `# Lorem Ipsum Post Eight\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.`,
  },
  {
    slug: 'test-post-09',
    title: 'Lorem Ipsum Post Nine',
    date: '2026-05-10',
    excerpt: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    tags: ['test'],
    content: `# Lorem Ipsum Post Nine\n\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.`,
  },
  {
    slug: 'test-post-10',
    title: 'Lorem Ipsum Post Ten',
    date: '2026-05-07',
    excerpt: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    tags: ['test'],
    featuredImage: 'https://placehold.co/1200x600/d8e8d8/888888?text=Post+10',
    content: `# Lorem Ipsum Post Ten\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.`,
  },
  {
    slug: 'test-post-11',
    title: 'Lorem Ipsum Post Eleven',
    date: '2026-05-03',
    excerpt: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    tags: ['test'],
    content: `# Lorem Ipsum Post Eleven\n\nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.`,
  },
  {
    slug: 'test-post-12',
    title: 'Lorem Ipsum Post Twelve',
    date: '2026-04-29',
    excerpt: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.',
    tags: ['test'],
    featuredImage: 'https://placehold.co/1200x600/e8d8d8/888888?text=Post+12',
    content: `# Lorem Ipsum Post Twelve\n\nNemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.`,
  },
  {
    slug: 'test-post-13',
    title: 'Lorem Ipsum Post Thirteen',
    date: '2026-04-24',
    excerpt: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.',
    tags: ['test'],
    content: `# Lorem Ipsum Post Thirteen\n\nNeque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`,
  },
  {
    slug: 'test-post-14',
    title: 'Lorem Ipsum Post Fourteen',
    date: '2026-04-20',
    excerpt: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.',
    tags: ['test'],
    featuredImage: 'https://placehold.co/1200x600/d8d8e8/888888?text=Post+14',
    content: `# Lorem Ipsum Post Fourteen\n\nUt enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit.`,
  },
  {
    slug: 'test-post-15',
    title: 'Lorem Ipsum Post Fifteen',
    date: '2026-04-16',
    excerpt: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
    tags: ['test'],
    content: `# Lorem Ipsum Post Fifteen\n\nQuis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`,
  },
  {
    slug: 'test-post-16',
    title: 'Lorem Ipsum Post Sixteen',
    date: '2026-04-11',
    excerpt: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.',
    tags: ['test'],
    featuredImage: 'https://placehold.co/1200x600/e8e8d0/888888?text=Post+16',
    content: `# Lorem Ipsum Post Sixteen\n\nAt vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati.`,
  },
  {
    slug: 'test-post-17',
    title: 'Lorem Ipsum Post Seventeen',
    date: '2026-04-07',
    excerpt: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.',
    tags: ['test'],
    content: `# Lorem Ipsum Post Seventeen\n\nNam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.`,
  },
  {
    slug: 'test-post-18',
    title: 'Lorem Ipsum Post Eighteen',
    date: '2026-04-02',
    excerpt: 'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates.',
    tags: ['test'],
    featuredImage: 'https://placehold.co/1200x600/d0e8e8/888888?text=Post+18',
    content: `# Lorem Ipsum Post Eighteen\n\nTemporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.`,
  },
  {
    slug: 'test-post-19',
    title: 'Lorem Ipsum Post Nineteen',
    date: '2026-03-28',
    excerpt: 'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur.',
    tags: ['test'],
    content: `# Lorem Ipsum Post Nineteen\n\nItaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.`,
  },
  {
    slug: 'test-post-20',
    title: 'Lorem Ipsum Post Twenty',
    date: '2026-03-23',
    excerpt: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem.',
    tags: ['test'],
    featuredImage: 'https://placehold.co/1200x600/e0d8e8/888888?text=Post+20',
    content: `# Lorem Ipsum Post Twenty\n\nSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.`,
  },
  {
    slug: 'test-post-21',
    title: 'Lorem Ipsum Post Twenty-One',
    date: '2026-03-19',
    excerpt: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.',
    tags: ['test'],
    content: `# Lorem Ipsum Post Twenty-One\n\nNemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione sequi nesciunt.`,
  },
  {
    slug: 'test-post-22',
    title: 'Lorem Ipsum Post Twenty-Two',
    date: '2026-03-14',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    tags: ['test'],
    featuredImage: 'https://placehold.co/1200x600/e8dcd0/888888?text=Post+22',
    content: `# Lorem Ipsum Post Twenty-Two\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    slug: 'test-post-23',
    title: 'Lorem Ipsum Post Twenty-Three',
    date: '2026-03-09',
    excerpt: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
    tags: ['test'],
    content: `# Lorem Ipsum Post Twenty-Three\n\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
  },
  {
    slug: 'test-post-24',
    title: 'Lorem Ipsum Post Twenty-Four',
    date: '2026-03-05',
    excerpt: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    tags: ['test'],
    featuredImage: 'https://placehold.co/1200x600/dce8d8/888888?text=Post+24',
    content: `# Lorem Ipsum Post Twenty-Four\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.`,
  },
  {
    slug: 'test-post-25',
    title: 'Lorem Ipsum Post Twenty-Five',
    date: '2026-03-01',
    excerpt: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    tags: ['test'],
    content: `# Lorem Ipsum Post Twenty-Five\n\nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. This is the last test post.`,
  },
];
