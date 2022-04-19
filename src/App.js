import { Cards } from './components/Cards';
import { useState, useEffect } from 'react'

function App() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [errorMessage, setError] = useState(null);
  const getData = async () => {
    try {
      const response = await fetch(
        `https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json`
      );
      if (!response.ok) {
        throw new Error(
          `${response.status}: Unsuccesful Fetch Call`
        );
      }
      let actualData = await response.json();
      setData(actualData);
      setError(null);
    } catch (err) {
      setError(err.message);
      setData(null);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getData();
  }, [])

  return (<Cards data={data} isLoading={isLoading} errorMessage={errorMessage}/>
  );
}

export default App;
