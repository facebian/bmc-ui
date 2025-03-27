'use client';

import * as React from 'react';
import { X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Command, CommandGroup, CommandItem } from '@/components/ui/command';
import { Command as CommandPrimitive } from 'cmdk';
import { FC, useCallback, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

export type Item = Record<'value' | 'label', string>;

type MultiSelect = {
  itemsList: Item[];
  selected: Item[];
  setSelected: (e: unknown) => void;
  className?: string;
  name?: string;
  disabled?: boolean;
};
export const FancyMultiSelect: FC<MultiSelect> = ({
  itemsList,
  selected,
  setSelected,
  className,
  name,
  disabled = false,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleUnselect = useCallback((framework: Item) => {
    setSelected((prev: { value: string }[]) =>
      prev.filter((s) => s.value !== framework.value),
    );
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      const input = inputRef.current;
      if (input) {
        if (e.key === 'Delete' || e.key === 'Backspace') {
          if (input.value === '') {
            setSelected((prev: { value: string }[]) => {
              const newSelected = [...prev];
              newSelected.pop();
              return newSelected;
            });
          }
        }
        // This is not a default behaviour of the <input /> field
        if (e.key === 'Escape') {
          input.blur();
        }
      }
    },
    [],
  );

  const selectables = itemsList.filter(
    (framework: Item) =>
      !selected
        .reduce((acc: string[], val: Item) => {
          acc.push(val.value);
          return acc;
        }, [])
        .includes(framework.value),
  );
  return (
    <Command
      onKeyDown={handleKeyDown}
      className="overflow-visible bg-transparent block"
    >
      <div
        className={cn(
          'group border-input text-sm ring-offset-background rounded-md focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-1',
          className,
        )}
      >
        <div className="flex gap-1 flex-wrap items-center pl-2">
          {selected.map((framework) => {
            return (
              <Badge
                key={framework.value}
                className="bg-custom-primary hover:bg-custom-primary text-color-custom h-8"
              >
                {framework.label}
                <button
                  className="ml-1 ring-offset-background rounded-full outline-none"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleUnselect(framework);
                    }
                  }}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                  onClick={() => handleUnselect(framework)}
                >
                  <X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
                </button>
              </Badge>
            );
          })}
          {/* Avoid having the "Search" Icon */}
          <CommandPrimitive.Input
            ref={inputRef}
            value={inputValue}
            onValueChange={setInputValue}
            onBlur={() => setOpen(false)}
            onFocus={() => setOpen(true)}
            placeholder="Select specialization tags"
            className="min-h-12 bg-transparent outline-none placeholder:text-primary flex-1 cursor-pointer"
            disabled={disabled}
            name={name}
          />
        </div>
      </div>
      <div className="relative mt-2">
        {open && selectables.length > 0 ? (
          <div className="absolute w-full z-10 top-0 rounded-md border bg-popover text-popover-foreground !bg-custom-secondary shadow-md outline-none animate-in">
            <CommandGroup className="h-full overflow-auto">
              {selectables.map((framework) => {
                return (
                  <CommandItem
                    key={framework.value}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    onSelect={() => {
                      setInputValue('');
                      setSelected((prev: { value: string }[]) => [
                        ...prev,
                        framework,
                      ]);
                    }}
                    className={'cursor-pointer'}
                  >
                    {framework.label}
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </div>
        ) : null}
      </div>
    </Command>
  );
};