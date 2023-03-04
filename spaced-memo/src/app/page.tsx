import Main from "@/components/Main"
import { deckDefaultValues } from "../../utils/defaultValues"
import styles from "./page.module.css"

const decks: Deck[] = [
	{ ...deckDefaultValues, name: "Padrão" },
	{ ...deckDefaultValues, name: "Idioma" },
	{ ...deckDefaultValues, name: "Matemática" },
	{ ...deckDefaultValues, name: "Biologia" },
	{ ...deckDefaultValues, name: "Química" },
]

export default function Home() {
	return (
		<section>
			{decks.map((deck) => (
				<div key={deck.name} className={styles.deckDataCard}>
					<h2>{deck.name}</h2>
					<span>options</span>
				</div>
			))}
		</section>
	)
}
