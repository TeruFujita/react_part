import Image from "next/image";
import styles from "@/styles/home.module.css";

export type ProfileCardProps = {
  name: string;
};

export function ProfileCard({ name }: ProfileCardProps) {
  return (
    <article className={styles.profileCard}>
      <div className={styles.profileCardImageWrap}>
        <Image
          src="/images/card-header.jpg"
          alt=""
          fill
          className={styles.profileCardHeaderImage}
          sizes="336px"
          priority
        />
      </div>
      <h2 className={styles.profileCardName}>{name}</h2>
      <ul className={styles.profileCardDetails}>
        <li>好きな食べ物：トマト🍅</li>
        <li>趣味：おさんぽ</li>
        <li>etc：etc...</li>
      </ul>
      <div className={styles.profileCardLikes}>
        <Image
          src="/images/heart.svg"
          alt=""
          width={24}
          height={24}
          className={styles.profileCardHeartIcon}
        />
        <span className={styles.profileCardLikeCount}>64</span>
      </div>
    </article>
  );
}
