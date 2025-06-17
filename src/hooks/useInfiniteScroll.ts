import { useEffect, useRef, useState } from 'react';

export function useInfiniteScroll<T>(
  fetchMore: (currentItems: T[]) => Promise<T[]>,
  hasMore: boolean,
) {
  const [items, setItems] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);
  const observerRef = useRef<HTMLDivElement | null>(null);

  const loadMore = async () => {
    if (!hasMore || loading) return;
    setLoading(true);
    try {
      const newItems = await fetchMore(items); // currentItems 전달
      setItems((prev) => [...prev, ...newItems]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!observerRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      },
      { threshold: 1 },
    );
    observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [items, hasMore]);

  return { items, observerRef, loading };
}
