import { Controller, Get, Query } from '@nestjs/common';
import { QueryYearDto } from './dtos/queryYear.dto';
import { TransactionsService } from './transactions.service';
import { map } from 'rxjs/operators';
import { lastValueFrom } from 'rxjs';

@Controller('transactions')
export class TransactionsController {
  constructor(private transactionsService: TransactionsService) {}
  @Get('/')
  async get(@Query() payload: QueryYearDto) {
    const { year: yearToQuery } = payload;
    const transactions = await lastValueFrom(
      this.transactionsService.get(yearToQuery).pipe(map((resp) => resp.data)),
    );

    const groupedByYear = this.transactionsService.groupByYear(
      transactions,
      yearToQuery - 5,
      yearToQuery,
    );

    return groupedByYear;
  }
}
