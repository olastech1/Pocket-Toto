import Link from 'next/link';
import Image from 'next/image';
import styles from './BlogCard.module.css';

export default function BlogCard({ post, index = 0 }) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <Link
      href={`/blog/${post.slug}`}
      className={styles.card}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className={styles.imageWrap}>
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className={styles.image}
        />
      </div>

      <div className={styles.content}>
        <div className={styles.tags}>
          {post.tags.slice(0, 2).map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>

        <h3 className={styles.title}>{post.title}</h3>

        <p className={styles.excerpt}>{post.excerpt}</p>

        <div className={styles.meta}>
          <span>{post.author}</span>
          <span className={styles.metaDot} aria-hidden="true" />
          <span>{formattedDate}</span>
        </div>
      </div>
    </Link>
  );
}
