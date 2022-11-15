export class AnswerSubmit 
{
    id: number;
    module_id: number;
    date: Date;
    location: string;
    job: string;

    constructor(id : number, module_id : number, date: Date, location : string, job : string)
    {
        this.id = id,
        this.module_id = module_id,
        this.date = date,
        this.location = location,
        this.job = job
    }
}