import { HttpService } from '@nestjs/axios';
import { Inject, Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { IatiResponse } from './IatiResponse.model';
import { ConfigType } from '@nestjs/config';
import config from '../config';
import { InjectRepository } from '@nestjs/typeorm';
import { Transaction } from './entities/transaction.entity';
import { Repository } from 'typeorm';
import { CreateTransactionDto } from './dtos/transaction.dto';

@Injectable()
export class TransactionsService {
  constructor(
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
    @InjectRepository(Transaction)
    private transactionRepo: Repository<Transaction>,
    private httpService: HttpService,
  ) {}

  private config = {
    headers: {
      'Ocp-Apim-Subscription-Key': this.configService.apiKey,
    },
  };

  groupByYear(data: IatiResponse, initialYear: number, finalYear: number) {
    const response = {};

    for (
      let currentYear = initialYear;
      currentYear < finalYear;
      currentYear++
    ) {
      data.response.docs.map(async (transaction) => {
        if (
          transaction.transaction_transaction_date_iso_date[0]
            .toString()
            .includes(currentYear.toString())
        ) {
          const transactionToSave = {
            recipeCountry: transaction.recipient_country_code[0],
            amount: transaction.transaction_value[0],
            organization: transaction.reporting_org_narrative[0],
            transactionDate:
              transaction.transaction_transaction_date_iso_date[0],
          };

          // await this.create(transactionToSave);

          response[currentYear] = { ...response[currentYear] };
          response[currentYear][
            `${transaction.reporting_org_narrative[0]} ${transaction.transaction_transaction_date_iso_date[0]}`
          ] = transaction.transaction_value[0];
        }
      });
    }

    return response;
  }

  get(yearToQuery: number): Observable<AxiosResponse<IatiResponse>> {
    const yearsAgo = 5;
    /* the configuration of the query commands the operation to calculate the dates as 
    follows*/
    const dateStart = yearToQuery - 1 - yearsAgo;
    const baseUrlAllTransactions = `https://api.iatistandard.org/datastore/activity/select?q=recipient_country_code%3ASD+AND+transaction_transaction_date_iso_date%3A%5B${dateStart}-12-31T00%3A00%3A00Z+TO+*+%5D+AND+transaction_transaction_date_iso_date%3A%5B+*+TO+${yearToQuery}-01-01T00%3A00%3A00Z%5D&sort=score+desc`;
    return this.httpService.get(baseUrlAllTransactions, this.config);
  }

  create(data: CreateTransactionDto) {
    const newTransaction = this.transactionRepo.create(data);
    return this.transactionRepo.save(newTransaction);
  }
}
