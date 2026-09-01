import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { worksData } from "@/data/works";
import styles from "./video.module.css";

export function generateStaticParams() {
  return worksData.map((work) => ({
    slug: work.slug,
  }));
}

interface VideoPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function VideoPage({ params }: VideoPageProps) {
  const { slug } = await params;
  const work = worksData.find((w) => w.slug === slug);

  if (!work) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className={styles.container}>
        <div className={styles.content}>
          <div className={styles.header}>
            <h1 className={styles.title}>{work.title}</h1>
            <div className={styles.categories}>
              {work.categories.map((cat) => (
                <span key={cat} className={styles.category}>
                  {cat}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.videoContainer}>
            <iframe
              src={`https://www.youtube.com/embed/${work.youtubeId}?rel=0`}
              title={work.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className={styles.iframe}
            ></iframe>
          </div>

          <div className={styles.footer}>
            <Link href="/" className={styles.backButton}>
              &larr; Back to Portfolio
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
