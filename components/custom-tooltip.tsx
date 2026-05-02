// import { format } from 'date-fns';
// import { formatCurrency } from '@/lib/utils';
// import { Separator } from '@/components/ui/separator';

// export const CustomTooltip = ({ active, payload }: any) => {
//     if (!active) return null;

//     const date = payload[0].payload.date;
//     const income = payload[0].value;
//     const expenses = payload[1].value;

//     return (
//         <div className='rounded-sm bg-white shadow-sm border overflow-hidden'>
//             <div className='text-sm p-2 px-3 bg-muted text-muted-foreground'>
//                 {format(date, "MMM dd, yyyy")}
//             </div>
//             <Separator />
//             <div className='p-2 px-3 space-y-1'> 
//                 <div className='flex items-center justify-between gap-x-4'>
//                     <div className='flex items-center gap-x-2'>
//                         <div className='size-1.5 bg-blue-500 rounded-full mt-2'>
//                             <p className='text-sm text-muted-foreground p-2'>
//                                 Income
//                             </p>
//                         </div>
//                         <p className='text-sm text-right font-medium'>
//                             {formatCurrency(income)}
//                         </p>
//                     </div>
//                 </div>
//                 <div className='flex items-center justify-between gap-x-4'>
//                     <div className='flex items-center gap-x-2'>
//                         <div className='size-1.5 bg-rose-500 rounded-full mt-2'>
//                             <p className='text-sm text-muted-foreground mt-2'>
//                                 Expenses
//                             </p>
//                         </div>
//                         <p className='text-sm text-right font-medium'>
//                             {formatCurrency(expenses * -1)}
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };












import { format } from 'date-fns';
import { formatCurrency } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';

export const CustomTooltip = ({ active, payload }: any) => {
    if (!active) return null;

    const date = payload[0].payload.date;
    const income = payload[0].value;
    const expenses = payload[1].value;

    return (
        <div className='rounded-lg bg-white shadow-lg border border-gray-300 overflow-hidden w-52'>
            <div className='text-sm p-3 px-4 bg-gray-800 text-white text-center'>
                {format(date, "MMM dd, yyyy")}
            </div>
            <Separator />
            <div className='p-4 space-y-3'>
                <div className='flex items-center justify-between gap-x-4'>
                    <div className='flex items-center gap-x-3'>
                        <div className='w-2 h-2 bg-blue-500 rounded-full'>
                        </div>
                        <p className='text-md text-gray-700 font-semibold'>
                            Income
                        </p>
                    </div>
                    <p className='text-md text-right font-medium text-gray-800'>
                        {formatCurrency(income)}
                    </p>
                </div>
                <Separator />
                {/* Expenses Section */}
                <div className='flex items-center justify-between gap-x-4'>
                    <div className='flex items-center gap-x-3'>
                        <div className='w-2 h-2 bg-rose-500 rounded-full'>
                            {/* Expenses indicator */}
                        </div>
                        <p className='text-md text-gray-700 font-semibold'>
                            Expenses
                        </p>
                    </div>
                    <p className='text-md text-right font-medium text-gray-800'>
                        {formatCurrency(expenses * -1)}
                    </p>
                </div>
            </div>
        </div>
    );
};
