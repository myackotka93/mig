export default async function handler(req, res) {
  // Check for secret to confirm this is a valid request
  if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  // console.log(req.query);
  console.time('end revalidate')

  try {
    // this should be the actual path not a rewritten path
    // e.g. for "/blog/[slug]" this should be "/blog/post-1"

    res.json({ revalidated: true });

    await Promise.all([
      res.revalidate('/'),
      res.revalidate('/team')
    ]);

    const team = JSON.parse(req.query.team ?? '[]') ?? [];
    await Promise.all(team.map(p => res.revalidate('/team/' + p.id)));

    // await res.revalidate('/team/[id]');

    console.timeEnd('end revalidate');
    return
  } catch (err) {
    console.log(err);
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send('Error revalidating')
  }
}