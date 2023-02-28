"use client"
import { ChangeEvent, FormEvent, useState } from "react"
import { noteDefaultValues } from "utils/defaultValues"
import { generateSimpleID } from "utils/generateSimpleID"

import styles from "./add-note.module.css"

const decksNames = [
	{ simpleID: "asdf", name: "Padrão" },
	{ simpleID: "isne", name: "Opção 2" },
]
const noteType: NoteType[] = [
	{ simpleID: "asdf", name: "Opção 01", fieldsNames: ["Frente", "Verso"] },
	{ simpleID: "oabh", name: "Opção 02", fieldsNames: ["Verso", "Frente"] },
]
export default function AddNote() {
	const [notes, setNotes] = useState(noteDefaultValues)
	const [filteredNoteType] = noteType.filter(
		(item) => item.simpleID == notes.noteTypeID
	)

	const handleChange = (event: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
		const { name, value } = event.target
		setNotes((values) => ({ ...values, [name]: value }))
	}

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault()
		setNotes((values) => ({ ...values, simpleID: generateSimpleID(5) }))
		console.log(notes)
	}

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<label>
				<span>Baralho: </span>
				<select name="deckID" onChange={handleChange}>
					{decksNames.map((item) => (
						<option key={item.simpleID} value={item.simpleID}>
							{item.name}
						</option>
					))}
				</select>
			</label>
			<label>
				<span>Tipo de nota: </span>
				<select name="noteTypeID" onChange={handleChange}>
					{noteType.map((item) => (
						<option key={item.simpleID} value={item.simpleID}>
							{item.name}
						</option>
					))}
				</select>
			</label>
			{filteredNoteType?.fieldsNames.map((item, index) => (
				<label key={item}>
					<span>{item}</span>
					<input type="text" name={item.toLowerCase()} value={notes.fields[index]} onChange={handleChange} />
				</label>
			))}
			<button type="submit">Adicionar nota</button>
		</form>
	)
}
