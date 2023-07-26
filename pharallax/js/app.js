document.addEventListener('mousemove', e => {
	Object.assign(document.documentElement, {
		style: `
		--move-x: ${e.clientX}deg;
		--move-y: ${e.clientY}deg;
		`
	})
})
