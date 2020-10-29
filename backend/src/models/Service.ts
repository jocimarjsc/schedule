import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('services')
export default class Service {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    telephone: string;

    @Column()
    address: string;

    @Column()
    model_checked: string;
    
    @Column()
    observations: string;

    @Column()
    colors: string;

    @Column()
    written_balloon: string;

    @Column()
    balloon_symbol: string;

    @Column()
    amount: number;

    @Column()
    delivery_date: string;

    @Column()
    delivery_hours: string;

    @Column()
    value: number;

    @Column()
    entry_value:number;
}