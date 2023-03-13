

export const requiredField = (value: any) => {
    if (value)
        return undefined;
    return 'Error!!!'
}