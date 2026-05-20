import { EventCard } from "./EventCard";
import styles from "@/styles/home.module.css";

const events = [
  {
    title: "2025　Welcome　Party 🎉",
    count: "1k",
    description: "サイボウズオフィスで開催した、2025の新歓パーティーの様子です！！",
    imageSrc: "/images/event-welcome.png",
    imageAlt: "Welcome Party",
  },
  {
    title: "2025　グループ勉強会 💻",
    count: "2k",
    description: "2025年前期のグループ勉強会の様子です！！",
    imageSrc: "/images/event-study.png",
    imageAlt: "グループ勉強会",
  },
  {
    title: "2025　夏合宿　🌞",
    count: "3m",
    description: "静岡県の廃小学校「カタショー」で夏合宿を行いました！！",
    imageSrc: "/images/event-summer.png",
    imageAlt: "夏合宿",
  },
] as const;

export function SidebarEvents() {
  return (
    <section className={styles.events} aria-label="イベント一覧">
      {events.map((event) => (
        <EventCard key={event.title} {...event} />
      ))}
    </section>
  );
}
