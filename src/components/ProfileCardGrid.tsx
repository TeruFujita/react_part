import { ProfileCard } from "./ProfileCard";
import styles from "@/styles/home.module.css";

const profileCards = [
  "芝横　芝太郎",
  "芝芝　横太郎",
  "横芝　太芝郎",
  "太郎　芝",
  "Shiba yoko",
  "yokoyoko sibasiba",
] as const;

export function ProfileCardGrid() {
  return (
    <section className={styles.cardGrid} aria-label="プロフィール一覧">
      {profileCards.map((name) => (
        <ProfileCard key={name} name={name} />
      ))}
    </section>
  );
}
