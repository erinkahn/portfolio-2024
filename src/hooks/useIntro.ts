import { useState } from "react";

const INTRO_KEY = "introPlayed";

interface UseIntroResult {
	showIntro: boolean;
	completeIntro: () => void;
}

export default function useIntro(): UseIntroResult {
	const [showIntro, setShowIntro] = useState(
		() => window.sessionStorage.getItem(INTRO_KEY) === null
	);

	const completeIntro = () => {
		window.sessionStorage.setItem(INTRO_KEY, "true");
		setShowIntro(false);
	};

	return { showIntro, completeIntro };
}
