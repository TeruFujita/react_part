"use client";

import { useState } from "react";
import styles from "@/styles/home.module.css";

const mainNavItems = [
  "ホーム",
  "記事",
  "マガジン",
  "スキ",
  "プロフィール",
  "月別",
] as const;

const filterItems = ["新着", "人気"] as const;

export function TopNav() {
  const [activeFilter, setActiveFilter] =
    useState<(typeof filterItems)[number]>("新着");

  return (
    <header className={styles.topNav}>
      <nav aria-label="メインナビゲーション">
        <ul className={styles.mainNavList}>
          {mainNavItems.map((item) => (
            <li key={item}>
              <a href="#" className={styles.mainNavLink}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.filters} role="group" aria-label="フィルター">
        {filterItems.map((item) => (
          <button
            key={item}
            type="button"
            className={
              activeFilter === item ? styles.filterActive : styles.filterInactive
            }
            onClick={() => setActiveFilter(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </header>
  );
}
