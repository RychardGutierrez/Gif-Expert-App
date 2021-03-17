import { useEffect, useState, useCallback } from "react";
import { getGif } from "../Api/GifExpert";

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true
  })

  const getGifApi = useCallback(
    async () => {
      setState({
        data: await getGif(category),
        loading: false,
      });
    }, [setState, category]
  )

  useEffect(() => {
      getGifApi();
  }, [getGifApi])

  return state;
}