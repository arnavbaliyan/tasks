import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { makeBlankQuestion, duplicateQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const newPubQuestions = questions.filter(
        (question: Question): boolean => question.published
    );
    return newPubQuestions;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const emptyQuestion = questions.filter(
        (question: Question): boolean =>
            question.options.length !== 0 ||
            question.expected !== "" ||
            question.body !== ""
    );
    return emptyQuestion;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const foundQuestion = questions.find((question) => question.id === id);
    return foundQuestion || null;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const new_arr = questions.filter(
        (question: Question): boolean => question.id !== id
    );
    return new_arr;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const arr_name = questions.map(
        (questions: Question): string => questions.name
    );
    return arr_name;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
// use reduce() for summing function
export function sumPoints(questions: Question[]): number {
    const sum = questions.reduce(
        (accumulator: number, question: Question) =>
            question.points + accumulator,
        0
    );
    return sum;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
/* similiar to sumPoints function, but now need to filter out the questions so that
   only published questions === true then can use the previous function to add up
   the published questions.
*/
export function sumPublishedPoints(questions: Question[]): number {
    const publishedPoints = questions.filter(
        (question: Question): boolean => question.published
    );
    return publishedPoints.reduce(
        (accumulator: number, question: Question) =>
            question.points + accumulator,
        0
    );
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
// refer to the CSV example from the nested data reading. have to follow closely to that for this function.
export function toCSV(questions: Question[]): string {
    const csvString = questions
        .map(
            (question: Question): string =>
                `${question.id},${question.name},${question.options.length},${question.points},${question.published}`
        )
        .join("\n");
    return "id,name,options,points,published\n" + csvString;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questions`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
// use map() and ({}) to copy over data for this function
export function makeAnswers(questions: Question[]): Answer[] {
    const new_answers_arr = questions.map(
        (question: Question): Answer => ({
            correct: false,
            submitted: false,
            text: "",
            questionId: question.id
        })
    );
    return new_answers_arr;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
//use map and get a copy of questions, then make published to true so all questions will be considered published
export function publishAll(questions: Question[]): Question[] {
    const allPublish = questions.map(
        (question: Question): Question => ({
            ...question,
            published: true
        })
    );
    return allPublish;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
// use .every() function to compare the questions and see if they are the same type.
export function sameType(questions: Question[]): boolean {
    const new_arr = questions.every(
        (question: Question): boolean => questions[0].type === question.type
    );
    return new_arr;
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */

export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    const new_arr = [...questions, makeBlankQuestion(id, name, type)];
    return new_arr;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    return questions.map((question) => {
        if (question.id === targetId) {
            return {
                ...question,
                name: newName
            };
        } else {
            return question;
        }
    });
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    const new_arr = questions.map((question: Question): Question => {
        if (targetId !== question.id) {
            return { ...question, options: [...question.options] };
        } else {
            return { ...question, options: [], type: newQuestionType };
        }
    });
    return new_arr;
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
// use a push() for newOption if targetOptionIndex is = -1, so it can be added to end of list.
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    const new_arr = questions.map(
        (question: Question): Question => ({
            ...question,
            options: [...question.options]
        })
    );
    const targetQuestionIndex = new_arr.find(
        (question: Question): boolean => targetId === question.id
    );
    if (targetQuestionIndex !== undefined) {
        if (targetOptionIndex === -1) {
            targetQuestionIndex.options.push(newOption);
        } else {
            targetQuestionIndex.options[targetOptionIndex] = newOption;
        }
    }
    return new_arr;
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
// use .splice() and .findIndex() for solving this function
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    const arrayCopy: Question[] = questions.map(
        (question: Question): Question => ({ ...question })
    );
    const targetIndex: number = arrayCopy.findIndex(
        (question: Question): boolean => question.id === targetId
    );
    arrayCopy.splice(
        targetIndex + 1,
        0,
        duplicateQuestion(newId, arrayCopy[targetIndex])
    );
    return arrayCopy;
}
