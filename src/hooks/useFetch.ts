import { useEffect, useState } from 'react';

type UseFetchProps = {
  query: () => Promise<Response>;
};
export const useFetch = ({ query }: UseFetchProps) => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<null | Error>(null);
  const [loading, setLoading] = useState(true);

  console.log('useFetch called with query:', query);
  useEffect(() => {
    console.log('useEffect', query);

    const fetchData = async () => {
      try {
        const result = await query();
        setData(result);
      } catch (error) {
        if (error instanceof Error) {
          console.error('Error fetching data:', error);
          setError(error);
        } else {
          console.error('Unexpected error:', error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);

  return { data, error, loading };
};
