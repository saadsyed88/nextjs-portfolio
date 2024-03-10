import React, { useEffect, useState } from 'react';

const useScrollProgress = (): number => {
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    const updateScrollCompletion = () => {
      const currentProgess: number = window.scrollY;
      const scrollHeight: number =
        document.body.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        // const newCompletion: number = (currentProgess / scrollHeight) * 100;
        // setCompletion(Number(newCompletion.toFixed(2)));

        setCompletion(Number((currentProgess / scrollHeight).toFixed(2)) * 100);
      }
    };

    window.addEventListener('scroll', updateScrollCompletion);
    return () => window.removeEventListener('scroll', updateScrollCompletion);
  }, []);

  return completion;
};

export default useScrollProgress;
