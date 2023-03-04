"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { generateSimpleID } from "utils/generateSimpleID"
import { IconsPath } from "../IconsPath"

import styles from "./navbar.module.css"

export default function NavBar() {
	const path = usePathname()

	return (
		<section className={styles.navbar}>
			<h1>Space Memo</h1>
			<nav>
				<div>
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
			</nav>
		</section>
	)
}
