"use client" 

import CreateableSelect from "react-select/creatable";
import { SingleValue } from "react-select";
import { useMemo } from "react";

type Props = {
    onChange: (value?: string) => void;
    onCreate: (value: string) => void;
    options?: { label: string; value: string }[];
    value?: string | null | undefined;
    disabled?: boolean;
    placeholder?: string;
};

export const Select = ({
    value,
    onChange,
    onCreate,
    disabled,
    options = [],
    placeholder,
}: Props) => {
    const onSelect = (
        option: SingleValue<{ label: string; value: string }>
    ) => {
        onChange(option?.value);
    };

    const formattedValue = useMemo(() => {
        return options.find((option) => option.value === value);
    }, [options, value]);
    return  (
        <CreateableSelect className="text-sm h-10"
            styles={{ 
                control: (base) => ({
                    ...base,
                    borderColor: "#e2e8f0",
                    ":hover": { borderColor: "#e2e8f0" },
            }),
            }}
            isDisabled={disabled}
            value={formattedValue}
            options={options}
            onChange={onSelect}
            onCreateOption={onCreate}
            placeholder={placeholder}
        />
    );
};
