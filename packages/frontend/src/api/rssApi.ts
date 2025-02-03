import { AxiosResponse } from 'axios';
import { URL, instance } from '.';
import { RssParamResponse } from '../types/types';

export const rssApi = {
  async rssData(): Promise<AxiosResponse<RssParamResponse>> {
    return await instance.get(URL.RSS);
  },
};
