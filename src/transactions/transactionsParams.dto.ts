import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString, Max, Min } from 'class-validator';

export class TransactionParamsDto {
  @IsString()
  @IsNotEmpty()
  readonly country: string;

  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  @Min(2010)
  @Max(2023)
  readonly year: number;
}
