import { useLayoutEffect } from 'react';

export default function usePageTitle(title: string) {
  useLayoutEffect(() => {
    document.title = title;
  }, [title]);
}
