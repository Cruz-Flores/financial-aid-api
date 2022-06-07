import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, Max, Min } from 'class-validator';

export class QueryYearDto {
  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  @Min(2010)
  @Max(2023)
  readonly year: number;
}
