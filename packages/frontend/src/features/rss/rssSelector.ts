import { RootState } from '../../store/store';

export const rssUrl = (state: RootState) => state.rss.url;
export const rssName = (state: RootState) => state.rss.name;
