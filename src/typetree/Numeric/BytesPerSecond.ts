import { FirstClassType } from "../FirstClassType";

export class BytesPerSecond extends FirstClassType { //TODO should extend numeric

    private number_value: number;
    private has_number_value:boolean = false;

    protected constructor(source_value: number | string | null) {
        super(source_value);

        if (source_value != null) {
            this.number_value = Number(source_value)
            this.has_number_value = true;
        }
    }

    public static from(source_value: string | number | null): FirstClassType {
        const result = new BytesPerSecond(source_value);
    
        return result;
    }

    get formatted(): string | null {
        return this.internal_value == null ? null : `${this.internal_value} b/s`;
    }

    get humanified(): string | null {
        if (!this.has_number_value) {
            return null;
        }

        if (this.number_value < 1024) {
            return `${this.internal_value} b/s`;
        }

        const Kb = Math.floor(this.number_value / 1024);
        if (Kb < 1024) {
            return `${Kb} Kb/s`;
        }

        const Mb = Math.floor(Kb / 1024);
        return `${Mb} Mb/s`;
    }

}