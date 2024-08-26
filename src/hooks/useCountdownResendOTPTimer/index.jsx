import {useState, useEffect, useCallback} from 'react';

const useCountdownResendOTPTimer = (initialTime = 60) => {
  const [remainingTime, setRemainingTime] = useState(initialTime);
  const [isResending, setIsResending] = useState(false);

  const startTimer = useCallback(() => {
    setRemainingTime(initialTime);
    setIsResending(false);
    const timer = setInterval(() => {
      setRemainingTime(prevTime => {
        if (prevTime <= 1) {
          clearInterval(timer);
          setIsResending(false);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [initialTime]);

  useEffect(() => {
    startTimer();
  }, [startTimer]);

  return {remainingTime, isResending, setIsResending, startTimer};
};

export default useCountdownResendOTPTimer;
