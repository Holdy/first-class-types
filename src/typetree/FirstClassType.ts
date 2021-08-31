export class FirstClassType {

    private internal_value: string | number | null;

    from(source_value: string | number | null): FirstClassType {
        const result = new FirstClassType();
        result.internal_value = source_value;
    
        return result;
    }

}
