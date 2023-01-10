import { WineItemInterface } from '../types/main-types';

const get = async (url: string): Promise<WineItemInterface[]> => {
  const res = await fetch(url);
  const result = await res.json();
  return result;
};

export { get };