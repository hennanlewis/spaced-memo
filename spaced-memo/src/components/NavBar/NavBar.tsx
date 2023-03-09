"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { IconsPath } from "../IconsPath"
import styles from "./navbar.module.css"

export default function NavBar() {
	const path = usePathname()

	return (
		<section className={styles.navbar}>
			<h1>Spaced Memo</h1>
			<nav>
				<div className={styles.mdNav}>
					{IconsPath.map((item) => (
						<Link
							key={item.text}
							href={item.path}
							className={path == item.path ? styles.active : ""}>
							{path == item.path ? item.icon : item.outlineIcon}
							{item.text}
						</Link>
					))}
				</div>
				<div className="hidden">
					{/* <div className={styles.mobileNav}> */}
					{IconsPath.map((item) => (
						<Link
							key={item.text + "mobile"}
							href={item.path}
							className={path == item.path ? styles.active : ""}>
							{path == item.path ? item.icon : item.outlineIcon}
							{item.text}
						</Link>
					))}
				</div>
			</nav>
		</section>
	)
}
