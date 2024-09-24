export function observerAnimation(classElement: string, classAnimation: string): void {
    const icon = document.querySelector(classElement);

    const options: IntersectionObserverInit = {
        root: document,
        threshold: [0.9],
        rootMargin: "0px 0px -20px 0px",
    };

    const observer = new IntersectionObserver((entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
            if (entry.isIntersecting) {
                entry.target.classList.remove("invisible");
                entry.target.classList.add(classAnimation);
            } else {
                // entry.target.classList.add("invisible");
                // entry.target.classList.remove(classAnimation);
            }
        });
    }, options);

    if (icon) {
        observer.observe(icon);
    }
}
