export const againInterval = (timeInterval: number, easyRate: number) => {
	easyRate -= 0.2
	return [timeInterval, easyRate]
}

export const hardInterval = (timeInterval: number, easyRate: number, hardRate: number) => {
	easyRate = Math.max(easyRate - 0.15, 1)
	timeInterval *= hardRate
	return [timeInterval, easyRate]
}

export const goodInterval = (timeInterval: number, easyRate: number) => {
	timeInterval *= easyRate
	return [timeInterval, easyRate]
}

export const easyInterval = (timeInterval: number, easyRate: number) => {
	easyRate = Math.min(easyRate + 0.15, 2.5)
	timeInterval *= (easyRate * 1.3)
	return [timeInterval, easyRate]
}
