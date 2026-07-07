import { blogs } from '../data/siteData.js';
function BlogPage() {
  return (
    <main className="page-shell blog-page" id="blogs-page">
      <section className="page-hero"><div className="container page-hero-grid"><div><p className="eyebrow">Blogs</p><h1>Workspace guides with a modern reading experience.</h1><p>Same blog content from The Work Culture, redesigned as a clean editorial page instead of the old website layout.</p></div><div className="page-hero-card"><strong>{blogs.length}</strong><span>Published articles</span></div></div></section>
      <section className="section"><div className="container blog-feature"><img src={blogs[0].image} alt={blogs[0].title}/><div><span>{blogs[0].category}</span><h2>{blogs[0].title}</h2><p>{blogs[0].excerpt}</p><small>{blogs[0].date} · {blogs[0].comments}</small></div></div><div className="container blog-list-modern">{blogs.map((blog, index) => <article className="blog-row-card" key={blog.title}><div className="blog-number">{String(index + 1).padStart(2, '0')}</div><img src={blog.image} alt={blog.title}/><div><span>{blog.category}</span><h3>{blog.title}</h3><p>{blog.excerpt}</p></div><small>{blog.date}<br/>{blog.comments}</small></article>)}</div></section>
    </main>
  );
}
export default BlogPage;
