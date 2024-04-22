export default function splitText() {
	document.querySelectorAll(".split-text").forEach(textTarget => {
		const text = new SplitType(textTarget, {
			types: "words",
		})
	})
}