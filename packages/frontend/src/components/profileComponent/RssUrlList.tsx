import { useSelector } from 'react-redux';
import { rssName, rssUrl } from '../../features/rss/rssSelector';

const RssUrlList = () => {
  const urlRss = useSelector(rssUrl);
  const nameRss = useSelector(rssName);
  return (
    <>
      <div>name rss: {nameRss}</div>
      <div>url rss:{urlRss}</div>
    </>
  );
};

export default RssUrlList;
