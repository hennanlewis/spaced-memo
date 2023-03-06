export const convertTime = (totalTime: number) => {
	if (totalTime < 60) return `${totalTime | 0}min`
	if ((totalTime % 60 | 0) == 0) return `${(totalTime / 60) | 0}h`
	return `${(totalTime / 60) | 0}h ${totalTime % 60 | 0}m`
}
