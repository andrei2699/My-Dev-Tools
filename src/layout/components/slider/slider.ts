import "./style.css";
import type { CheckboxEventType } from "../../../types/EventTypes.ts";

type OnChange = (changed: boolean) => void;

export function createSlider(initialChecked: boolean, onChange: OnChange) {
	const slider = document.createElement("div");
	const label = document.createElement("label");
	label.classList.add("switch");

	const input = document.createElement("input");
	input.type = "checkbox";
	input.checked = initialChecked;

	const span = document.createElement("span");
	span.classList.add("slider", "round");

	label.appendChild(input);
	label.appendChild(span);

	slider.appendChild(label);

	input.addEventListener("change", (e) => {
		const target = e.target as unknown as CheckboxEventType;
		onChange(target.checked);
	});

	return slider;
}
