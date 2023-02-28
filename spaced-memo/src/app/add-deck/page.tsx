"use client"
import { ChangeEvent, FormEvent , useState } from "react"

import { deckDefaultValues } from "utils/defaultValues"
import { generateSimpleID } from "utils/generateSimpleID"
import styles from "./add-deck.module.css"

export default function AddDeck() {
	const [deck, setDeck] = useState(deckDefaultValues)

	const handleName = (event: ChangeEvent<HTMLInputElement>) => {
		setDeck((values) => ({ ...values, name: event.target.value }))
	}

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault()
		if (deck.name == "") return
		setDeck((values) => ({ ...values, simpleID: generateSimpleID(4), createdAt: new Date() }))
	}

	return (
		<form className={styles.form}  onSubmit={handleSubmit}>
			<label>
				<span>Nome: </span>
				<input
					type="text"
					name="name"
					onChange={handleName}
					value={deck.name}
				/>
			</label>
			<button type="submit">Criar baralho</button>
		</form>
	)
}
