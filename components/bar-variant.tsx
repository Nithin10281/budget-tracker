import { CustomTooltip } from '@/components/custom-tooltip';
import { format } from 'date-fns';
import {
    Bar,
    BarChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
} from 'recharts';

type Props = {
    data: {
        date: string;
        income: number;
        expenses: number;
    }[];
};

export const BarVariant = ({ data }: Props) => {
    return (
        <ResponsiveContainer width='100%' height={350}>
            <BarChart data={data}>
                <CartesianGrid strokeDasharray='3 3'/>
                <XAxis
                    axisLine={false}
                    tickLine={false}
                    dataKey='date'
                    tickFormatter={(value) => format(value, 'dd MMM')}
                    style={{ fontSize: '12px' }}
                    tickMargin={16}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar 
                    dataKey='income'
                    fill='#3df653'
                    className='drop-shadow-md'
                />
                <Bar 
                    dataKey='expenses'
                    fill='#f43f5e'
                    className='drop-shadow-md'
                />
            </BarChart>
        </ResponsiveContainer>
    );
};
