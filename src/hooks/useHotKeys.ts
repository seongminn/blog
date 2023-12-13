import { useEffect, useCallback } from 'react';

import {
  KeyCombo,
  comboMatches,
  getKeyCombo,
  parseKeyCombo,
} from '@/utils/hotkeys';

type HotkeyEventHandlerName = 'onKeyDown' | 'onKeyUp';
type HotkeyEventHandlers = Record<
  HotkeyEventHandlerName,
  (e?: KeyboardEvent) => unknown
>;

export type Hotkeys = {
  combo: string;
} & HotkeyEventHandlers;

const useHotKey = (hotkeys: Hotkeys[]) => {
  const invokeCallback = useCallback(
    (
      combo: KeyCombo,
      callbackName: 'onKeyUp' | 'onKeyDown',
      e: KeyboardEvent,
    ) => {
      for (const hotkey of hotkeys) {
        if (comboMatches(parseKeyCombo(hotkey.combo), combo)) {
          hotkey[callbackName] && hotkey[callbackName](e);
        }
      }
    },
    [hotkeys],
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      invokeCallback(getKeyCombo(e), 'onKeyDown', e);
    },
    [invokeCallback],
  );

  const handleKeyUp = useCallback(
    (e: KeyboardEvent) => {
      invokeCallback(getKeyCombo(e), 'onKeyUp', e);
    },
    [invokeCallback],
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [handleKeyDown, handleKeyUp]);

  return;
};

export default useHotKey;
