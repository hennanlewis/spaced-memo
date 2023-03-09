const possibleValues = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ#$%&@"

export const generateSimpleID = (length: number) => {
	let simpleID = ""
	for(let i = 0; i < length;i++) {
		const randomPosition = Math.round(Math.random() * (possibleValues.length-1))
		simpleID += possibleValues[randomPosition]
	}
	return simpleID
}