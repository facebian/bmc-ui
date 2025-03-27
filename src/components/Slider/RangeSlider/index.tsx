/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { Badge } from '../../ui/badge';
import { Slider } from '../../ui/slider';

interface Props {
  defaultValue?: number[];
  field: any;
}

const RangeSlider = ({ field }: Props) => {
  return (
    <div className="grid gap-2">
      <div className="grid gap-4">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col">
            <p className='font-normal text-xs'>Minimum Price</p>
            <Badge
              className="mr-auto px-2.5 py-0.5 text-xs mt-2"
              // variant='muted'
              variant='secondary'
            >
              ${field.value[0]}
            </Badge>
          </div>
          <div className="flex flex-col">
            <p className='font-normal text-xs'>Maximum Price</p>
            <Badge
              className="ml-auto px-2.5 py-0.5 text-xs mt-2"
              variant='secondary'

            >
              ${field.value[1]}
            </Badge>
          </div>
        </div>
        <Slider
          max={200}
          min={0}
          step={1}
          value={field.value}
          onValueChange={field.onChange}
          className="mb-1 [&_[role=slider]]:h-4 [&_[role=slider]]:w-4"
          aria-label="Temperature"
          minStepsBetweenThumbs={10}
        />
      </div>
    </div>
  );
};

export default RangeSlider;