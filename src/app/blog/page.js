import { getBlogPosts } from '@/db';
import BlogCard from '@/components/BlogCard';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Blog | Pocket Toto',
  description: 'Stories, guides, and insights on premium lifestyle, craftsmanship, and intentional living.',
};

export default async function BlogPage() {
  const posts = await getBlogPosts();
  
  // Sort posts by publishedAt desc (newest first)
  const sortedPosts = [...posts].sort((a, b) => 
    new Date(b.publishedAt) - new Date(a.publishedAt)
  );

  const featuredPost = sortedPosts[0];
  const remainingPosts = sortedPosts.slice(1);

  return (
    <main className="container">
      <header className={styles.pageHeader}>
        <h1 className={styles.title}>Stories & Guides</h1>
        <p className={styles.subtitle}>
          Insights on premium lifestyle, craftsmanship, and intentional living.
        </p>
      </header>

      {featuredPost && (
        <Link href={`/blog/${featuredPost.slug}`} className={styles.featuredPost}>
          <Image
            src={featuredPost.coverImage}
            alt={featuredPost.title}
            fill
            priority
            sizes="100vw"
            className={styles.featuredImage}
          />
          <div className={styles.featuredOverlay} />
          <div className={styles.featuredContent}>
            <h2 className={styles.featuredTitle}>{featuredPost.title}</h2>
            <p className={styles.featuredExcerpt}>{featuredPost.excerpt}</p>
            <div className={styles.featuredMeta}>
              By {featuredPost.author} • {new Date(featuredPost.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
            </div>
          </div>
        </Link>
      )}

      {remainingPosts.length > 0 && (
        <div className={styles.grid}>
          {remainingPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>
      )}
    </main>
  );
}
