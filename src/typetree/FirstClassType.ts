export class FirstClassType {

    protected internal_value: string | number | null;


    protected constructor(source_value: string | number | null) {
        this.internal_value = source_value;
    }

    get formatted(): string | null {
        return this.internal_value == null ? null : this.internal_value.toString();
    }

    get humanified(): string | null {
        return this.internal_value == null ? null : this.internal_value.toString();
    }

}
