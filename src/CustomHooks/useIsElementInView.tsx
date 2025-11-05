import { useEffect, useRef, useState } from 'react';



export const useIsElementInView = (options: IntersectionObserverInit)=> {
  const [isInView, setIsInView] = useState(false);
  const targetElementRef = useRef<HTMLDivElement>(null);
  // Initialize the ref to null, which will be assigned to the target element later
  // This allows us to use the ref in the IntersectionObserver
  useEffect(() => {
    const observer: IntersectionObserver = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setIsInView(entry.isIntersecting);
    }, options);

    const elementRef = targetElementRef.current;

    if (elementRef) {
      observer.observe(elementRef);
    }

    return () => {
      if (elementRef) {
        observer.unobserve(elementRef);
      }
    };
  }, [options]);

  return [isInView, targetElementRef] as [boolean, React.RefObject<HTMLDivElement>];
};