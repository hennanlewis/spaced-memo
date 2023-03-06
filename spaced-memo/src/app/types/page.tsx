"use client"
import {
	Controller,
	FieldValues,
	SubmitHandler,
	useFieldArray,
	useForm,
} from "react-hook-form"
import { HiTrash } from "react-icons/hi"
import { generateSimpleID } from "utils/generateSimpleID"

import styles from "./page.module.css"

export default function Type() {
	const {
		control,
		formState: { errors, dirtyFields },
		handleSubmit,
		register,
	} = useForm<NoteType>({
		defaultValues: {
			simpleID: "",
			name: "",
			fields: [{ name: "Frente" }, { name: "Verso" }],
		},
	})

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		console.log({
			...data,
			simpleID: generateSimpleID(5),
		})
	}
	const { fields, append, remove } = useFieldArray({
		control,
		name: "fields",
	})

	const handleAddField = () => append({ name: "" })
	const handleRemoveField = (position: number) => remove(position)

	return (
		<section className={styles.mainOptions}>
			<div className={styles.topInfo}>
				<h1>Tipos de baralho</h1>
			</div>
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				<label>
					<span>Nome do tipo: </span>
					<input {...register("name", { required: true })} />
					{errors.name && <span>Campo obrigatório</span>}
				</label>
				<div className={styles.set}>
					<span>Nome dos campos: </span>
					{fields.map((item, index) => (
						<label
							className={styles.buttonRemover}
							key={`fields.${index}.name`}>
							<Controller
								name={`fields.${index}.name`}
								control={control}
								defaultValue={item.name}
								render={({ field }) => (
									<input type="text" {...field} />
								)}
							/>
							{errors.fields && errors.fields[index] && (
								<span>Campo obrigatório</span>
							)}
							{fields.length > 2 && (
								<button
									onClick={() => handleRemoveField(index)}>
									<HiTrash />
								</button>
							)}
						</label>
					))}
				</div>
				<button className={styles.addButton} onClick={handleAddField}>
					Novo campo
				</button>
				<button type="submit">Adicionar tipo de nota</button>
			</form>
		</section>
	)
}
