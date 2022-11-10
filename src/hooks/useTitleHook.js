import { useLayoutEffect, useState } from 'react';

export default function useTitleHook(title) {
  const [state, setState] = useState()
  
  useLayoutEffect(()=>{
    document.title = title;
    setState(title);
  }, [title])

  return state;
}