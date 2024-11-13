// import * as React from 'react';
// import { format } from 'date-fns';
// import { Calendar1Icon, Calendar as CalenderIcon } from 'lucide-react';
// import { SelectSingleEventHandler } from 'react-day-picker';

// import { cn } from '@/lib/utils';
// import { Button } from '@/components/ui/button';
// import { Calendar } from '@/components/ui/calendar';
// import { 
//     Popover,
//     PopoverContent,
//     PopoverTrigger,
// } from '@/components/ui/popover';
// import { on } from 'events';

// type Props = {
//     value?: Date;
//     onChange?: SelectSingleEventHandler;
//     disabled?: boolean;
// };

// export const DatePicker = ({
//     value,
//     onChange,
//     disabled,
// }: Props) => {
//     return (
//         <Popover>
//             <PopoverTrigger>
//                 <Button
//                     disabled={disabled}
//                     variant="outline"
//                     className={cn(
//                         "w-full justify-start text-left font-normal",
//                         !value && 'text-muted-foreground',
//                     )}
//                 >
//                 <Calendar1Icon className='size-4 mr-2' />
//                     {value ? format(value, 'PPP') : <span>Pick a date</span>}
//                 </Button>
//             </PopoverTrigger>
//             <PopoverContent>
//                 <Calendar
//                     mode = 'single'
//                     selected={value}
//                     onSelect={onChange}
//                     disabled={disabled}
//                 />
//             </PopoverContent>
//         </Popover>
//     )
// }







import * as React from 'react';
import { format } from 'date-fns';
import { Calendar1Icon } from 'lucide-react';
import { SelectSingleEventHandler } from 'react-day-picker';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { 
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';

type Props = {
    value?: Date;
    onChange?: (date: Date | undefined) => void;  // Expect only a Date or undefined
    disabled?: boolean;
};

export const DatePicker = ({
    value,
    onChange,
    disabled,
}: Props) => {
    const [open, setOpen] = React.useState(false);

    // Define handleDateChange with full signature but pass only `selectedDay` to onChange
    const handleDateChange: SelectSingleEventHandler = (selectedDay) => {
        if (selectedDay) {
            onChange?.(selectedDay);  // Call onChange with only the selected date
            setOpen(false);           // Close the popover when a date is selected
        }
    };

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    disabled={disabled}
                    variant="outline"
                    className={cn(
                        "w-full justify-start text-left font-normal",
                        !value && 'text-muted-foreground',
                    )}
                    onClick={() => setOpen(!open)} // Toggle popover
                >
                    <Calendar1Icon className='size-4 mr-2' />
                    {value ? format(value, 'PPP') : <span>Pick a date</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent>
                <Calendar
                    mode="single"
                    selected={value}
                    onSelect={handleDateChange}  // Pass handleDateChange with full signature
                    disabled={disabled}
                />
            </PopoverContent>
        </Popover>
    )
}
