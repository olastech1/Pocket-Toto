import { getBlogPosts, getBlogPostBySlug } from '@/db';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { ArticleJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import BlogCard from '@/components/BlogCard';
import styles from './page.module.css';

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) return { title: 'Post Not Found' };

  return {
    title: `${post.title} | Pocket Toto`,
    description: post.excerpt,
    openGraph: {
      images: [post.coverImage],
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = await getBlogPosts();
  const relatedPosts = allPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <main className={styles.articlePage}>
      <BreadcrumbJsonLd 
        items={[
          { name: 'Home', url: 'https://pocket-toto.com' },
          { name: 'Blog', url: 'https://pocket-toto.com/blog' },
          { name: post.title, url: `https://pocket-toto.com/blog/${post.slug}` }
        ]} 
      />
      <ArticleJsonLd post={post} />

      <article>
        <header className={styles.articleHeader}>
          <div className={styles.coverWrap}>
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              priority
              sizes="100vw"
              className={styles.coverImage}
            />
          </div>
          
          <h1 className={styles.articleTitle}>{post.title}</h1>
          
          <div className={styles.metaRow}>
            <span>By {post.author}</span>
            <span className={styles.metaDot} />
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </time>
          </div>
          
          {post.tags && (
            <div className={styles.tags}>
              {post.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        <div 
          className={styles.articleBody}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      {relatedPosts.length > 0 && (
        <section className={styles.relatedSection}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: '1.5rem' }}>
            More Stories
          </h2>
          <div className={styles.relatedGrid}>
            {relatedPosts.map((p, index) => (
              <BlogCard key={p.id} post={p} index={index} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
