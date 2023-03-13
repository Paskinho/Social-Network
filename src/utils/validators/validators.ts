

export const required = (value: any) => {
    if (value)
        return undefined;
    return 'Error!!!'
}

export const maxLengthCreator = (maxLength: number) => (value: any) => {
    if (value && value.length > maxLength) return `Too much symbols. Max length ${maxLength}`;
    return undefined
}