import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  recipeCountry: string;

  @Column({ type: 'int' })
  amount: number;

  @Column({ type: 'varchar' })
  organization: string;

  @Column({ type: 'date' })
  transactionDate: Date;
}
