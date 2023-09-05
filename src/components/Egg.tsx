import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

export const Egg = () => {
  const [password, setPassword] = useState<string[]>([]);
  const [isPassed, setIsPassed] = useState<boolean>(false);

  useEffect(() => {
    const target = ['a', 's', 'd'];

    if (password.length >= 3) {
      setPassword([])
    };

    if (JSON.stringify(password) === JSON.stringify(target)) {
      setIsPassed(true)
    }
  }, [password]);

  const handleKeyStroke = ({ key }: { key: string}) => {
    switch(key) {
      case 'Escape':
        setPassword([]);
        break;
      case 'Backspace':
        setIsPassed(false);
        break;
      default:
        setPassword([...password, key]);
        break;
    }
  }

  const base = 'absolute w-32 transition duration-500';

  return (
    <>
      <button onKeyDown={handleKeyStroke}>Trigger</button>
      <img className={twMerge(
        base, 
        isPassed ? 'visible opacity-100 -translate-y-12' : 'invisible opacity-0 translate-y-0', 
        '-bottom-16')} src="img.png" alt="" />
      <img className={twMerge(
        base, 
        isPassed ? 'visible opacity-100 translate-x-12' : 'invisible opacity-0 translate-x-0', 
        '-left-16 delay-300 rotate-90')} src="img.png" alt="" />
      <img className={twMerge(
        base, 
        isPassed ? 'visible opacity-100 -translate-x-12' : 'invisible opacity-0 translate-x-0', 
        '-right-16 top-40 delay-700 -rotate-90')} src="img.png" alt="" />
      <img className={twMerge(
        base, 
        isPassed ? 'visible opacity-100 -translate-y-12' : 'invisible opacity-0 translate-y-0', 
        ' right-96 delay-1000 animate-bounce')} src="img.png" alt="" />
    </>
  )
}