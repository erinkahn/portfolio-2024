import { useRef, useEffect, useState } from "react";

const useIntersectionObserver = (elementRef) => {
	const observer = useRef();
	const [entry, setEntry] = useState();

	const updateEntry = (entries) => {
		setEntry(entries[0]);
	};

	useEffect(() => {
		const options = {
			threshold: 0,
			root: null,
			rootMargin: "1200px",
		};

		const node = elementRef?.current;
		if (!node) return;

		if (observer.current) observer.current.disconnect();

		observer.current = new IntersectionObserver(updateEntry, options);

		const { current: currentObserver } = observer;

		currentObserver.observe(node);

		return () => currentObserver.disconnect();
	}, [elementRef]);

	return { isVisible: !!entry?.isIntersecting, entry };
};

export default useIntersectionObserver;
