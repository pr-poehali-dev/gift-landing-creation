import { useEffect, useState } from 'react';

interface CountdownTimerProps {
  durationMinutes?: number;
  onExpire?: () => void;
}

export default function CountdownTimer({ 
  durationMinutes = 3,
  onExpire
}: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState(durationMinutes * 60);

  useEffect(() => {
    if (timeLeft <= 0) {
      onExpire?.();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onExpire]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-cyan-500/20 border-2 border-purple-500/50 rounded-lg px-4 py-2 backdrop-blur-sm">
      <div className="flex items-center gap-1">
        <span className="text-2xl font-bold text-white">
          {String(minutes).padStart(2, '0')}
        </span>
        <span className="text-purple-400 text-xl">:</span>
        <span className="text-2xl font-bold text-white">
          {String(seconds).padStart(2, '0')}
        </span>
      </div>
    </div>
  );
}
