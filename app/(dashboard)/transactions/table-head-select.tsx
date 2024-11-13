import { cn } from "@/lib/utils";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

type Props = {
    columnIndex: number;
    selectedColumns: Record<string, string | null>;
    onChange: (columnIndex: number, value: string | null) => void;
};

const option = [
    "amount",
    "payee",
    "date",
];

export const TableHeadSelect = ({
    columnIndex,
    selectedColumns,
    onChange,
}: Props) => {
    const currentSelection = selectedColumns[`column_${columnIndex}`];

    return (
        <Select
            value = {currentSelection || ""}
            onValueChange={(value) => onChange(columnIndex, value)} 
        >
            <SelectTrigger
                className={cn(
                    "focuc:ring-offset-0 focu:ring-transparent outline-none border-none bf-transparent capitalize",
                    currentSelection && "text-blue-500",
                )}
            >
                <SelectValue placeholder="Skip" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="skip"> Skrip </SelectItem>
                {option.map((option, index) => {
                    const disabled = Object.values(selectedColumns).includes(option) && selectedColumns[`column_${columnIndex}`] !== option;

                    return (
                        <SelectItem
                            key={index}
                            value={option}
                            disabled={disabled}
                            className="capitalize"
                        >
                        {option}
                    </SelectItem>
                )})}
            </SelectContent>
        </Select>
    );
};
