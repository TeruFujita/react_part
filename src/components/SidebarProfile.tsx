import Image from "next/image";
import styles from "@/styles/home.module.css";

export function SidebarProfile() {
  return (
    <section className={styles.profile}>
      <div className={styles.profileHeader}>
        <div className={styles.avatar}>
          <Image
            src="/images/avatar.png"
            alt="チームしばしば"
            fill
            className={styles.avatarImage}
            sizes="112px"
            priority
          />
        </div>
        <h1 className={styles.teamName}>チームしばしば</h1>
        <button type="button" className={styles.menuButton} aria-label="メニュー">
          <Image src="/images/dots-three.svg" alt="" width={32} height={32} />
        </button>
      </div>

      <div className={styles.bio}>
        <p>デザイナー×エンジニア</p>
        <p>今年で２年目～</p>
      </div>

      <div className={styles.stats}>
        <div className={styles.stat}>
          <span className={styles.statNumber}>475</span>
          <span className={styles.statLabel}>フォロー</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statNumber}>475</span>
          <span className={styles.statLabel}>フォロワー</span>
        </div>
      </div>

      <button type="button" className={styles.profileFollowButton}>
        <Image
          src="/images/user-follow.svg"
          alt=""
          width={24}
          height={24}
          className={styles.followIcon}
        />
        フォロー
      </button>
    </section>
  );
}
