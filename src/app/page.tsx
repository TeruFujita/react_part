import { ProfileCardGrid } from "@/components/ProfileCardGrid";
import { SidebarEvents } from "@/components/SidebarEvents";
import { SidebarProfile } from "@/components/SidebarProfile";
import { TopNav } from "@/components/TopNav";
import styles from "@/styles/home.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <aside className={styles.sidebar}>
        <SidebarProfile />
        <SidebarEvents />
      </aside>

      <main className={styles.main}>
        <TopNav />
        <ProfileCardGrid />
      </main>
    </div>
  );
}
