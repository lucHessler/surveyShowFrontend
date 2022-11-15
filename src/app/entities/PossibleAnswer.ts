export class PossibleAnswer 
{
    id: number;
    question_id: number
    answer: string
    value: number

    constructor(id: number, question_id: number, answer: string, value: number)
    {
        this.id = id,
        this.question_id = question_id,
        this.answer = answer,
        this.value = value
    }
}