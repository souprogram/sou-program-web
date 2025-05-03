import Button from '@/components/ui/Button';
import { useState } from 'react';

export const CaesarCipherTask = ({
  task,
  onCheck,
}: {
  task: CompetitionTasks['cipher'];
  onCheck: (answer: string) => boolean;
}) => {
  const [answer, setAnswer] = useState('');

  const handleCheck = () => {
    onCheck(answer);
  };

  return (
    <div
      className={`rounded-lg p-6 ${task.isCorrect ? 'border border-green-500 bg-green-300/10' : 'bg-neutral-800'}`}
    >
      <h3 className="font-poppins mb-4 text-2xl font-bold text-white">Zadatak 1: Caesar Cipher</h3>
      <p className="mb-4">
        <strong>Opis:</strong> Cezarova šifra je tip šifre zamjene (substitucije), u kome se svako
        slovo otvorenog teksta zamjenjuje odgovarajućim slovom abecede, pomaknutim za određeni broj
        mjesta. Dekodiraj sljedeću riječ koristeći Caesar cipher. Ključ je pomak u abecedi.
      </p>
      <p className="mb-4">
        <strong>Primjer:</strong> Ako je ključ 3, slovo A postaje D, B postaje E itd.
      </p>
      <p className="mb-4">
        <strong>Abeceda:</strong>{' '}
        <span className="font-mono text-sm">
          A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
        </span>
      </p>
      <p className="mb-1">
        <strong>Ključ:</strong> {task.task.key}
      </p>
      <p className="mb-4 text-sm text-neutral-400">Velika i mala slova nisu bitna.</p>
      <div className="mb-5 rounded-md bg-neutral-700 p-3 font-mono text-xl font-bold">
        {task.task.encrypted}
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="flex-1 rounded-md bg-neutral-700 p-3 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
            disabled={task.showResult && task.isCorrect}
            autoComplete="off"
          />
          {!(task.showResult && task.isCorrect) && (
            <Button onClick={handleCheck} disabled={!answer.trim()}>
              Provjeri
            </Button>
          )}
        </div>
        {task.showResult && (
          <p className={`${task.isCorrect ? 'text-green-400' : 'text-red-400'}`}>
            {task.isCorrect ? 'Točno! ✔️' : `Netočno. Pokušaj ponovo.`}
          </p>
        )}
      </div>
    </div>
  );
};
