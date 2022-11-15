export class Question 
{
    id: number;
    questiontext: string
    istextanswer: boolean

    constructor(id: number, questiontext: string, istextanswer: boolean)
    {
        this.id = id,
        this.questiontext = questiontext,
        this.istextanswer = istextanswer
    }
}