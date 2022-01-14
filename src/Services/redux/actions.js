export const ADD_USER = "[USER] ADD_USER";
export const ADD_SELECTION_LESSON = "[LESSON] ADD_SELECTION_LESSON";
export const ADD_LESSONS = '[LESSONS] ADD_LESSONS'


export function addUser(user) {
    return { type: ADD_USER, payload: user };
}
export function addSelectionLesson(selectionLesson) {
    return { type: ADD_SELECTION_LESSON, payload: selectionLesson }
}
export function addLessons(count) {
    return { type: ADD_LESSONS, payload: count}
}