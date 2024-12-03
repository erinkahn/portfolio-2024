import { useRef, useEffect, useState } from "react";

const useIntersectionObserver = (elementRef) => {
	const observer = useRef();
	const [entry, setEntry] = useState();

	const options = {
		root: null,
		rootMargin: "0%",
		threshold: 0.1,
	};

	const updateEntry = (entries) => {
		setEntry(entries[0]);
	};

	useEffect(() => {
		const node = elementRef?.current;
		if (!node) return;

		if (observer.current) observer.current.disconnect();

		observer.current = new IntersectionObserver(updateEntry, options);

		const { current: currentObserver } = observer;

		currentObserver.observe(node);

		return () => currentObserver.disconnect();
		// eslint-disable-next-line
	}, [elementRef]);

	return { isVisible: !!entry?.isIntersecting, entry };
};

export default useIntersectionObserver;
