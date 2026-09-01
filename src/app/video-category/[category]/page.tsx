import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { worksData, WorkCategorySlug, CATEGORY_MAP } from "@/data/works";
import styles from "./category.module.css";

export function generateStaticParams() {
  const categories: WorkCategorySlug[] = [
    "camera",
    "color-grading",
    "direction",
    "editing",
    "production-design",
    "writing",
  ];
  return categories.map((cat) => ({
    category: cat,
  }));
}

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const categorySlug = category as WorkCategorySlug;
  const categoryName = CATEGORY_MAP[categorySlug] || category.toUpperCase();

  const categoryWorks = worksData.filter((work) =>
    work.categorySlugs.includes(categorySlug)
  );

  return (
    <>
      <Navbar />
      <main className={styles.container}>
        <div className={styles.content}>
          <div className={styles.header}>
            <h1 className={styles.title}>{categoryName} Projects</h1>
            <p className={styles.subtitle}>
              Showing {categoryWorks.length} project
              {categoryWorks.length === 1 ? "" : "s"}
            </p>
            <Link href="/" className={styles.backButton}>
              &larr; Back to All Projects
            </Link>
          </div>

          <div className={styles.videoGrid}>
            {categoryWorks.map((work, idx) => (
              <div
                key={work.id}
                className={styles.videoCard}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className={styles.thumbnailContainer}>
                  <div
                    className={styles.thumbnail}
                    style={{ backgroundImage: `url(${work.thumbnail})` }}
                  />
                </div>
                <div className={styles.cardContent}>
                  <Link
                    href={`/video/${work.slug}`}
                    className={styles.titleLink}
                  >
                    <h3 className={styles.videoTitle}>{work.title}</h3>
                  </Link>
                  <div className={styles.tags}>
                    {work.categories.map((cat) => {
                      const isCurrentCat = cat === categoryName;
                      return (
                        <span
                          key={cat}
                          className={`${styles.tag} ${
                            isCurrentCat ? styles.activeTag : ""
                          }`}
                        >
                          {cat}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
