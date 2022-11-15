export class Answer 
{
    id: number;
    answersubmit_id: number;
    question_id: number;
    possibleanswer_id: number;
    textanswer: string;

    constructor(id: number, answersubmit_id: number, question_id: number, possibleanswer_id: number, textanswer: string)
    {
        this.id = id,
        this.answersubmit_id = answersubmit_id,
        this.question_id = question_id,
        this.possibleanswer_id = possibleanswer_id,
        this.textanswer = textanswer
    }
}