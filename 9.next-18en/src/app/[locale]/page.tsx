import LocalSwitcher from '@/components/local-switcher';
import {useTranslations} from 'next-intl';
 
export default function HomePage() {
  const t = useTranslations('HomePage');
  return(
    <div>
      <LocalSwitcher/>
       <h1>{t('title')}</h1>
    </div>
  );
}