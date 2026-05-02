// import { DateFilter } from '@/components/date-filter';

// export const Filters = () => {
//     return (
//         <div className="flex flex-col lg:flex-row items-center gap-y-2 lg:gap-y-0 lg:gap-x-2">
//             <DateFilter />
//         </div>
//     );
// };
import { Suspense } from "react";
import { DateFilter } from '@/components/date-filter';

export const Filters = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center gap-y-2 lg:gap-y-0 lg:gap-x-2">
            <Suspense fallback={<div />}>
                <DateFilter />
            </Suspense>
        </div>
    );
};