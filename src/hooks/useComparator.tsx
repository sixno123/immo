import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { getComparatorIds, saveComparatorIds } from '../utils/storage';

export const COMPARATOR_LIMIT = 3;

interface ComparatorContextValue {
  ids: string[];
  isSelected: (id: string) => boolean;
  toggle: (id: string) => void;
  remove: (id: string) => void;
  clear: () => void;
  isFull: boolean;
}

const ComparatorContext = createContext<ComparatorContextValue | null>(null);

export const ComparatorProvider = ({ children }: { children: ReactNode }) => {
  const [ids, setIds] = useState<string[]>(() => getComparatorIds().slice(0, COMPARATOR_LIMIT));

  const update = useCallback((next: string[]) => {
    setIds(next);
    saveComparatorIds(next);
  }, []);

  const toggle = useCallback(
    (id: string) => {
      if (ids.includes(id)) {
        update(ids.filter((i) => i !== id));
      } else if (ids.length < COMPARATOR_LIMIT) {
        update([...ids, id]);
      }
    },
    [ids, update]
  );

  const remove = useCallback((id: string) => update(ids.filter((i) => i !== id)), [ids, update]);
  const clear = useCallback(() => update([]), [update]);

  const value = useMemo<ComparatorContextValue>(
    () => ({
      ids,
      isSelected: (id: string) => ids.includes(id),
      toggle,
      remove,
      clear,
      isFull: ids.length >= COMPARATOR_LIMIT,
    }),
    [ids, toggle, remove, clear]
  );

  return <ComparatorContext.Provider value={value}>{children}</ComparatorContext.Provider>;
};

export const useComparator = (): ComparatorContextValue => {
  const ctx = useContext(ComparatorContext);
  if (!ctx) throw new Error('useComparator doit être utilisé dans <ComparatorProvider>');
  return ctx;
};
