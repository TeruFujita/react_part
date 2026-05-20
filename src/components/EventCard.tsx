import Image from "next/image";
import styles from "@/styles/home.module.css";

export type EventCardProps = {
  title: string;
  count: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

export function EventCard({
  title,
  count,
  description,
  imageSrc,
  imageAlt,
}: EventCardProps) {
  return (
    <article className={styles.eventCard}>
      <div className={styles.eventThumbnail}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className={styles.eventThumbnailImage}
          sizes="147px"
        />
      </div>
      <h3 className={styles.eventTitle}>{title}</h3>
      <div className={styles.eventMeta}>
        <Image src="/images/book.svg" alt="" width={26} height={26} />
        <span className={styles.eventCount}>{count}</span>
      </div>
      <p className={styles.eventDescription}>{description}</p>
      <button type="button" className={styles.eventFollowButton}>
        フォロー
      </button>
    </article>
  );
}
