import { pathGif } from '../Urls';

const fetchApi = async (url) => {
  console.log(url);
  const result = await fetch(url);
  return await result.json();
};

const muteitorData = (data) => {
  const muteitorGif = data.map(img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url
    }
  });
  return muteitorGif;
}

const getGif = async (search) => {
  const url = `${pathGif}&q=${encodeURI(search)}&limit=10`;
  const { data } = await fetchApi(url);
  const resultData = muteitorData(data);
  return resultData;
}

export { getGif }